import {type EIP1193Provider, createEIP1193Provider} from '@web3-onboard/common';
import {type Signer, providers} from 'ethers';

export function numberToHex(number: number): string {
  return '0x' + number.toString(16);
}

export function normalizeChainId(chainId: number | string): number {
  return Number(chainId);
}

export function getSigner(provider: EIP1193Provider): Signer {
  return new providers.Web3Provider(provider, 'any').getSigner();
}

export function getEIP1193Provider(
  identity: string,
  {patchProvider = true, ignoreFlags}: {ignoreFlags?: string[]; patchProvider?: boolean} = {},
): EIP1193Provider | undefined {
  if (typeof window === 'undefined') return undefined;
  const ethereum = window.ethereum;
  if (!ethereum) return undefined;
  const providers: any[] = Array.isArray(ethereum.providers) ? ethereum.providers : [ethereum];
  const provider = providers
    .filter((provider) => {
      if (!ignoreFlags) return true;

      return !ignoreFlags.some((ignoredIdentity) => provider[ignoredIdentity]);
    })
    .find((provider) => {
      return provider[identity];
    });

  if (!provider) return undefined;
  // some wallets are EIP1193Provider already or can't be patched (Brave)
  if (!patchProvider) return provider as EIP1193Provider;

  patchEIP1193Provider(provider);
  return createEIP1193Provider(provider);
}

export {createEIP1193Provider};

// Some wallets do not conform to EIP-1193 (e.g. Trust Wallet)
// https://github.com/wevm/wagmi/issues/3526#issuecomment-1912683002
export function patchEIP1193Provider(provider: EIP1193Provider) {
  if (provider && !provider.removeListener) {
    // Try using `off` handler if it exists, otherwise noop
    if ('off' in provider && typeof provider.off === 'function') {
      provider.removeListener = provider.off as typeof provider.removeListener;
    } else {
      provider.removeListener = () => {};
    }
  }
  return provider;
}
