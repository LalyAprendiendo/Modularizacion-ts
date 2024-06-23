export function generateRandomNum(): number {
  const randomNum = Math.random() * 10
  const randomNumInt = Math.trunc(randomNum)
  return randomNumInt;
}
