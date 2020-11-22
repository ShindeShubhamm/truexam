export const GenerateId = (length) => {
  const id = Array(length)
    .fill('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
    .map((x) => {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join('');

  return id;
};
