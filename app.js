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
// let firstName = "Yaroslav";
// let lastName = "Shul";
// let group = "team_ns";
// let yearOfBirth = 2003;

// let study = true;

// let letiable = null;
// let myletiable = undefined;

// console.log(typeof yearOfBirth, typeof study, typeof firstName);
// console.log(typeof letiable, typeof myletiable);



// 7 task
// let log = prompt("login");
// let mail = prompt("mail");
// let pass = prompt("password");

// confirm("Your login: " + log + " Your mail: " + mail + " Your password: " + pass);


// 8 task
// let time = prompt("Enter min.");

// if (time) {
//     let secondsInMin = time * 60;
//     let secondsInHour = secondsInMin * 60;
//     let secondsInDay = secondsInHour * 24;
//     let secondsInMonth = secondsInDay * 30;
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





// 3rd homework

// 1 task

// function compact(arr) {
//     return [...new Set(arr)];
//   }
//   const arr = [5, 3, 4, 5, 6, 7, 3];
//   const arr2 = compact(arr);
//   console.log(arr2); // [5, 3, 4, 6, 7]

// 2 task

// function createArray(start, end) {
//     const arr = [];
//     for (let i = start; i <= end; i++) {
//       arr.push(i);
//     }
//     return arr;
//   }
  
//   let arr = createArray(2, 9);
//   console.log(arr); 

// 3 task

// function printRange(a, b) {
//     let count = 1;
//     for (let i = a; i <= b; i++) {
//       for (let j = 0; j < count; j++) {
//         console.log(i);
//       }
//       count++;
//     }
//   }
  
//   printRange(3, 6);

// 4 task

// function randArray(k) {
//     const arr = [];
//     for (let i = 0; i < k; i++) {
//       const randomNum = Math.floor(Math.random() * 500) + 1;
//       arr.push(randomNum);
//     }
//     return arr;
//   }
  
//   console.log(randArray(7));

// 5 task

// function funcName(arr) {
//     const result = [];
//     const numberArray = [];
//     const stringArray = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       const currentElement = arr[i];
  
//       if (typeof currentElement === "number") {
//         numberArray.push(currentElement);
//       } else if (typeof currentElement === "string") {
//         stringArray.push(currentElement);
//       }
//     }
  
//     result.push(numberArray);
//     result.push(stringArray);
  
//     return result;
//   }
  
//   let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
//   let arrNew = funcName(arr);
//   console.log(arrNew);


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


// 8 task

// const currentTime = new Date();
// const currentHour = currentTime.getHours();
// let greeting;

// switch (true) {
//   case currentHour >= 23 || currentHour < 5:
//     greeting = "Доброї ночі";
//     break;
//   case currentHour >= 5 && currentHour < 11:
//     greeting = "Доброго ранку";
//     break;
//   case currentHour >= 11 && currentHour < 17:
//     greeting = "Добрий день";
//     break;
//   default:
//     greeting = "Доброго вечора";
// }

// console.log(greeting);


// 4th homework

// 1 task

// function sumSliceArray(arr, first, second) {
//     if (!Array.isArray(arr)) {
//       throw new Error('Перший аргумент має бути масивом');
//     }
  
//     if (typeof first !== 'number' || typeof second !== 'number') {
//       throw new Error('Другий і третій аргументи мають бути числами');
//     }
  
//     if (first >= arr.length || second >= arr.length) {
//       throw new Error('Номер елемента перевищує розмір масиву');
//     }
  
//     return arr[first] + arr[second];
//   }
// try {
//     const myArray = [1, 2, 3, 4, 5, 6];
//     const result = sumSliceArray(myArray, 2, 4);
//     console.log('Результат:', result);
//   } catch (error) {
//     console.error('Сталася помилка:', error.message);
//   }

// 2 task

// function checkAge() {
//     try {
//       const name = prompt('Введіть своє ім\'я:');
//       if (!name) {
//         throw new Error('The field is empty! Please enter your name');
//       }
  
//       const age = prompt('Введіть свій вік:');
//       if (!age) {
//         throw new Error('The field is empty! Please enter your age');
//       }
  
//       const parsedAge = parseInt(age, 10);
//       if (isNaN(parsedAge)) {
//         throw new TypeError('Invalid age value. Please enter a number');
//       }
  
//       if (parsedAge < 18 || parsedAge > 70) {
//         throw new RangeError('Age is not within the allowed range');
//       }
  
