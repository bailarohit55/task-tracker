const { readTasksFromFile, writeTasksToFile } = require('../utility.cjs');

function deleteTodo(id) {
    const todos = readTasksFromFile();
    if (JSON.stringify(todos) == '{}' || !todos[id]) {
        throw new Error("The ID you provided does not exist. Please provide a valid ID.")
    }

    delete todos[id];

    writeTasksToFile(todos);

    return `Task deleted successfully (ID:${id})`;
}

module.exports = deleteTodo;