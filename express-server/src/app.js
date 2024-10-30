// express-server/src/app.js

const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');

const PORT = 8001;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the tasks router for /tasks endpoint
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});