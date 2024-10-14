const { readTasksFromFile, writeTasksToFile } = require('../utility.cjs');

function updateTodo(positionals) {
    const todos = readTasksFromFile();
    let id = positionals[1];
    let description = positionals[2];

    if (JSON.stringify(todos) == '{}' || !todos[id]) {
        throw new Error("The ID you provided does not exist. Please provide a valid ID.")
    }

    const currentTimestamp = new Date();

    todos[id]['description'] = description;
    todos[id]['updatedAt'] = currentTimestamp;

    writeTasksToFile(todos);

    return `Task updated successfully (ID:${id})`;
}

module.exports = updateTodo;