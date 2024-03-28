export const generateRandomId = (length) => {
  let id = "";
  let count = 0;

  while (count <= length) {
    const outcomeString =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    const indexId = Math.floor(Math.random() * outcomeString.length);
    const selectedRandomId = outcomeString.charAt(indexId);
    
    id += selectedRandomId;
    count++;
  }

  return id;
};
