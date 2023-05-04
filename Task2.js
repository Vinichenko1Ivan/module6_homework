// Task 2:

function determinant(_numb) {
  if (_numb > 1000) {
    return 'Данные неверны'; 
  }

  else if (_numb <= 0 || _numb === 1) {
    return 'Данные неверны';
  }

  else {
    for(let i = 2; i < _numb; i++)  {
      if(_numb % i === 0) {
        return 'Составное число';
      }
    }
    return 'Простое число';  
  }
}

console.log(determinant(55))