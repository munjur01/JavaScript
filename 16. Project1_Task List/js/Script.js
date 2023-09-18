// Define UI Element
let task_form = document.querySelector("#task_form");
let task_input = document.querySelector("#new_task");
let add_task = document.querySelector("#add_task");
let task_filter = document.querySelector("#task_filter");
let task_list = document.querySelector("#task_list");
let CleartaskBtn = document.querySelector("#clear_task_btn");


// Define Event Listeners 
task_form.addEventListener("submit", newTask);
task_list.addEventListener("click", removeTask);
CleartaskBtn.addEventListener("click", clearTask);
task_filter.addEventListener("keyup", filterTask);
document.addEventListener("DOMContentLoaded", getTasks);

// Define Function
// Create Task
function newTask(e) {
    if (task_input.value === "") {
        alert("Please Create a Task First!");
    }
    else {
        //Create li element 
        let li = document.createElement("li");
        let text = document.createTextNode(task_input.value + " ");
        li.appendChild(text);
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        task_list.appendChild(li);

        storeInLocalStorage(task_input.value);

        task_input.value = "";

    }
    e.preventDefault();
}

//Remove Task 
function removeTask(e) {
    if (e.target.hasAttribute("href")) {
        if (confirm("Are you sure ?")) {
            let ele = e.target.parentElement;
            ele.remove();
            removeFromLS(ele);
        }
    }
}

// Clear Task
function clearTask(e) {
    task_list.innerHTML = "";

    // Faster Way 
    /*while (task_list.firstChild) {
        task_list.removeChild(task_list.firstChild);
    }
    */
    localStorage.clear();

}

// Filter Task
function filterTask(e) {
    let liText = e.target.value.toLowerCase();

    let temp = document.querySelectorAll("li");

    temp.forEach(task => {

        let item = task.firstChild.textContent.toLowerCase();

        if (item.includes(liText)) {
            task.style.display = "block";
        }
        else {
            task.style.display = "none";
        }

    });
}

// Store in Local Storage
function storeInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// GetTasks // When Page Reload 
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        let li = document.createElement("li");
        let text = document.createTextNode(task + " ");
        li.appendChild(text);
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        task_list.appendChild(li);
    });
}

// Remove From Local Storage 
function removeFromLS(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = taskItem;
    li.removeChild(li.lastChild); // <a>x</a>'

    tasks.forEach((task, index) => {
        if (li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}