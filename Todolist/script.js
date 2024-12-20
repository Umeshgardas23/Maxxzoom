// DOM elements
const taskinput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTask);

document.addEventListener("DOMContentLoaded", loadTasks);

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
  saveTasktolocalstorage();
  console.log(taskItem);
  taskinput.value = "";
}

function handleTask(e) {
  if (e.target.classList.contains("delete-btn")) {
    const taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
    saveTasktolocalstorage();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.classList.toggle("completed");
    saveTasktolocalstorage();
  }
}

function saveTasktolocalstorage() {
  const tasks = [];
  document.querySelectorAll(".task-item").forEach((taskItem) => {
    tasks.push({
      text: taskItem.querySelector("span").innerText,
      completed: taskItem.classList.contains("completed"),
    });
  });
  console.log(tasks);

  localStorage.setItem("Todos", JSON.stringify(tasks));
}

function loadTasks() {
  const storeTasks = localStorage.getItem("Todos");

  if (!storeTasks) return;

  JSON.parse(storeTasks).forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    if(task.completed){
      taskItem.classList.add('completed')
    }

    taskItem.innerHTML = `<span>${task.text}</span>
  <button class="delete-btn">Delete</button>
  `;
    taskList.appendChild(taskItem);
  });

  console.log(storeTasks);
}
