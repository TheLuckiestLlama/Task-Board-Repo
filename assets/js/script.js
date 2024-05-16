// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const formModal = document.getElementById('formModal');
const taskName = document.getElementById('taskName');

// TESTING ZONE
// let newTestCard = document.createElement(`div`);
//   newTestCard.setAttribute('ID', 'blamass');
//   newTestCard.setAttribute('class', 'taskCard');
//   $(newTestCard).draggable();
//   newTestCard.textContent = "Doin a bit of stuff";
// // Make remove button for removing stuff (Duh)
//   let newDeleteButton = document.createElement('button')
//   newDeleteButton.textContent = "Remove";
//   newDeleteButton.setAttribute('class', 'removeButton');
//   todoCards.appendChild(newTestCard);
//   newTestCard.appendChild(newDeleteButton);
  // --------TESTING ENDS HERE--------

formModal.addEventListener('shown.bs.modal', () => {
  taskName.focus()
})


let taskArray = []

// Todo: create a function to generate a unique task id
function generateTaskId() {
  newID = Math.floor(Math.random() * Date.now()).toString();
  return newID;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  let newTaskCard = {}
  newTaskCard.task = task;
  newTaskCard.ID = newID;
  taskArray.push(newTaskCard);
  const taskData = JSON.stringify(taskArray);
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

  let removeButton = document.getElementById(newID);
  removeButton.addEventListener('click', function(event){
    event.preventDefault();
    console.log("Button Pressed!")
    let removeTarget = removeButton;
    removeTarget.remove();

  })

})

// Todo: create a function to handle deleting a task
const externalRemove = function(){
  let removeTarget = removeButton.parentNode;
  removeTarget.remove();
}



// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  console.log("You dropped this, king.")
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $('#todoCards').sortable
  $(function() {
    $('.lane').droppable({
        accept: '.taskCard',
        drop: handleDrop,
    });
});
});
