let imagesArr;
let listDiv;
let isBusieness;
let deleteImage;
let EventListenerAdd;
let EventListenerrRemove;
let idFromClick;
let showPopup;
let showImageDetailPopup;



//father to sun information and function exchange

const initialImagesList = (imagesArrFromHomePage, BusienessParam, deleteImageFromHomePage, addEventListenerFromHomePage, removeEventListenerFromHomePage, getIdFromClick, showPopupFromHomePage, showImageDetailsFromHomePage) => {
    listDiv = document.getElementById("home-page-list-images");
    isBusieness = BusienessParam;
    deleteImage = deleteImageFromHomePage;
    EventListenerAdd = addEventListenerFromHomePage;
    EventListenerrRemove = removeEventListenerFromHomePage;
    idFromClick = getIdFromClick;
    showPopup = showPopupFromHomePage
    showImageDetailPopup = showImageDetailsFromHomePage
    updateImagesList(imagesArrFromHomePage);
}
// update gallery function

const updateImagesList = (imagesArrFromHomePage) => {
    imagesArr = imagesArrFromHomePage;
    creatList();
}


const createItem = (title, alt, credit, imgUrl, img, id) => {
    // btns for the busieness account
    const busienessBtns = `

<td><button type="button" class="listBtn" id="imageListEditBtn-${id}"><i
                                    class=" bi bi-pencil-square"></i></button></td>
                      <td>  <button type="button" class="listBtn" id="imageListDeleteBtn-${id}">
                                <i class="bi bi-trash3 "></i></button></td>

`;
    //tamplate for the list display
    return `

        <tr>
                        <th scope="row" id="tableTdNo">${id}</th>
                        <td><img id="imgList-${id}" class="imgList" src="${img}" alt="${alt}"></td>
                        <td id="tableTdPic">${imgUrl}</td>
                        <td id="tableTdTitle"> ${title}</td>
                        <td id="tableTdCredit">${credit} </td>
                        <td> <button type="button" class="listBtn " id="imageListBuyBtn-${id}"> <i
                        class="bi bi-cart-plus"></i> </button></td>
                        </div>${isBusieness ? busienessBtns : ""}</div>
        </tr>
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
const handleDetaileBtnClick = (ev) => {
    showImageDetailPopup(idFromClick(ev));
}



const creatList = () => {
    let innerStr = "";
    //clear event listeners for delete btns
    EventListenerrRemove("imageListDeleteBtn", handleDeleteBtnClick);
    //clear event listeners for edit btns
    EventListenerrRemove("imageListEditBtn", handleEditBtnClick);
    //clear event listeners for imgs
    EventListenerrRemove("imgList", handleDetaileBtnClick);


    for (let image of imagesArr) {
        innerStr += createItem(
            image.title,
            image.alt,
            image.credit,
            image.imgUrl,
            image.imgUrl,
            image.id,
        )
    }
    listDiv.innerHTML = innerStr;
    // add event listeners for delete btns
    EventListenerAdd("imageListDeleteBtn", handleDeleteBtnClick);
    // add event listeners for edit btns
    EventListenerAdd("imageListEditBtn", handleEditBtnClick);
    //add event listeners to imgs
    EventListenerAdd("imgList", handleDetaileBtnClick);

}

export { initialImagesList, updateImagesList, };