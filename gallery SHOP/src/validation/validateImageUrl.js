
import validation from "./validate.js";

const validateImageUrl = (value) => {
    const reg = new RegExp(
        "\\b(?: https ?: \\/\\/)?(?:\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})(?::\\d+)?(?:\\/\\S*)?\\.(?:jpg|jpeg|png|gif|svg)\\b",
        "ig"
    );
    return validation(reg, value, 0, 255).map((err) => `*Image Url ${err} `);
};
export default validateImageUrl;





