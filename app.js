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
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
// var count = 0;

// for (var i = 0; i < numbers.length; i++) {
//     for (var z = i + 1; z < numbers.length; z++) {
//         if (numbers[i] === numbers[z]) {
//             // console.log(numbers[i]);
//             count += numbers[i].length;
//             break;
//         }
//     }
// }

// console.log(count)


// In Class 
// Largest Number 
// var numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10]

// var LargestNumber = numbers[0];
// var secondLargestNumber = numbers[0];



// for (var i = 0; i < numbers.length; i++) {
//     var iteration = numbers[i];
//     if (iteration > LargestNumber){
//         LargestNumber = iteration;
//     }
//  }

//  for (var i = 0; i < numbers.length; i++) {
//     var iteration = numbers[i];
//     if (iteration > secondLargestNumber && iteration < LargestNumber){
//         secondLargestNumber = iteration;
//     }
//  }

//  console.log(LargestNumber);
//  console.log(secondLargestNumber);


// Nested Loop 
// var firstName = ["Muhammad", "Ali"];
// var lastName = ["Hamza", "Kamran", "Luqman", "Bilal"];

// for (var i = 0; i < firstName.length; i++) {
//     var prefix = firstName[i];
//     for (var j = 0; j < lastName.length; j++) {
//         var suffix = lastName[j];
//         console.log(prefix, suffix);
//     }
// }



// HardTask 

var numbers = [1, 2, 3, 1, 2];
var dublicateNum = 0;

for (var i = 0; i < numbers.length; i++) {
    var prefix = numbers[i];
    for (var j = i + 1; j < numbers.length; j++) {
        var suffix = numbers[j];
        if (prefix === suffix) {
            console.log(prefix)
        }
    }
}