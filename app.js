/* 
Exercise 1 (completed below):
  -Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.
*/

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// or more "elegantly" using the fantastic ternary expression:
// function maxOfTwoNumbers(x, y) {
//   return  x >= y ? x : y;
// }

console.log("Exercise 1 Result:\n", maxOfTwoNumbers(3, 9));

/* 
Exercise 2:
  - Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
*/

let maxOfThree = function(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      return num1
    } else {
      return num3
    }
  } else {
    if (num2 > num3) {
      return num2
    } else {
      return num3
    }
  }
}

console.log("Exercise 2 Result:\n", maxOfThree(3, 9, 16))

/* 
Exercise 3: 
  - Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
*/

function isCharAVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  return vowels.includes(char.toLowerCase())
}

console.log(
`Exercise 3 Result:
 E: ${isCharAVowel("E")}
 m: ${isCharAVowel("m")}
 o: ${isCharAVowel("o")}
 t: ${isCharAVowel("t")}
 i: ${isCharAVowel("i")}
 v: ${isCharAVowel("v")}
 e: ${isCharAVowel("e")}
 T: ${isCharAVowel("T")}
 u: ${isCharAVowel("u")}
 n: ${isCharAVowel("n")}
 a: ${isCharAVowel("a")}`
)

/* 
Exercise 4: 
  - Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
*/


let sumArray = function(nums) {
  let total = 0

  nums.forEach(num => {
    total += num
  })

  return total
}

console.log("Exercise 4 Result:\n", sumArray([2, 5, 15, 20]))

/* 
Exercise 5:
  - Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.
*/


function multiplyArray(nums) {
  let product = 1

  nums.forEach(num => {
    product *= num
  }) 

  return product
}

console.log("Exercise 5 Result:\n", multiplyArray([2, 6, 12]))

/*
Exercise 6:
  - Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.
*/

let numArgs = function(...args){
  return args.length
}


console.log(
`Exercise 6 Result: 
 ${numArgs("Hello.", "I", "would", "like", "one", "taco", "plz.")}
 ${numArgs("Sir, you may not only order one taco here.")}
 ${numArgs("Fine.", "What else do you have?", "I would like my taco.")}
 ${numArgs("Nothing.", ":)")}
 ${numArgs("Noooooo!", "Foiled again!", "One day I will eat a taco!")}`
)

/*
Exercise 7:
  - Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".
*/

function reverseString(str) {
  let arr = str.split('').reverse().join('')

  return arr
}

console.log("Exercise 7 Result:\n", reverseString("!stratpoP taeh ton oD"))

/* 
Exercise 8:
  - Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.
*/

let longestStringInArray = function(arr) {
  let longest = arr[0]

  arr.forEach(item => {
    if (item.length > longest.length) longest = item
  })

  return longest.length
}

console.log(
  "Exercise 8 Result:\n",
  longestStringInArray(["Please", "do", "not", "pet", "the", "taco", "cat"])
)

/* 
Exercise 9: 
  - Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.
*/

function stringsLongerThan(arr, num) {
  let longer = []

  arr.forEach(item => {
    if (item.length > num) longer.push(item)
  })

  return longer
}

console.log(
  "Exercise 9 Result:\n",
  stringsLongerThan(["say", "goodnight", "whenever", "you", "like"], 3)  
)
