'use strict';

var uiConfig = require('@layerzerolabs/ui-config');
var z = require('zod');
var assert = require('tiny-invariant');
var _Decimal = require('decimal.js-light');
var _Big = require('big.js');
var toFormat = require('toformat');
var base = require('@scure/base');
var core = require('@ton/core');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var z__default = /*#__PURE__*/_interopDefault(z);
var assert__default = /*#__PURE__*/_interopDefault(assert);
var _Decimal__default = /*#__PURE__*/_interopDefault(_Decimal);
var _Big__default = /*#__PURE__*/_interopDefault(_Big);
var toFormat__default = /*#__PURE__*/_interopDefault(toFormat);

var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// ../../node_modules/viem/_esm/utils/data/isHex.js
function isHex(value, { strict = true } = {}) {
  if (!value)
    return false;
  if (typeof value !== "string")
    return false;
  return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}
var init_isHex = __esm({
  "../../node_modules/viem/_esm/utils/data/isHex.js"() {
  }
});

// ../../node_modules/viem/_esm/utils/data/size.js
function size(value) {
  if (isHex(value, { strict: false }))
    return Math.ceil((value.length - 2) / 2);
  return value.length;
}
var init_size = __esm({
  "../../node_modules/viem/_esm/utils/data/size.js"() {
    init_isHex();
  }
});

// ../../node_modules/viem/_esm/errors/version.js
var version;
var init_version = __esm({
  "../../node_modules/viem/_esm/errors/version.js"() {
    version = "2.22.10";
  }
});

// ../../node_modules/viem/_esm/errors/base.js
function walk(err, fn) {
  if (fn?.(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause !== void 0)
    return walk(err.cause, fn);
  return fn ? null : err;
}
var errorConfig, BaseError;
var init_base = __esm({
  "../../node_modules/viem/_esm/errors/base.js"() {
    init_version();
    errorConfig = {
      getDocsUrl: ({ docsBaseUrl, docsPath = "", docsSlug }) => docsPath ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath}${docsSlug ? `#${docsSlug}` : ""}` : void 0,
      version: `viem@${version}`
    };
    BaseError = class extends Error {
      constructor(shortMessage, args = {}) {
        const details = (() => {
          if (args.cause instanceof BaseError)
            return args.cause.details;
          if (args.cause?.message)
            return args.cause.message;
          return args.details;
        })();
        const docsPath = (() => {
          if (args.cause instanceof BaseError)
            return args.cause.docsPath || args.docsPath;
          return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({ ...args, docsPath });
        const message = [
          shortMessage || "An error occurred.",
          "",
          ...args.metaMessages ? [...args.metaMessages, ""] : [],
          ...docsUrl ? [`Docs: ${docsUrl}`] : [],
          ...details ? [`Details: ${details}`] : [],
          ...errorConfig.version ? [`Version: ${errorConfig.version}`] : []
        ].join("\n");
        super(message, args.cause ? { cause: args.cause } : void 0);
        Object.defineProperty(this, "details", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "docsPath", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "version", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "BaseError"
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = version;
      }
      walk(fn) {
        return walk(this, fn);
      }
    };
  }
});

// ../../node_modules/viem/_esm/errors/data.js
var SizeExceedsPaddingSizeError;
var init_data = __esm({
  "../../node_modules/viem/_esm/errors/data.js"() {
    init_base();
    SizeExceedsPaddingSizeError = class extends BaseError {
      constructor({ size: size2, targetSize, type }) {
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size2}) exceeds padding size (${targetSize}).`, { name: "SizeExceedsPaddingSizeError" });
      }
    };
  }
});

// ../../node_modules/viem/_esm/utils/data/pad.js
function pad(hexOrBytes, { dir, size: size2 = 32 } = {}) {
  if (typeof hexOrBytes === "string")
    return padHex(hexOrBytes, { dir, size: size2 });
  return padBytes(hexOrBytes, { dir, size: size2 });
}
function padHex(hex_, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size2 * 2)
    throw new SizeExceedsPaddingSizeError({
      size: Math.ceil(hex.length / 2),
      targetSize: size2,
      type: "hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size2 * 2, "0")}`;
}
function padBytes(bytes, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return bytes;
  if (bytes.length > size2)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size2,
      type: "bytes"
    });
  const paddedBytes = new Uint8Array(size2);
  for (let i = 0; i < size2; i++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i : size2 - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
  }
  return paddedBytes;
}
var init_pad = __esm({
  "../../node_modules/viem/_esm/utils/data/pad.js"() {
    init_data();
  }
});

// ../../node_modules/viem/_esm/errors/encoding.js
var IntegerOutOfRangeError, SizeOverflowError;
var init_encoding = __esm({
  "../../node_modules/viem/_esm/errors/encoding.js"() {
    init_base();
    IntegerOutOfRangeError = class extends BaseError {
      constructor({ max, min, signed, size: size2, value }) {
        super(`Number "${value}" is not in safe ${size2 ? `${size2 * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: "IntegerOutOfRangeError" });
      }
    };
    SizeOverflowError = class extends BaseError {
      constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: "SizeOverflowError" });
      }
    };
  }
});

// ../../node_modules/viem/_esm/utils/encoding/fromHex.js
function assertSize(hexOrBytes, { size: size2 }) {
  if (size(hexOrBytes) > size2)
    throw new SizeOverflowError({
      givenSize: size(hexOrBytes),
      maxSize: size2
    });
}
var init_fromHex = __esm({
  "../../node_modules/viem/_esm/utils/encoding/fromHex.js"() {
    init_encoding();
    init_size();
  }
});

// ../../node_modules/viem/_esm/utils/encoding/toHex.js
function toHex(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToHex(value, opts);
  if (typeof value === "string") {
    return stringToHex(value, opts);
  }
  if (typeof value === "boolean")
    return boolToHex(value, opts);
  return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
  const hex = `0x${Number(value)}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { size: opts.size });
  }
  return hex;
}
function bytesToHex(value, opts = {}) {
  let string = "";
  for (let i = 0; i < value.length; i++) {
    string += hexes[value[i]];
  }
  const hex = `0x${string}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { dir: "right", size: opts.size });
  }
  return hex;
}
function numberToHex(value_, opts = {}) {
  const { signed, size: size2 } = opts;
  const value = BigInt(value_);
  let maxValue;
  if (size2) {
    if (signed)
      maxValue = (1n << BigInt(size2) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size2) * 8n) - 1n;
  } else if (typeof value_ === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value > maxValue || value < minValue) {
    const suffix = typeof value_ === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size2,
      value: `${value_}${suffix}`
    });
  }
  const hex = `0x${(signed && value < 0 ? (1n << BigInt(size2 * 8)) + BigInt(value) : value).toString(16)}`;
  if (size2)
    return pad(hex, { size: size2 });
  return hex;
}
function stringToHex(value_, opts = {}) {
  const value = encoder.encode(value_);
  return bytesToHex(value, opts);
}
var hexes, encoder;
var init_toHex = __esm({
  "../../node_modules/viem/_esm/utils/encoding/toHex.js"() {
    init_encoding();
    init_pad();
    init_fromHex();
    hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
    encoder = /* @__PURE__ */ new TextEncoder();
  }
});