//       const status = prompt('Введіть свій статус (адмін, модератор, користувач):');
//       if (!status || !['адмін', 'модератор', 'користувач'].includes(status.toLowerCase())) {
//         throw new EvalError('Invalid status value');
//       }
  
//       alert('Ви маєте доступ до перегляду фільму!');
//     } catch (error) {
//       alert(`Помилка: ${error.name} - ${error.message}`);
//     }
//   }
  
//   checkAge();

// 3 task

// function calcRectangleArea(width, height) {
//     if (typeof width !== 'number' || typeof height !== 'number') {
//       throw new TypeError('Параметри мають бути числами');
//     }
  
//     return width * height;
//   }
  
//   try {
//     const widthInput = prompt('Введіть ширину прямокутника:');
//     const heightInput = prompt('Введіть висоту прямокутника:');
  
//     const width = parseFloat(widthInput);
//     const height = parseFloat(heightInput);
  
//     const area = calcRectangleArea(width, height);
//     console.log('Площа прямокутника:', area);
//   } catch (error) {
//     console.error('Сталася помилка:', error.message);
//   }


// 4 task

// class MonthException {
//     constructor(message) {
//       this.name = 'MonthException';
//       this.message = message;
//     }
//   }
  
//   function showMonthName(month) {
//     const months = [
//       'January', 'February', 'March', 'April', 'May', 'June',
//       'July', 'August', 'September', 'October', 'November', 'December'
//     ];
  
//     if (month < 1 || month > 12) {
//       throw new MonthException('Incorrect month number');
//     }
  
//     return months[month - 1];
//   }
//   try {
//     console.log(showMonthName(1));
//     console.log(showMonthName(13)); 
//   } catch (error) {
//     console.log(`${error.name} ${error.message}`);
//   }

// 5 task

// function showUser(id) {
//     if (id < 0) {
//       throw new Error('ID must not be negative');
//     }
  
//     return { id };
//   }
  
//   function showUsers(ids) {
//     const validUsers = [];
  
//     for (let i = 0; i < ids.length; i++) {
//       try {
//         const user = showUser(ids[i]);
//         validUsers.push(user);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//     return validUsers;
//   } 
//   const users = showUsers([4, 13, 1432, -1]);
//   console.log(users);
  



// 5th homework


// task 1
// class Circle {
//     constructor(centerX, centerY, radius) {
//       this.centerX = centerX;
//       this.centerY = centerY;
//       this.radius = radius;
//     }
  
//     circumference() {
//       return 2 * Math.PI * this.radius;
//     }
  
//     static circumferenceFromRadius(radius) {
//       return 2 * Math.PI * radius;
//     }
  
//     getCircle() {
//       return new Circle(this.centerX, this.centerY, this.radius);
//     }
  
//     static creatCircle(centerX, centerY, radius) {
//       return new Circle(centerX, centerY, radius);
//     }
  
//     pointInside(x, y) {
//       const distance = Math.sqrt( (x - this.centerX) ** 2 + (y - this.centerY) ** 2);
//       return distance <= this.radius;
//     }
  
//     toString() {
//       return `Circle with center (${this.centerX}, ${this.centerY}) and radius ${this.radius}`;
//     }
//   }
//   // Створення об'єкта круга
// const circle = new Circle(0, 0, 7);

// // Отримання довжини кола
// const circumference = circle.circumference();
// console.log("Circumference:", circumference);

// // Виклик статичного методу
// const circumferenceFromRadius = Circle.circumferenceFromRadius(7);
// console.log("Circumference from radius:", circumferenceFromRadius);

// // копії об'єкта круга
// const circleCopy = circle.getCircle();
// console.log("Circle copy:", circleCopy);

// // Створення об'єкта круга за параметрами
// const newCircle = Circle.creatCircle(3, 3, 4);
// console.log("New circle:", newCircle);

// const pointInside = circle.pointInside(3, 4);
// console.log("Point inside circle:", pointInside);

// // Перетворення об'єкта круга в рядок
// const circleString = circle.toString();
// console.log("Circle as string:", circleString);


// task 2
// function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
//   }
  
//   let student = {
//     course: "Js fundamental",
//     duration: 3,
//     direction: "web-development",
//     age: 20,
//     pets: "dont have"
//   };
  
//   console.log(propsCount(student)); 


