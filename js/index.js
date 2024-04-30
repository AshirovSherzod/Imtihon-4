import { API_URL, productsCards, seeMoreBtn } from "./const.js";

let limitcount = 8
let count = 1

document.addEventListener("DOMContentLoaded", ()=>{
    getAPI(API_URL)
})

async function getAPI(url) {
    let data = await fetch(`${url}/products?limit=${limitcount * count}`, {
        method: "GET"
    })

    data.json()
        .then(res => mapCards(res))
        .catch(err => console.log(err))
}

function mapCards(data) {
    let newData = ""

    data.forEach(product => {
        newData += `
            <div class="products__cards__card">
                <div class="products__cards__card__img">
                    <img src="${product.image}" alt="">
                </div>
                <div class="products__cards__card__desc">
                    <h1 class="products__line__clamp">${product.title}</h1>
                    <div class="products__cards__card__dDesc">
                        <p>$${product.price}</p>
                        <p>(${product.rating.count})</p>
                    </div>
                </div>
            </div>
        `
    });

    productsCards.innerHTML = newData
}
console.log(productsCards);

seeMoreBtn.addEventListener("click", e => {
    count++
    getAPI(API_URL)
})
