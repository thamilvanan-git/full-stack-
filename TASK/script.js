// Task array
let tasks = [];

const taskForm = document.getElementById("taskForm");
const taskContainer = document.getElementById("taskContainer");
const tabs = document.querySelectorAll(".tab");

let currentStatus = "Pending";

// Add new task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const priority = document.getElementById("priority").value;

  const newTask = {
    id: Date.now(),
    title,
    description,
    priority,
    status: "Pending",
  };

  tasks.push(newTask);
  taskForm.reset();
  renderTasks();
});

// Render tasks based on current status
const renderTasks = () => {
  taskContainer.innerHTML = tasks
    .filter((task) => task.status === currentStatus)
    .map(
      (task) => `
      <div class="task ${task.priority}">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <small>Priority: ${task.priority}</small>
        <div class="task-actions">
        
          ${
            task.status !== "Completed"
              ? `<button onclick="markCompleted(${task.id})">Mark as Completed</button>`
              : ""
          }
          <button onclick="deleteTask(${task.id})">Delete</button>
        </div>
      </div>
    `,
    )
    .join("");
};

// Mark task as completed
const markCompleted = (id) => {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, status: "Completed" } : task,
  );
  renderTasks();
};

// Delete task
const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
};

// Tab switching
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    currentStatus = tab.dataset.status;
    renderTasks();
  });
});

// Initial render
renderTasks();
