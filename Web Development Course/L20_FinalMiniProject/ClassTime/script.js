let taskCompleted = 0;
let totalTask = 0;

let taskCounter = document.getElementById("taskCounter");
let todoForm = document.getElementById("todoForm");
let inputText = document.getElementById("text");
let deleteBtn = document.getElementById("deleteBtn");
let taskList = document.getElementById("taskList");
let add = document.getElementById("addTask")
// update counter
function updateCounter() {
  taskCounter.innerHTML = `Total Tasks: ${totalTask} | Completed: ${taskCompleted}`;
}
updateCounter();

function addTask(text) {
  if (text == "") return;

  let li = document.createElement("li");
  li.textContent = text;
  totalTask++;
  updateCounter();

  let del = document.createElement("button");
  del.textContent = "Del";

  li.appendChild(del);

  taskList.appendChild(li);
}


addTask("hello")