// ../../node_modules/viem/_esm/utils/encoding/toBytes.js
function toBytes(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToBytes(value, opts);
  if (typeof value === "boolean")
    return boolToBytes(value, opts);
  if (isHex(value))
    return hexToBytes(value, opts);
  return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
  const bytes = new Uint8Array(1);
  bytes[0] = Number(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { size: opts.size });
  }
  return bytes;
}
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function hexToBytes(hex_, opts = {}) {
  let hex = hex_;
  if (opts.size) {
    assertSize(hex, { size: opts.size });
    hex = pad(hex, { dir: "right", size: opts.size });
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes = new Uint8Array(length);
  for (let index = 0, j = 0; index < length; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
    }
    bytes[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
function numberToBytes(value, opts) {
  const hex = numberToHex(value, opts);
  return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
  const bytes = encoder2.encode(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { dir: "right", size: opts.size });
  }
  return bytes;
}
var encoder2, charCodeMap;
var init_toBytes = __esm({
  "../../node_modules/viem/_esm/utils/encoding/toBytes.js"() {
    init_base();
    init_isHex();
    init_pad();
    init_fromHex();
    init_toHex();
    encoder2 = /* @__PURE__ */ new TextEncoder();
    charCodeMap = {
      zero: 48,
      nine: 57,
      A: 65,
      F: 70,
      a: 97,
      f: 102
    };
  }
});

// ../../node_modules/viem/node_modules/@noble/hashes/esm/_assert.js
function anumber(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error("positive integer expected, got " + n);
}
function isBytes(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abytes(b, ...lengths) {
  if (!isBytes(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least " + min);
  }
}
var init_assert = __esm({
  "../../node_modules/viem/node_modules/@noble/hashes/esm/_assert.js"() {
  }
});

// ../../node_modules/viem/node_modules/@noble/hashes/esm/_u64.js
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var U32_MASK64, _32n, rotlSH, rotlSL, rotlBH, rotlBL;
var init_u64 = __esm({
  "../../node_modules/viem/node_modules/@noble/hashes/esm/_u64.js"() {
    U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
    _32n = /* @__PURE__ */ BigInt(32);
    rotlSH = (h, l, s) => h << s | l >>> 32 - s;
    rotlSL = (h, l, s) => l << s | h >>> 32 - s;
    rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
    rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
  }
});

// ../../node_modules/viem/node_modules/@noble/hashes/esm/utils.js
function byteSwap32(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = byteSwap(arr[i]);
  }
}
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error("utf8ToBytes expected string, got " + typeof str);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes2(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  abytes(data);
  return data;
}
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
var u32, createView, rotr, isLE, byteSwap, Hash;
var init_utils = __esm({
  "../../node_modules/viem/node_modules/@noble/hashes/esm/utils.js"() {
    init_assert();
    u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
    createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    rotr = (word, shift) => word << 32 - shift | word >>> shift;
    isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
    byteSwap = (word) => word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
    Hash = class {
      // Safe version that clones internal state
      clone() {
        return this._cloneInto();
      }
    };
  }
});

// ../../node_modules/viem/node_modules/@noble/hashes/esm/sha3.js
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10) {
        s[x + y] ^= Th;
        s[x + y + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y + x];
      for (let x = 0; x < 10; x++)
        s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  B.fill(0);
}
var SHA3_PI, SHA3_ROTL, _SHA3_IOTA, _0n, _1n, _2n, _7n, _256n, _0x71n, SHA3_IOTA_H, SHA3_IOTA_L, rotlH, rotlL, Keccak, gen, keccak_256;
var init_sha3 = __esm({
  "../../node_modules/viem/node_modules/@noble/hashes/esm/sha3.js"() {
    init_assert();
    init_u64();
    init_utils();
    SHA3_PI = [];
    SHA3_ROTL = [];
    _SHA3_IOTA = [];
    _0n = /* @__PURE__ */ BigInt(0);
    _1n = /* @__PURE__ */ BigInt(1);
    _2n = /* @__PURE__ */ BigInt(2);
    _7n = /* @__PURE__ */ BigInt(7);
    _256n = /* @__PURE__ */ BigInt(256);
    _0x71n = /* @__PURE__ */ BigInt(113);
    for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
      [x, y] = [y, (2 * x + 3 * y) % 5];
      SHA3_PI.push(2 * (5 * y + x));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t = _0n;
      for (let j = 0; j < 7; j++) {
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n)
          t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
      }
      _SHA3_IOTA.push(t);
    }
    [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
    rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
    rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
    Keccak = class extends Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        anumber(outputLen);
        if (0 >= this.blockLen || this.blockLen >= 200)
          throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200);
        this.state32 = u32(this.state);
      }
      keccak() {
        if (!isLE)
          byteSwap32(this.state32);
        keccakP(this.state32, this.rounds);
        if (!isLE)
          byteSwap32(this.state32);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        aexists(this);
        const { blockLen, state } = this;
        data = toBytes2(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i = 0; i < take; i++)
            state[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        state[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        aexists(this, false);
        abytes(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes) {
        anumber(bytes);
        return this.xofInto(new Uint8Array(bytes));
      }
      digestInto(out) {
        aoutput(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        this.state.fill(0);
      }
      _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
      }
    };
    gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
    keccak_256 = /* @__PURE__ */ gen(1, 136, 256 / 8);
  }
});

// ../../node_modules/viem/_esm/utils/hash/keccak256.js
function keccak256(value, to_) {
  const to = to_ || "hex";
  const bytes = keccak_256(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes;
  return toHex(bytes);
}
var init_keccak256 = __esm({
  "../../node_modules/viem/_esm/utils/hash/keccak256.js"() {
    init_sha3();
    init_isHex();
    init_toBytes();
    init_toHex();
  }
});

// ../../node_modules/viem/_esm/errors/address.js
var InvalidAddressError;
var init_address = __esm({
  "../../node_modules/viem/_esm/errors/address.js"() {
    init_base();
    InvalidAddressError = class extends BaseError {
      constructor({ address }) {
        super(`Address "${address}" is invalid.`, {
          metaMessages: [
            "- Address must be a hex value of 20 bytes (40 hex characters).",
            "- Address must match its checksum counterpart."
          ],
          name: "InvalidAddressError"
        });
      }
    };
  }
});

// ../../node_modules/viem/_esm/utils/lru.js
var LruMap;
var init_lru = __esm({
  "../../node_modules/viem/_esm/utils/lru.js"() {
    LruMap = class extends Map {
      constructor(size2) {
        super();
        Object.defineProperty(this, "maxSize", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.maxSize = size2;
      }
      get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== void 0) {
          this.delete(key);
          super.set(key, value);
        }
        return value;
      }
      set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
          const firstKey = this.keys().next().value;
          if (firstKey)
            this.delete(firstKey);
        }
        return this;
      }
    };
  }
});

// ../../node_modules/viem/_esm/utils/address/getAddress.js
function checksumAddress(address_, chainId) {
  if (checksumAddressCache.has(`${address_}.${chainId}`))
    return checksumAddressCache.get(`${address_}.${chainId}`);
  const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
  const hash = keccak256(stringToBytes(hexAddress), "bytes");
  const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split("");
  for (let i = 0; i < 40; i += 2) {
    if (hash[i >> 1] >> 4 >= 8 && address[i]) {
      address[i] = address[i].toUpperCase();
    }
    if ((hash[i >> 1] & 15) >= 8 && address[i + 1]) {
      address[i + 1] = address[i + 1].toUpperCase();
    }
  }
  const result = `0x${address.join("")}`;
  checksumAddressCache.set(`${address_}.${chainId}`, result);
  return result;
}
function getAddress(address, chainId) {
  if (!isAddress(address, { strict: false }))
    throw new InvalidAddressError({ address });
  return checksumAddress(address, chainId);
}
var checksumAddressCache;
var init_getAddress = __esm({
  "../../node_modules/viem/_esm/utils/address/getAddress.js"() {
    init_address();
    init_toBytes();
    init_keccak256();
    init_lru();
    init_isAddress();
    checksumAddressCache = /* @__PURE__ */ new LruMap(8192);
  }
});

// ../../node_modules/viem/_esm/utils/address/isAddress.js
function isAddress(address, options) {
  const { strict = true } = options ?? {};
  const cacheKey = `${address}.${strict}`;
  if (isAddressCache.has(cacheKey))
    return isAddressCache.get(cacheKey);
  const result = (() => {
    if (!addressRegex.test(address))
      return false;
    if (address.toLowerCase() === address)
      return true;
    if (strict)
      return checksumAddress(address) === address;
    return true;
  })();
  isAddressCache.set(cacheKey, result);
  return result;
}
var addressRegex, isAddressCache;
var init_isAddress = __esm({
  "../../node_modules/viem/_esm/utils/address/isAddress.js"() {
    init_lru();
    init_getAddress();
    addressRegex = /^0x[a-fA-F0-9]{40}$/;
    isAddressCache = /* @__PURE__ */ new LruMap(8192);
  }
});

// src/currency/baseCurrency.ts
var BaseCurrency = class {
  /**
   * The layerzero chain key on which this currency resides
   */
  chainKey;
  /**
   * The decimals used in representing currency amounts
   */
  decimals;
  /**
   * The symbol of the currency, i.e. a short textual non-unique identifier
   */
  symbol;
  /**
   * The name of the currency, i.e. a descriptive textual non-unique identifier
   */
  name;
  /**
   * The id of the token used for comparisons
   */
  id;
  /**
   * Constructs an instance of the base class `BaseCurrency`.
   * @param chainKey the chain key on which this currency resides
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  constructor(id, chainKey, decimals, symbol, name) {
    assert__default.default(decimals >= 0 && decimals < 255 && Number.isInteger(decimals), "DECIMALS");
    Object.defineProperty(this, "id", {
      enumerable: false,
      writable: false,
      value: id
    });
    this.chainKey = chainKey;
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }
};

// src/currency/coin.ts
var Coin = class extends BaseCurrency {
  constructor(chainKey, decimals, symbol, name) {
    super(String(chainKey), chainKey, decimals, symbol, name);
  }
  /**
   * Returns true if the two Coins are equivalent, i.e. have the same chainKey
   * @param other other currency to compare
   */
  equals(other) {
    if (!(other instanceof Coin))
      return false;
    return this.chainKey === other.chainKey;
  }
  static from(input) {
    return new Coin(input.chainKey, input.decimals, input.symbol, input.name);
  }
};

