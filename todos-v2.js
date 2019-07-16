// It should have a function to display todos
function showTodos () {
    console.log('My todos are: ', todos);
}

// It should have a function to add todos
function addTodo(todo) {
    todos.push(todo);
    showTodos();
} 

// It should have a function to change a todo
function changeTodo(order,todo) {
    todos[order] = todo;
    showTodos();
}

// It should have a function to delete a todo
function deleteTodo(order) {
    todos.splice(order,1);
    showTodos();
}