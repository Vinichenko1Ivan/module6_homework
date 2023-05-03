// Task 4:

function startFn (_one, _two) {
  let currentNumber = _one;
  let timerId = setInterval (function () {
    console.log(currentNumber)
   if (currentNumber == _two) {
    clearInterval(timerId);
   }
   else {
    currentNumber ++
   }
  }, 1000);
}

startFn(3, 8)