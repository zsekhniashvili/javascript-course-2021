// print and observe document

// Change page title

// document.all, document.links, document.forms, documents.images

// Accessing elements
/*
getElementById
getElementsByTagName
getElementsByClassName
querySelector
querySelectorAll
*/

// Have a look in proto of element

// Accessing properties of element
/*
nodeName
nodeType
tagName
className
classList
*/

// Set/Get attributes

// Set/Get innerText

// innerText vs textContent

// Set/Get innerHTML

// Set/Get styles

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

// Access parent

// Access siblings

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

// document.createTextNode

// document.createElement

// Insert element at last: append, appendChild

// Insert element at first

// Insert element at specific position

// Remove elements from DOM
