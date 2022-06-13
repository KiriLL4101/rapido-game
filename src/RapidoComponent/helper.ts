export function getRandomNumber(array: number[] = []): number[] {
  const uniqueArray: number[] = [...new Set(array)];

  if (uniqueArray.length >= 8) {
    return uniqueArray;
  }

  return getRandomNumber([
    ...uniqueArray,
    Math.floor(Math.random() * (19 - 1) + 1),
  ]);
}
