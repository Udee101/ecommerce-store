export const formatTitle = (string, length) => {
  let text = string.slice(0, length)
  return `${text}...`
};

export const formatMoney = (price) => {
  return `${String.fromCodePoint(0x00024) + price.toFixed(2)}`
}
