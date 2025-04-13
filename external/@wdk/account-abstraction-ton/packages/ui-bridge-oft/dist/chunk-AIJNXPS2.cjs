'use strict';

var tronweb = require('tronweb');

// src/tron/utils.ts
function toTronAddress(tronWeb, address) {
  if (address.startsWith("0x")) {
    return tronWeb.address.fromHex(address);
  }
  return address;
}
function fromTronAddress(address) {
  return tronweb.TronWeb.address.toHex(address);
}

exports.fromTronAddress = fromTronAddress;
exports.toTronAddress = toTronAddress;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-AIJNXPS2.cjs.map