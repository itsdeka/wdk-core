export function base64ToUint8Array(base64: string): Uint8Array {
  // todo: fix deprecated atob
  const binaryString = atob(base64);
  const len = binaryString.length;
  const uint8Array = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }
  return uint8Array;
}

export function uint8ArrayToBase64(uint8Array: Uint8Array): string {
  let binary = '';
  const len = uint8Array.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binary);
}

export function unit8ArrayToHex(value: Uint8Array): string {
  // biome-ignore lint/style/useTemplate: <explanation>
  return '0x' + Buffer.from(value).toString('hex');
}

export function hexToUnit8Array(hex: string): Uint8Array {
  return new Uint8Array(Buffer.from(hex.slice(2), 'hex'));
}
