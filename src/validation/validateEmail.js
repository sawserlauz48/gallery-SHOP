import validation from "./validate.js";

const validateEmail = (value) => {
  const reg = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
    "ig"
  );
  return validation(reg, value, 5, 255).map((err) => `*e-mail is ${err} `);
};
export default validateEmail;
