import { initialImagesGallery, updateImagesGallery } from "../components/Gallery.js";
import { initialImagesList, updateImagesList, } from "../components/List.js";
import { initiallImagesCarousel, updateImagesCarousel } from "../components/Carousel.js";
import checkifBusieness from "../utils/checkifBusiness.js"
import { createBtnEventListener, clearEventListeners } from "../utils/BtnEventListener.js"
import getIdFromClick from "../utils/getIdFromClick.js";
import { initialPopup } from "../components/Popup.js";
import { initialImageDetailPopup } from "../components/ImageDetailes.js"


let imagesArr, originalImageArr;
let isBusieness;

//btns
let carousalDisplay;
let galleryDisplay;
let listDisplay;
let sortUp;
let sortDown;
//divs
let carousalDiv;
let galleryDiv;
let listDiv;

let displayingNow;

window.addEventListener("load", () => {

    imagesArr = localStorage.getItem("imgs");
    if (!imagesArr) {
        return;
    }
    imagesArr = JSON.parse(imagesArr);
    originalImageArr = [...imagesArr];
    isBusieness = checkifBusieness();
    initialImagesGallery(imagesArr, isBusieness, deleteImage, createBtnEventListener, clearEventListeners, getIdFromClick, showPopup, showImageDetailPopup);
    initialImagesList(imagesArr, isBusieness, deleteImage, createBtnEventListener, clearEventListeners, getIdFromClick, showPopup, showImageDetailPopup);
    initiallImagesCarousel(imagesArr);
    initailElements();
    initialBtns();
    checkifBusieness();
    // initBusienessBtn()
})




const initailElements = () => {
    //Btns
    carousalDisplay = document.getElementById("homeDisplayCousel");
    galleryDisplay = document.getElementById("homeDisplayGallery");
    listDisplay = document.getElementById("homeDisplayList");
    sortUp = document.getElementById("homeDisplaySortASC");
    sortDown = document.getElementById("homeDisplaySortDESC");
    //divs
    carousalDiv = document.getElementById("imagesCarousal");
    galleryDiv = document.getElementById("imagesgallery");
    listDiv = document.getElementById("imagesList");
    displayingNow = carousalDiv;
    pageToDisplay(displayingNow);
}

const initialBtns = () => {
    carousalDisplay.addEventListener("click", () => {
        pageToDisplay(carousalDiv)
    });
    galleryDisplay.addEventListener("click", () => {
        pageToDisplay(galleryDiv);

    });
    listDisplay.addEventListener("click", () => {
        pageToDisplay(listDiv)
    });
    sortUp.addEventListener("click", () => {
        sortImages();
    });
    sortDown.addEventListener("click", () => {
        sortImages(false);
    });
    document.getElementById("homePageSearch").addEventListener("input", (ev) => {
        let regex = new RegExp("^" + ev.target.value, "i");
        imagesArr = originalImageArr.filter((item) => regex.test(item.title));
        updateDisplays();
    });
}

const pageToDisplay = (toDisplay) => {
    // hide what we currently showing
    displayingNow.classList.remove("d-block");
    displayingNow.classList.add("d-none");
    // show what we want to display now
    toDisplay.classList.remove("d-none");
    toDisplay.classList.add("d-block");
    //this is what we displaying now
    displayingNow = toDisplay;
};

const sortImages = (asc = true) => {
    if (asc) {
        // from a to z
        imagesArr.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        // from z to a
        imagesArr.sort((a, b) => b.title.localeCompare(a.title));
    }
    updateDisplays();

};

const updateDisplays = () => {
    updateImagesCarousel(imagesArr);
    updateImagesGallery(imagesArr);
    updateImagesList(imagesArr);
}

const saveToLocalStorage = (arrToSave) => {
    localStorage.setItem("imgs", JSON.stringify(arrToSave));
};

const deleteImage = (id) => {
    id = +id;
    originalImageArr = originalImageArr.filter((item) => item.id !== id);
    saveToLocalStorage(originalImageArr);
    imagesArr = imagesArr.filter((item) => item.id !== id);
    updateDisplays();
}

const showPopup = (id) => {
    let selectedImage = imagesArr.find((item) => item.id === +id);
    if (!selectedImage) {
        return;
    }
    initialPopup(selectedImage, editImage);
}

const showImageDetailPopup = (id) => {
    let clickedImage = imagesArr.find((item) => item.id === +id);
    if (!clickedImage) {
        return;
    }
    initialImageDetailPopup(clickedImage)
}


const editImage = () => {
    saveToLocalStorage(originalImageArr);
    updateDisplays();
}
const showNewImagePopup = () => {
    initialPopup(undefined, addNewImage);
};
const addNewImage = (newImage) => {
    originalImageArr = [...originalImageArr, newImage];
    let nextId = +newImage.id + 1;
    localStorage.setItem("nextid", nextId + "");
    imagesArr = [...originalImageArr];
    editImage();
};

export { showNewImagePopup };