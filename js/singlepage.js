import { API_URL, singleCard} from "./const.js";

async function fetchData(url) {
    let param = new  URLSearchParams(window.location.search)
    let id = param.get("id")

    const data = await fetch(`${url}/products/${id}`)

    data.json()
        .then(res => createContent(res))
        .catch(err => console.log(err))
}
fetchData(API_URL)
function createContent(data) {
    console.log(data);
    singleCard.innerHTML = `
    <div class="single__left">
        <img src="${data.image}" alt="">
    </div>
    <div class="single__right">
        <div class="single__right__title">
            <h1 class="single__title">${data.title}</h1>
            <div class="single__right__rating">

            </div>
            <p class="single__">$${data.price}</p>
            <p>${data.description}</p>
        </div>
        <div class="single__right__btns">
            <div class="single__right__sizebtns">
                <h2>Size:</h2>
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>Xl</button>
            </div>
            <div class="single__right__CBL">
                <div class="single__right__counter">
                    <button>-</button>
                    <button disabled style="color: black;">2</button>
                    <button>+</button>
                </div>
                <div class="single__right__BL">
                    <button>Buy Now</button>
                    <button><img src="../images/nav/nav-like.svg" alt=""></button>
                </div>
            </div>
        </div>
        <div class="single__right__delivery">

        </div>
    </div>
    `
}


