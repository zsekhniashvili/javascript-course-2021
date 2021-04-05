// print and observe document
// console.log(document);
// console.dir(document);


// Change page title
document.title = 'Hello DOM';

// document.all, document.links, document.forms, documents.images
// const button = document.all[8];
// const link = document.links[0];
// button.innerText = 'Click for DOM'
// console.log(button);
// console.dir(button);
// console.log(document.forms);
// console.log(document.images)
// console.log(link);
// console.dir(link);

// Accessing elements
/*
getElementById
getElementsByTagName
getElementsByClassName
querySelector
querySelectorAll
*/
// const myDiv = document.getElementById('myDiv');
// console.log(myDiv);
// console.dir(myDiv);
// const c1Elements = document.getElementsByClassName('c1');
// console.log(c1Elements);

// const buttons = document.getElementsByTagName('button')
// // console.log(buttons);
// for (let i = 0; i<buttons.length; i++) {
//     console.log("button ", buttons[i]);
// }

// const passwordField = document.getElementsByName('password');
// console.log(passwordField);

// const button = document.querySelector('#myDiv')
// console.log(button);

// const buttons = document.querySelectorAll('#myDiv');
// console.log(buttons);

// const buttonInLoginForm = document.querySelector('.login-form button');
// console.log(buttonInLoginForm);
// select only password field of the login form
// const passwordField = document.querySelector('.login-form [name=password]')
// console.log(passwordField);
// const fields = document.querySelectorAll('.login-form [name]')
// console.log(fields);
// for (let i = 0; i<fields.length; i++) {
//     if (!fields[i].value) {
//         alert(`The field "${fields[i].name}" is required`);
//         break;
//     }
// }

// Have a look in proto of element

// Accessing properties of element
/*
nodeName
nodeType
tagName
className
classList
*/
// const loginButton = document.querySelector('.login-form .btn-submit');

// console.log(loginButton.nodeName);
// console.log(loginButton.nodeType); // 1 -> ELement
// console.log(loginButton.tagName);
// console.log(loginButton.className);
// console.log(loginButton.classList);
// loginButton.className = 'new-btn';
// loginButton.classList.remove('btn');
// loginButton.classList.add('new-btn')

// Set/Get attributes

// loginButton.id = 'submitButton'
// loginButton.title = 'This will submit the form';
// loginButton.setAttribute('name', 'submit');
// console.log(loginButton.getAttribute('name'));
// loginButton.removeAttribute('name');


// Set/Get innerText
// console.log(loginButton.innerText);
// loginButton.innerText = 'Click me'
// console.log(loginButton.textContent);

// innerText vs textContent
// console.log(loginButton.innerText);
// console.log(loginButton.textContent);

// Set/Get innerHTML

// console.log(loginButton.innerHTML);
// loginButton.innerHTML = `Login <strong>Click</strong>`

// Set/Get styles
// console.log(document.body.style);
// document.body.style.backgroundColor = '#dcdcdc' // background-color

// Challenge #1: Create jQuery like $ function with methods: text, html, css, attr

const $ = function(selector) {
    const all = document.querySelectorAll(selector);
    // console.log(all);

    const obj = {
        text,
        html,
        css,
        attr
    };

    return obj; 

    function text(innerText){
        if (innerText !== undefined) {
            for (let i = 0; i<all.length; i++) {
                all[i].innerText = innerText;
            }
            return obj;
        } else {
            return all.length > 0 ? all[0].innerText : null;
        }
    }

    function html(innerHTML){
        if (innerHTML !== undefined) {
            for (let i = 0; i<all.length; i++) {
                all[i].innerHTML = innerHTML;
            }
            return obj;
        } else {
            return all.length > 0 ? all[0].innerHTML : null;
        }
    }

    function css(propName, propValue) {
        if (propValue !== undefined) {
            for (let i = 0; i<all.length; i++) {
                all[i].style[propName] = propValue;
            }
            return obj;
        } else {
            return all.length > 0 ? all[0].style[propName] : null;
        }
    }

    function attr(){
        //TODO 
    }

}


// Access children
// const childNodes = document.body.childNodes;
// console.log(childNodes);
// for (let i = 0; i<childNodes.length; i++) {
//     if (childNodes[i].nodeType === Node.ELEMENT_NODE) {
//         console.log(childNodes[i]);
//     }
// }
// const children = document.body.children;
// console.log(children);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// Access parent

// const div = document.getElementById('myDiv');
// console.log(div.parentNode.parentElement.parentNode.parentNode);



// Access siblings

const loginButton = document.querySelector('.login-form .btn-submit');
// loginButton.previousSibling.textContent = 'Something';
// console.log(loginButton.previousSibling);
// console.log(loginButton.previousElementSibling);
// console.log(loginButton.nextSibling);
// console.log(loginButton.nextElementSibling);


// Challenge #2: Find element on page which contains word "DOM"
function findElement(parent, searchText) {
    const childNodes = parent.childNodes;
    for (let i = 0; i<childNodes.length; i++) {
        if (childNodes[i].nodeType == Node.TEXT_NODE) {
            if (childNodes[i].textContent.includes(searchText)) {
                return parent;
            }
        } else {
            const element = findElement(childNodes[i], searchText);
            if (element) {
                return element;
            }
        }
    }
}

const found = findElement(document.body, 'Login'); // <h1>
console.log(found);

// Creating elements with innerHTML
// document.body.innerHTML += '<button>New button</button>';
// console.log(document.body.innerHTML);

// document.createTextNode
// const textNode = document.createTextNode('New text node');
// document.body.appendChild(textNode);

// document.createElement
// const newDiv = document.createElement('div')
// console.log(newDiv);
// console.dir(newDiv);
// newDiv.innerHTML = 'New div content';
// newDiv.style.padding = '10px';
// newDiv.style.background = 'coral';

// document.body.appendChild(newDiv);

// Insert element at last: append, appendChild

// Insert element at first
// document.body.prepend(newDiv);


// Insert element at specific position
// const form = document.querySelector('form');
// document.body.insertBefore(newDiv, form);

// Remove elements from DOM
const form = document.querySelector('form');

form.remove()
