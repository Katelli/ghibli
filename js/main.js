//Get url
import { url } from "./module.js";

//Find elements in HTML document
const cont = document.querySelector("#ghib-cont");
const menu = document.querySelector(".menu");
const btn = document.querySelector("#hamb");
const ul = document.querySelector("#ul");

//Message server
const response = await fetch(url);
console.log(response);

//Check that everything works
async function checkapi(api) {
  try {
    CardCreators();
  } catch {
    throw new console.error(api.statusText);
  }
}

//Convert from JSON to JavaScript Object
const data = await response.json();
console.log(data);

checkapi(response);

function CardCreators() {
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const li = document.createElement("li");
    const a = document.createElement("a");
    const txt = document.createTextNode(data[i].description);
    const name = document.createTextNode(data[i].title);
    //Append text to elements
    h2.append(name.textContent);
    p.append(txt);
    li.append(a);
    a.append(name);
    //Add classname
    div.classList = "card";
    //Add unique ID
    let idea = name.textContent;
    //Remove whitespace!!! Or else the anchor won't work
    div.id = idea.replaceAll(/\s/g, "");

    a.href = "#" + idea.replaceAll(/\s/g, "");
    img.src = `${data[i].image}`;
    img.alt = `Movie poster for ${data[i].title}`;

    //Add element2 inside element1, the position counts
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(p);
    cont.appendChild(div);
    ul.appendChild(li);
  }
}

//Added a hamburger menu
const movie = document.querySelectorAll("li");
const heading = document.querySelector("h3");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    btn.classList = "hamburger-icon";
  } else {
    menu.classList.add("showMenu");
    btn.classList = "close-icon";
  }
}

btn.addEventListener("click", toggleMenu);

movie.forEach(function (movie) {
  movie.addEventListener("click", toggleMenu);
});

heading.addEventListener("click", toggleMenu);
