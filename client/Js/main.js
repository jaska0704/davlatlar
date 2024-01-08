"use strict";

const cardContainer = document.querySelector(".card_container");
let body = document.body;
let header = document.querySelector(".header");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  btn.classList.toggle("dark")

});


let heroBlock1 = document.querySelector(".hero_block1");
const baseUrl = "http://localhost:3000/davlatlar";


const render = (data, path) => {
  console.log(path);
  cardContainer.innerHTML = data
    ?.map(
      (item) =>
        `<a href="http://127.0.0.1:5500/pages/card.html?id=${item?.id}" id="cart" class="card dark">
                <img class="card_img" src=${item.img} alt="germany">
                <h3 class="card_title">${item.name}</h3>
                <ul class="card_list">
                    <li class="card_text">Population: <span class="card_info_text">${item.population}</span></li>
                    <li class="card_text">Region: <span class="card_info_text">${item.region}</span></li>
                    <li class="card_text">Capital: <span class="card_info_text">${item.capital}</span></li>
                </ul>
            </a>`
    )
    .join("");
};
const getData = async () => {
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();
    render(data);
  } catch (error) {
    console.log(error);
  }
};
getData();

