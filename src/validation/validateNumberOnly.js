
import validate from "./validate.js";


const validateNumbersOnly = (value) => {
    let reg = new RegExp("^[1-9]\\d*$");
    return validate(reg, value, 0, 255).map((err) => `*${err}`);
}

export default validateNumbersOnly;