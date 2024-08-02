const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

const dbFilePath = './db.json';

// Функция для чтения задач из db.json
const readTodosFromFile = () => {
    try {
        const data = fs.readFileSync(dbFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading db.json:', error);
        return [];
    }
};

// Функция для записи задач в db.json
const writeTodosToFile = (todos) => {
    try {
        fs.writeFileSync(dbFilePath, JSON.stringify(todos));
    } catch (error) {
        console.error('Error writing to db.json:', error);
    }
};

let todos = readTodosFromFile();

app.get('/', (req, res) => {
    res.send('Welcome to the Todo API!');
});

// Получить все todo
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Создать новое todo
app.post('/todos', (req, res) => {
    const { name } = req.body;
    const newTodo = { id: crypto.randomUUID(), name, done: false };

    todos.push(newTodo);
    writeTodosToFile(todos);

    res.status(201).json(newTodo);
});

// Получить todo по id
app.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.find(t => t.id === id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Обновить todo по id
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { name, done } = req.body;

    const todo = todos.find(t => t.id === id);
    if (todo) {
        todos = todos.map(todo => (
            todo.id === id 
                ? {...todo, done: !todo.done}  // name: name !== undefined ? name : todo.name,
                : todo
        ))
        writeTodosToFile(todos)
        res.json(todo)
        res.status(200)
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Удалить todo по id
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = todos.length;
    todos = todos.filter((item) => item.id !== id);

    if (todos.length === initialLength) {
        // Если длина массива не изменилась, значит элемент не найден
        res.status(404).json({ message: 'Todo not found' });
    } else {
        writeTodosToFile(todos);
        res.status(204).end(); // Успешное удаление
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});