// DOM elements
const taskinput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTask);

// function of adding the todo
function addTask() {
  const taskText = taskinput.value.trim();

  if (taskText === "") {
    alert("Please enter the todo");
    return;
  }
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  taskItem.innerHTML = `<span>${taskText}</span>
  <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(taskItem);

  console.log(taskItem);
  taskinput.value = "";
}

function handleTask(e) {
  if (e.target.classList.contains("delete-btn")) {
    const taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.classList.toggle("completed");
  }
}
