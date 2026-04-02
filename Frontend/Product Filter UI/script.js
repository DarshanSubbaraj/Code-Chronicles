let body = document.querySelector(".product-container");
async function loadProducts() {
    let res = await fetch('products.json');
    const products = await res.json();
    body.innerHTML=products.map(p=>
        `<div class="cards">
        <img src=${p.image}>
        <h1 class="itemname">${p.name}</h1>
        <li class="category">${p.category}</li>
        <li class="price">${p.price}</li>
        <li class="rating">${p.rating}</li>
        <li class="stock">${p.stock}</li>
        </div>`
    ).join('');
}
loadProducts();

let itemname=document.querySelector(".itemname");
let category=document.querySelector(".category");
let price=document.querySelector(".price");
let rating=document.querySelector(".rating");
let stock=document.querySelector(".stock");

