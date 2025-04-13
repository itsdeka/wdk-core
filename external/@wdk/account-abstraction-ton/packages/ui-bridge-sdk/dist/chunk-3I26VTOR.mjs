import { assert } from '@layerzerolabs/ui-core';

// src/v2/validateInput.ts
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
  assert(input.srcAddress, "Provided empty srcAddress");
  assert(input.dstAddress, "Provided empty dstAddress");
  assert(input.dstNativeAmount, "Provided empty dstNativeAmount");
}

export { validateInput };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-3I26VTOR.mjs.map