import { API_URL, productsCards, seeMoreBtn, hrefSignin } from "./const.js";

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
            <div class="products__cards__card" data-id="${product.id}">
                <div class="products__cards__card__img">
                    <img class="card__img" src="${product.image}" alt="">
                </div>
                <div class="products__cards__card__desc">
                    <h1 class="products__line__clamp">${product.title}</h1>
                    <div class="products__cards__card__dDesc">
                        <p class="products__cards__card__price">$${product.price}</p>
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

productsCards.addEventListener("click", e => {
    if(e.target.className === "card__img") {
        let id = e.target.closest(".products__cards__card").dataset.id
        window.open(`./pages/singlepages.html?id=${id}`, "_self")
        console.log(id );
    }
})

function adminLogin() {
    let login = localStorage.getItem("x-auth-token")
    if (login) {
         hrefSignin.innerHTML = "Admin Panel"
         hrefSignin.setAttribute("href", "./pages/admin.html");
    }
    else{
         hrefSignin.innerHTML = "Sgin in"
         hrefSignin.setAttribute("href", "./pages/login.html");
    }
     
}

adminLogin()