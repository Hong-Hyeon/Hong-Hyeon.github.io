const quotes = [
    {
      quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
      author: "단테",
    },
    {
      quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
      author: "괴테",
    },
    {
      quote:
        '내일이란 오늘의 다른 이름일 뿐이다.',
      author: "윌리엄 포크너",
    },
    {
      quote: "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
      author: "이소룡",
    },
    {
      quote: "건강에 대한 지나친 걱정만큼 건강에 치명적인 것은 없다.",
      author: "벤자민 프랭클린",
    },
    {
      quote: "오늘이란 신어야 할 신발과 같은 것이다.",
      author: "스티브 올렌",
    },
    {
      quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
      author: "나폴레옹",
    },
  ];


const quoteContainer = document.querySelector("#quotes")
const author = document.querySelector("#quotes h2:first-child");
const quote = document.querySelector("#quotes h3:last-child");

function printQuote(){
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

    quote.innerText = todayQuote.quote;
    author.innerText = todayQuote.author;
}

function quoteFind(){
    const target = document.querySelector("#login-form");

    if(target === null){
        quoteContainer.classList.remove("hidden");

        printQuote();
    }
}
quoteFind();
setInterval(quoteFind, 5000);