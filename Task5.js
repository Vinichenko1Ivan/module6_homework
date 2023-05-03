// Task 5:

const exponent = (x, n) => {
const expEl = x**n;
if (x <= 0 || n <= 0) 
  return 'Неверно! Введите натуральные числа';

return expEl
}

console.log(exponent(4, 8))