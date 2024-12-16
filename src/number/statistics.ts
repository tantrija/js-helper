export const min = (...nums: number[]): number => Math.min(...nums);
export const max = (...nums: number[]): number => Math.max(...nums);
export const average = (nums: number[]): number =>
  nums.length ? nums.reduce((acc, num) => acc + num, 0) / nums.length : NaN;
export const sum = (nums: number[]): number => nums.reduce((acc, num) => acc + num, 0);
export const median = (nums: number[]): number => {
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
};
export const mode = (nums: number[]): number[] => {
  const freq: Record<number, number> = {};
  nums.forEach((num) => (freq[num] = (freq[num] || 0) + 1));
  const maxFreq = Math.max(...Object.values(freq));
  return Object.keys(freq).filter((key) => freq[Number(key)] === maxFreq).map(Number);
};
export const range = (nums: number[]): number => Math.max(...nums) - Math.min(...nums);
export const variance = (nums: number[]): number => {
  const avg = average(nums);
  return nums.reduce((acc, num) => acc + Math.pow(num - avg, 2), 0) / nums.length;
};
export const standardDeviation = (nums: number[]): number => Math.sqrt(variance(nums));
