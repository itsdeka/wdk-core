'use strict';

var uiCore = require('@layerzerolabs/ui-core');

// src/v2/validateInput.ts
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
  uiCore.assert(input.srcAddress, "Provided empty srcAddress");
  uiCore.assert(input.dstAddress, "Provided empty dstAddress");
  uiCore.assert(input.dstNativeAmount, "Provided empty dstNativeAmount");
}

exports.validateInput = validateInput;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-LBTSJ6NR.cjs.map