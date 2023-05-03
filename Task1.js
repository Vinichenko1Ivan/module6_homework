// Task 1:

// Function declaration:

function enumerationMassiveFn ()  {
  let arrOne = [3, 6, 9, 18, true, 81, null, 'hello', 25, 88, 55];
  let zeroNumber = 0;
  let oddNumbers = 0;
  let evenNumbers = 0; 

  for (let i = 0; i < arrOne.length; i += 1) {
 if(typeof arrOne[i] === 'number' && !isNaN(arrOne[i])) {
   if (arrOne[i] === 0) {
     zeroNumber++
   }
   else if (arrOne[i] % 2 !== 0) {
     oddNumbers++
   } 
   else {
   evenNumbers++
   }
 }
}
console.log(`В массиве: ${zeroNumber} нулевых элементов, ${evenNumbers} чётных элементов и ${oddNumbers} нечётных элементов.`)
}

enumerationMassiveFn ()



// Function expression:

let selectionInsideMassiveFn = function ()  {
    let arrOne = [3, 6, 9, 18, true, 81, null, 'hello', 25, 88, 55];
    let zeroNumber = 0;
    let oddNumbers = 0;
    let evenNumbers = 0; 

    for (let i = 0; i < arrOne.length; i += 1) {
   if(typeof arrOne[i] === 'number' && !isNaN(arrOne[i])) {
     if (arrOne[i] === 0) {
       zeroNumber++
     }
     else if (arrOne[i] % 2 !== 0) {
       oddNumbers++
     } 
     else {
     evenNumbers++
     }
   }
 }
 console.log(`В массиве: ${zeroNumber} нулевых элементов, ${evenNumbers} чётных элементов и ${oddNumbers} нечётных элементов.`)
}

selectionInsideMassiveFn ()