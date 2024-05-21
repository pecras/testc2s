export const transformDate = (value: string) => {
  const nascimento = new Date(value);
  const day = nascimento.getDate();
  const month = nascimento.getMonth() + 1; // getMonth() retorna o mês de 0 a 11, então adicionamos 1
  const year = nascimento.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const dateTotal = `${formattedDay}/${formattedMonth}/${year}`;
  return dateTotal;
};
