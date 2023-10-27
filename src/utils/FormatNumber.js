const NumberFormat = (number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "unit",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

export default NumberFormat;
