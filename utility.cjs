const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'todos.json')

function readTasksFromFile() {
    if(!fs.existsSync(filePath)) {
        return {}    
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeTasksToFile(todos) {
    return fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf8");
}

module.exports  = { readTasksFromFile, writeTasksToFile }