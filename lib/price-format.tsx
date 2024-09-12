export const priceFormatPerThousand = (price: number) => {
  const priceInThousands = price / 1000;

  // Format the price and append 'K' suffix
  return (
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0, // No decimals
    }).format(priceInThousands) + 'K'
  );
};
