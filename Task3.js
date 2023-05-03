// Task 3:

function mainFn (_first) {
  return function (_second) {
    return _first + _second;
  };
}

const sumFirSec = mainFn (3) (5);

console.log(sumFirSec);

mainFn()