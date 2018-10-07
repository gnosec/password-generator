export function toArray(buffer: Buffer): any[] {
  const array = [];
  for (let i = 0; i < buffer.length; i++) {
    array.push(buffer[i]);
  }
  return array;
}
