import ImageItem from "../models/ImageItem.js";


const imageDetailPopup = document.getElementById("imageDetailPopup");
const imageDetailimg = document.getElementById("imageDetailimg");
const imageDetailPic = document.getElementById("imageDetailPic");
const imageDetailTitle = document.getElementById("imageDetailTitle");
const imageDetailAlt = document.getElementById("imageDetailAlt");
const imageDetailcreatedAt = document.getElementById("imageDetailcreatedAt");
const imageDetailCredit = document.getElementById("imageDetailCredit");
const imageDetailPrice = document.getElementById("imageDetailPrice");
const imageDetailDiscription = document.getElementById("imageDetailDiscription");
const imageDetailId = document.getElementById("imageDetailId");
const backBtn = document.getElementById("backBtn");
let selectedImage;

const initialImageDetailPopup = (selectedImageFronHomePage) => {
    if (selectedImageFronHomePage) {
        selectedImage = selectedImageFronHomePage;
    }
    imageDetailimg.src = selectedImage.imgUrl;
    imageDetailimg.alt = selectedImage.alt;
    imageDetailPic.innerHTML = "  " + selectedImage.imgUrl;
    imageDetailTitle.innerHTML = "  " + selectedImage.title;
    imageDetailAlt.innerHTML = "  " + selectedImage.alt;
    imageDetailcreatedAt.innerHTML = "  " + selectedImage.createdAt;
    imageDetailCredit.innerHTML = "  " + selectedImage.credit;
    imageDetailPrice.innerHTML = "  " + selectedImage.price + "$";
    imageDetailDiscription.innerHTML = "  " + selectedImage.discription;
    imageDetailId.innerHTML = "  " + selectedImage.id;
    showImageDetailPopup();
}


const showImageDetailPopup = () => {
    imageDetailPopup.classList.remove("d-none");
};

const hideImageDetailPopup = () => {
    imageDetailPopup.classList.add("d-none");
};


window.addEventListener("load", () => {
    imageDetailPopup.addEventListener("click", (ev) => {
        if (
            ev.target.id !== "imageDetailPopup" &&
            ev.target.id !== "imageDetailPopupFather" &&
            ev.target.id !== "main" &&
            ev.target.id !== "backBtn"
        ) {
            return;
        }
        hideImageDetailPopup();
    });
});

export {
    initialImageDetailPopup, showImageDetailPopup, hideImageDetailPopup
}