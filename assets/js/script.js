// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const formModal = document.getElementById('formModal')
const taskName = document.getElementById('taskName')

formModal.addEventListener('shown.bs.modal', () => {
  taskName.focus()
})

addTask.addEventListener('click', function(event){
  event.preventDefault();

  task = taskName.value;
  createTaskCard(task);
})


// Todo: create a function to generate a unique task id
function generateTaskId() {
  return Math.floor(Math.random() * Date.now())
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  let newTaskCard = document.createElement(`div`);
  newTaskCard.textContent = task;
  console.log(task);
  todoCards.appendChild(newTaskCard);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
