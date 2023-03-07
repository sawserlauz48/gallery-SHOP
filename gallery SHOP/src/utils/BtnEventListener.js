
//Creates event listener for the delete buttons
const createBtnEventListener = (idKeyword, handleFunction) => {
    let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
    //add events to new btns
    for (let btn of btns) {
        btn.addEventListener("click", handleFunction)
            ;
    }
};
//remove event listener for the delete buttons
const clearEventListeners = (idKeyword, handleFunction) => {
    //get all old btns
    let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}-']`);
    //remove old events
    for (let btn of btnsBefore) {
        btn.removeEventListener("click", handleFunction);
    }
};


export { createBtnEventListener, clearEventListeners }