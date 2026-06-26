// var number = [1, 2, 3, 4, 5, 6, 7]
// for (var i = 0; i < number.length; i++) {
//    console.log(number[i])
// }

// Task 1

// var numbers = [12, 4, -8, -12, -25, 5, 5, 3, -9, 7, -5, -7]
// var negetiveNum = 0

// for (var i = 0; i < numbers.length; i++) {
//    if (numbers[i] < negetiveNum) {
//       negetiveNum++
//    }
// }

// console.log(negetiveNum)

// Task 2 Even & Odd

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var evenNum = [];
// var oddNum = [];

// for (var i = 0; i < numbers.length; i++) {
//    if (numbers[i] % 2 === 0) {
//       evenNum.push(numbers[i])
//    } else {
//       oddNum.push(numbers[i])
//    }
// }

// console.log(evenNum)
// console.log(oddNum)

// Task 3 Sum of all numbers of array

// var numbers = [1, 2, 3, 4, 5, 6]
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//    sum += numbers[i]
// }

// console.log(sum)

// Task 4 Greater Number

// var greaterNum = 0;

// var numbers = [1, 2, 3, 4, 5, 6]
// for (var i = 0; i < numbers.length; i++) {
//    if (numbers[i] > greaterNum) {
//       greaterNum = numbers[i]
//    }
// }
// console.log(greaterNum)

// Task 5 Smallest Number

// var smallestNum = 0;

// var numbers = [-1, -2, 3, -4, 5, -6]
// for (var i = 0; i < numbers.length; i++) {
//    if (numbers[i] < smallestNum) {
//       smallestNum = numbers[i]
//    }
// }
// console.log(smallestNum)

// *Bug in this way
// var smallestNum = 0;

// var numbers = [1, 2, 3, 4, 5, 6]
// for (var i = 0; i < numbers.length; i++) {

// condition failed
//    if (numbers[i] < smallestNum) {
//       smallestNum = numbers[i]
//    }
// }
// console.log(smallestNum)

// *Correct
// Find the smallest number form the array
// var smallestNum = numbers[0];

// var numbers = [67, 34, 44, 33, 12];

// var smallestNum = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//    if (numbers[i] < smallestNum) {
//       smallestNum = numbers[i];
//    }
// }

// console.log(smallestNum)

// Task 6
// Second Largest Number

// var helperNum = 0;
// var secondLastNum = 0;

// var numbers = [10, 20, 30, 40, 50, 60, 77, 99, 120, 250, 39]

// for (var i = 0; i < numbers.length; i++) {
//    if (numbers[i] > helperNum) {
//       helperNum = numbers[i];
//    }
// }

// var index = numbers.indexOf(helperNum)
// if (index > -1) {
//    numbers.splice(index, 1)
// }

// for (var i = 0; i < numbers.length; i++) {
//    if (numbers[i] > secondLastNum) {
//       secondLastNum = numbers[i];
//    }
// }

// console.log(helperNum);
// console.log(secondLastNum);



// Task 7
// Dublicate Number
// var numbers = [1, 2, 3, 2, 3];

// for (var i = 0; i < numbers.length; i++) {
//   for (var z = i + 1; z < numbers.length; z++) {
//     if (numbers[i] === numbers[z]) {
//       console.log(numbers[i]);
//       break;
//     }
//   }
// }
