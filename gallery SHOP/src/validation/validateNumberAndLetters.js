import validate from "./validate.js";


const validateNumAndLetters = (value) => {
    let reg = new RegExp("^[a-zA-Z0-9]+$");
    return validate(reg, value, 0, 255).map((err) => `*${err}`);

}

const validateLettersOnly = (value) => {
    let reg = new RegExp("^[a-zA-Z ]+$");
    return validate(reg, value, 0, 255).map((err) => `*${err}`);
}


export { validateLettersOnly, validateNumAndLetters };



