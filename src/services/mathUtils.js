export const roundTwo = (number) => {
  return (Math.round((number * 1000) / 10) / 100).toFixed(2)
}
