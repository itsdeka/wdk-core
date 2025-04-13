import { assert, getNativeCurrency } from '@layerzerolabs/ui-core';

// src/v1/validateInput.ts
function validateInput(input) {
  assert(
    input.srcChainKey === input.srcToken.chainKey,
    "Provided srcChainKey does not match srcToken.chainKey"
  );
  assert(
    input.dstChainKey === input.dstToken.chainKey,
    "Provided dstChainKey does not match dstToken.chainKey"
  );
  assert(
    input.srcToken.equals(input.srcAmount.token),
    "Provided srcToken does not match amount.currency"
  );
  assert(
    input.dstToken.equals(input.dstAmountMin.token),
    "Provided dstToken does not match minAmount.currency"
  );
  if (input.adapterParams.version === 2) {
    assert(input.adapterParams.dstNativeAmount, "Provided empty adapterParams.dstNativeAmount");
    assert(input.adapterParams.dstNativeAmount.token.equals(getNativeCurrency(input.dstChainKey)));
  }
  assert(input.srcAddress, "Provided empty srcAddress");
  assert(input.dstAddress, "Provided empty dstAddress");
  assert("adapterParams" in input && input.adapterParams, "Provided empty adapterParams");
}
function validateOutput(srcAmount, dstToken, quote) {
  assert(quote.dstAmount.token.equals(dstToken));
}

export { validateInput, validateOutput };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=v1.mjs.map