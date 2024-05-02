import { API__URL, form, inputPassword, inputUsername } from "./const.js";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let product = {
        username: inputUsername.value,
        password: inputPassword.value,
    };
    logIn(product);
});

async function logIn(p) {
    console.log(p);
    await fetch(`${API__URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(p),
    })
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                throw new Error("Foydalanuvchi nomi yoki paroli noto'g'ri");
            }
            return response.json();
        })
        .then((res) => {
            console.log(res);
            localStorage.setItem("x-auth-token", res.token);
            window.open("../pages/admin.html", "_self");
        })
        .catch((error) => alert(error.message));
}