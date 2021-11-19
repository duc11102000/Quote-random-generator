const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');

const api ={
    
}

btn.addEventListener('click', quoteGen);

function quoteGen(){
    fetch("https://api.quotable.io/random")
     .then(response => response.json())
     .then(data =>{
        quote.innerHTML = `${data.content}`;
        author.innerHTML = `--${data.author}`;
     });
}
