# Task tracker

The task tracker which was created as part of this [project](https://roadmap.sh/projects/task-tracker) on [Roadmap.sh](https://roadmap.sh).
This document contains the intructions to run it on your machine.

## Features
- Add a task which will get a unique ID on creation.
- Update a task based on unique ID.
- Mark task as in-progress or done based on unique ID.
- List all tasks or according to status: `todo`, `in-progress`, `done`
- Delete a task based on unique ID.


## Run Locally

Clone the project

```bash
  git clone https://github.com/bailarohit55/task-tracker.git
```

Go to the project directory

```bash
  cd task-tracker
```

Install CLI app

```bash
  npm link
```


## Usage

- Adding a task

```bash
  todo add "Buy groceries"
```

- Update a task

```bash
  todo update 1 "Just buy biscuits"
```

- Delete a task

```bash
  todo delete 1
```

- Mark a task as in-progress

```bash
  todo mark-in-progress 1
```

- Mark a task as done

```bash
  todo mark-done 1
```

- List all tasks

```bash
  todo list
```

- List todo tasks

```bash
  todo list todo
```

- List in-progress tasks

```bash
  todo list in-progress
```

- List done tasks

```bash
  todo list done
```
