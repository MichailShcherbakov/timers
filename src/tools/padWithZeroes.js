export function padWithZeroes(number, len) {
  const zeroes = "0".repeat(len);

  const num = number.toString();

  return zeroes.substring(num.length, len) + num;
}