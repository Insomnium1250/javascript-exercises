const sumAll = function(num1,num2) {
  if (Number.isInteger(num1) == false || Number.isInteger(num2) == false || num1 < 0 || num2 < 0) {
    return "ERROR";
  };
  let result = (num1+num2)*(Math.abs(num2-num1)+1)/2;
  return result;
};

// Do not edit below this line
module.exports = sumAll;
