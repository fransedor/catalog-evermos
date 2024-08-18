/**
 * Format price from number to thousand separated price string
 * @param {number} price - the price to be formatted
 * @returns formatted price as string
 */
function formatPrice(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default formatPrice;
