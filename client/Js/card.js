let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let path = params.get("path");
const baseUrl = "http://localhost:3000/davlatlar";

let mainBox = document.querySelector(".main-box");
let body = document.body;
let header = document.querySelector(".header");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  btn.classList.toggle("dark");
});


const renderCard = (data) => {
  mainBox.innerHTML = `
         <div class="box1 w-1/2">
        <img class="w-full" src=${data.img} alt="" />
      </div>
      <div class="box2 w-1/2">
        <div class="flex justify-center items-center">
          <div class="w-1/2">
            <h1 class="text-red-600 text-3xl">${data.name}</h1>
            <p class="inline-block text-base font-semibold mr-5 mt-5">Native Name:</p>
            <span class="text-base font-light text-slate-500">${data.name}</span> <br />
            <p class="inline-block text-base font-semibold mr-5 mt-5">Population:</p>
            <span class="text-base font-light text-slate-500">${data.population}</span> <br />
            <p class="inline-block text-base font-semibold mr-5 mt-5">Region:</p>
            <span class="text-base font-light text-slate-500">${data.region}</span> <br />
            <p class="inline-block text-base font-semibold mr-5 mt-5">Sub Region:</p>
            <span class="text-base font-light text-slate-500">Western ${data.region}</span> <br />
            <p class="inline-block text-base font-semibold mr-5 mt-5">Capital:</p>
            <span class="text-base font-light text-slate-500">${data.capital}</span> <br />
          </div>
          <div class="w-1/2">
            <p class="inline-block mr-5 mt-5">Top Level Domain:</p><span>be</span><br>
            <p class="inline-block mr-5 mt-5">Currencies:</p><span>Euro</span><br>
            <p class="inline-block mr-5 mt-5">Lang:</p><span class="inline-block ">Dutch, French, German</span>
          </div>
        </div>
        <div>
            
        </div>
      </div>`;
  localStorage.setItem("products", JSON.stringify(oldProducts));
  item_count.textContent = oldProducts.reduce((a, b) => b.userCount + a, 0);
};
console.log(id );
const renderProductDetail = async () => {
  try {
    const res = await fetch(`${baseUrl}/${id}`);
    product = await res.json();
    console.log(product);
    // let el = oldProducts.find((item) => item.id === product.id);
    renderCard(product);
  } catch (error) {}
};
renderProductDetail();