// task 3
// class person {
//     constructor(name, surname) {
//       this.name = name;
//       this.surname = surname;
//     }
  
//     showFullName() {
//       console.log(this.name + ' ' + this.surname);
//     }
//   }
  
//   class Student extends person {
//     constructor(name, surname, year) {
//       super(name, surname);
//       this.year = year;
//     }
  
//     showFullName(middleName) {
//       console.log(this.name + ' ' + this.surname + ' ' + middleName);
//     }
  
//     showCourse() {
//       let currentYear = new Date().getFullYear();
//       let course = currentYear - this.year + 1;
//       console.log('Current course: ' + course);
//     }
//   }
  
//   let student = new Student('Fillip', 'Bon', 2022);
//   student.showFullName('Smith'); 
//   student.showCourse();

// task 4
// class Marker {
//     constructor(color, ink) {
//       this.color = color;
//       this.ink = ink;
//     }
  
//     print(text) {
//       let inkNeeded = text.replace(/\s/g, '').length * 0.5;
//       if (inkNeeded <= this.ink) {
//         this.ink -= inkNeeded;
//         console.log('%c' + text, 'color: ' + this.color);
//       } else {
//         console.log('Недостатньо чорнила для друку тексту.');
//       }
//     }
//   }
  
//   class RefillableMarker extends Marker {
//     refill(inkAmount) {
//       this.ink += inkAmount;
//       console.log('Маркер заправлений. Поточний рівень чорнила: ' + this.ink + '%');
//     }
//   }
  
//   let marker = new Marker('blue', 50);
//   marker.print('Hello, world!');
//   marker.print('Клієнт дуже задоволений.');
  
//   let refillableMarker = new RefillableMarker('red', 20);
//   refillableMarker.print('Це багаторазовий маркер.');
//   refillableMarker.refill(50);
//   refillableMarker.print('ц.');


// task 5
// class Worker {
//     constructor(fullName, dayRate, workingDays) {
//       this.fullName = fullName;
//       this.dayRate = dayRate;
//       this.workingDays = workingDays;
//       this._experience = 1;
//     }
  
//     showSalary() {
//       let salary = this.dayRate * this.workingDays;
//       console.log(this.fullName + ' salary: ' + salary);
//     }
  
//     showSalaryWithExperience() {
//       let salary = this.dayRate * this.workingDays * this._experience;
//       console.log(this.fullName + ' salary: ' + salary);
//     }
  
//     get showExp() {
//       return this._experience;
//     }
  
//     set setExp(value) {
//       this._experience = value;
//     }
//   }
  
//   let worker1 = new Worker('Pedro Smith', 53, 54);
//   console.log(worker1.fullName);
//   worker1.showSalary();
//   console.log('New experience: ' + worker1.showExp);
//   worker1.showSalaryWithExperience();
//   worker1.setExp = 1.5;
//   console.log('New experience: ' + worker1.showExp);
//   worker1.showSalaryWithExperience();
  
//   let worker2 = new Worker('Vilson Willi', 43, 56);
//   console.log(worker2.fullName);
//   worker2.showSalary();
//   console.log('New experience: ' + worker2.showExp);
//   worker2.showSalaryWithExperience();
//   worker2.setExp = 1.5;
//   console.log('New experience: ' + worker2.showExp);
//   worker2.showSalaryWithExperience();
  
//   let worker3 = new Worker('Boba Fet', 23, 56);
//   console.log(worker3.fullName);
//   worker3.showSalary();
//   console.log('New experience: ' + worker3.showExp);
//   worker3.showSalaryWithExperience();
//   worker3.setExp = 1.5;
//   console.log('New experience: ' + worker3.showExp);
//   worker3.showSalaryWithExperience();
  
//   let workers = [worker1, worker2, worker3];
//   console.log('\nSorted salary:');
//   workers.sort((a, b) => a.showExp - b.showExp).forEach(worker => {
//     worker.showSalary();
//   });


// 6th homework

// task 1

// function showModalContent() {
//     let listItems = document.querySelectorAll("#list li");
//     let firstItem = listItems[0].innerText;
//     let lastItem = listItems[listItems.length - 1].innerText;
//     let secondItem = listItems[1].innerText;
//     let fourthItem = listItems[3].innerText;
//     let thirdItem = listItems[2].innerText;

