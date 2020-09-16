//selectors

const todoInput = document. querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOpt = document.querySelector(".filter-todo");



	// DOM stuff event listeners 

todoBtn.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck);
filterOpt.addEventListener("click", filterTodo);



//functions


function addTodo(event)
{
// prevent form from refreshing
event.preventDefault();

const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//create an li element

const newTodo = document.createElement("li");
newTodo.innerText= todoInput.value;
newTodo.classList.add("todo-item")
todoDiv.appendChild(newTodo);

//add to local storage
saveLocalTodos(todoInput.value);


//check button

const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class = "fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//trash button or delete button


const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
todoList.appendChild(todoDiv);


//clear Todo Input value
todoInput.value = " ";


}

// function for the delete  option

function deleteCheck(e)
{

 const item = e.target;

 //Deleting the TODO

 if (item.classList[0] === "trash-btn")
 {
const todo = item.parentElement;
todo.classList.add("fall")
todo.remove();

}

// check option
if (item.classList[0] === "complete-btn"){
const todo = item.parentElement;
todo.classList.toggle('completed')

}

}


//filter function using a a loop and switch case
function filterTodo(e) {
const todos = todoList.childNodes;
todos.forEach(function (todo){

switch(e.target.value){
case "all":
    todo.style.display ="flex";
    break;
    
case "completed":
if(todo.classList.contains("completed")){
 todo.style.display ="flex";


} else {


    todo.style.display ="none"
}
break;

case "uncompleted":

if(!todo.classList.constains("completed")){

    todo.style.display= "flex";

}else {
 todo.style.display ="none";


}
break;

}




}

)


}


// to check or save to local storage
function saveLocalTodos (todo)
{

let todos;
if(localStorage.getItem("todos") === null){
todos = []
} else {

 todos = JSON.parse(localStorage.getItem("todos"));

}

todos.push(todo);
localStorage.setItem("todos", JSON.stringify(todos));

}