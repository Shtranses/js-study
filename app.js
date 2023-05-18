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
var time = prompt("Enter min.");

if (time) {
    var secondsInMin = time * 60;
    var secondsInHour = secondsInMin * 60;
    var secondsInDay = secondsInHour * 24;
    var secondsInMonth = secondsInDay * 30;
    confirm("Кількість секунд в хвилині: " + secondsInMin);
    confirm("Кількість секунд в годині: " + secondsInHour);
    confirm("Кількість секунд в добі: " + secondsInDay);
    confirm("Кількість секунд в місяці: " + secondsInMonth);
}


