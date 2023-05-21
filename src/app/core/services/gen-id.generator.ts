export function genID(): () => number {
  let a = 1;
  let b = 2;

  return function (): number {
    const result = a;
    [a, b] = [b, a + b];
    return result;
  };
}