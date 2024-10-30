// express-server/src/routes/tasks.js

const express = require('express');
const router = express.Router();

let tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

// GET /tasks - Retrieve the task list
router.get('/', (req, res) => {
    res.json({ tasks });
});

// POST /tasks - Add a task to the task list
router.post('/', (req, res) => {
    const { text } = req.body;
    if (text) {
        tasks.push(text);
        res.json({ message: "Task added successfully" });
    } else {
        res.status(400).json({ message: "Task text is required" });
    }
});

module.exports = router;