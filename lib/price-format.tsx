export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0, // No decimals
  }).format(price);
};

export const priceFormatPerThousand = (price: number) => {
  const priceInThousands = price / 1000;
  const formattedPrice = priceFormat(priceInThousands);
  return `${formattedPrice}K`;
};
