import validation from "./validate.js";

const validatePassword = (value) => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{0,}$",
    "g"
  );
  return validation(reg, value, 8, 255).map((err) => `*Password is ${err}`);
};
export default validatePassword;
