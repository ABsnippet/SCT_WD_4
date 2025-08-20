const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  const dateValue = taskDate.value;

  if (!taskText) {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";

  const text = document.createElement("div");
  text.className = "task-text";
  text.textContent = taskText;

  const date = document.createElement("div");
  date.className = "task-date";
  date.textContent = dateValue ? new Date(dateValue).toLocaleString() : "No deadline";

  taskInfo.appendChild(text);
  taskInfo.appendChild(date);

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "complete";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newTask = prompt("Edit your task:", text.textContent);
    if (newTask) text.textContent = newTask;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  actions.append(completeBtn, editBtn, deleteBtn);
  li.append(taskInfo, actions);
  taskList.appendChild(li);

  taskInput.value = "";
  taskDate.value = "";
}