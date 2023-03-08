let imagesArr;
let galleryDiv;
let isBusieness;
let deleteImage;
let EventListenerAdd;
let EventListenerRemove;
let idFromClick;
let showPopup;
let showImageDetailPopup;

//father to sun information and function exchange
const initialImagesGallery = (imagesArrFromHomePage, BusienessParam, deleteImageFromHomePage, addEventListenerFromHomePage, removeEventListenerFromHomePage, getIdFromClick, showPopupFromHomePage, showImageDetailsFromHomePage) => {
    galleryDiv = document.getElementById("home-page-gallery-images");
    isBusieness = BusienessParam;
    deleteImage = deleteImageFromHomePage;
    EventListenerAdd = addEventListenerFromHomePage;
    EventListenerRemove = removeEventListenerFromHomePage;
    idFromClick = getIdFromClick;
    showPopup = showPopupFromHomePage;
    showImageDetailPopup = showImageDetailsFromHomePage;
    updateImagesGallery(imagesArrFromHomePage)
}
// update gallery function
const updateImagesGallery = (imagesArrFromHomePage) => {
    imagesArr = imagesArrFromHomePage;
    creatGallery()
}


const createCard = (title, alt, credit, price, img, id) => {
    // btns for the busieness account

    const busienessBtns = `
    <div class="d-flex justify-content-between">
            <button type="button" class="customBtn w-100"
                    id="imageGalleryEditBtn-${id}">
                    <i class="bi bi-pencil-square mx-2"></i>  Edit
            </button>

            <button type="button" class="customBtn w-100"
                    id="imageGalleryDeleteBtn-${id}">
                    <i class="bi bi-trash3 mx-2"></i></i> Delete
            </button>
    </div>
`;

    //tamplate for the gallery display

    return `
<div class="col mb-3">
    <div class="card p-0 customCard" style="width: 18rem;">
        <img id="imgGallery-${id}" src="${img}" class="card-img-top"alt="${alt} ">
            <div class="card-body">

                <h5 class="card-text">${title}</h5>
            </div>

            <div class=" p-2">credit: ${credit}</div>
            <div class="d-flex justify-content-between p-2">
                <div>price: ${price}$</div>
                <div>CART ICON</div>
            </div>
            <div>
            <button type="button" class="customBtn w-100"
                    id="propertyListBuyBtn-${id}">
                    <i class="bi bi-cart-plus mx-2"></i> Buy
            </button>
            </div>
            ${isBusieness ? busienessBtns : ""}


    </div>
</div>

`

}
//function to del based on id from click

const handleDeleteBtnClick = (ev) => {
    deleteImage(idFromClick(ev));
};
//function to edit the popup based on id from click

const handleEditBtnClick = (ev) => {
    showPopup(idFromClick(ev));
};
//function to show the popup based on id from click

const handleImageBtnClick = (ev) => {
    showImageDetailPopup(idFromClick(ev));
}

const creatGallery = () => {

    //clear event listeners for delete btns
    EventListenerRemove("imageGalleryDeleteBtn", handleDeleteBtnClick);
    //clear event listeners for edit btns
    EventListenerRemove("imageGalleryEditBtn", handleEditBtnClick);
    //clear event listeners for imgs
    EventListenerRemove("imgGallery", handleImageBtnClick);


    let innerStr = "";
    for (let image of imagesArr) {
        innerStr += createCard(
            image.title,
            image.alt,
            image.credit,
            image.price,
            image.imgUrl,
            image.id,
        )
    }
    galleryDiv.innerHTML = innerStr;
    // add event listeners for delete btns
    EventListenerAdd("imageGalleryDeleteBtn", handleDeleteBtnClick);
    // add event listeners for edit btns
    EventListenerAdd("imageGalleryEditBtn", handleEditBtnClick);
    //add event listeners to imgs
    EventListenerAdd("imgGallery", handleImageBtnClick);

}

export { initialImagesGallery, updateImagesGallery }