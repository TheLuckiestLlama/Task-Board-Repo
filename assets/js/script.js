// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const formModal = document.getElementById('formModal');
const taskName = document.getElementById('taskName');



formModal.addEventListener('shown.bs.modal', () => {
  taskName.focus()
})


let taskArray = []

// Todo: create a function to generate a unique task id
function generateTaskId() {
  newID = Math.floor(Math.random() * Date.now())
  return newID;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  let newTaskCard = {}
  newTaskCard.task = task;
  newTaskCard.ID = newID;
  taskArray.push(newTaskCard);
  let taskData = JSON.stringify(taskArray);
  localStorage.setItem('taskData', taskData);
  console.log("Item added to list.");
  console.log(taskData);
  // let newTaskCard = document.createElement(`div`);
  // newTaskCard.setAttribute('ID', newID);
  // newTaskCard.textContent = task;
  // console.log(task);
  // console.log(newID);
  // todoCards.appendChild(newTaskCard);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  for (let i = 0; i < savedTaskList; i++){
    let savedTasks = localStorage.getItem('taskData');
    let savedTaskList = JSON.parse(savedTasks);
    console.log(savedTaskList[i]);
    let newRenderedCard = document.createElement(`div`);
    let itemID = savedTaskList[i].ID.value;
    let itemTask = savedTaskList[i].task.value;
    newRenderedCard.setAttribute('class', itemID);
    newRenderedCard.textContent = itemTask;
    todoCards.appendChild(newRenderedCard);
  }
}
// Todo: create a function to handle adding a new task
addTask.addEventListener('click', function(event){
  event.preventDefault();
// Gathers info from card generator
  task = taskName.value;
  generateTaskId();
  createTaskCard(task);
  // Creates card
  let newAddedCard = document.createElement(`div`);
  newAddedCard.setAttribute('ID', newID);
  newAddedCard.setAttribute('class', 'taskCard');
  $(newAddedCard).draggable();
  newAddedCard.textContent = task;
// Make remove button for removing stuff (Duh)
  let newRemoveButton = document.createElement('button')
  newRemoveButton.textContent = "Remove";
  newRemoveButton.setAttribute('class', 'removeButton');
  todoCards.appendChild(newAddedCard);
  newAddedCard.appendChild(newRemoveButton);
})

// Todo: create a function to handle deleting a task
// let removeButton = document.querySelector('.removeButton');

// removeButton.addEventListener('click', function(event){
//   event.preventDefault();
//   let removeTarget = removeButton.parentElement();
//   removeTarget.remove();


// })



// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  renderTaskList(savedTaskList);
});
