const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    console.log(event)

    const username=loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME)

    localStorage.setItem(USERNAME_KEY, username)
    loginForm.remove()
    printGreeting(username);
}

function printGreeting(username){
    greeting.innerText = `어서오세요. ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}else{
    // show the greeting
    loginForm.remove()
    printGreeting(savedUsername);
}