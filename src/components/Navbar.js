import checkIfConnected from "../utils/ifConnected.js"
import checkifBusieness from "../utils/checkifBusiness.js"
import getNextId from "../utils/getNextId.js";

const navBeforeLogin = document.getElementById("navBeforeLogin");
const navAfterLogin = document.getElementById("navAfterLogin");
const navHomepageLink = document.getElementById("nav-homepage-link");
const navAboutusLink = document.getElementById("nav-aboutus-link");
const navAddNewPictureLink = document.getElementById("nav-add-new-picture-link");
const navRigisterLink = document.getElementById("nav-rigister-link");
const navLoginLink = document.getElementById("nav-login-link");
const navEditProfileLink = document.getElementById("nav-edit-profile-link");
const navLogout = document.getElementById("nav-logout");

navHomepageLink.addEventListener("mouseover", () => {
    document.getElementById("homeIcon").classList.remove("d-block");
    document.getElementById("homeIcon").classList.add("d-none");
    document.getElementById("homeIconFill").classList.remove("d-none");
    document.getElementById("homeIconFill").classList.add("d-block");
})
navHomepageLink.addEventListener("mouseleave", () => {
    document.getElementById("homeIconFill").classList.remove("d-block");
    document.getElementById("homeIconFill").classList.add("d-none");
    document.getElementById("homeIcon").classList.remove("d-none");
    document.getElementById("homeIcon").classList.add("d-block");
});
navAboutusLink.addEventListener("mouseover", () => {
    document.getElementById("infoIcon").classList.remove("d-block");
    document.getElementById("infoIcon").classList.add("d-none");
    document.getElementById("infoIconFill").classList.remove("d-none");
    document.getElementById("infoIconFill").classList.add("d-block");
})
navAboutusLink.addEventListener("mouseleave", () => {
    document.getElementById("infoIconFill").classList.remove("d-block");
    document.getElementById("infoIconFill").classList.add("d-none");
    document.getElementById("infoIcon").classList.remove("d-none");
    document.getElementById("infoIcon").classList.add("d-block");
});
navAddNewPictureLink.addEventListener("mouseover", () => {
    document.getElementById("addIcon").classList.remove("d-block");
    document.getElementById("addIcon").classList.add("d-none");
    document.getElementById("addIconFill").classList.remove("d-none");
    document.getElementById("addIconFill").classList.add("d-block");
})
navAddNewPictureLink.addEventListener("mouseleave", () => {
    document.getElementById("addIconFill").classList.remove("d-block");
    document.getElementById("addIconFill").classList.add("d-none");
    document.getElementById("addIcon").classList.remove("d-none");
    document.getElementById("addIcon").classList.add("d-block");
});
navRigisterLink.addEventListener("mouseover", () => {
    document.getElementById("regIcon").classList.remove("d-block");
    document.getElementById("regIcon").classList.add("d-none");
    document.getElementById("regIconFill").classList.remove("d-none");
    document.getElementById("regIconFill").classList.add("d-block");
})
navRigisterLink.addEventListener("mouseleave", () => {
    document.getElementById("regIconFill").classList.remove("d-block");
    document.getElementById("regIconFill").classList.add("d-none");
    document.getElementById("regIcon").classList.remove("d-none");
    document.getElementById("regIcon").classList.add("d-block");
});
navLoginLink.addEventListener("mouseover", () => {
    document.getElementById("loginIcon").classList.remove("d-block");
    document.getElementById("loginIcon").classList.add("d-none");
    document.getElementById("loginIconFill").classList.remove("d-none");
    document.getElementById("loginIconFill").classList.add("d-block");
})
navLoginLink.addEventListener("mouseleave", () => {
    document.getElementById("loginIconFill").classList.remove("d-block");
    document.getElementById("loginIconFill").classList.add("d-none");
    document.getElementById("loginIcon").classList.remove("d-none");
    document.getElementById("loginIcon").classList.add("d-block");
});
navEditProfileLink.addEventListener("mouseover", () => {
    document.getElementById("profileIcon").classList.remove("d-block");
    document.getElementById("profileIcon").classList.add("d-none");
    document.getElementById("profileIconFill").classList.remove("d-none");
    document.getElementById("profileIconFill").classList.add("d-block");
})
navEditProfileLink.addEventListener("mouseleave", () => {
    document.getElementById("profileIconFill").classList.remove("d-block");
    document.getElementById("profileIconFill").classList.add("d-none");
    document.getElementById("profileIcon").classList.remove("d-none");
    document.getElementById("profileIcon").classList.add("d-block");
});
navLogout.addEventListener("mouseover", () => {
    document.getElementById("logoutIcon").classList.remove("d-block");
    document.getElementById("logoutIcon").classList.add("d-none");
    document.getElementById("logoutIconFill").classList.remove("d-none");
    document.getElementById("logoutIconFill").classList.add("d-block");
})
navLogout.addEventListener("mouseleave", () => {
    document.getElementById("logoutIconFill").classList.remove("d-block");
    document.getElementById("logoutIconFill").classList.add("d-none");
    document.getElementById("logoutIcon").classList.remove("d-none");
    document.getElementById("logoutIcon").classList.add("d-block");
});


let nextId;
let isConnected;
let isBusieness;
let showPopup;

let navAddNewImageLink;

const initialNavbar = (showPopupFromApp) => {
    nextId = getNextId();
    isBusieness = checkifBusieness();
    isConnected = checkIfConnected();

    if (isConnected) {
        navBeforeLogin.classList.add("d-none");
        navAfterLogin.classList.remove("d-none");
    }
    showPopup = showPopupFromApp;

    navAddNewImageLink = document.getElementById("nav-add-new-picture-link");

    if (!isBusieness) {
        navAddNewImageLink.classList.add("d-none");
    }
    navAddNewImageLink.addEventListener("click", () => {
        showPopup();
    });
};


export default initialNavbar;

