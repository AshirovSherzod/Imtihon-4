const login = localStorage.getItem("x-auth-token")
const logOut = document.querySelector(".log__out")


function  LogOutUser() {
    if (!login) {
        window.location.replace("./login.html")
    }
}
LogOutUser()

logOut.addEventListener("click", ()=>{
    localStorage.clear()
    window.open("../index.html","_self")
})