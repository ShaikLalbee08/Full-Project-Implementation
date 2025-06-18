const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTaskToDOM(task));
};

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    addTaskToDOM(task);
    saveTask(task);
    taskInput.value = "";
  }
}

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
