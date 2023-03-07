
import { validateName, validateLastName } from "../validation/validateName.js";
import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import { validateLettersOnly, validateNumAndLetters } from "../validation/validateNumberAndLetters.js";
import validatePhoneNumber from "../validation/validatePhoneNumber.js";
import showToast from "../utils/Toast.js"


//linking html elements to js
const inputFirstName = document.getElementById("floatingProfilePageFirstName");
const inputLastName = document.getElementById("floatingProfilePageLastName");
const inputState = document.getElementById("floatingProfilePageState");
const inputCountry = document.getElementById("floatingProfilePageCountry");
const inputCity = document.getElementById("floatingProfilePageCity");
const inputStreet = document.getElementById("floatingProfilePageStreet");
const inputHouseNumber = document.getElementById("floatingProfilePageHouseNumber");
const inputZipCode = document.getElementById("floatingProfilePageZipCode");
const inputEmail = document.getElementById("floatingProfilePageEmail");
const inputPhone = document.getElementById("floatingProfilePagePhone");
const inputPassword = document.getElementById("floatingProfilePagePassword");
const inputRePassword = document.getElementById("floatingProfilePageRePassword");
const businessCheckBox = document.getElementById("ProfilePageBusinessCheckBox");
const updateBtn = document.getElementById("updateProfilePageBtn");



//var for conditions
let firstNameOk = false;
let lastNameOk = false;
let emailOk = false;
let passwordOk = false;
let rePasswordOk = false;

window.addEventListener("load", () => {

    let users = localStorage.getItem("users");
    let token = localStorage.getItem("token");
    if (users && token) {
        //we have users
        users = JSON.parse(users); // convert from string to array of objects
        token = JSON.parse(token);
        let user = users.find((item) => item.id === token.id);
        if (user) {
            inputFirstName.value = user.name;
            inputLastName.value = user.lastName;
            inputState.value = user.state;
            inputCountry.value = user.country;
            inputCity.value = user.city;
            inputStreet.value = user.street;
            inputHouseNumber.value = user.house;
            inputZipCode.value = user.zip;
            inputEmail.value = user.email;
            inputPhone.value = user.phone;
            inputPassword.value = user.password;
            inputRePassword.value = user.password;
            businessCheckBox.value = user.business;
        }
    }
    if (inputFirstName.value !== "") {
        checkInputName();

    }
    if (inputLastName.value !== "") {
        checkInputLastName();
    }
    if (inputEmail.value !== "") {
        checkInputEmail();
    }
    if (inputPassword.value !== "") {
        checkInputPassword();
    }
    if (inputRePassword.value !== "") {
        checkInputRePassword();
    }
    if (inputState.value !== "") {
        checkInputState();
    }
    if (inputCountry.value !== "") {
        checkInputCountry();
    }
    if (inputCity.value !== "") {
        checkInputCity();
    }
    if (inputStreet.value !== "") {
        checkInputStreet();
    }
    if (inputHouseNumber.value !== "") {
        checkInputHouse();
    }
    if (inputZipCode.value !== "") {
        checkInputZip();
    }
    if (inputPhone.value !== "") {
        checkInputPhone();
    }
});

inputFirstName.addEventListener("input", () => {
    checkInputName();
});
inputLastName.addEventListener("input", () => {
    checkInputLastName();
});
inputEmail.addEventListener("input", () => {
    checkInputEmail();
});
inputPassword.addEventListener("input", () => {
    checkInputPassword();
});
inputRePassword.addEventListener("input", () => {
    checkInputRePassword();
});
inputState.addEventListener("input", () => {
    checkInputState();
});
inputCountry.addEventListener("input", () => {
    checkInputCountry();
});
inputCity.addEventListener("input", () => {
    checkInputCity();
});
inputStreet.addEventListener("input", () => {
    checkInputStreet();
});
inputHouseNumber.addEventListener("input", () => {
    checkInputHouse();
});
inputZipCode.addEventListener("input", () => {
    checkInputZip();
});
inputPhone.addEventListener("input", () => {
    checkInputPhone();
});


const checkInputName = () => {
    let errorArr = validateName(inputFirstName.value);
    if (errorArr.length === 0) {
        inputFirstName.classList.remove("is-invalid");
        document.getElementById("profile-alert-firstName").classList.add("d-none");
        firstNameOk = true;
    } else {
        inputFirstName.classList.add("is-invalid");
        document
            .getElementById("profile-alert-firstName")
            .classList.remove("d-none");
        document.getElementById("profile-alert-firstName").innerHTML =
            errorArr.join("<br>");
        firstNameOk = false;
    }
    enableUpdateBtn();
};

const checkInputLastName = () => {
    let errorArr = validateLastName(inputLastName.value);
    if (errorArr.length === 0) {
        inputLastName.classList.remove("is-invalid");
        document.getElementById("profile-alert-lastName").classList.add("d-none");
        lastNameOk = true;
    } else {
        inputLastName.classList.add("is-invalid");
        document
            .getElementById("profile-alert-lastName")
            .classList.remove("d-none");
        document.getElementById("profile-alert-lastName").innerHTML =
            errorArr.join("<br>");
        lastNameOk = false;
    }
    enableUpdateBtn()
};

const checkInputEmail = () => {
    let errorArr = validateEmail(inputEmail.value);
    if (errorArr.length === 0) {
        inputEmail.classList.remove("is-invalid");
        document.getElementById("profile-alert-email").classList.add("d-none");
        emailOk = true;
    } else {
        inputEmail.classList.add("is-invalid");
        document.getElementById("profile-alert-email").classList.remove("d-none");
        document.getElementById("profile-alert-email").innerHTML =
            errorArr.join("<br>");
        emailOk = false;
    }
    enableUpdateBtn();
}

