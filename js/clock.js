const clock = document.querySelector("h2#clock")

// clock.innerText = "clock"
function getClock(){
    const date = new Date()
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

// setInterval(sayHello, 5000); // 2개의 arg를 받음. 하나는 실행하는 Function, 하나는 ms
// setTimeout(sayHello, 5000); // 2개의 arg를 받으며, function과 ms(밀리세컨)을 넣어줘야함

function clockFind(){
    const target = document.querySelector("#login-form");

    if(target === null){
        clock.classList.remove("hidden");
        getClock();
    }
}
clockFind();
setInterval(clockFind, 1000);