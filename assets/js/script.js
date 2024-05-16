// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const formModal = document.getElementById('formModal');
const taskName = document.getElementById('taskName');
const dueDate = document.getElementById('datepicker')


formModal.addEventListener('shown.bs.modal', () => {
  taskName.focus()
})

// GET FUCKED THIS IS GONNA BE A MESS!!!!!
let taskArray = []


// Due dates Probably broken just give up.
const compareDates = function(dueDate){
  const formattedDueDate = dayjs(dueDate);
  console.log(formattedDueDate);
  let today = dayjs();
  if (formattedDueDate == today){
    console.log("OH FAURK ITS DUE")
    return{cardBg: 'noBueno', btnBorder: 'border-white'};
  }



  }

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
// Fuck this don't bother.
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
  newAddedCard.dueDate = dueDate;
  compareDates(newAddedCard.dueDate.value);



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
  const taskId = ui.draggable[0].dataset.taskList;

  const newStatus = event.target.id;
  taskArray.forEach((task) => {
    if(task.id === taskId)
{task.status = newStatus;
  console.log(task.status);
}

if (task.status === "in-progress"){
  console.log("This is in progress!");
} else if (task.status === "done"){
  console.log("This is complete!");
}
})}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $('#todoCards').sortable
  $(function() {
    $('.lane').droppable({
        accept: '.taskCard',
        drop: handleDrop,
    });
    $( function() {
      $( "#datepicker" ).datepicker();
    } );
});
});
