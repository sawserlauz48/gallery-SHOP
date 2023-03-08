let imagesArr;
let carouselDiv;

const initiallImagesCarousel = (imagesArrFromHomePage) => {
    imagesArr = imagesArrFromHomePage;
    carouselDiv = document.getElementById("home-page-carousal-images");
    updateImagesCarousel(imagesArrFromHomePage);

}

const updateImagesCarousel = (imagesArrFromHomePage) => {
    imagesArr = imagesArrFromHomePage;
    creatCarousel();
}


const createImgcarousel = (img, alt) => {
    return `
    
<div class="carousel-item active">
        <img src="${img}" class="d-block w-100" alt="${alt}">
</div>
    
`

}

const creatCarousel = () => {
    let innerStr = "";
    for (let image of imagesArr) {
        innerStr += createImgcarousel(
            image.imgUrl,
            image.alt,
        )
    }
    carouselDiv.innerHTML = innerStr;
    //select all carousel imgs
    let img = document.querySelectorAll(".carousel-item");
    //make it to array
    img = Array.from(img);
    //filter the first img
    img = img.filter((item, index) => index)
    //function to remove class of "active" from the divs
    const remove = (divsFromArr) => {
        divsFromArr.classList.remove("active")
    }
    //run the function on all the divs in the array
    img.forEach(remove)
}



export { initiallImagesCarousel, updateImagesCarousel };