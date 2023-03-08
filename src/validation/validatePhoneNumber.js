import validate from "./validate.js";

const validatePhoneNumber = (value) => {
    const reg = new RegExp("^\\+?(972|0)(\\-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$");
    return validate(reg, value, 2, 255).map((err) => `*Phone number is ${err}`);
};

export default validatePhoneNumber;