//     let modalContent = firstItem + ", " + lastItem + ", " + secondItem + ", " + fourthItem + ", " + thirdItem;
//     alert(modalContent);
//   }

// task 2
// document.addEventListener("DOMContentLoaded", function() {
//     // Зміна стилів елементів за допомогою DOM
//     let h1Element = document.querySelector("h1");
//     h1Element.style.fontSize = "24px";
//     h1Element.style.color = "blue";
//     h1Element.style.textDecoration = "underline";

//     let myDiv = document.querySelector("#myDiv");
//     myDiv.style.backgroundColor = "lightgray";
//     myDiv.style.padding = "10px";

//     let paragraphs = document.querySelectorAll("#myDiv p");
//     for (let i = 0; i < paragraphs.length; i++) {
//       paragraphs[i].style.margin = "5px 0";
//     }

//     let myList = document.querySelector("#myList");
//     myList.style.display = "flex";
//     myList.style.listStyleType = "none";
//     myList.style.justifyContent = "space-between";

//     let spanElement = document.querySelector("span");
//     spanElement.style.display = "none";
//   });

//task 3
// document.addEventListener("DOMContentLoaded", function() {
//     let body = document.querySelector("body");

//     let main = document.createElement("main");
//     main.setAttribute("class", "mainClass check item");

//     let div = document.createElement("div");
//     div.setAttribute("id", "myDiv");

//     let paragraph = document.createElement("p");
//     paragraph.textContent = "First paragraph";

//     div.appendChild(paragraph);
//     main.appendChild(div);
//     body.appendChild(main);
//   });

// task 4
// document.addEventListener("DOMContentLoaded", function() {
//     let btn = document.querySelector(".btn");
//     let outBlock = document.querySelector(".out");

//     btn.addEventListener("click", function(event) {
//       event.preventDefault();

//       let inputFields = document.querySelectorAll(".arr");
//       let data = "";

//       for (let i = 0; i < inputFields.length; i++) {
//         let fieldName = inputFields[i].getAttribute("data-form");
//         let fieldValue = inputFields[i].value;
//         data += fieldName + ": " + fieldValue + "\n";
//       }

//       outBlock.textContent = data;
//     });
//   });

// task 5
// document.addEventListener("DOMContentLoaded", function() {
//     let circles = document.querySelectorAll(".circle");

//     circles.forEach(function(circle) {
//       let animClass = circle.getAttribute("data-anim");
//       circle.classList.add(animClass);
//     });

//     // Перевірка застосованих анімацій
//     let appliedAnimations = [];
//     circles.forEach(function(circle) {
//       let classList = circle.classList;
//       let animClass = circle.getAttribute("data-anim");
//       if (classList.contains(animClass)) {
//         appliedAnimations.push(animClass);
//       }
//     });

//     console.log("Застосовані анімації:", appliedAnimations);
//   });


// task 6
// const gradients = document.querySelectorAll('.gradient');
// const colorSpans = document.querySelectorAll('.color');

// function updatePrice(newPrice) {
//   const priceElement = document.getElementById('outprice');
//   priceElement.textContent = newPrice.toFixed(2);
// }

// function handleColorClick(event) {
//   const price = parseFloat(event.target.dataset.price);
  
//   updatePrice(price);

//   colorSpans.forEach(span => {
//     span.classList.remove('active');
//   });
  
//   event.target.classList.add('active');
// }

// gradients.forEach(gradient => {
//   gradient.addEventListener('click', handleColorClick);
// });

// updatePrice(189.99);



// 7th homework

// task 1
// let myWindow = window.open('', '', 'width=300,height=300');

// setTimeout(function() {
//   myWindow.resizeTo(500, 500);
// }, 2000);

// setTimeout(function() {
//   myWindow.moveTo(200, 200);
// }, 4000);

// setTimeout(function() {
//   myWindow.close();
// }, 6000);

// task 2
// function changeCSS() {
//     let textElement = document.getElementById("text");
//     textElement.style.color = "orange";
//     textElement.style.fontSize = "20px";
//     textElement.style.fontFamily = "Comic Sans MS";
//   }


// task 3
// document.getElementById("button1").addEventListener("click", function() {
//     document.querySelector(".container").style.backgroundColor = "blue";
//   });
  
//   document.getElementById("button2").addEventListener("dblclick", function() {
//     document.querySelector(".container").style.backgroundColor = "pink";
//   });

