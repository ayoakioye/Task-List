//Define UIvariables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const taskInput = document.querySelector('#task');

//load all event listeners
loadAllEventListeners();

function loadAllEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    }

//add task
    function addTask(e) {
        if(taskInput.value === ''){
            alert('Add a Task');
        }

        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
         li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = '';


        e.preventDefault();
    }

    

    function removeTask(e) {
        if(e.target.parentElement.classList.contains('delete-item')) {
            e.target.parentElement.parentElement.remove();
        }
  }

  function clearTasks() {
      while(taskList.firstChild){
         taskList.removeChild(taskList.firstChild);
        
    }

}