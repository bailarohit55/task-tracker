#! /usr/bin/env node
const addTodo = require('./actions/add.cjs');
const updateTodo = require('./actions/update.cjs');
const deleteTodo = require('./actions/delete.cjs');
const markTodo = require('./actions/mark.cjs');
const listTodo = require('./actions/list.cjs');

try {
  let message;
  let consoleColor = '\x1b[32m%s\x1b[0m';

  const positionals = process.argv.slice(2)

  if(positionals.length == 0) {
    console.log('\x1b[35m%s\x1b[0m', 'Usage: todo <command> [arguments]');
    console.log('\x1b[35m%s\x1b[0m', 'Commands:');
    console.log('\x1b[33m%s\x1b[0m', ' * add <task description>                         -         Add a new task.');
    console.log('\x1b[33m%s\x1b[0m', ' * update <task id> <updated description>         -         Update the desciption of a task with the specified id.');
    console.log('\x1b[33m%s\x1b[0m', ' * mark-done <task id>                            -         Mark a task done');
    console.log('\x1b[33m%s\x1b[0m', ' * mark-in-progress <task id>                     -         Mark a task in-progress');
    console.log('\x1b[33m%s\x1b[0m', ' * list [status]                                  -         List tasks. [status: todo, in-progress, done] optional.');
    console.log('\x1b[33m%s\x1b[0m', ' * delete <task id>                               -         Delete the task with the specified id.');
    return;
  }

  switch (positionals[0]) {
    case 'add':
      message = addTodo(positionals[1]);
      break;
    case 'update':
      message = updateTodo(positionals);
      break;
    case 'delete':
      message = deleteTodo(positionals[1]);
      break;
    case 'mark-done':
      message = markTodo('done', positionals[1]);
      break;
    case 'mark-in-progress':
      message = markTodo('in-progress', positionals[1]);
      break;
    case 'list':
      if (positionals.length > 1) {
        listTodo(positionals[1])
      } else {
        listTodo();
      }
      break;
    default:
      consoleColor = '\x1b[31m%s\x1b[0m';
      message = "Invalid action!";
      break;
  }

  if (message) console.log(consoleColor, message);

} catch (error) {
  console.log('\x1b[31m%s\x1b[0m', error.message);
}