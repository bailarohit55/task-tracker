const { readTasksFromFile } = require('../utility.cjs');

function listTodo(operation = undefined) {
    const todos = readTasksFromFile();

    if(!operation) {
        Object.keys(todos).length !== 0 ? console.table(todos) : console.log('\x1b[31m%s\x1b[0m', 'No task to display. Please add a task.');
        return;
    }

    let keys = Object.keys(todos);
    let filteredTodos = [];

    switch (operation) {
        case 'done':
            keys.forEach(key => {
                if (todos[key]['status'] == 'done') {
                    filteredTodos.push(todos[key]);
                }
            });
            break;
        case 'in-progress':
            keys.forEach(key => {
                if (todos[key]['status'] == 'in-progress') {
                    filteredTodos.push(todos[key]);
                }
            });
            break;
        case 'todo':
            keys.forEach(key => {
                if (todos[key]['status'] == 'todo') {
                    filteredTodos.push(todos[key]);
                }
            });
            break;
        default:
            console.log('\x1b[31m%s\x1b[0m', 'Task status invalid!');
            break;
    }

    Object.keys(filteredTodos).length !== 0 ? console.table(filteredTodos) : console.log('\x1b[31m%s\x1b[0m', 'No task to display. Please add a task.');
}

module.exports = listTodo;