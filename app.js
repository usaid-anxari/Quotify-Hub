const api_URL = "https://api.quotable.io/random";
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

let getData = async (url) => {
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
  console.log(data);
};

getData(api_URL);

let tweetQuotes = ()=>{
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + '--- by ' + author.innerHTML," Tweet Window" ," width=600,height=300")
}