export const calculateTax = (total: number): number => {
  const TAX: number = 0.19;
  const taxAmount: number = Math.floor(total * TAX);
  return taxAmount + total;
};
