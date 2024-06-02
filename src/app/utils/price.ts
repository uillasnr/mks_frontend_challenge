export const formatCurrency = (value: number): string => {
  return `R$${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
  }).format(value)}`;
};
