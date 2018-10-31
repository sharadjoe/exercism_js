export const twoFer = (name) => {
  const adder = (name === '') ? 'you' : name;
  return (`One for ${adder}, one for me.`);
}