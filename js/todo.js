const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoButton = document.querySelector("#todo-button");
const todoButtonContainer = document.querySelector("#show-todo");

const todoList_card = document.querySelector("#todoList-card")
const toDoList = document.querySelector("#todoList-data")

const TODOS_KEY = 'todos'

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const button_parent = event.target.parentElement;
    button_parent.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(button_parent.id));
    saveToDos();
}

function paintToDo(newTodoObj){
    const list = document.createElement("li");
    list.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)

    list.appendChild(span);
    list.appendChild(button);
    span.innerText = newTodoObj.text;

    toDoList.appendChild(list);
}

function handleToDoSubmit(event){
    event.preventDefault();
    
    const newTodo = todoInput.value;

    console.log(newTodo)
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };

    toDos.push(newTodoObj);
    saveToDos();
}

function handleShowTODO(newTodoObj){
    if (todoList_card.classList[0] === "hidden"){
        todoList_card.classList.remove("hidden")
        todoList_card.style.display="block";

        const savedToDos = localStorage.getItem(TODOS_KEY);

        if(savedToDos !== null){
            const parsedToDos=JSON.parse(savedToDos);
            toDos = parsedToDos;
            parsedToDos.forEach(paintToDo);
        }

    } else if (todoList_card.classList[0] === undefined){
        todoList_card.classList.add("hidden")
        todoList_card.style.display="none";

        toDoList.innerHTML='';

    }
    // console.log(todoList_card.classList[0])
}

function todoFind(){
    const target = document.querySelector("#login-form");

    if(target === null){
        todoForm.classList.remove("hidden");
        todoButtonContainer.classList.remove("hidden");
    }
}
todoFind();
setInterval(todoFind, 1000)

todoForm.addEventListener("submit", handleToDoSubmit)
todoButton.addEventListener("click", handleShowTODO)