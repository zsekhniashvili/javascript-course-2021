// alert, confirm, prompt
// alert("Sorry... Your message was not sent");
// if (confirm("Are you sure you want to delete the user?")) {
//     console.log("Confirmed");
// } else {
//     console.log("NOT confirmed");
// }
// let user = prompt("Please enter your name");
// console.log(user)

// console
// https://developer.mozilla.org/en-US/docs/Web/API/Console
// console.log("Log")
// console.error("Error")
// console.warn("Warning")
// console.info("Info");
// console.table([[1, 2], [3, 4]])

// Accessing DOM, change innerHTML, change color
// document.getElementsByTagName('h1')[0].innerHTML = 'Hello Javascript'
// document.getElementsByTagName('h1')[0].innerText = 'Hello <i>Javascript</i>'
// document.getElementsByTagName('h1')[0].style.color = 'brown'
// document.getElementsByTagName('h1')[0].style.fontSize = '100px'
// document.getElementsByClassName('title')[1].style.color = 'red';


// Writing in DOM. document.write
// document.write("Hello");
// document.write("<button>Click me</button>");

// document.write(`<table>
// <tr>
//     <td>Column</td>
//     <td>Column</td>
//     <td>Column</td>
// </tr>
// <tr>
//     <td>Column</td>
//     <td>Column</td>
//     <td>Column</td>
// </tr>
// </table>`)

// variables, types. let vs const vs var
// let username = 'Zura';
// const age = 29;
// const isMale = true;
// const height = 1.85;
// const salary = undefined;
// const loc = null;

// console.log(typeof username);
// console.log(typeof age);
// console.log(typeof isMale);
// console.log(typeof height);
// console.log(typeof salary);
// console.log(typeof loc);

// username = false;
// console.log(typeof username);

// block scope. difference between let and var
// let x = 1;
// let x = 2;
// var y = 2;
// var y = 3;

// {
//     var z = 1;
//     console.log(z);
// }

// console.log(z);
// if (false) {
//     var username = 'Zura';
// } else {
//     var username = 'George';
// }

// console.log(username);



// comments
// single line
/*
Multine line
another line
*/

// strings/string methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// let username = "Zura";
// let age = 29;
// const work = 'Apollo 11';
// // let hello = 'Hello, my name is "' + username + '", I am "' + age + '". I work at "' + work + '"';
// let hello = `Hello, my name is "${username}", I am "${age}". I work at "${work}"`;
// console.log(username.length)
// console.log(username.toLowerCase())
// console.log(username.toUpperCase())
// console.log(username[2])


// console.log(hello, username);
// console.log(hello)


// conditionals, ternary
// const age = 14;
// if (age > 18) {
//     console.log("You can participate in elections");
// } else if ( age >15) {
//     console.log("Go to school");
// } else {
//     console.log("Go play in the yard");
// }
// const hello = age > 25 ? "Hello Boy" : (age > 15 ? "Hello child" : "Hello baby");
// console.log(hello);

// const role = 'editor';
// switch (role) {
//     case 'user':
//         console.log("Normal user");
//         break;
//     case 'admin':
//         console.log('Admin')
//         break;
//     default:
//         console.log("Default")
// }

// loops (while, do-while, for)
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i)

// let j = 100;
// while (j < 10) {
//     console.log(`j = ${j}`);
//     j++;
// }

// let k = 100;
// do {
//     console.log(k);
//     k++;
// } while (k < 10);

// functions
// function sum(a, b) {
//     console.log(a+b)
// }
// sum('John', 'Smith');


// let sum2 = function(a, b){
//     return a + b;
// }
// console.log(sum2(1, 2))

// function execute(fn, a, b) {
//     return fn(a, b)
// }

// execute(sum, 3, 4);
// console.log(execute(sum2, 3, 4));

function multiply(a) {
    return function (b) {
        return a * b;
    }
}

let anotherFn = multiply(2);
console.log(anotherFn(3)); // 6

console.log(multiply(3)(4))


// Write program to calculate n factorial