export const formatTitle = (string, length) => {
  let text = string.slice(0, length)
  return `${text}...`
};

export const formatMoney = (price) => {
  let currentNairaValue = 1450.00
  let priceInNaira = currentNairaValue * price
  return `${String.fromCodePoint(0x20A6) + Intl.NumberFormat().format(priceInNaira)}`
}