//   document.getElementById("button3").addEventListener("mousedown", function() {
//     document.querySelector(".container").style.backgroundColor = "brown";
//   });
  
//   document.getElementById("button3").addEventListener("mouseup", function() {
//     document.querySelector(".container").style.backgroundColor = "white";
//   });

//   document.getElementById("link").addEventListener("mouseover", function() {
//     document.querySelector(".container").style.backgroundColor = "yellow";
//   });
  
//   document.getElementById("link").addEventListener("mouseout", function() {
//     document.querySelector(".container").style.backgroundColor = "white";
//   });


// task 4
// document.getElementById("deleteButton").addEventListener("click", function() {
//     let dropdown = document.getElementById("dropdown");
//     let selectedIndex = dropdown.selectedIndex;
  
//     if (selectedIndex !== -1) {
//       dropdown.remove(selectedIndex);
//     }
//   });

// task 5
// let button = document.getElementById("myButton");
// let message = document.getElementById("message");

// button.addEventListener("click", function() {
//   message.textContent = "I was pressed!";
// });

// button.addEventListener("mouseover", function() {
//   message.textContent = "Mouse on me!";
// });

// button.addEventListener("mouseout", function() {
//   message.textContent = "Mouse is not on me!";
// });



// 8th homework

// task 1
// function upperCase(str) {
//     if (str.charAt(0) === str.charAt(0).toUpperCase()) {
//       return "Рядок починається з верхнього регістру";
//     } else {
//       return "Рядок не починається з верхнього регістру";
//     }
//   }
  
//   console.log(upperCase('Привіт')); 
//   console.log(upperCase('привіт')); 


// task 2
// function checkEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
  
//   console.log(checkEmail("somemail@gmail.com"));

// task 3
// function swapSubstrings(input, substringFirst, substringSecond) {
//     const regex = new RegExp(`(${substringFirst})(.*)(\\s)(${substringSecond})`);
//     const result = input.replace(regex, `$4, $2$3$1`);
//     return result;
//   }
  
//   const inputString = "Java Script";
//   const outputString = swapSubstrings(inputString, "Java", "Script");
//   console.log(outputString);

// task 4
// function validateCreditCardNumber(cardNumber) {
//     const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//     return regex.test(cardNumber);
//   }
  
//   console.log(validateCreditCardNumber('2421-1244-7432-u8656'));
//   console.log(validateCreditCardNumber('9999-9999-9999-9999'));

// task 5
// function checkEmail(email) {
//     const regex = /^[a-zA-Z0-9]+([_\-.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
//     if (regex.test(email)) {
//       return "Пошта вірна!";
//     } else {
//       return "Пошта не є вірною!";
//     }
//   }
  
//   console.log(checkEmail('some_mail@gmail.com'));
//   console.log(checkEmail('whatTheMail@gmail.com'));
//   console.log(checkEmail('mailsicorrect&=?@gmail.com'))


// task 6
// function checkLogin(login) {
//     const regex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
//     const numbers = login.match(/\d+(\.\d+)?/g);
    
//     if (regex.test(login)) {
//       if (numbers) {
//         return [true, numbers];w
//       } else {
//         return [true, []];
//       }
//     } else {
//       return false;
//     }
//   }
  
//   console.log(checkLogin('w')); 
//   console.log(checkLogin('sfesvrw1312v')); 
//   console.log(checkLogin('correct')); 

// 9th homework

// task 1
// $(document).ready(function() {
//     $('h2.head').css('background-color', 'green');
//     $('h2.head .inner').css('font-size', '35px');
//   });

// task 2
// $(document).ready(function() {
//     $('a[href^="https://"]').attr('target', '_blank');
//   });

// task 3
// $(document).ready(function() {
//     $('h3 + div').each(function() {
//       $(this).insertBefore($(this).prev('h3'));
//     });
//   });

// task 4
// window.addEventListener('DOMContentLoaded', (event) => {
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     let checkedCount = 0;

//     checkboxes.forEach((checkbox) => {
//       checkbox.addEventListener('change', () => {
//         if (checkbox.checked) {
//           checkedCount++;
//           if (checkedCount === 3) {
//             checkboxes.forEach((cb) => {
//               cb.disabled = true;
//             });
//           }
//         } else {
//           checkedCount--;
//           checkboxes.forEach((cb) => {
//             cb.disabled = false;
//           });
//         }
//       });
//     });
//   });