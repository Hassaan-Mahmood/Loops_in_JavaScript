/* ================== Loops ================== */

// Loop executed reverse order
 for (var i = 10; i >= 0; i--){
    console.log(i);
 }

Loop run in forward order
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// ******** Negetive Number Count ******** //
var numbers = [1, -2, 3, -4, 5, -6, 7, 8, -9, 10];
var count = 0;

for (var i = 0; i < numbers.length; i++){
    var num = numbers[i];
    if (num < 0) {
       count++;
    // console.log(num);
}
}
console.log(count);

// ******** Even and Odd Seprated Through loop ******** //
let numbers = [10, 11, 12, 13,14, 15, 16, 17, 18, 19, 20];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    if (num % 2 === 0){
        evenNumbers.push(num);
    } else {
        oddNumbers.push(num);
    }
}

// console.log("Even Numbers: ", evenNumbers);
console.log("Odd Numbers: ", oddNumbers);

******** Largest Number Find ******** //
let numbers = [11, 22, 33, 44, 55, 66, 77];
let largestNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (num > largestNumber) {
    largestNumber = num;
  }
}

console.log(largestNumber);

// ******** Smallest Largest Number Find ******** //
let numbers = [11, 22, 33, 44, 55, 66, 77];
let smallestNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (num < smallestNumber) {
    smallestNumber = num;
  }
}

// console.log(smallestNumber);

******** Second Largest Number Find ******** //
let numbers = [11, 22, 33, 44, 55, 66, 77, 88];
let largestNum = numbers[0];
let secLargNum = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (num > largestNum) {
    largestNum = num;
  }
}

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (num > secLargNum && num < largestNum) {
    secLargNum = num;
  }
}

// console.log(largestNum);
// console.log(secLargNum);

// ******** Nested Loop ******** //
let firstNames = ["Muhammad", "Ali"];
let lastNames = ["Hassan", "Ahmed", "Ajmal", "Umar", "ZUlfiqar"];

for (let a = 0; a < firstNames.length; a++) {
  let name1 = firstNames[a];
  for (let b = 0; b < lastNames.length; b++) {
    let name2 = lastNames[b];
    console.log(name1, name2);
  }
}


// ******** Dublicate Number Find ******** //
let numbers = [1, 2, 3, 4, 4, 5, 6, 6];
let dubNum = [];
for (let i = 0; i < numbers.length; i++) {
    let prefix = numbers[i];
    for (let j = i + 1; j < numbers.length; j++){
        let suffix = numbers[j];
        if (prefix === suffix){
            dubNum.push(prefix);
        }
    }


}
console.log(dubNum);




var userWord = prompt("Enter your word")
var word = "mom";
var reverseWord = "";



for (var i = word.length - 1; i >= 0; i--){
    var iteration = word[i];
    reverseWord = reverseWord + iteration;
}


// console.log(reverseWord)

if (word === reverseWord){
    console.log("It is a Palindrome")
   
} else {
        console.log("It is not a Palindrome")

    }



// var userWord = prompt("Enter your word")
// var word = "moon";
var word = "mom";
var reverseWord = "";



for (var i = word.length - 1; i >= 0; i--){
    var iteration = word[i];
    reverseWord = reverseWord + iteration;
}


// console.log(reverseWord)

if (word === reverseWord){
    console.log("It is a Palindrome")
   
} else {
        console.log("It is not a Palindrome")

    }
