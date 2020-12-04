// DOM SELECTORS
const form = document.querySelector('form');
const formBg = document.querySelector('.formBg');
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const newTask = document.querySelector('.btn-newtask')
const todoText = document.querySelector('.todoText');

// fitText(document.querySelector('p'), 0.38);




// EVENT LISTENERS
newTask.addEventListener('click', openForm);
todoBtn.addEventListener('click', addTodo);

// cancel input
formBg.addEventListener('click', function() {
    formBg.style.display = 'none';
    form.style.display = 'none';
})

todoList.addEventListener('click', editTodo);





// FUNCTIONS
function openForm(e) {

    form.style.display = 'flex';
    formBg.style.display = 'flex';

    // make the input 
    todoInput.focus();


}

function addTodo(e) {
    e.preventDefault();
    
    if (todoInput.value) {
        console.log(todoInput.value);

        const todo = todoInput.value;
        const todoItem = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = todoInput.value;
        p.classList.add('todoText');
        todoItem.classList.add('todo-item');
        todoItem.appendChild(p);
        todoList.appendChild(todoItem);
    
        // addcheck mark
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoItem.appendChild(completedButton);
    
        // delete btn
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoItem.appendChild(trashButton);
    }


    form.style.display = 'none';
    formBg.style.display = 'none';

    todoInput.value = '';
}


// delete or add checkmark to item
function editTodo(e) {
    const item = e.target;
    console.log(item);
    console.log(todoText);
    if(item.classList[0]=== 'trash-btn') {
        item.parentElement.remove();
    } else{
        console.log(item.parentElement);
        item.parentElement.classList.toggle('completed');

    }
}
