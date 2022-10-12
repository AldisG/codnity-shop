export const formatedNumb = (value: number): string => {
  const oldNum = value.toFixed(2);
  return oldNum.includes('.') ? oldNum : `${oldNum}.00`;
};
