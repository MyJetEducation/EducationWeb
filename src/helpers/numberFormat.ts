export const numberFormat = (n: number) => {
  return n.toString().replace(/\B(?!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
}