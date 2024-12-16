export const random = (): number => Math.random();
export const randomInRange = (min: number, max: number): number => Math.random() * (max - min) + min;
export const randomInteger = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
export const shuffleArray = <T>(arr: T[]): T[] => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
