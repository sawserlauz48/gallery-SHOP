import ImageItem from "../models/ImageItem.js";
import getNextId from "../utils/getNextId.js";
import getDate from "../utils/getCreatedAt.js";
import validateImageUrl from "../validation/validateImageUrl.js";
import validateNumbersOnly from "../validation/validateNumberOnly.js"
import { validateNumAndLetters } from "../validation/validateNumberAndLetters.js";

let selectedImage, editImage;
let priceOK = false;
let titleOK = false;
let discriptionOK = false;
let creditOK = false;
let urlOK = false;

const editImagePopupImage = document.getElementById(
    "editImagePopupImage"
);
const editImagePopupName = document.getElementById(
    "editImagePopupName"
);
const editImagePopupDiscription = document.getElementById(
    "editImagePopupDiscription"
);
const editImagePopupPrice = document.getElementById(
    "editImagePopupPrice"
);
const editImagePopupCredit = document.getElementById(
    "editImagePopupCredit"
);
const editImagePopupImageUrl = document.getElementById(
    "editImagePopupImageUrl"
);
const editPopup = document.getElementById(
    "homePagePopup"
);
const saveBtn = document.getElementById("editImagePopupSaveBtn"
);

const isEmpty = (value) => {
    return !value.trim();
}

editImagePopupPrice.addEventListener("input", () => {
    inputImagePopupPrice();
})
editImagePopupName.addEventListener("input", () => {
    inputImagePopupTitle();
});
editImagePopupCredit.addEventListener("input", () => {
    inputImagePopupCredit();
});
editImagePopupDiscription.addEventListener("input", () => {
    inputImagePopupDiscription();
});


const inputImagePopupTitle = () => {
    let errorArr = validateNumAndLetters(editImagePopupName.value);
    if (errorArr.length === 0) {
        document.getElementById("popup-alert-discription").classList.add("d-none");
        titleOK = true
    } else {
        ;
        document
            .getElementById("popup-alert-discription")
            .classList.remove("d-none");
        titleOK = false
        setTimeout(() => {
            document
                .getElementById("popup-alert-discription")
                .classList.add("d-none");
        }, 4000)
    }
    enableSaveBtn();
}
const inputImagePopupDiscription = () => {
    let errorArr = validateNumAndLetters(editImagePopupDiscription.value);
    if (errorArr.length === 0) {
        document.getElementById("popup-alert-discription").classList.add("d-none");
        discriptionOK = true
    } else {
        ;
        document
            .getElementById("popup-alert-discription")
            .classList.remove("d-none");
        discriptionOK = false
        setTimeout(() => {
            document
                .getElementById("popup-alert-discription")
                .classList.add("d-none");
        }, 4000)
    }
    enableSaveBtn();
}
const inputImagePopupCredit = () => {
    let errorArr = validateNumAndLetters(editImagePopupCredit.value);
    if (errorArr.length === 0) {
        document.getElementById("popup-alert-credit").classList.add("d-none");
        creditOK = true
    } else {
        ;
        document
            .getElementById("popup-alert-credit")
            .classList.remove("d-none");
        creditOK = false
        setTimeout(() => {
            document
                .getElementById("popup-alert-credit")
                .classList.add("d-none");
        }, 4000)
    }
    enableSaveBtn();
};
const inputImagePopupPrice = () => {
    let errorArr = validateNumbersOnly(editImagePopupPrice.value);
    if (errorArr.length === 0) {
        document.getElementById("popup-alert-price").classList.add("d-none");
        priceOK = true
    } else {
        ;
        document
            .getElementById("popup-alert-price")
            .classList.remove("d-none");
        priceOK = false
        setTimeout(() => {
            document
                .getElementById("popup-alert-price")
                .classList.add("d-none");
        }, 4000)
    }
    enableSaveBtn()
};



const checkInputUrl = () => {
    let errorArr = validateImageUrl(editImagePopupImageUrl.value);
    if (errorArr.length === 0) {
        editImagePopupImageUrl.classList.remove("is-invalid");
        document.getElementById("popup-alert").classList.add("d-none");
        urlOK = true;
    } else {
        editImagePopupImageUrl.classList.add("is-invalid");
        document
            .getElementById("popup-alert")
            .classList.remove("d-none");
        document.getElementById("popup-alert").innerHTML =
            errorArr.join("<br>");
        urlOK = false;

    }
    enableSaveBtn();
};


const initialPopup = (selectedImageFromHomePage, editImageFromHomePage) => {
    if (selectedImageFromHomePage) {
        selectedImage = selectedImageFromHomePage;
    } else {
        selectedImage = new ImageItem("", "", "", "", "", getNextId(), "", getDate())
    }

    editImage = editImageFromHomePage;

    editImagePopupImage.src = selectedImage.imgUrl;
    editImagePopupName.value = selectedImage.title;
    editImagePopupDiscription.value = selectedImage.discription;
    editImagePopupPrice.value = selectedImage.price;
    editImagePopupCredit.value = selectedImage.credit;
    editImagePopupImageUrl.value = selectedImage.imgUrl;
    showPopup();
}

const showPopup = () => {
    editPopup.classList.remove("d-none");
};

const hidePopup = () => {
    editPopup.classList.add("d-none");
};
const enableSaveBtn = () => {
    (saveBtn.disabled = !(priceOK && urlOK && titleOK && discriptionOK && creditOK));
}

window.addEventListener("load", () => {
    enableSaveBtn();
    editPopup.addEventListener("click", (ev) => {
        if (
            ev.target.id !== "homePagePopup" &&
            ev.target.id !== "editPopupChild" &&
            ev.target.id !== "editImagePopupSaveBtn" &&
            ev.target.id !== "editImagePopupCancelBtn"
        ) {
            return;
        }
        hidePopup();
    });
    saveBtn.addEventListener("click", () => {
        if (!(priceOK)) { return };

        selectedImage.title = editImagePopupName.value;
        selectedImage.discription = editImagePopupDiscription.value;
        selectedImage.price = editImagePopupPrice.value;
        selectedImage.credit = editImagePopupCredit.value;
        selectedImage.imgUrl = editImagePopupImageUrl.value;
        editImage(selectedImage);
        hidePopup();
    })
    editImagePopupImageUrl.addEventListener("input", () => {
        editImagePopupImage.src = editImagePopupImageUrl.value;
        checkInputUrl()
    })

})

export { initialPopup, showPopup, hidePopup }