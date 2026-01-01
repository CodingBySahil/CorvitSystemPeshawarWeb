// Select elements
const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const clearBtn = document.getElementById("clearAllBtn");
const counter = document.getElementById("taskCounter");

// Track tasks
let totalTasks = 0;
let completedTasks = 0;

// Function to update task counter
function updateCounter() {
  counter.textContent = `Total Tasks: ${totalTasks} | Completed: ${completedTasks}`;
}

// Function to create a new task
function addTask(taskText) {
  if (taskText === "") return; // Basic validation

  totalTasks++; // Increment total tasks

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "DEL";
  delBtn.className = "deleteBtn";

  // Append delete button to li
  li.appendChild(delBtn);

  // Append li to ul
  list.appendChild(li);

  // Clear input
  input.value = "";

  // Update counter
  updateCounter();
}

// Event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  addTask(input.value);
});

// Event delegation for task interactions
list.addEventListener("click", function (e) {
  const target = e.target;

  // Delete task
  if (target.classList.contains("deleteBtn")) {
    const li = target.parentElement;
    if (li.classList.contains("completed")) completedTasks--;
    list.removeChild(li);
    totalTasks--;
    updateCounter();
  }
  // Toggle complete
  else if (target.tagName === "LI") {
    target.classList.toggle("completed");
    completedTasks = list.querySelectorAll("li.completed").length;
    updateCounter();
  }
});

// Clear all tasks
clearBtn.addEventListener("click", function () {
  list.innerHTML = "";
  totalTasks = 0;
  completedTasks = 0;
  updateCounter();
});
