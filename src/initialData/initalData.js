import ImageItem from "../models/ImageItem.js"
import getDate from "../utils/getCreatedAt.js";
let id = 1;
let nextUserId = 1;


const createData = () => {
    let imgesArr = [
        new ImageItem(

            "snake eagle",
            "snake eagle",
            "Sawser Lauz",
            500,
            "./assets/images/pic1.JPG",
            id++,
            "a short toed snake eagle resting aside a hill ",
            getDate(),
        ),
        new ImageItem(

            "Foxs",
            "Foxs",
            "Sawser Lauz",
            400,
            "./assets/images/pic2.JPG",
            id++,
            "Eight week old fox pups starting the day playing  ",
            getDate(),
        ),
        new ImageItem(

            "Gazele",
            "Gazele",
            "Sawser Lauz",
            600,
            "./assets/images/pic3.JPG",
            id++,
            "Gazelle roming around serching for fresh patch of grass ",
            getDate(),
        ),
        new ImageItem(

            "Honey Bee",
            "Honey Bee",
            "Sawser Lauz",
            800,
            "./assets/images/pic4.JPG",
            id++,
            "Honey bee drinking fresh water on a summer day",
            getDate(),

        ),
    ];
    return imgesArr;
}

const setInitialData = () => {
    let images = localStorage.getItem("imgs");
    if (images) {
        return
    }
    localStorage.setItem("imgs", JSON.stringify(createData()));
    localStorage.setItem("nextid", id + "");
    localStorage.setItem("nextUserid", nextUserId + "");

}

setInitialData();