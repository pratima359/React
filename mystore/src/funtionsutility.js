export const NumberIntoIndianCurrency = (price) => {
  const convertedCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(price / 100);

  return convertedCurrency;
};
console.log();
