// DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage on page load
// document.addEventListener('DOMContentLoaded', loadTasks);

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskActions);

// Add Task Function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(taskItem);

    saveTasksToLocalStorage();
    taskInput.value = '';
}

// Handle Task Actions (Complete/Delete)
function handleTaskActions(e) {
    if (e.target.classList.contains('delete-btn')) {
        const taskItem = e.target.parentElement; 
        taskList.removeChild(taskItem);
        saveTasksToLocalStorage();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.classList.toggle('completed');
        saveTasksToLocalStorage();
    }
}

// Save tasks to localStorage
function saveTasksToLocalStorage() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(taskItem => {
        tasks.push({
            text: taskItem.querySelector('span').innerText,
            completed: taskItem.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (!storedTasks) return;

    JSON.parse(storedTasks).forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        if (task.completed) {
            taskItem.classList.add('completed');
        }
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}