// ../../node_modules/viem/node_modules/@noble/hashes/esm/_md.js
init_assert();
init_utils();
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE2 ? 4 : 0;
  const l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE2);
  view.setUint32(byteOffset + l, wl, isLE2);
}
var Chi = (a, b, c) => a & b ^ ~a & c;
var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
var HashMD = class extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE2) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    aexists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes2(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    aexists(this);
    aoutput(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE2);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
};

// ../../node_modules/viem/node_modules/@noble/hashes/esm/sha256.js
init_utils();
var SHA256_K = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var SHA256_IV = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
var SHA256 = class extends HashMD {
  constructor() {
    super(64, 32, 8, false);
    this.A = SHA256_IV[0] | 0;
    this.B = SHA256_IV[1] | 0;
    this.C = SHA256_IV[2] | 0;
    this.D = SHA256_IV[3] | 0;
    this.E = SHA256_IV[4] | 0;
    this.F = SHA256_IV[5] | 0;
    this.G = SHA256_IV[6] | 0;
    this.H = SHA256_IV[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  // prettier-ignore
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
      const T2 = sigma0 + Maj(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T1 | 0;
      D = C;
      C = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
};
var sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());

// ../../node_modules/viem/_esm/utils/hash/sha256.js
init_isHex();
init_toBytes();
init_toHex();
function sha2562(value, to_) {
  const to = to_ || "hex";
  const bytes = sha256(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes;
  return toHex(bytes);
}

// ../../node_modules/viem/_esm/errors/unit.js
init_base();
var InvalidDecimalNumberError = class extends BaseError {
  constructor({ value }) {
    super(`Number \`${value}\` is not a valid decimal number.`, {
      name: "InvalidDecimalNumberError"
    });
  }
};

// ../../node_modules/viem/_esm/utils/unit/parseUnits.js
function parseUnits(value, decimals) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(value))
    throw new InvalidDecimalNumberError({ value });
  let [integer, fraction = "0"] = value.split(".");
  const negative = integer.startsWith("-");
  if (negative)
    integer = integer.slice(1);
  fraction = fraction.replace(/(0+)$/, "");
  if (decimals === 0) {
    if (Math.round(Number(`.${fraction}`)) === 1)
      integer = `${BigInt(integer) + 1n}`;
    fraction = "";
  } else if (fraction.length > decimals) {
    const [left, unit, right] = [
      fraction.slice(0, decimals - 1),
      fraction.slice(decimals - 1, decimals),
      fraction.slice(decimals)
    ];
    const rounded = Math.round(Number(`${unit}.${right}`));
    if (rounded > 9)
      fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, "0");
    else
      fraction = `${left}${rounded}`;
    if (fraction.length > decimals) {
      fraction = fraction.slice(1);
      integer = `${BigInt(integer) + 1n}`;
    }
    fraction = fraction.slice(0, decimals);
  } else {
    fraction = fraction.padEnd(decimals, "0");
  }
  return BigInt(`${negative ? "-" : ""}${integer}${fraction}`);
}

// ../../node_modules/viem/_esm/index.js
init_toHex();
init_getAddress();
init_isAddress();

// src/currency/utils/validateAndParseAddress.ts
function validateAndParseAddress(address, chainKey) {
  if (address === "") {
    throw new Error("No address provided");
  }
  if (isAddress(address)) {
    return getAddress(address);
  }
  return address;
}

