// =========================
// Arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// =========================

// Creating Arrays
// ========================================
// const colors = ["red", "green", "blue"];
// console.log(colors);
// console.log(typeof colors)

// Get Elements of the array
// ========================================
// const redColor = colors[1];
// console.log(redColor)

// Set Elements of the array
// ========================================
// colors[3] = 'yellow';
// console.log(colors);

// Array length
// ========================================
// console.log(colors.length);

// Deleting array elements
// ========================================
// delete colors[0];

// Iterating in array
// ========================================
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// for (let c of colors) {
//     console.log(c);
// } 

// for (let [index, c] of colors.entries()) {
//     console.log(c);
// } 

// colors.forEach((c, i) => {
//     console.log(c, i);
// });


// Practice #1: find the sum of the elements of the array
// ========================================
// const numbers = [4, 3, 8, 2, 9, 12, 7, 6];

// Array methods: push, pop, shift, unshift, slice, splice, concat, etc...


// Add values
// ========================================
// colors.push("brown");
// colors.push("white");
// console.log(colors);

// Remove values
// ========================================
// console.log(colors.pop());
// console.log(colors.pop());
// console.log(colors.pop());
// console.log(colors);

// insert first
// ========================================

// colors.unshift('black', 'pink')
// console.log(colors);

// Remove from the beginning
// ========================================

// console.log(colors.shift());
// console.log(colors);

// console.log(colors.slice(1, 3));
// console.log(colors);

// Removing elements from the index of the array
// ========================================

// console.log(colors.splice(2, 1));
// console.log(colors);

// Inserting elements at specific position
// ========================================

// colors.splice(2, 0, "purple")
// console.log(colors);

// Practice #2: You have two arrays, append values from the first array at the end of the second array
// ========================================

// const firstArray = [7, 8, 9];
// const secondArray = [1, 2, 3, 4, 5, 6];

// for (let el of firstArray) {
//     secondArray.push(el)
// };
// console.log(secondArray);

// ==========================
// Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// ==========================

// Creating Objects
// =======================================

// const degreeField = 'master';
// const person = {
//     name: 'Zura',
//     surname: 'Sekhniashvili',
//     age: 29,
//     isMale: true,
//     hobbies: ["Coding", "Fishing"],
//     address: {
//         city: 'Tbilisi',
//         street: 'Dolidze'
//     },
//     [degreeField]: 'IT',
// };

// Set & get & delete properties, access properties using []
// =======================================
// const personName = person.name
// console.log(personName);
// console.log(person);
// person.company = 'Apollo 11';
// console.log(person);

// console.log(person.address.appartment);

// console.log(person.hobbies);

// Access by []
// =======================================

// console.log(person.name);
// console.log(person['name']);

// Iterating object
// =======================================
// for (let h of person.hobbies) {
//     console.log(h)
// }


// Deleting properties
// =======================================
// delete person.address;
// console.log(person);

// for (let key in person) {
//     console.log(key, person[key]);
// }


// Object keys & Object values
// =======================================
// console.log(Object.keys(person));
// console.log(Object.values(person));

// Arrays of objects
// =======================================
// const todos = [
//     {title: 'Purchase mouse', completed: false},
//     {title: 'Go shopping', completed: false},
//     {title: 'Contact to client', completed: true}
// ]

// console.log(todos);

// for (let todo of todos) {
//     console.log(todo.title, todo.completed);
// }




// JSON -> Javascript Object Notation
// =========================================
// const jsonString = `{
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }`;

// console.log(typeof jsonString);
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonString, jsonObject);

// console.log(jsonObject.title);


// const person = {
//     name: 'Zura',
//     surname: 'Sekhniashvili'
// };

// console.log(JSON.stringify(person, ['name'], 4));

// const colors = ["red", "green"];
// console.log(JSON.stringify(colors));

// const colorsString = `["red","green","white"]`;

// console.log(JSON.parse(colorsString));


// Destructuring, function arguments, spread, rest
// =========================================

// function getUsers() {
//     // there are thousands
//     const users = [
//         {name: 'John'},
//         {name: 'James'},
//         {name: 'Jane'},
//         //...
//     ];
//     return [6780, users]
// }

// Before ES6
// const result = getUsers();
// const users = result[1];
// const count = result[0];

// ES6
// const [count, users] = getUsers();
// console.log(count, users);

// function getUsers() {
//     // there are thousands
//     const users = [
//         {name: 'John'},
//         {name: 'James'},
//         {name: 'Jane'},
//         //...
//     ];
//     const count = 6780;
//     return {count, users};
// }

// Before ES6
// const result = getUsers();
// const users = result.users;
// const count = result.count;
// console.log(count, users);

// ES6
// const {count: c, users: u} = getUsers();
// console.log(c, u);

// const person = {
//     name: 'Zura', 
//     surname: 'Sekhniashvili'
// };

// Before ES6
// const name = person.name;
// const surname = person.surname;
// console.log(name, surname);

// ES6
// const {name, surname} = person;
// console.log(name, surname);


// const colors = ["red", "green"];
// const [firstColor] = colors;
// console.log(firstColor); 

// Rest operator
// const sum = (...args) => {
//     return args.reduce((accum, curr) => accum + curr);
// }
// console.log(sum(3, 4, 5, 6, 7, 10, 20));


// Spread operator
// const arr = ["Zura", "Sekhniashvili", "29"];
// function hello(name, surname, age) {
//     // say hello
//     console.log(name, surname, age);
// }
// // Previous
// hello(arr[0], arr[1], arr[2]);
// // New version
// hello(...arr);


// const arr = ["Zura", "Sekhniashvili", "29"];
// function hello([name, surname, age]) {
//     // say hello
//     console.log(name, surname, age);
// }

// hello(arr);

const person = {
    name: 'Zura', 
    surname: 'Sekhniashvili'
};

const newPerson = {
    ...person,
    age: 29,
}
console.log(newPerson);

function hello({name, surname}) {
    console.log(name, surname);
}

hello(person);

// High order functions; filter, map, reduce
/**
 * https://youtu.be/rRgD1yVwIvE
 * https://youtu.be/-lNgE-WjuXY
 */
const products = [
    {name: 'Iphone X', price: 2000},
    {name: 'Dell XPS 15', price: 10000},
    {name: 'Galaxy S20', price: 2500},
    {name: 'Apple airdpods', price: 800},
];

// const newProducts = [];
// products.forEach(p => {
//     if (p.price > 1000) {
//         newProducts.push(p);
//     }
// })
// console.log(newProducts);

// const newProducts = [];
// for (let p of products) {
//     if (p.price > 1000) {
//         newProducts.push(p);
//     }
// }
// console.log(newProducts);

const newProducts = products.filter(p => p.price > 1000);
console.log(newProducts);

// const productTitles = [];
// for (let p of products) productTitles.push(p.name);
// console.log(productTitles);

// const productTitles = products.map((p) =>p.name);
// console.log(productTitles);

// const numbers2 = [1, 2, 3, 4, 5];
// const sum = numbers2.reduce((accum, current) => {
//     console.log(accum, current);
//     return accum + current;
// }, 0)
// console.log(sum);


const sum = products
    .filter(p => p.price > 1000)
    .map(p => p.price) // [2000, 10000, 2500]
    .reduce((accum, current) => accum + current)

console.log(sum);