const express = require('express');
const Task = require('../models/taskModel');
const taskValidationSchema = require('../validation/taskValidation');
const router = express.Router();


// Create a new task
router.post('/tasks', async (req, res) =>{
    try {
        const { error } = taskValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });
    
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
      } catch (err) {
        res.status(500).json({ message: 'Server error' });
      }
});


// Get all tasks with optional filtering and pagination
router.get('/tasks', async (req, res) => {
        try {
        const { status, priority, sort, limit = 10, skip = 0 } = req.query;
        const filter = {};
        if (status) filter.status = status;
        if (priority) filter.priority = priority;
    
        const tasks = await Task.find(filter)
            .sort(sort ? { [sort]: 1 } : { createdAt: -1 })
            .skip(Number(skip))
            .limit(Number(limit));
    
        res.json(tasks);
        } catch (err) {
        res.status(500).json({ message: 'Server error' });
        }
  });


// Get task by ID
router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});


// Update task by ID
router.put('/tasks/:id', async (req, res) => {
    try {
        const { error } = taskValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});


// Delete task by ID
router.delete('/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