// src/currency/token.ts
var Token = class extends BaseCurrency {
  /**
   * The contract address on the chain on which this token lives
   */
  address;
  constructor(chainKey, address, decimals, symbol, name) {
    address = validateAndParseAddress(address);
    super(`${chainKey}:${address}`, chainKey, decimals, symbol, name);
    this.address = address;
  }
  static from(input) {
    return new Token(input.chainKey, input.address, input.decimals, input.symbol, input.name);
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainKey and address.
   * @param other other token to compare
   */
  equals(other) {
    if (!(other instanceof Token))
      return false;
    return this.chainKey === other.chainKey && this.address === other.address;
  }
};

// src/currency/utils/assertToken.ts
function isToken(value) {
  return value instanceof Token;
}
function assertToken(value, errorMessage) {
  if (!isToken(value)) {
    throw new Error(errorMessage ?? `Not a token (${value.symbol})`);
  }
}
function isCoin(value) {
  return value instanceof Coin;
}
function isCurrency(value) {
  return value instanceof Token || value instanceof Coin;
}

// src/fraction/constants.ts
var Rounding = /* @__PURE__ */ ((Rounding2) => {
  Rounding2[Rounding2["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding2[Rounding2["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding2[Rounding2["ROUND_UP"] = 2] = "ROUND_UP";
  return Rounding2;
})(Rounding || {});
var MaxUint256 = BigInt(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);

// src/fraction/fraction.ts
var Decimal = toFormat__default.default(_Decimal__default.default);
var Big = toFormat__default.default(_Big__default.default);
var toSignificantRounding = {
  [0 /* ROUND_DOWN */]: Decimal.ROUND_DOWN,
  [1 /* ROUND_HALF_UP */]: Decimal.ROUND_HALF_UP,
  [2 /* ROUND_UP */]: Decimal.ROUND_UP
};
var toFixedRounding = {
  [0 /* ROUND_DOWN */]: 0,
  [1 /* ROUND_HALF_UP */]: 1,
  [2 /* ROUND_UP */]: 3
};
var Fraction = class {
  numerator;
  denominator;
  constructor(numerator, denominator = BigInt(1)) {
    this.numerator = BigInt(numerator);
    this.denominator = BigInt(denominator);
  }
  static tryParseFraction(fractionish) {
    if (typeof fractionish === "number" || typeof fractionish === "string" || typeof fractionish === "bigint")
      return new Fraction(fractionish);
    if ("numerator" in fractionish && "denominator" in fractionish)
      return fractionish;
    throw new Error("Could not parse fraction");
  }
  // performs floor division
  get quotient() {
    return this.numerator / this.denominator;
  }
  // remainder after floor division
  get remainder() {
    return new Fraction(this.numerator % this.denominator, this.denominator);
  }
  invert() {
    return new Fraction(this.denominator, this.numerator);
  }
  add(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    if (this.denominator === otherParsed.denominator) {
      return new Fraction(this.numerator + otherParsed.numerator, this.denominator);
    }
    return new Fraction(
      this.numerator * otherParsed.denominator + otherParsed.numerator * this.denominator,
      this.denominator * otherParsed.denominator
    );
  }
  subtract(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    if (this.denominator === otherParsed.denominator) {
      return new Fraction(this.numerator - otherParsed.numerator, this.denominator);
    }
    return new Fraction(
      this.numerator * otherParsed.denominator - otherParsed.numerator * this.denominator,
      this.denominator * otherParsed.denominator
    );
  }
  lessThan(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return this.numerator * otherParsed.denominator < otherParsed.numerator * this.denominator;
  }
  lessThanOrEqualTo(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return this.numerator * otherParsed.denominator <= otherParsed.numerator * this.denominator;
  }
  equalTo(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return this.numerator * otherParsed.denominator === otherParsed.numerator * this.denominator;
  }
  greaterThan(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return this.numerator * otherParsed.denominator > otherParsed.numerator * this.denominator;
  }
  greaterThanOrEqualTo(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return this.numerator * otherParsed.denominator >= otherParsed.numerator * this.denominator;
  }
  multiply(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(
      this.numerator * otherParsed.numerator,
      this.denominator * otherParsed.denominator
    );
  }
  divide(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(
      this.numerator * otherParsed.denominator,
      this.denominator * otherParsed.numerator
    );
  }
  toSignificant(significantDigits, format = { groupSeparator: "" }, rounding = 1 /* ROUND_HALF_UP */) {
    assert__default.default(Number.isInteger(significantDigits), `${significantDigits} is not an integer.`);
    assert__default.default(significantDigits > 0, `${significantDigits} is not positive.`);
    Decimal.set({ precision: significantDigits + 1, rounding: toSignificantRounding[rounding] });
    const quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  }
  toFixed(decimalPlaces, format = { groupSeparator: "" }, rounding = 1 /* ROUND_HALF_UP */) {
    assert__default.default(Number.isInteger(decimalPlaces), `${decimalPlaces} is not an integer.`);
    assert__default.default(decimalPlaces >= 0, `${decimalPlaces} is negative.`);
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  }
  /**
   * Helper method for converting any super class back to a fraction
   */
  get asFraction() {
    return new Fraction(this.numerator, this.denominator);
  }
};
var Big2 = toFormat__default.default(_Big__default.default);
var defaultFormat = {
  decimalSeparator: ".",
  groupSeparator: ""
};
var CurrencyAmount = class extends Fraction {
  token;
  decimalScale;
  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */
  static fromRawAmount(currency, rawAmount) {
    return new CurrencyAmount(currency, rawAmount);
  }
  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */
  static fromFractionalAmount(currency, numerator, denominator) {
    return new CurrencyAmount(currency, numerator, denominator);
  }
  constructor(currency, numerator, denominator) {
    super(numerator, denominator);
    assert__default.default(this.quotient <= MaxUint256, "AMOUNT");
    this.token = currency;
    this.decimalScale = BigInt(10) ** BigInt(currency.decimals);
  }
  add(other) {
    assert__default.default(this.token.equals(other.token), "CURRENCY");
    const added = super.add(other);
    return CurrencyAmount.fromFractionalAmount(this.token, added.numerator, added.denominator);
  }
  subtract(other) {
    assert__default.default(this.token.equals(other.token), "CURRENCY");
    const subtracted = super.subtract(other);
    return CurrencyAmount.fromFractionalAmount(
      this.token,
      subtracted.numerator,
      subtracted.denominator
    );
  }
  multiply(other) {
    const multiplied = super.multiply(other);
    return CurrencyAmount.fromFractionalAmount(
      this.token,
      multiplied.numerator,
      multiplied.denominator
    );
  }
  divide(other) {
    const divided = super.divide(other);
    return CurrencyAmount.fromFractionalAmount(this.token, divided.numerator, divided.denominator);
  }
  toSignificant(significantDigits = 6, format, rounding = 0 /* ROUND_DOWN */) {
    return super.divide(this.decimalScale).toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = this.token.decimals, format, rounding = 0 /* ROUND_DOWN */) {
    assert__default.default(decimalPlaces <= this.token.decimals, "DECIMALS");
    return super.divide(this.decimalScale).toFixed(decimalPlaces, format, rounding);
  }
  toExact(format = defaultFormat) {
    Big2.DP = this.token.decimals;
    return new Big2(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format);
  }
  get asFraction() {
    return new Fraction(this.numerator, this.denominator).divide(this.decimalScale);
  }
  static fromBigInt(currency, bigIntAmount) {
    return new CurrencyAmount(currency, bigIntAmount);
  }
  toBigInt() {
    return this.quotient;
  }
};

// src/fraction/percent.ts
var ONE_HUNDRED = new Fraction(BigInt(100));
function toPercent(fraction) {
  return new Percent(fraction.numerator, fraction.denominator);
}
var Percent = class extends Fraction {
  /**
   * This boolean prevents a fraction from being interpreted as a Percent
   */
  isPercent = true;
  add(other) {
    return toPercent(super.add(other));
  }
  subtract(other) {
    return toPercent(super.subtract(other));
  }
  multiply(other) {
    return toPercent(super.multiply(other));
  }
  divide(other) {
    return toPercent(super.divide(other));
  }
  toSignificant(significantDigits = 5, format, rounding) {
    return super.multiply(ONE_HUNDRED).toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = 2, format, rounding) {
    return super.multiply(ONE_HUNDRED).toFixed(decimalPlaces, format, rounding);
  }
};
var Price = class extends Fraction {
  baseCurrency;
  // input i.e. denominator
  quoteCurrency;
  // output i.e. numerator
  scalar;
  // used to adjust the raw fraction w/r/t the decimals of the {base,quote}Token
  /**
   * Construct a price, either with the base and quote currency amount, or the
   * @param args
   */
  constructor(...args) {
    let baseCurrency, quoteCurrency, denominator, numerator;
    if (args.length === 4) {
      [baseCurrency, quoteCurrency, denominator, numerator] = args;
    } else {
      const result = args[0].quoteAmount.divide(args[0].baseAmount);
      [baseCurrency, quoteCurrency, denominator, numerator] = [
        args[0].baseAmount.token,
        args[0].quoteAmount.token,
        result.denominator,
        result.numerator
      ];
    }
    super(numerator, denominator);
    this.baseCurrency = baseCurrency;
    this.quoteCurrency = quoteCurrency;
    this.scalar = new Fraction(
      BigInt(10) ** BigInt(baseCurrency.decimals),
      BigInt(10) ** BigInt(quoteCurrency.decimals)
    );
  }
  /**
   * Flip the price, switching the base and quote currency
   */
  invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  }
  /**
   * Multiply the price by another price, returning a new price. The other price must have the same base currency as this price's quote currency
   * @param other the other price
   */
  multiply(other) {
    assert__default.default(this.quoteCurrency.equals(other.baseCurrency), "TOKEN");
    const fraction = super.multiply(other);
    return new Price(
      this.baseCurrency,
      other.quoteCurrency,
      fraction.denominator,
      fraction.numerator
    );
  }
  /**
   * Return the amount of quote currency corresponding to a given amount of the base currency
   * @param currencyAmount the amount of base currency to quote against the price
   */
  quote(currencyAmount) {
    assert__default.default(currencyAmount.token.equals(this.baseCurrency), "TOKEN");
    const result = super.multiply(currencyAmount);
    return CurrencyAmount.fromFractionalAmount(
      this.quoteCurrency,
      result.numerator,
      result.denominator
    );
  }
  /**
   * Get the value scaled by decimals for formatting
   * @private
   */
  get adjustedForDecimals() {
    return super.multiply(this.scalar);
  }
  toSignificant(significantDigits = 6, format, rounding) {
    return this.adjustedForDecimals.toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = 4, format, rounding) {
    return this.adjustedForDecimals.toFixed(decimalPlaces, format, rounding);
  }
};

// src/fraction/fiat.ts
var FiatCurrency = {
  USD: "USD",
  EUR: "EUR"
};

// src/fraction/utils/castCurrencyAmountUnsafe.ts
function castCurrencyAmountUnsafe(input, dstToken) {
  const srcToken = input.token;
  if (srcToken.decimals === dstToken.decimals) {
    return CurrencyAmount.fromBigInt(dstToken, input.quotient);
  }
  return CurrencyAmount.fromBigInt(dstToken, input.quotient).multiply(10 ** dstToken.decimals).divide(10 ** srcToken.decimals);
}

// src/fraction/utils/parseUnits.ts
function parseUnits2(value, decimals) {
  const result = parseUnits(value, decimals);
  const [integer, fraction = ""] = value.split(".");
  if (fraction.length > decimals) {
    const tail = fraction.substring(decimals);
    if (BigInt(tail) > 0) {
      throw new Error("Too many decimal places");
    }
  }
  return result;
}

// src/fraction/utils/parseCurrencyAmount.ts
function parseCurrencyAmount(currency, value) {
  const typedValueParsed = parseUnits2(value, currency.decimals);
  return CurrencyAmount.fromRawAmount(currency, typedValueParsed);
}
function tryParseCurrencyAmount(currency, value) {
  if (currency === void 0 || value === void 0)
    return void 0;
  try {
    return parseCurrencyAmount(currency, value);
  } catch {
  }
  return void 0;
}

// src/fraction/utils/parseFraction.ts
function parseFraction(value, decimals) {
  const parsed = parseUnits2(value, decimals);
  const denominator = 10 ** decimals;
  return new Fraction(parsed, denominator);
}
function tryParseFraction(value, decimals = 4) {
  if (value === void 0)
    return void 0;
  try {
    return parseFraction(value, decimals);
  } catch {
  }
  return void 0;
}

// src/fraction/utils/parsePercent.ts
function parsePercent(value, decimals) {
  const parsed = parseUnits2(value, decimals);
  const denominator = 100 * 10 ** decimals;
  return new Percent(parsed, denominator);
}
function tryParsePercent(value, decimals = 4) {
  if (value === void 0)
    return void 0;
  try {
    return parsePercent(value, decimals);
  } catch {
  }
  return void 0;
}

// src/fraction/utils/parseAmount.ts
function parseAmount(amount, token) {
  return parseCurrencyAmount(token, amount);
}
function tryParseAmount(amount, token) {
  return tryParseCurrencyAmount(token, amount);
}

// src/fraction/utils/sumUnsafe.ts
function sumUnsafe(amounts, asCurrency) {
  if (!amounts || amounts.length === 0 || amounts.some((i) => !i)) {
    return void 0;
  }
  asCurrency = asCurrency ?? amounts[0].token;
  let sum = 0;
  for (const amount of amounts) {
    const float = Number.parseFloat(amount.toExact());
    sum += float;
  }
  if (!Number.isFinite(sum))
    return void 0;
  return tryParseCurrencyAmount(asCurrency, sum.toFixed(asCurrency.decimals));
}

// src/fraction/utils/sumFiat.ts
function sumFiat(amounts) {
  if (!amounts || amounts.length === 0)
    return void 0;
  let sum = 0;
  const currency = amounts[0].currency;
  for (const amount of amounts) {
    if (!amount)
      return void 0;
    if (currency !== amount.currency)
      return void 0;
    sum += amount.value;
  }
  if (!Number.isFinite(sum))
    return void 0;
  return {
    currency,
    value: sum
  };
}

// src/fraction/utils/removeDust.ts
function removeDust(amount, sharedDecimals) {
  const localDecimals = amount.token.decimals;
  const diff = localDecimals - sharedDecimals;
  if (diff > 0) {
    return CurrencyAmount.fromBigInt(
      //
      amount.token,
      amount.divide(10 ** diff).quotient
    ).multiply(10 ** diff);
  }
  return amount;
}

// src/currency/zod.ts
var serializedCoinSchema = z__default.default.object({
  name: z__default.default.string().optional(),
  symbol: z__default.default.string(),
  decimals: z__default.default.number(),
  chainKey: z__default.default.string()
});
var serializedTokenSchema = z__default.default.object({
  name: z__default.default.string().optional(),
  symbol: z__default.default.string(),
  decimals: z__default.default.number(),
  chainKey: z__default.default.string(),
  address: z__default.default.string()
});
var serializedCurrencySchema = z__default.default.union([
  // order matters
  serializedTokenSchema,
  serializedCoinSchema
]);
var serializedAmountSchema = z__default.default.object({
  // as bigint
  amount: z__default.default.string(),
  token: serializedCurrencySchema
});
var coinSchema = serializedCoinSchema.transform((obj) => Coin.from(obj));
var tokenSchema = serializedTokenSchema.transform((obj) => Token.from(obj));
var currencySchema = z__default.default.union([
  // order matters
  tokenSchema,
  coinSchema
]);
var amountSchema = serializedAmountSchema.transform((obj) => {
  const token = currencySchema.parse(obj.token);
  const amount = BigInt(obj.amount);
  return CurrencyAmount.fromBigInt(token, amount);
});
function serializeToken(token) {
  return {
    name: token.name,
    symbol: token.symbol,
    decimals: token.decimals,
    chainKey: token.chainKey,
    address: token.address
  };
}
function serializeCoin(coin) {
  return {
    name: coin.name,
    symbol: coin.symbol,
    decimals: coin.decimals,
    chainKey: coin.chainKey
  };
}
function serializeCurrency(currency) {
  if ("address" in currency) {
    return serializeToken(currency);
  } else {
    return serializeCoin(currency);
  }
}
function serializeAmount(amount) {
  return {
    amount: amount.toBigInt().toString(),
    token: serializeCurrency(amount.token)
  };
}

// src/types/ChainType.ts
var ChainType = {
  EVM: "evm",
  APTOS: "aptos",
  SOLANA: "solana",
  COSMOS: "cosmos",
  TON: "ton",
  TRON: "tron"
};

// src/network/zod.ts
var serializedNetworkSchema = z__default.default.object({
  name: z__default.default.string(),
  shortName: z__default.default.string(),
  chainKey: z__default.default.string(),
  chainType: z__default.default.nativeEnum(ChainType),
  nativeChainId: z__default.default.union([z__default.default.number(), z__default.default.string()]),
  nativeCurrency: z__default.default.object({
    name: z__default.default.string(),
    symbol: z__default.default.string(),
    decimals: z__default.default.number(),
    address: z__default.default.string().optional()
  })
});
var networkSchema = serializedNetworkSchema.transform(({ nativeCurrency, ...input }) => {
  const network = {
    name: input.name,
    shortName: input.shortName,
    chainKey: input.chainKey,
    chainType: input.chainType,
    nativeChainId: input.nativeChainId,
    nativeCurrency: nativeCurrency.address ? (
      // @ts-ignore
      Token.from({
        ...nativeCurrency,
        address: nativeCurrency.address,
        chainKey: input.chainKey
      })
    ) : Coin.from({
      ...nativeCurrency,
      chainKey: input.chainKey
    })
  };
  return network;
});

// src/network/toULNv2.ts
var EXCEPTIONS = /* @__PURE__ */ new Set([20008]);
function toULNv2(eid) {
  if (EXCEPTIONS.has(eid))
    return eid;
  if (eid < 100)
    return eid + 100;
  if (eid < 1e4)
    return eid;
  if (eid < 10100)
    return eid + 100;
  if (eid < 2e4)
    return eid;
  if (eid < 20100)
    return eid + 100;
  return eid;
}

// src/network/isEvmAddress.ts
var isEvmAddress = isAddress;

// src/utils/globals.ts
var tryGetNetwork = (chainKey) => {
  return coreModule.tryGetNetwork(chainKey);
};
var getNetwork = (chainKey) => {
  return coreModule.getNetwork(chainKey);
};
var getBlockExplorers = (chainKey) => {
  return coreModule.getBlockExplorers(chainKey);
};
var getRpcs = (chainKey) => coreModule.getRpcs(chainKey);
var tryGetNativeCurrency = (chainKey) => {
  return coreModule.tryGetNativeCurrency(chainKey);
};
var getNativeCurrency = (chainKey) => {
  return coreModule.getNativeCurrency(chainKey);
};
var tryGetNetworkByNativeChainId = (chainType, nativeChainId) => {
  return coreModule.tryGetNetworkByNativeChainId(chainType, nativeChainId);
};
var getNetworkByNativeChainId = (chainType, nativeChainId) => {
  return coreModule.getNetworkByNativeChainId(chainType, nativeChainId);
};
var isNativeCurrency = (currency) => {
  return coreModule.isNativeCurrency(currency);
};
var endpointIdToStage = (eid) => coreModule.endpointIdToStage(eid);
var endpointIdToChainKey = (eid) => {
  return coreModule.endpointIdToChainKey(eid);
};
var chainKeyToEndpointId = (chainKey, version2, stage) => {
  return coreModule.chainKeyToEndpointId(chainKey, version2, stage);
};
var isChainType = (chainKey, chainType) => {
  return coreModule.isChainType(chainKey, chainType);
};
var getScanLink = (input) => {
  return coreModule.getScanLink(input);
};
var getExplorerLink = (input) => {
  if ("address" in input) {
    return `https://layerzeroscan.com/api/explorer/${input.chainKey}/address/${input.address}`;
  }
  return `https://layerzeroscan.com/api/explorer/${input.chainKey}/tx/${input.txHash}`;
};

// src/network/isEvmChainKey.ts
function isEvmChainKey(chainKey) {
  return isChainType(chainKey, ChainType.EVM);
}

// src/network/isAptosAddress.ts
function isAptosAddress(address) {
  throw new Error("Not implemented");
}

// src/network/isAptosChainKey.ts
function isAptosChainKey(chainKey) {
  return isChainType(chainKey, ChainType.APTOS);
}

// src/network/isTonChainKey.ts
function isTonChainKey(chainKey) {
  return chainKey === "ton" || chainKey.startsWith("ton-");
}

// src/network/isSolanaAddress.ts
var solanaAddressRegex = /^([1-9A-HJ-NP-Za-km-z]{32,44})$/;
function isSolanaAddress(address) {
  return solanaAddressRegex.test(address);
}

// src/network/isSolanaChainKey.ts
function isSolanaChainKey(chainKey) {
  return isChainType(chainKey, ChainType.SOLANA);
}
var tronAddressRegex = /^T[1-9A-HJ-NP-Za-km-z]{33}$/;
function isTronAddress(address) {
  if (address.startsWith("0x")) {
    return isEvmAddress(address);
  }
  if (!tronAddressRegex.test(address)) {
    return false;
  }
  try {
    const decoded = base.base58.decode(address);
    if (decoded[0] !== 65) {
      return false;
    }
    if (decoded.length !== 25) {
      return false;
    }
    const hex = bytesToHex(decoded);
    const checkSum0 = hex.substring(hex.length - 8, hex.length);
    const checkSum1 = sha2562(sha2562(hex.substring(0, hex.length - 8))).substring(2, 10);
    if (checkSum0 !== checkSum1) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

// src/network/isTronChainKey.ts
function isTronChainKey(chainKey) {
  return isChainType(chainKey, ChainType.TRON) || chainKey.startsWith("tron-");
}
var isTonAddress = (address) => {
  try {
    return /^(0|-1):([a-f0-9]{64}|[A-F0-9]{64})$/.test(core.Address.parse(address).toRawString());
  } catch (error) {
    return false;
  }
};

// src/core/CoreModule.ts
var CoreModule = class {
  _networks = [];
  _networkByChainKey = /* @__PURE__ */ new Map();
  _deployments = [];
  _deploymentByEndpointId = /* @__PURE__ */ new Map();
  _rpcMap = {};
  _log = console;
  _blockExplorers = {};
  constructor() {
  }
  get networks() {
    return this._networks;
  }
  get rpcMap() {
    return this._rpcMap;
  }
  get blockExplorers() {
    return this.blockExplorers;
  }
  setNetworks(networks2) {
    this._networks = networkSchema.array().parse(networks2);
    this._networkByChainKey = /* @__PURE__ */ new Map();
    for (const network of this._networks) {
      this._networkByChainKey.set(network.chainKey, network);
    }
  }
  setDeployments(deployments2) {
    this._deployments = deployments2;
    this._deploymentByEndpointId = /* @__PURE__ */ new Map();
    for (const deployment of deployments2) {
      this._deploymentByEndpointId.set(deployment.eid, deployment);
    }
  }
  setBlockExplorers(blockExplorers2) {
    this._blockExplorers = blockExplorers2;
  }
  setRpcMap(rpcMap2) {
    this._rpcMap = rpcMap2;
  }
  // Network
  tryGetNetwork = (chainKey) => {
    if (chainKey === void 0)
      return void 0;
    return this._networkByChainKey.get(chainKey);
  };
  getNetwork = (chainKey) => {
    const network = this.tryGetNetwork(chainKey);
    if (!network) {
      throw new Error(`No network for chainKey: ${chainKey}`);
    }
    return network;
  };
  tryGetNetworkByNativeChainId = (chainType, nativeChainId) => {
    if (chainType === void 0)
      return void 0;
    if (nativeChainId === void 0)
      return void 0;
    for (const network of this.networks) {
      if (nativeChainId === network.nativeChainId && chainType === network.chainType) {
        return network;
      }
    }
  };
  getRpcs = (chainKey) => {
    return this.rpcMap[chainKey] ?? [];
  };
  getBlockExplorers = (chainKey) => {
    return this._blockExplorers[chainKey] ?? [];
  };
  getNetworkByNativeChainId = (chainType, nativeChainId) => {
    const network = this.tryGetNetworkByNativeChainId(chainType, nativeChainId);
    if (network)
      return network;
    throw new Error(`No network for chainType: ${chainType} and native chain id: ${nativeChainId}`);
  };
  tryGetNativeCurrency = (chainKey) => {
    const network = this.tryGetNetwork(chainKey);
    return network?.nativeCurrency;
  };
  getNativeCurrency = (chainKey) => {
    return this.getNetwork(chainKey).nativeCurrency;
  };
  getScanLink(input) {
    const domain = input.chainKey.endsWith("-sandbox") ? "sandbox.layerzeroscan.com" : "layerzeroscan.com";
    if ("address" in input) {
      return `https://${domain}/address/${input.address}`;
    }
    if ("txHash" in input) {
      return `https://${domain}/tx/${input.txHash}`;
    }
    return `https://${domain}/`;
  }
  isNativeCurrency = (currency) => {
    const nativeCurrency = this.getNativeCurrency(currency.chainKey);
    return nativeCurrency.equals(currency);
  };
  endpointIdToStage = (endpointId) => {
    const deployment = this.getDeployment(endpointId);
    return deployment.stage;
  };
  tryGetDeployment = (endpointId) => {
    return this._deploymentByEndpointId.get(endpointId);
  };
  getDeployment = (endpointId) => {
    const deployment = this.tryGetDeployment(endpointId);
    if (deployment)
      return deployment;
    throw new Error(`No deployment for endpointId: ${endpointId}`);
  };
  getNetworks() {
    return this._networks;
  }
  getDeployments() {
    return this._deployments;
  }
  endpointIdToChainKey = (endpointId) => {
    const deployment = this.getDeployment(endpointId);
    if (deployment)
      return deployment.chainKey;
    throw new Error(`No chainKey for endpointId: ${endpointId}`);
  };
  chainKeyToEndpointId = (chainKey, endpointVersion, stage) => {
    for (const deployment of this._deployments) {
      if (deployment.chainKey !== chainKey)
        continue;
      if (deployment.stage !== stage)
        continue;
      if (deployment.version !== endpointVersion)
        continue;
      return deployment.eid;
    }
    throw new Error(
      `No EndpointId for chainKey: ${chainKey} and endpointVersion: ${endpointVersion} and stage: ${stage}`
    );
  };
  isChainType = (chainKey, chainType) => {
    const network = this.getNetwork(chainKey);
    return network.chainType === chainType;
  };
};

// src/core/index.ts
var coreModule = new CoreModule();

// src/config/blockExplorers.ts
var blockExplorers = {
  arbitrum: [
    {
      name: "Arbiscan",
      url: "https://arbiscan.io"
    }
  ],
  "arbitrum-goerli": [
    {
      name: "Arbiscan",
      url: "https://goerli.arbiscan.io"
    }
  ],
  nova: [
    {
      name: "BlockScout",
      url: "https://nova-explorer.arbitrum.io"
    }
  ],
  astar: [
    {
      name: "Astar Subscan",
      url: "https://astar.subscan.io"
    }
  ],
  aurora: [
    {
      name: "Aurorascan",
      url: "https://aurorascan.dev"
    }
  ],
  "aurora-testnet": [
    {
      name: "Aurorascan",
      url: "https://testnet.aurorascan.dev"
    }
  ],
  avalanche: [
    {
      name: "SnowTrace",
      url: "https://snowtrace.io"
    }
  ],
  fuji: [
    {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io"
    }
  ],
  base: [
    {
      name: "Basescan",
      url: "https://basescan.org"
    }
  ],
  "base-goerli": [
    {
      name: "Basescan",
      url: "https://goerli.basescan.org"
    }
  ],
  bsc: [
    {
      name: "BscScan",
      url: "https://bscscan.com"
    }
  ],
  "bsc-testnet": [
    {
      name: "BscScan",
      url: "https://testnet.bscscan.com"
    }
  ],
  canto: [
    {
      name: "Tuber.Build (Blockscout)",
      url: "https://tuber.build"
    }
  ],
  celo: [
    {
      name: "CeloScan",
      url: "https://celoscan.io"
    }
  ],
  coredao: [
    {
      name: "CoreDao",
      url: "https://scan.coredao.org"
    }
  ],
  dfk: [
    {
      name: "DFKSubnetScan",
      url: "https://subnets.avax.network/defi-kingdoms"
    }
  ],
  fantom: [
    {
      name: "FTMScan",
      url: "https://ftmscan.com"
    }
  ],
  "fantom-testnet": [
    {
      name: "FTMScan",
      url: "https://testnet.ftmscan.com"
    }
  ],
  fuse: [
    {
      name: "Fuse Explorer",
      url: "https://explorer.fuse.io"
    }
  ],
  gnosis: [
    {
      name: "Gnosis Chain Explorer",
      url: "https://blockscout.com/xdai/mainnet"
    }
  ],
  chiado: [
    {
      name: "Blockscout",
      url: "https://blockscout.chiadochain.net"
    }
  ],
  goerli: [
    {
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    }
  ],
  harmony: [
    {
      name: "Harmony Explorer",
      url: "https://explorer.harmony.one"
    }
  ],
  kava: [
    {
      name: "Kava EVM Explorer",
      url: "https://kavascan.com"
    }
  ],
  "kava-testnet": [
    {
      name: "Kava EVM Testnet Explorer",
      url: "https://testnet.kavascan.com"
    }
  ],
  klaytn: [
    {
      name: "KlaytnScope",
      url: "https://scope.klaytn.com"
    }
  ],
  "klaytn-baobab": [
    {
      name: "KlaytnScope",
      url: "https://baobab.klaytnscope.com"
    }
  ],
  linea: [
    {
      name: "Blockscout",
      url: "https://explorer.linea.build"
    }
  ],
  ethereum: [
    {
      name: "Etherscan",
      url: "https://etherscan.io"
    }
  ],
  manta: [
    {
      name: "Manta Explorer",
      url: "https://pacific-explorer.manta.network"
    }
  ],
  "manta-testnet": [
    {
      name: "Manta Testnet Explorer",
      url: "https://pacific-explorer.testnet.manta.network"
    }
  ],
  mantle: [
    {
      name: "Mantle Explorer",
      url: "https://explorer.mantle.xyz"
    }
  ],
  "mantle-testnet": [
    {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.testnet.mantle.xyz"
    }
  ],
  meter: [
    {
      name: "MeterScan",
      url: "https://scan.meter.io"
    }
  ],
  "meter-testnet": [
    {
      name: "MeterTestnetScan",
      url: "https://scan-warringstakes.meter.io"
    }
  ],
  metis: [
    {
      name: "Andromeda Explorer",
      url: "https://andromeda-explorer.metis.io"
    }
  ],
  "metis-goerli": [
    {
      name: "Metis Goerli Explorer",
      url: "https://goerli.explorer.metisdevops.link"
    }
  ],
  moonbeam: [
    {
      name: "Moonscan",
      url: "https://moonscan.io"
    }
  ],
  moonriver: [
    {
      name: "Moonscan",
      url: "https://moonriver.moonscan.io"
    }
  ],
  opbnb: [
    {
      name: "opbnbscan",
      url: "https://mainnet.opbnbscan.com"
    }
  ],
  "opbnb-testnet": [
    {
      name: "opbnbscan",
      url: "https://opbnbscan.com"
    }
  ],
  optimism: [
    {
      name: "Optimism Explorer",
      url: "https://explorer.optimism.io"
    }
  ],
  "optimism-goerli": [
    {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io"
    }
  ],
  pgn: [
    {
      name: "PGN Explorer",
      url: "https://explorer.publicgoods.network"
    }
  ],
  "pgn-testnet": [
    {
      name: "PGN Testnet Explorer",
      url: "https://explorer.sepolia.publicgoods.network"
    }
  ],
  polygon: [
    {
      name: "PolygonScan",
      url: "https://polygonscan.com"
    }
  ],
  mumbai: [
    {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    }
  ],
  zkevm: [
    {
      name: "PolygonScan",
      url: "https://zkevm.polygonscan.com"
    }
  ],
  "zkevm-testnet": [
    {
      name: "PolygonScan",
      url: "https://testnet-zkevm.polygonscan.com"
    }
  ],
  scroll: [
    {
      name: "Blockscout",
      url: "https://blockscout.scroll.io"
    }
  ],
  "scroll-sepolia": [
    {
      name: "Blockscout",
      url: "https://sepolia-blockscout.scroll.io"
    }
  ],
  sepolia: [
    {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io"
    }
  ],
  shimmer: [
    {
      name: "Shimmer Network Explorer",
      url: "https://explorer.evm.shimmer.network"
    }
  ],
  "shimmer-testnet": [
    {
      name: "Shimmer Network Explorer",
      url: "https://explorer.evm.testnet.shimmer.network"
    }
  ],
  telos: [
    {
      name: "Teloscan",
      url: "https://www.teloscan.io"
    }
  ],
  "telos-testnet": [
    {
      name: "Teloscan (testnet)",
      url: "https://testnet.teloscan.io"
    }
  ],
  tenet: [
    {
      name: "TenetScan Mainnet",
      url: "https://tenetscan.io"
    }
  ],
  zksync: [
    {
      name: "zkExplorer",
      url: "https://explorer.zksync.io"
    }
  ],
  "zksync-testnet": [
    {
      name: "zkExplorer",
      url: "https://goerli.explorer.zksync.io"
    }
  ],
  zora: [
    {
      name: "Explorer",
      url: "https://explorer.zora.energy"
    }
  ],
  "zora-testnet": [
    {
      name: "Explorer",
      url: "https://testnet.explorer.zora.energy"
    }
  ]
};

// src/utils/interpolateString.ts
function interpolateString(str, variables) {
  const regex = /\${([a-zA-Z0-9_]+)}/g;
  return str.replace(regex, (_, variable) => {
    const value = variables[variable];
    if (value === void 0) {
      throw new Error(`Undefined environment variable: ${variable}`);
    }
    return String(value);
  });
}
var rpcMap = uiConfig.rpcs;

// src/utils/createRpcMap.ts
function createRpcMap(rawRpcMap = rpcMap, env = {}) {
  const rpcMap2 = {};
  for (const [chainKey, rawRpcList] of Object.entries(rawRpcMap)) {
    if (!rawRpcList)
      continue;
    const rpcList = [];
    for (const rpc of rawRpcList) {
      if (!rpc.url.startsWith("https://"))
        continue;
      try {
        const url = interpolateString(rpc.url, env);
        rpcList.push({
          ...rpc,
          url
        });
      } catch {
      }
    }
    rpcMap2[chainKey] = rpcList;
  }
  return rpcMap2;
}

// src/config/defaults.ts
function setDefaults() {
  coreModule.setNetworks(uiConfig.networks);
  coreModule.setDeployments(uiConfig.deployments);
  coreModule.setBlockExplorers(blockExplorers);
  coreModule.setRpcMap(createRpcMap(rpcMap, {}));
}
setDefaults();

// src/utils/waitFor.ts
var noop = () => {
};
function waitFor(condition, { timeout = 1e3, interval = 100 } = {}) {
  let cancel = noop;
  const promise = new Promise(async (resolve, reject) => {
    try {
      if (await condition()) {
        resolve();
        return;
      }
    } catch {
    }
    const id = setInterval(() => {
      if (condition()) {
        cancel();
        resolve();
      }
    }, interval);
    cancel = () => clearInterval(id);
    setTimeout(() => {
      cancel();
      reject(new Error(`Timed out after ${timeout}ms`, { cause: condition }));
    }, timeout);
  });
  promise.cancel = cancel;
  return promise;
}

// src/utils/parseNumber.ts
function formatUserInput(value) {
  value = value.replace(/,/g, ".");
  return value;
}
var tryParseNumber = (value) => {
  const nextUserInput = formatUserInput(value);
  if (nextUserInput === "" || inputRegex.test(escapeRegExp(nextUserInput))) {
    return nextUserInput;
  }
  return void 0;
};
var parseNumber = (value) => {
  const number = tryParseNumber(value);
  if (!number)
    throw new Error(`Value "${value}" is invalid number`);
  return number;
};
var inputRegex = /^\d*(?:\\[.])?\d*$/;
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// src/utils/hasAddress.ts
function hasAddress(obj) {
  return "address" in obj && !!obj.address;
}

// src/utils/unit8ArrayToHex.ts
function unit8ArrayToHex(value) {
  return "0x" + Buffer.from(value).toString("hex");
}

// src/utils/hexToUnit8Array.ts
function hexToUnit8Array(hex) {
  return new Uint8Array(Buffer.from(hex.slice(2), "hex"));
}

// src/utils/error.ts
var InvalidAddressError2 = class extends Error {
  name = "InvalidAddressError";
  constructor({ address, type }) {
    super(`Invalid address: ${address} for chain type: ${type}`);
  }
};

// src/duration/DurationProvider.ts
var DurationProvider = class {
  constructor(config) {
    this.config = config;
  }
  setConfig(config) {
    this.config = config;
  }
  async getExpectedDate(ua, dstEid, sentTimestamp = getUnixTime(/* @__PURE__ */ new Date())) {
    const duration = await this.getMessageDuration(ua, dstEid);
    const expected = sentTimestamp + duration + this.config.extraDelay;
    return expected;
  }
  async getMessageDuration(ua, dstEid) {
    const srcChainKey = this.endpointIdToChainKey(ua.eid);
    const dstChainKey = this.endpointIdToChainKey(dstEid);
    const [confirmations, srcBlockTime, dstBlockTime] = await Promise.all([
      this.getRequiredConfirmations(ua, dstEid),
      this.getAverageBlockTime(srcChainKey),
      this.getAverageBlockTime(dstChainKey)
    ]);
    return (confirmations + 1) * srcBlockTime + dstBlockTime * 2 + this.config.extraDelay;
  }
  async getRequiredConfirmations(ua, dstEid) {
    const srcChainKey = this.endpointIdToChainKey(ua.eid);
    this.endpointIdToChainKey(dstEid);
    if (srcChainKey) {
      const confirmations = this.config.blockConfirmation[srcChainKey];
      if (confirmations)
        return confirmations;
    }
    return this.config.blockConfirmation.default;
  }
  // returns seconds
  async getAverageBlockTime(chainKey) {
    if (chainKey) {
      const blockTime = this.config.averageBlockTime[chainKey];
      if (blockTime)
        return blockTime;
    }
    return this.config.averageBlockTime.default;
  }
  endpointIdToChainKey(eid) {
    return coreModule.endpointIdToChainKey(eid);
  }
};
function getUnixTime(date) {
  return Math.floor(date.getTime() / 1e3);
}

// src/duration/defaultConfig.ts
var defaultConfig = {
  extraDelay: 10,
  blockConfirmation: {
    ethereum: 15,
    avalanche: 12,
    bsc: 20,
    polygon: 512,
    arbitrum: 20,
    optimism: 20,
    fantom: 5,
    default: 20
  },
  averageBlockTime: {
    default: 10,
    solana: 0.4,
    "solana-testnet": 0.4,
    ethereum: 12.0888,
    rinkeby: 15,
    goerli: 30,
    bsc: 3.0145,
    "bsc-testnet": 3.0006,
    polygon: 2.174,
    mumbai: 2.1251,
    avalanche: 2.0261,
    fuji: 2.4164,
    fantom: 0.7371,
    "fantom-testnet": 3.3419,
    arbitrum: 0.3016,
    "arbitrum-goerli": 0.479,
    "arbitrum-rinkeby": 2,
    optimism: 2,
    "optimism-kovan": 2,
    "optimism-goerli": 2,
    swimmer: 35,
    dfk: 2.0937,
    harmony: 2.0004,
    aptos: 5,
    "aptos-testnet": 5,
    moonbeam: 12.1626,
    metis: 8.178,
    "metis-goerli": 25.7157,
    "dfk-testnet": 25.0134,
    "harmony-testnet": 1,
    "dexalot-testnet": 150.913,
    kovan: 2,
    chiado: 1,
    celo: 5,
    alfajores: 5,
    moonbase: 12.2118,
    boba: 174.893,
    "boba-rinkeby": 2,
    "portal-fantasy-testnet": 1e5,
    aurora: 1.0254,
    "aurora-testnet": 0.636,
    astar: 1e5,
    coredao: 3,
    "coredao-testnet": 3,
    dexalot: 2.0017,
    dos: 330.0842,
    "dos-testnet": 284.9476,
    fuse: 5.035,
    gnosis: 5.3655,
    klaytn: 1.0005,
    "klaytn-baobab": 1,
    meter: 1.8928,
    "meter-testnet": 1.3163,
    moonriver: 12.4302,
    okx: 4.0994,
    sepolia: 13.0404,
    zksync: 1.0137,
    "zksync-testnet": 2.9454,
    "base-goerli": 2,
    shrapnel: 73.9795,
    tenet: 3.5818,
    "tenet-testnet": 3.7681,
    zkevm: 1.7976,
    "zkevm-testnet": 10.8423,
    canto: 5.795,
    "canto-testnet": 1,
    nova: 0.8291,
    kava: 6.3176,
    "kava-testnet": 5.2017,
    base: 2,
    "linea-goerli": 6.0032,
    linea: 8,
    mantle: 1.0913,
    "mantle-testnet": 1.8003,
    beam: 25.4688,
    "beam-testnet": 11.6942,
    "okx-testnet": 3.3526,
    "scroll-testnet": 1,
    zora: 2,
    telos: 1e5,
    "telos-testnet": 0.5,
    "conflux-testnet": 0.6396,
    opbnb: 0.9999,
    conflux: 1.3113,
    "opbnb-testnet": 1.0001,
    scroll: 3.0401,
    orderly: 2,
    "astar-testnet": 1,
    eon: 1,
    "eon-testnet": 1,
    "frame-testnet": 1,
    "holesky-testnet": 1,
    "kiwi-testnet": 1,
    "manta-testnet": 1,
    "oda-testnet": 1,
    "orderly-testnet": 1,
    "pgn-testnet": 1,
    "shimmer-testnet": 1,
    "shrapnel-testnet": 1,
    "spruce-testnet": 1,
    tomo: 1,
    "tomo-testnet": 1,
    xpla: 1,
    "xpla-testnet": 1,
    "zkatana-testnet": 1,
    "zora-testnet": 1
  }
};

// src/duration/globals.ts
var durationProvider = new DurationProvider(defaultConfig);
var getExpectedDate = (ua, dstEid, sentTimestamp) => durationProvider.getExpectedDate(ua, dstEid, sentTimestamp);
var getMessageDuration = (ua, dstEid) => durationProvider.getMessageDuration(ua, dstEid);

// src/types/AdapterParams.ts
var AdapterParams = class {
  constructor(version2, extraGas = 2e5, dstNativeAmount, dstNativeAddress) {
    this.version = version2;
    this.extraGas = extraGas;
    this.dstNativeAmount = dstNativeAmount;
    this.dstNativeAddress = dstNativeAddress;
  }
  static forV1(extraGas) {
    return new AdapterParams(1, extraGas);
  }
  static forV2(input) {
    assert__default.default(input.dstNativeAmount);
    assert__default.default(input.dstNativeAddress);
    return new AdapterParams(2, input.extraGas, input.dstNativeAmount, input.dstNativeAddress);
  }
  static create(input) {
    if ("dstNativeAmount" in input && input.dstNativeAmount) {
      return AdapterParams.forV2(input);
    } else {
      return AdapterParams.forV1(input.extraGas);
    }
  }
};

// src/types/MessageFee.ts
var MessageFee = class {
  constructor(nativeFee, zroFee) {
    this.nativeFee = nativeFee;
    this.zroFee = zroFee;
  }
  static from(chainKey, { nativeFee, zroFee }) {
    const native = getNativeCurrency(chainKey);
    const zroToken = native;
    return new MessageFee(
      CurrencyAmount.fromBigInt(native, BigInt(nativeFee)),
      CurrencyAmount.fromBigInt(zroToken, BigInt(zroFee))
    );
  }
};

// src/types/Stage.ts
var Stage = {
  MAINNET: "mainnet",
  TESTNET: "testnet",
  SANDBOX: "sandbox"
};
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/

Object.defineProperty(exports, 'assert', {
  enumerable: true,
  get: function () { return assert__default.default; }
});
exports.AdapterParams = AdapterParams;
exports.BaseCurrency = BaseCurrency;
exports.ChainType = ChainType;
exports.Coin = Coin;
exports.CoreModule = CoreModule;
exports.CurrencyAmount = CurrencyAmount;
exports.DurationProvider = DurationProvider;
exports.FiatCurrency = FiatCurrency;
exports.Fraction = Fraction;
exports.InvalidAddressError = InvalidAddressError2;
exports.MaxUint256 = MaxUint256;
exports.MessageFee = MessageFee;
exports.Percent = Percent;
exports.Price = Price;
exports.Rounding = Rounding;
exports.Stage = Stage;
exports.Token = Token;
exports.amountSchema = amountSchema;
exports.assertToken = assertToken;
exports.castCurrencyAmountUnsafe = castCurrencyAmountUnsafe;
exports.chainKeyToEndpointId = chainKeyToEndpointId;
exports.coinSchema = coinSchema;
exports.coreModule = coreModule;
exports.createRpcMap = createRpcMap;
exports.currencySchema = currencySchema;
exports.durationProvider = durationProvider;
exports.endpointIdToChainKey = endpointIdToChainKey;
exports.endpointIdToStage = endpointIdToStage;
exports.escapeRegExp = escapeRegExp;
exports.getBlockExplorers = getBlockExplorers;
exports.getExpectedDate = getExpectedDate;
exports.getExplorerLink = getExplorerLink;
exports.getMessageDuration = getMessageDuration;
exports.getNativeCurrency = getNativeCurrency;
exports.getNetwork = getNetwork;
exports.getNetworkByNativeChainId = getNetworkByNativeChainId;
exports.getRpcs = getRpcs;
exports.getScanLink = getScanLink;
exports.hasAddress = hasAddress;
exports.hexToUnit8Array = hexToUnit8Array;
exports.interpolateString = interpolateString;
exports.isAptosAddress = isAptosAddress;
exports.isAptosChainKey = isAptosChainKey;
exports.isChainType = isChainType;
exports.isCoin = isCoin;
exports.isCurrency = isCurrency;
exports.isEvmAddress = isEvmAddress;
exports.isEvmChainKey = isEvmChainKey;
exports.isNativeCurrency = isNativeCurrency;
exports.isSolanaAddress = isSolanaAddress;
exports.isSolanaChainKey = isSolanaChainKey;
exports.isToken = isToken;
exports.isTonAddress = isTonAddress;
exports.isTonChainKey = isTonChainKey;
exports.isTronAddress = isTronAddress;
exports.isTronChainKey = isTronChainKey;
exports.networkSchema = networkSchema;
exports.parseAmount = parseAmount;
exports.parseCurrencyAmount = parseCurrencyAmount;
exports.parseFraction = parseFraction;
exports.parseNumber = parseNumber;
exports.parsePercent = parsePercent;
exports.parseUnits = parseUnits2;
exports.removeDust = removeDust;
exports.serializeAmount = serializeAmount;
exports.serializeCoin = serializeCoin;
exports.serializeCurrency = serializeCurrency;
exports.serializeToken = serializeToken;
exports.serializedAmountSchema = serializedAmountSchema;
exports.serializedCoinSchema = serializedCoinSchema;
exports.serializedCurrencySchema = serializedCurrencySchema;
exports.serializedNetworkSchema = serializedNetworkSchema;
exports.serializedTokenSchema = serializedTokenSchema;
exports.sumFiat = sumFiat;
exports.sumUnsafe = sumUnsafe;
exports.toULNv2 = toULNv2;
exports.tokenSchema = tokenSchema;
exports.tryGetNativeCurrency = tryGetNativeCurrency;
exports.tryGetNetwork = tryGetNetwork;
exports.tryGetNetworkByNativeChainId = tryGetNetworkByNativeChainId;
exports.tryParseAmount = tryParseAmount;
exports.tryParseCurrencyAmount = tryParseCurrencyAmount;
exports.tryParseFraction = tryParseFraction;
exports.tryParseNumber = tryParseNumber;
exports.tryParsePercent = tryParsePercent;
exports.unit8ArrayToHex = unit8ArrayToHex;
exports.validateAndParseAddress = validateAndParseAddress;
exports.waitFor = waitFor;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map