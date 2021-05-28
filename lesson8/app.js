// =============================================================
// REGEXP
// =============================================================
// Creating regexp
// const r = /abc/g;
// const str = "abc";
// const r = new RegExp(str);

// Testing for matches
// const str = "Lorem abc ipsum something abc";
// console.log(r.test(str)); 

// .search(), .replace()
// console.log(str.replace(r, "def"))
// console.log(str.search(r));

// .test()

// .exec()
// console.log(r.exec(str), r.exec(str));

// .match
// console.log(str.match(r));

// Flags/Modifiers
// const r = /abc/g;
// const str = "Lorem abc ipsum something abc";
// console.log(r.exec(str), r.exec(str));
// console.log(str.match(r));

// Character sets
/*
[0-9]
[a-Z]
[A-Z]
\d
\w
\s
\D
\W
\S
.
*/
// const str = " Lorem abc ipsum 1234 something abc";
// const r = /[2-9]/; // \d
// const r = /./;
// console.log(r.exec(str));;

// Write regexp to match Date 04/11/2020
// const str = "Hello I am john, my birthday is 1992-01-31";
// const r = /\d\d\/\d\d\/\d\d\d\d/;
// console.log(r.exec(str));

// Exclude matching [^abc]
// const str = "abcdefg";
// const r = /[^bca]/g;
// console.log(r.exec(str));
// console.log(str.match(r));

// Repeaters
/*
+
*
?
{2, 8}
*/
// const str = '9/1/92 31/01/1992 9/02/2010 20/05/21'
// const r = /\d{1,2}\/\d{1,2}\/\d{2,4}/g;
// console.log(str.match(r));

// const phone = `557123456`;
// const phone2 = '+995 557 1234 56';
// // const r = /(\+995)?\s*\d{3}\s*\d{2}\s*\d{2}\s*\d{2}/;
// const r = /(\+995)?\s*\d{3}(\s*\d{2}){3}/;
// console.log(phone.match(r));
// console.log(phone2.match(r));

// Grouping
// const phone = `phone,557123456. something`;
// const phone2 = '995 557 1234 56';
// const r = /(\+995)?\s*\d{3}\s*\d{2}\s*\d{2}\s*\d{2}/;
// const r = /\b(\+?995)?\s*(\d{3})((?:\s*\d{2}){3})\b/;
// console.log(phone.match(r));
// console.log(phone2.replace(/\s+/g, '').match(r));

// Boundaries: \b ^ $

// Choise patterns
// const text = "Lorem ipsum messi xavi something. etoo";
// const r = /(messi|iniesta|xavi)/g;
// console.log(text.match(r));

// Match text 

// https://regexone.com/
// Good resources to practice
// https://regex101.com/
// https://regexr.com/
// https://www.hackerrank.com/domains/regex

// =============================================================
// Errors
// =============================================================

// "use strict"; Using undeclared variable, using this inside constructor function

class InputError extends Error {

}
function main(){
    
    try {
        // Large codebase
        const n = 1;

        if (n == 1) {
            console.log(a);
        }
        if (n == 2) {
            test();
            throw new Error();
        }

        if (n == 3) { 
            throw new InputError("Incorrect input value");
        }
        if (n == 4) {
            n();
        }

        // throw new Error("Invalid symbol");
    } catch(e) {
        
        console.log( e.constructor.name);
        // if (e instanceof InputError) {
        //     console.log("Show error to user");
        // } else {
        //     console.trace(e);
        // }
    }
}

main();
// try/catch

// throw new Error

// Create InputError class



// =============================================================
// Modules
// =============================================================
// ES5 modules: Create math module

// ES6 modules: create separate file for module

// Name export

// Default export (One per module)

// Mixed Name & default