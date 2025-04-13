import { TronWeb } from 'tronweb';

// src/tron/utils.ts
function toTronAddress(tronWeb, address) {
  if (address.startsWith("0x")) {
    return tronWeb.address.fromHex(address);
  }
  return address;
}
function fromTronAddress(address) {
  return TronWeb.address.toHex(address);
}

export { fromTronAddress, toTronAddress };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-V5ZIFKDM.mjs.map