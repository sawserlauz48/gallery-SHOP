import PAGES from "./models/pageModel.js";
import { pageChange } from "./routes/router.js";
import "./initialData/initalData.js"
import "./pages/RegisterPage.js";
import "./pages/LoginPage.js";
import "./pages/HomePage.js";
import "./pages/ProfilePage.js";
import { showNewImagePopup } from "./pages/HomePage.js";
import initialNavbar from "./components/Navbar.js";
import checkIfConnected from "./utils/ifConnected.js";


// linking links to divs
const navLogoLink = document.getElementById("nav-logo-link");
const navHomeLink = document.getElementById("nav-homepage-link");
const navAboutUsLink = document.getElementById("nav-aboutus-link");
const navRigesterLink = document.getElementById("nav-rigister-link");
const navLoginLink = document.getElementById("nav-login-link");
const navEditProfilePage = document.getElementById("nav-edit-profile-link");
const navLogout = document.getElementById("nav-logout");
const rigesterHereLink = document.getElementById("rigester-Here-link");
const err404Homepage = document.getElementById("err404Homepage");
const err404ClickHere = document.getElementById("err404ClickHere");


window.addEventListener("load", () => {
  initialNavbar(showNewImagePopup);
  if (checkIfConnected()) {
    let user = localStorage.getItem("token");
    user = JSON.parse(user);
    navEditProfilePage.innerHTML = (`<div><i class="bi bi-file-earmark-person mx-2" id="profileIcon"></i>
                          <i class="bi bi-file-earmark-person-fill mx-2 d-none" id="profileIconFill"></i>                                         </div>`) + user.name;
  }
});

navLogoLink.addEventListener("click", () => {
  pageChange(PAGES.HOME);
});
navHomeLink.addEventListener("click", () => {
  pageChange(PAGES.HOME);
});
navAboutUsLink.addEventListener("click", () => {
  pageChange(PAGES.ABOUT);
});
navRigesterLink.addEventListener("click", () => {
  pageChange(PAGES.REGISTER);
});
navLoginLink.addEventListener("click", () => {
  pageChange(PAGES.LOGIN);
});
navEditProfilePage.addEventListener("click", () => {
  pageChange(PAGES.PROFILE);
});
rigesterHereLink.addEventListener("click", () => {
  pageChange(PAGES.REGISTER);
})
err404Homepage.addEventListener("click", () => {
  pageChange(PAGES.HOME);
})
err404ClickHere.addEventListener("click", () => {
  pageChange(PAGES.HOME);
})
navLogout.addEventListener("click", () => {
  localStorage.removeItem("token");
  location.reload();
});