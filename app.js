// 2 task
// console.log("Shul");


// 3 task
// let one = 1;
// let lett = "b";

// console.log(one + lett);

// let one = 1;
// let lett = one;
// console.log(lett);


// 4 task
// let user = {
//     name: "Mr",
//     age: 5,
//     adult: false,
//     newInfo: undefined,
//     zero: null,
// }

// console.log(user);


// 5 task
// const isAdult = confirm("Are you an adult?");

// if (isAdult) {
//     console.log("isAdult");
// }


// 6 task
// var firstName = "Yaroslav";
// var lastName = "Shul";
// var group = "team_ns";
// var yearOfBirth = 2003;

// var study = true;

// var variable = null;
// var myVariable = undefined;

// console.log(typeof yearOfBirth, typeof study, typeof firstName);
// console.log(typeof variable, typeof myVariable);



// 7 task
// var log = prompt("login");
// var mail = prompt("mail");
// var pass = prompt("password");

// confirm("Your login: " + log + " Your mail: " + mail + " Your password: " + pass);


// 8 task
// var time = prompt("Enter min.");

// if (time) {
//     var secondsInMin = time * 60;
//     var secondsInHour = secondsInMin * 60;
//     var secondsInDay = secondsInHour * 24;
//     var secondsInMonth = secondsInDay * 30;
//     confirm("Кількість секунд в хвилині: " + secondsInMin);
//     confirm("Кількість секунд в годині: " + secondsInHour);
//     confirm("Кількість секунд в добі: " + secondsInDay);
//     confirm("Кількість секунд в місяці: " + secondsInMonth);
// }





// 2nd homework

// 1 task

// let a = 1;
// let b = 2;
// let c = 3;

//     console.log(a<b<c);


// 2 task

// let x = 1;
// let y = 2;

// let res1 = x + String(y);
// console.log(res1);
// console.log(typeof res1);

// let res2 = String(x < y);
// console.log(res2);
// console.log(typeof res2);

// let res3 = x < y;
// console.log(res3);
// console.log(typeof res3);

// let res4 = "string" - x - y;
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// 3 task

// let age = prompt("Are you adult");

// if(age >= 18) {
//     console.log("isAdult");
// }else {
//     console.log("You are so young");
// }

// 4 task

// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// let counts = {};
// let max = 0;
// let mostFrequentNum = null;

// for (let num of arr) {
//   counts[num] = (counts[num] || 0) + 1;
//   if (counts[num] > max) {
//     max = counts[num];
//     mostFrequentNum = num;
//   }
// }
// let newArr = arr.filter((num) => num !== mostFrequentNum);
// console.log(newArr);


// 5 task

// let sideA = parseFloat(prompt("enter a side A"));
// let sideB = parseFloat(prompt("enter a side B"));
// let sideC = parseFloat(prompt("enter a side C"));

// let sumP = (sideA + sideB + sideC) / 2;

// let S = (sumP - sideA) * (sumP - sideB);

// console.log(S);


// if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
//     console.log("Incorrect data");
//   } else {
//     let sumP = (sideA + sideB + sideC) / 2;
//     let area = Math.sqrt(sumP * (sumP - sideA) * (sumP - sideB) * (sumP - sideC)).toFixed(3);
//     console.log("Площа трикутника: " + area);
  
//     let isRightTriangle =
//       sideA * sideA === sideB * sideB + sideC * sideC ||
//       sideB * sideB === sideA * sideA + sideC * sideC ||
//       sideC * sideC === sideA * sideA + sideB * sideB;
  
//     console.log("Трикутник є прямокутним: " + isRightTriangle);
//   }



// 6 task


// function calc(a, b, op) {
//     let result;
    
//     if (op === 1) {
//       result = a - b;
//     } else if (op === 2) {
//       result = a * b;
//     } else if (op === 3) {
//       result = a / b;
//     } else {
//       result = a + b;
//     }

//     return result;
//   }

// task 7

// function findUnique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//           return false; // Знайдено дублікат, повертаємо false
//         }
//       }
//     }
  
//     return true; // Усі елементи унікальні, повертаємо true
//   }
// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));