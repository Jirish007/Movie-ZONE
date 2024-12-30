var bodys = document.querySelector("body");
var backgroundParameter = false;
var form = document.querySelector("form");
var searchBar = document.querySelector(`.searchBar input[type="search"]`);
var Search = document.querySelector("#search");
var trendingDisplay = document.querySelector(".trendingDisplay");
var movies = document.querySelector(".movies");
var series = document.querySelector(".series");
var darkMode = document.querySelector("#darkMode");
//THIS CONTROLS DARK ANDLIGHT MODE
function BackgroundColour(){
if(!backgroundParameter){
backgroundParameter= true;
bodys.style.backgroundColor ="rgba(2, 2, 2, 0.884)";
searchBar.style.color = "white ";
darkMode.style.color = " rgb(240, 240, 57) ";
}else{
backgroundParameter=false;
bodys.style.backgroundColor ="rgb(252, 247, 247)";
searchBar.style.borderColor = "black";
darkMode.style.color = "rgb(5, 5, 59)";
}
}
//FETCHING MOVIE DATA
async function getData() {
const url = `/components/data.json`;
const res = await fetch(url);
const data =await res.json();
return data;

};
const Display = async()=>{
var finalResults = await getData();

var trendingDisplayDom = finalResults["trending"].map((x)=>{
const {id,image,name,links,ratings,description} = x
return `
<section id="movie-zone-id-${id}">
<img src=${image}>
<h2 id="ratings">${ratings}</h2>
<h4 id="name">${name}</h4>
<p id="description">${description}</p>
<button><a href=${links}> >Download</a></button>
</section>
`
}).join("");
form.addEventListener('submit', (e) =>{
e.preventDefault();
const searchBarSearches = form.querySelector("input").value.toLowerCase();
var test = finalResults["trending"].filter((product) => {
return(
product.name.toLocaleLowerCase().includes(searchBarSearches)
)
})


trendingDisplay.innerHTML = test.map((x)=>{
const {id,image,name,links,ratings,description} = x
return `
<section id="movie-zone-id-${id}">
<img src=${image}>
<h2 id="ratings">${ratings}</h2>
<h4 id="name">${name}</h4>
<p id="description">${description}</p>
<button><a href=${links}> >Download</a></button>
</section>
`
}).join("")
if(trendingDisplay.innerHTML == ""){
trendingDisplay.innerHTML=`<h1>Entry not found</h1> <a href="/index.html" id="screen-error"><h2>Click here to return</h2></a>`
}
})
trendingDisplay.innerHTML = trendingDisplayDom
}
Display();
//THIS IS FOR THE SERIES ON THE TV/SERIES LINK
 function othersLoad(){
const Display = async()=>{
var finalResults = await getData();

var trendingDisplayDom = finalResults["series"].map((x)=>{
const {id,image,name,links,ratings,description} = x
return `
<section id="movie-zone-id-${id}">
<img src=${image}>
<h2 id="ratings">${ratings}</h2>
<h4 id="name">${name}</h4>
<p id="description">${description}</p>
<button><a href=${links}> >Download</a></button>
</section>
`
}).join("");
form.addEventListener('submit', (e) =>{
e.preventDefault();
const searchBarSearches = form.querySelector("input").value.toLowerCase();
var test = finalResults["series"].filter((product) => {
return(
product.name.toLocaleLowerCase().includes(searchBarSearches)
)
})


series.innerHTML = test.map((x)=>{
const {id,image,name,links,ratings,description} = x
return `
<section id="movie-zone-id-${id}">
<img src=${image}>
<h2 id="ratings">${ratings}</h2>
<h4 id="name">${name}</h4>
<p id="description">${description}</p>
<button><a href=${links}> >Download</a></button>
</section>
`
}).join("")
if(series.innerHTML == ""){
series.innerHTML=`<h1>Entry not found</h1> <a href="/components/others.html" id="screen-error"><h2>Click here to return</h2></a>`
}
})
series.innerHTML = trendingDisplayDom
}
Display();


 }
//THIS IS FOR THE MOVIES WHEN YOU CLICK THE MOVIES LINK
 function moviesLoad(){
const Display = async()=>{
var finalResults = await getData();

var trendingDisplayDom = finalResults["movies"].map((x)=>{
const {id,image,name,links,ratings,description} = x
return `
<section id="movie-zone-id-${id}">
<img src=${image} loading="lazy">
<h2 id="ratings">${ratings}</h2>
<h4 id="name">${name}</h4>
<p id="description">${description}</p>
<button><a href=${links}> >Download</a></button>
</section>
`
}).join("");
form.addEventListener('submit', (e) =>{
e.preventDefault();
const searchBarSearches = form.querySelector("input").value.toLowerCase();
var test = finalResults["movies"].filter((product) => {
return(
product.name.toLocaleLowerCase().includes(searchBarSearches)
)
})


movies.innerHTML = test.map((x)=>{
const {id,image,name,links,ratings,description} = x
return `
<section id="movie-zone-id-${id}">
<img src=${image} loading="lazy">
<h2 id="ratings">${ratings}</h2>
<h4 id="name">${name}</h4>
<p id="description">${description}</p>
<button><a href=${links}> >Download</a></button>
</section>
`
}).join("")
if(movies.innerHTML == ""){
movies.innerHTML=`<h1>Entry not found</h1> <a href="/components/movies.html" id="screen-error"><h2>Click here to return</h2></a>`
}
})
movies.innerHTML = trendingDisplayDom
}
Display();
 }
//this handles the slider links
function Blackish(){
window.location.href ="https://www.youtube.com/results?search_query=blackish";
}
function Alita(){
window.location.href ="https://www.youtube.com/results?search_query=alita+battle+angel";
}
function Home(){
window.location.href ="https://www.youtube.com/results?search_query=home+alone";
}