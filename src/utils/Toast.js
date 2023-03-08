
const toast = document.getElementById("toast");
let id = 1;
const showToast = (msg, success = true) => {
    let thisId = id++;
    toast.innerHTML += `<div id="toastMsg-${thisId}" class="${success ? "success" : "error"
        }">${msg}`;
    setTimeout(() => {
        document.getElementById(`toastMsg-${thisId}`).remove();
    }, 5000);
};

export default showToast;
