'use strict';

var uiCore = require('@layerzerolabs/ui-core');

// src/v1/validateInput.ts
function validateInput(input) {
  uiCore.assert(
    input.srcChainKey === input.srcToken.chainKey,
    "Provided srcChainKey does not match srcToken.chainKey"
  );
  uiCore.assert(
    input.dstChainKey === input.dstToken.chainKey,
    "Provided dstChainKey does not match dstToken.chainKey"
  );
  uiCore.assert(
    input.srcToken.equals(input.srcAmount.token),
    "Provided srcToken does not match amount.currency"
  );
  uiCore.assert(
    input.dstToken.equals(input.dstAmountMin.token),
    "Provided dstToken does not match minAmount.currency"
  );
  if (input.adapterParams.version === 2) {
    uiCore.assert(input.adapterParams.dstNativeAmount, "Provided empty adapterParams.dstNativeAmount");
    uiCore.assert(input.adapterParams.dstNativeAmount.token.equals(uiCore.getNativeCurrency(input.dstChainKey)));
  }
  uiCore.assert(input.srcAddress, "Provided empty srcAddress");
  uiCore.assert(input.dstAddress, "Provided empty dstAddress");
  uiCore.assert("adapterParams" in input && input.adapterParams, "Provided empty adapterParams");
}
function validateOutput(srcAmount, dstToken, quote) {
  uiCore.assert(quote.dstAmount.token.equals(dstToken));
}

exports.validateInput = validateInput;
exports.validateOutput = validateOutput;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=v1.cjs.map