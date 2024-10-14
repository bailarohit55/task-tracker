const { readTasksFromFile, writeTasksToFile } = require('../utility.cjs');

function markTodo(mark, id) {
    const todos = readTasksFromFile();
    if (JSON.stringify(todos) == '{}' || !todos[id]) {
        throw new Error("The ID you provided does not exist. Please provide a valid ID.")
    }

    const currentTimestamp = new Date();

    todos[id]['status'] = mark;
    todos[id]['updatedAt'] = currentTimestamp;

    writeTasksToFile(todos);

    return `Task marked as '${mark}' successfully (ID:${id})`;
}

module.exports = markTodo;