function generateRandomString(length) {
  const valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
  let res = "";
  for (let i = 0; i < length; i++) {
    res += valid.charAt(Math.floor(Math.random() * valid.length));
  }
  return res;
}

module.exports = {
  generateRandomString
};
