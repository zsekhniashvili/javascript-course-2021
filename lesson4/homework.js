// =======================================
// Challenge 1
// =======================================

// Find all paragraphs and change their color into red

// =======================================
// Challenge 2
// =======================================

// const users = [
//     'George', 'Brad', 'Mary'
// ];

// Generate unordered list of users

// =======================================
// Challenge 3
// =======================================

const todos = [
    {title: 'Todo 1', completed: false},
    {title: 'Todo 2', completed: true},
    {title: 'Todo 3', completed: false},
];
// Generate todo unordered list with checkboxes

const newTodo = {title: 'new Todo', completed: false};
// Insert todo at position 2

class TodoList {
    constructor(el, todoItems) {
        this.el = el;
        this.ul = null;
        this.todoItems = todoItems;
    }

    render() {
        this.ul = document.createElement('ul')
        todos.forEach(todo => {
            this.ul.append(this.createTodoEl(todo))
        })
        this.el.append(this.ul);
    }

    createTodoEl(todo) {
        let li = document.createElement('li')
        li.textContent = todo.title
    
        let checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.checked = todo.completed
        li.prepend(checkBox)
        return li;
    }

    insertAt(todo, position) {
        const el = this.ul.children[position-1];
        const newLi = this.createTodoEl(todo);
        this.ul.insertBefore(newLi, el);
    }
}

const todoList = new TodoList(document.body, todos);
todoList.render();
todoList.insertAt(newTodo, 2);



// =======================================
// Challenge 4
// =======================================

const users = [
    {username: 'zura', email: 'zura@example.com'},
    {username: 'brad', email: 'brad@example.com'},
    {username: 'mary', email: 'mary@example.com'},
]
// Generate table

// =======================================
// Challenge 5
// =======================================

const words = [
    {word: 'basilashvili', description: 'Basilashvili lost in the first round of RG'},
    {word: 'messi', description: 'Messi has 40M EUR salary in a year'},
    {word: 'Elon Musk', description: 'Elon Musk lost $16B'},
];

// Traverse DOM and show texts on mouse over for words.

// =======================================
// Challenge 6: Create digital clock
// https://www.w3schools.com/jsref/met_win_setinterval.asp
// https://www.w3schools.com/jsref/met_win_settimeout.asp

// =======================================

// =======================================
// Bonus: Create Calculator
// =======================================