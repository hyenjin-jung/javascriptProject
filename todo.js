const todoInput = document.getElementById('todoInput');
const createTodoButton = document.getElementById('createTodoButton');
const todoList = document.getElementById('todoList');

const createTodo = function() {
    const task = todoInput.value.trim();
    
    if(task !== ''){
        const li = document.createElement('li');
        li.innerText = task;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.append(deleteButton);

        todoList.append(li);

        todoInput.value = '';
    }
};

createTodoButton.addEventListener('click', createTodo);

todoInput.addEventListener('keypress', function(event) {
    if(event.key === 'Enter'){
        createTodo();
    }
})