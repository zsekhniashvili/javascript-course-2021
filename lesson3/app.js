// Procedural/functional programming
// =======================================================
// const name = 'Zura';
// const age = 29;
// const job = 'Developer'

// function sayHello(name, age, job) {
//     return `My name is ${name}. I am ${age}. I work as a ${job}`;
// }

// console.log(sayHello(name, age, job));

// Object Oriented programming
// =======================================================
// const person = {
//     name: 'Zura',
//     age: 29,
//     job: 'Developer',
//     sayHello() {
//         return `My name is ${this.name}. I age is ${this.age}. I work as a ${this.job}`;
//     }
// }
// console.log(person.sayHello())

// const person2 = {
//     name: 'George',
//     age: 22,
//     job: 'IT',
//     sayHello() {
//         return `My name is ${this.name}. I age is ${this.age}. I work as a ${this.job}`;
//     }
// }
// console.log(person2.sayHello())

// factories
// =======================================================

// function createPerson(name, age, job) {
//     return {
//         name,
//         age,
//         job,
//         sayHello() {
//             return `My name is ${this.name}. My age is ${this.age}. I work as a ${this.job}`;
//         }
//     }
// }

// const person = createPerson('Zura', 29, 'Developer');
// const person2 = createPerson('George', 22, 'IT');

// console.log(person.sayHello());
// console.log(person2.sayHello())

// constructor functions, new keyword, prototype
// =======================================================

// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }
// console.log(Person.prototype)
// Person.prototype.sayHello = function(){
//     return `My name is ${this.name}. My age is ${this.age}. I work as a ${this.job}`;
// }

// const person = new Person('Zura', 29, 'Developer');
// console.log(person, person.sayHello())
// const person2 = new Person('George', 22, 'IT');
// console.log(person, person2);
// console.log(person.sayHello());
// console.log(person2.sayHello())

// Person.prototype.sayHello = function(){
//     return 'Hello';
// };

// console.log(person.sayHello());
// console.log(person2.sayHello())

// this keyword
// =======================================================
// const book = {
//     name: 'ოთარაანთ ქვრივი',
//     author: 'ილია ჭავჭავაძე',
//     summary: function() {

//         // console.log(this);

//         function test(){
//             console.log(this);
//             return `${this.name}`;
//         }

//         const person = {
//             name: 'Zura',
//             test
//         };

//         console.log(person.test());
//         console.log(test());

//         return `${this.name} - ${this.author}`
//     }
// }
// console.log(summary());
// console.log(book.summary())


// call(), apply(), bind()
// =======================================================
// function summary() {
//     return `${this.name} - ${this.author}`
// }

// const book = {
//     name: 'ოთარაანთ ქვრივი',
//     author: 'ილია ჭავჭავაძე',
// }
// const book2 = {
//     name: 'დედაენა',
//     author: 'იაკობ გოგებაშვილი'
// }

// console.log(summary())

// console.log(summary.call(book));
// console.log(summary.call(book2));

// const newSummary = summary.bind(book);
// newSummary(); // ოთარაანთ ქვრივი
// book2.summary = newSummary;

// console.log(book2.summary());




// ES5 inheritance
// =======================================================
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.hello = function() {
//     return `${this.name} - ${this.age}`
// }

// function Student(name, age, studentId) {
//     Person.apply(this, [name, age]);
//     this.studentId = studentId;
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// const s = new Student('George', 22, '1234');
// console.log(s);
// console.log(s.hello());


// ES6 classes, properties, methods
// =======================================================
// class Person {
    // constructor(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }

    // hello(){
    //     return `${this.name} - ${this.age}`
    // }
// }

// const p = new Person('Zura', 29);
// console.log(p);
// console.log(p.hello())


// Static
// =======================================================
// class Shape {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         Shape.instanceCounter++;
//     }

//     getPosition() {
//         return {x: this.x, y: this.y};
//     }

//     static getInstanceCounter(){
//         return Shape.instanceCounter;
//     }
// }
// Shape.instanceCounter = 0 ;

// const s1 = new Shape(1, 2);
// const s2 = new Shape(2, 3);
// s1.x = 5;
// console.log(s1, s2, Shape.instanceCounter)
// console.log(s1.getPosition(), Shape.getInstanceCounter())

// getters, setters
// =======================================================
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname
//     }

//     get fullname(){
//         return this.firstname+' '+this.lastname;
//     }

//     set fullname(fullname) {
//         const names = fullname.split(' ');
//         this.firstname = names[0];
//         this.lastname = names[1];
//     }
// }

// const p = new Person('Zura', 'Sekhniashvili');

// console.log(p.fullname);
// p.fullname = 'John Smith';
// console.log(p.firstname);


// Inheritance
// =======================================================

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     hello() {
//         return `${this.name} - ${this.age}`
//     }
// }

// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     hello() {
//         return super.hello() + ` My student ID is ${this.studentId}`;
//     }
// }

// const s = new Student('George', 'Beridze', 22);

// console.log(s.hello());



// Object.defineProperty()
// =======================================================
// function Person(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;

//     Object.defineProperty(this, 'PI', {
//         value: 3.14,
//         configurable: true,
//         // get: function() {
//         //     return this.firstname + ' '+this.lastname;
//         // },
//         // set: function(fullname){
//         //     const names = fullname.split(' ');
//         //     this.firstname = names[0];
//         //     this.lastname = names[1];
//         // },
//         writable: false
//     })

//     Object.defineProperty(this, 'PI', {
//         value: 4444
//     })
// }

// const p = new Person('Zura', 'Sekhniashvili')
// console.log(p.fullname);
// console.log(p.firstname);
// p.fullname = 'John Smith';
// console.log(p.fullname)
// console.log(p.firstname);

// Add a new method findById() in Array.prototype
// =======================================================
// const users = [
//     {id: 1, name: 'Zura'},
//     {id: 2, name: 'Anna'},
//     {id: 3, name: 'George'},
//     {id: 4, name: 'Mary'},
// ];
// const user = users.find(u => u.id === 1); // Zura
// console.log(user);
// Array.prototype.findById = function(id) {
//     return this.find(el => el.id === id)
// }
// const user2 = users.findById(1);
// console.log(user2);


// Map, Set
const user1 = {name: 'Zura'};
const user2 = {name: 'George'};

const postsMap = new Map();

postsMap.set('2', '2');
postsMap.set(user1, []);
postsMap.set(user2, []);

if (postsMap.has("1")) {
    console.log('User 1 posts')
} else {
    console.log("no")
}

