export const calcTipPerPerson = (bill, tip, split) => {
  const tipAmount = ((bill * tip) / 100).toFixed(2);
  const tipPerPerson = (tipAmount / split).toFixed(2);
  return tipPerPerson;
};
