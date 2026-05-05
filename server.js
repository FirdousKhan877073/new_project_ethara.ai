const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

/* ------------------ Dummy User ------------------ */
const user = {
  email: "admin@gmail.com",
  password: "123456",
  role: "admin",
};

/* ------------------ In-Memory Data ------------------ */
let tasks = [];

/* ------------------ Routes ------------------ */

// Home
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    return res.json({
      message: "Login successful",
      token: "dummy-token",
      role: user.role,
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// Create Task
app.post("/create-task", (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    status: req.body.status || "todo",
  };

  tasks.push(task);
  res.json(task);
});

// Get All Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Update Task
app.put("/update-task/:id", (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.map((task) =>
    task.id === id ? { ...task, ...req.body } : task
  );

  res.json({ message: "Task updated" });
});

// Dashboard
app.get("/dashboard", (req, res) => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "done").length;

  res.json({
    total,
    completed,
  });
});

/* ------------------ Server ------------------ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));