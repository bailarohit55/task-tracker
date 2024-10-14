const { readTasksFromFile, writeTasksToFile } = require('../utility.cjs');

function addTodo(description) {
    const todos = readTasksFromFile();
    let max, id;

    if (JSON.stringify(todos) !== "{}") {
        const ids = Object.keys(todos);
        ids.sort((a, b) => {
            return b - a;
        })
        max = ids[0];
    } else {
        max = 0;
    }

    id = Number(max) + 1
    const currentTimestamp = new Date();

    const todo = {
        id: Number(id),
        description: description,
        status: 'todo',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp
    }

    todos[id] = todo;

    writeTasksToFile(todos);

    return `Task added successfully (ID:${id})`;
}

module.exports = addTodo;