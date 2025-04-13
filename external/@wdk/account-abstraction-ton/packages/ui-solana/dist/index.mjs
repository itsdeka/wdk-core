import { ComputeBudgetProgram, VersionedTransaction, TransactionMessage, PublicKey } from '@solana/web3.js';
import { isSolanaChainKey, CurrencyAmount, isNativeCurrency, assert, isToken } from '@layerzerolabs/ui-core';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import memoize from 'moize';

// src/utils/isSolanaAddress.ts
var solanaAddressRegex = /^([1-9A-HJ-NP-Za-km-z]{32,44})$/;
function isSolanaAddress(address) {
  return solanaAddressRegex.test(address);
}

// src/utils/createTransaction.ts
function createTransaction(populatedTransaction, options) {
  return {
    async unwrap() {
      return populatedTransaction;
    },
    estimateGas() {
      throw new Error("Not implemented");
    },
    async signAndSubmitTransaction(signer) {
      const latestBlockHash = await options.connection.getLatestBlockhashAndContext();
      const signedTransaction = await signer.signTransaction(populatedTransaction, {});
      const signature = await options.connection.sendRawTransaction(signedTransaction.serialize());
      return {
        txHash: signature,
        async wait() {
          const confirmation = await options.connection.confirmTransaction(
            {
              signature,
              blockhash: latestBlockHash.value.blockhash,
              lastValidBlockHeight: latestBlockHash.value.lastValidBlockHeight
            },
            "confirmed"
          );
          const error = confirmation.value.err;
          if (error) {
            throw new Error(`Confirmation of transaction ${signature} failed`, { cause: error });
          }
          return {
            txHash: signature
          };
        }
      };
    },
    estimateNative() {
      throw new Error("Not implemented");
    }
  };
}
var getErrorFromRPCResponse = (rpcResponse) => {
  const error = rpcResponse.value.err;
  if (error) {
    if (typeof error === "object") {
      const errorKeys = Object.keys(error);
      if (errorKeys.length === 1) {
        if (errorKeys[0] !== "InstructionError") {
          throw new Error(`Unknown RPC error: ${error}`);
        }
        const instructionError = error["InstructionError"];
        throw new Error(
          `Error in transaction: instruction index ${instructionError[0]}, custom program error ${instructionError[1]["Custom"]}`
        );
      }
    }
    throw Error(error.toString());
  }
};
var getSimulationComputeUnits = async (connection, instructions, payer, lookupTables) => {
  const testInstructions = [
    // Set an arbitrarily high number in simulation
    // so we can be sure the transaction will succeed
    // and get the real compute units used
    ComputeBudgetProgram.setComputeUnitLimit({ units: 14e5 }),
    ...instructions
  ];
  const testTransaction = new VersionedTransaction(
    new TransactionMessage({
      instructions: testInstructions,
      payerKey: payer,
      // RecentBlockhash can by any public key during simulation
      // since 'replaceRecentBlockhash' is set to 'true' below
      recentBlockhash: PublicKey.default.toString()
    }).compileToV0Message(lookupTables)
  );
  const rpcResponse = await connection.simulateTransaction(testTransaction, {
    replaceRecentBlockhash: true,
    sigVerify: false
  });
  getErrorFromRPCResponse(rpcResponse);
  return rpcResponse.value.unitsConsumed || null;
};
var BalanceProvider__solana = class {
  constructor(connection, config = {}) {
    this.connection = connection;
    this.config = config;
    const options = Object.assign({
      isPromise: true,
      updateExpire: true,
      maxSize: config.cacheSize ?? 1e3,
      maxAge: config.cacheTime ?? 4e3
    });
    this.getTokenBalancesByMint = memoize(this.getTokenBalancesByMint.bind(this), options);
    this.getNativeBalance = memoize(this.getNativeBalance.bind(this), options);
  }
  supports(token) {
    return isSolanaChainKey(token.chainKey);
  }
  async getTokenBalancesByMint(address) {
    const userPublicKey = new PublicKey(address);
    const tokenAccounts = await this.connection.getParsedTokenAccountsByOwner(userPublicKey, {
      programId: TOKEN_PROGRAM_ID
    });
    const result = Object.fromEntries(
      tokenAccounts.value.map((value) => [
        value.account.data.parsed.info.mint,
        value.account.data.parsed
      ])
    );
    return result;
  }
  async getTokenBalance(token, address) {
    const tokenBalances = await this.getTokenBalancesByMint(address);
    const balance = tokenBalances[token.address];
    if (balance === void 0) {
      return CurrencyAmount.fromRawAmount(token, 0);
    }
    if (balance.info.tokenAmount.decimals !== token.decimals) {
      throw new Error(
        `Token decimals mismatch: expected ${token.decimals}, got ${balance.info.tokenAmount.decimals}`,
        { cause: { token, balance } }
      );
    }
    return CurrencyAmount.fromRawAmount(token, balance.info.tokenAmount.amount);
  }
  async getBalance(currency, address) {
    if (isNativeCurrency(currency)) {
      const amount = await this.getNativeBalance(address);
      return CurrencyAmount.fromRawAmount(currency, amount);
    }
    assert(isToken(currency));
    return this.getTokenBalance(currency, address);
  }
  async getNativeBalance(address) {
    const userPublicKey = new PublicKey(address);
    return this.connection.getBalance(userPublicKey);
  }
};

export { BalanceProvider__solana, createTransaction, getErrorFromRPCResponse, getSimulationComputeUnits, isSolanaAddress };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map