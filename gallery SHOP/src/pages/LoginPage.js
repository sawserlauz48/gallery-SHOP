
const loginInputEmail = document.getElementById("loginEmailInput");
const loginInputPassword = document.getElementById("loginPasswordInput");
const loginBtn = document.getElementById("loginBtnPage");
const loginRemeberMe = document.getElementById("rememberMe");

loginBtn.addEventListener("click", () => {

    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
        return;
    }
    let user = users.find((item) =>
        item.email === loginInputEmail.value && item.password === loginInputPassword.value);
    if (!user) {
        document.getElementById("loginAlert").classList.remove("d-none");
        scrollTo(0, 0);
    }
    localStorage.setItem(
        "token",
        JSON.stringify({
            name: user.name,
            email: user.email,
            business: user.business,
            id: user.id,
        })
    );

    location.reload();
}
)




