const palindromes = function (str) {
  const arr = str
  .toLowerCase()
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  .split("")
  .filter((char) => char !== " ");
  const arrReverse = [...arr].reverse();
  if (arr.toString() === arrReverse.toString()) {
    return true;
  } else {
    return false;
  }
};
// Do not edit below this line
module.exports = palindromes;