const checkInputPassword = () => {
    let errorArr = validatePassword(inputPassword.value);
    if (errorArr.length === 0) {
        inputPassword.classList.remove("is-invalid");
        document.getElementById("profile-alert-password").classList.add("d-none");
        passwordOk = true;
    } else {
        inputPassword.classList.add("is-invalid");
        document.getElementById("profile-alert-password").classList.remove("d-none");
        document.getElementById("profile-alert-password").innerHTML =
            errorArr.join("<br>");
        passwordOk = false;
    }
    enableUpdateBtn();
}
const checkInputRePassword = () => {
    if ((inputPassword.value) !== (inputRePassword.value)) {
        document.getElementById("profile-alert-rePassword").classList.remove("d-none");
        document.getElementById("profile-alert-rePassword").innerHTML = ("Password not matching")
        rePasswordOk = false;
    } else {
        document.getElementById("profile-alert-rePassword").classList.add("d-none");
        rePasswordOk = true;
    }
    enableUpdateBtn();
}
const checkInputState = () => {
    let errorArr = validateLettersOnly(inputState.value);
    if (errorArr.length === 0) {
        document.getElementById("profile-alert-state").classList.add("d-none");
    } else {

        document
            .getElementById("profile-alert-state")
            .classList.remove("d-none");
        setTimeout(() => {
            document
                .getElementById("profile-alert-state")
                .classList.add("d-none");
        }, 4000)

    }
};

const checkInputCountry = () => {
    let errorArr = validateLettersOnly(inputCountry.value);
    if (errorArr.length === 0) {
        document.getElementById("profile-alert-Country").classList.add("d-none");
    } else {
        document
            .getElementById("profile-alert-Country")
            .classList.remove("d-none");
        setTimeout(() => {
            document
                .getElementById("profile-alert-Country")
                .classList.add("d-none");
        }, 4000)
    }
};
const checkInputCity = () => {
    let errorArr = validateLettersOnly(inputCity.value);
    if (errorArr.length === 0) {
        document.getElementById("profile-alert-City").classList.add("d-none");
    } else {
        document
            .getElementById("profile-alert-City")
            .classList.remove("d-none");
        setTimeout(() => {
            document
                .getElementById("profile-alert-City")
                .classList.add("d-none");
        }, 4000)
    }
};
const checkInputStreet = () => {
    let errorArr = validateNumAndLetters(inputStreet.value);
    if (errorArr.length === 0) {
        document.getElementById("profile-alert-Street").classList.add("d-none");
    } else {
        document
            .getElementById("profile-alert-Street")
            .classList.remove("d-none");
        setTimeout(() => {
            document
                .getElementById("profile-alert-Street")
                .classList.add("d-none");
        }, 4000)
    }
};
const checkInputHouse = () => {
    let errorArr = validateNumAndLetters(inputHouseNumber.value);
    if (errorArr.length === 0) {
        document.getElementById("profile-alert-House").classList.add("d-none");
    } else {
        document
            .getElementById("profile-alert-House")
            .classList.remove("d-none");
        setTimeout(() => {
            document
                .getElementById("profile-alert-House")
                .classList.add("d-none");
        }, 4000)
    }
};
const checkInputZip = () => {
    let errorArr = validateNumAndLetters(inputZipCode.value);
    if (errorArr.length === 0) {
        document.getElementById("profile-alert-Zip").classList.add("d-none");
    } else {
        document
            .getElementById("profile-alert-Zip")
            .classList.remove("d-none");
        setTimeout(() => {
            document
                .getElementById("profile-alert-Zip")
                .classList.add("d-none");
        }, 4000)
    }
};

const checkInputPhone = () => {
    let errorArr = validatePhoneNumber(inputPhone.value);
    if (errorArr.length === 0) {
        document.getElementById("profile-alert-Phone").classList.add("d-none");
    } else {
        document
            .getElementById("profile-alert-Phone")
            .classList.remove("d-none");
        setTimeout(() => {
            document
                .getElementById("profile-alert-Phone")
                .classList.add("d-none");
        }, 4000)
    }

};


//enable the btn if all conditions are meet
const enableUpdateBtn = () => {
    (updateBtn.disabled = !(firstNameOk && lastNameOk && emailOk && passwordOk && rePasswordOk));
}

//make the value of the checkbox into boolean for user class
const checkifchecked = () => {
    if (businessCheckBox.checked) {
        return true;
    } else {
        return false;
    }
}

//set the profile btn save to localstorge
updateBtn.addEventListener("click", () => {
    if (!(firstNameOk && lastNameOk && emailOk && passwordOk && rePasswordOk)) {
        return;
    }
    let users = localStorage.getItem("users");
    let token = localStorage.getItem("token");
    if (users && token) {
        //we have users
        users = JSON.parse(users); // convert from string to array of objects
        token = JSON.parse(token);
        let userEmail = users.find((item) => item.email === inputEmail.value);
        let user = users.find((item) => item.id === token.id);
        if (userEmail && user.id !== userEmail.id) {
            //the email already token
            showToast("The email already taken!", false);
            return;
        }
        if (user) {
            user.name = token.name = inputFirstName.value;
            user.lastName = inputLastName.value;
            user.email = token.email = inputEmail.value;
            user.password = inputPassword.value;
            user.business = token.business = checkifchecked();
            user.state = inputState.value;
            user.country = inputCountry.value;
            user.city = inputCity.value;
            user.street = inputStreet.value;
            user.house = inputHouseNumber.value;
            user.zip = inputZipCode.value;
            user.phone = inputPhone.value;
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("token", JSON.stringify(token));
            showToast("Saved", true);
        }
    }
    setTimeout(() => {
        location.reload();
    }, 3000);

});



