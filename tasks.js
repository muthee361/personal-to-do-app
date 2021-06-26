

const imageArea = document.querySelector('image');
const label = document.getElementById('label');
const addTasks = document.getElementById('task');
const addButton = document.querySelector('#addTask');
const tasksLabel = document.getElementById('label-filter');
const filterTask = document.querySelector('#filter');
const listItems = document.querySelector('.list');
const clearList = document.querySelector('.clear');
// const filterItems = document.getElementById('filter');
// const clearTask = document.querySelector('.list-items');

const yourName = document.getElementById('name');
let name  = "Kelly";

yourName.textContent = `${name}`;

loadEventListeners();

function loadEventListeners(){
    //add label on focus
    addTasks.addEventListener('focusin', addTaskLabel);
    filterTask.addEventListener('focusin', addLabel);
    
    //remove label on focusout
    addTasks.addEventListener('focusout', hideTaskLabel);
    filterTask.addEventListener('focusout', hideLabel);
    
    //add tasks
    addButton.addEventListener('click', addTask);
    //remove task
    listItems.addEventListener('click', removeTasks);
    //clear list
    clearList.addEventListener('click', clearItem);
    //filter items
    filterTask.addEventListener('keyup', filter);

    
}
function addTaskLabel(e){
    //new task
    label.style.display = "block";
    addTasks.style.borderBottom = "2px solid lightseagreen";
    
}
function addLabel(e){
       //filter tasks
    tasksLabel.style.display = "block";
    filterTask.style.borderBottom = "2px solid lightseagreen";
}

function hideTaskLabel(e){
    //add task
    label.style.display = "none";
    addTasks.style.borderBottom = "1px solid black";
    
}
function hideLabel(e){
    
    //filter task
    tasksLabel.style.display = "none";
    filterTask.style.borderBottom = "1px solid black";
}

//add task

function addTask(e){
    if(addTasks.value === ''){
        alert('Add a Task first!!');
    }
    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'list-items';
    //create text node and append to li
    li.appendChild(document.createTextNode(addTasks.value));
    //create new link item
    const link = document.createElement('a');
    //add class
    link.className = 'link-item';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    
    link.style.backgroundColor = 'inherit';
    link.style.color = 'tomato';
    link.style.float = 'right';
    link.style.paddingRight = '1rem';
    li.style.listStyleType = 'none';
    li.style.fontSize = '1rem';
    listItems.style.border = "2px solid #ecf0f1";
    //append the link to li
    li.appendChild(link);

    //append li to ul
    listItems.appendChild(li);

    //clear input
    addTasks.value = '';

    e.preventDefault();
}

function removeTasks(e){
    if (e.target.parentElement.classList.contains('link-item')) {
        if (confirm('Are you sure you want to remove the task ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}
function clearItem(){
    if (confirm('Confirm to clear all your tasks')) {
        while (listItems.firstChild) {
            listItems.removeChild(listItems.firstChild);
        }
    } 
}


function filter(e){
    const text = e.target.value.toLowerCase();

    //search item
    document.querySelectorAll('.list-items').forEach
    (function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            } else{
                task.style.display = 'none';
            }
        
        });
}
