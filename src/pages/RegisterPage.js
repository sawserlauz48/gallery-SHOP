import PAGES from "../models/pageModel.js";
import { pageChange } from "../routes/router.js";
import User from "../models/User.js";
import { validateName, validateLastName } from "../validation/validateName.js";
import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import { validateLettersOnly, validateNumAndLetters } from "../validation/validateNumberAndLetters.js";
import validatePhoneNumber from "../validation/validatePhoneNumber.js";




//linking html elements to js
const inputFirstName = document.getElementById("floatingFirstName");
const inputLastName = document.getElementById("floatingLastName");
const inputState = document.getElementById("floatingState");
const inputCountry = document.getElementById("floatingCountry");
const inputCity = document.getElementById("floatingCity");
const inputStreet = document.getElementById("floatingStreet");
const inputHouseNumber = document.getElementById("floatingHouseNumber");
const inputZipCode = document.getElementById("floatingZipCode");
const inputEmail = document.getElementById("floatingemail");
const inputPhone = document.getElementById("floatingPhone");
const inputPassword = document.getElementById("floatingPassword");
const inputRePassword = document.getElementById("floatingRePassword");
const businessCheckBox = document.getElementById("businessCheckBox");
const registerBtn = document.getElementById("registerBtn");



//var for conditions
let firstNameOk = false;
let lastNameOk = false;
let emailOk = false;
let passwordOk = false;
let rePasswordOk = false;

//
window.addEventListener("load", () => {
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
    document.getElementById("register-alert-firstName").classList.add("d-none");
    firstNameOk = true;
  } else {
    inputFirstName.classList.add("is-invalid");
    document
      .getElementById("register-alert-firstName")
      .classList.remove("d-none");
    document.getElementById("register-alert-firstName").innerHTML =
      errorArr.join("<br>");
    firstNameOk = false;
  }
  enableRegisterBtn();
};

const checkInputLastName = () => {
  let errorArr = validateLastName(inputLastName.value);
  if (errorArr.length === 0) {
    inputLastName.classList.remove("is-invalid");
    document.getElementById("register-alert-lastName").classList.add("d-none");
    lastNameOk = true;
  } else {
    inputLastName.classList.add("is-invalid");
    document
      .getElementById("register-alert-lastName")
      .classList.remove("d-none");
    document.getElementById("register-alert-lastName").innerHTML =
      errorArr.join("<br>");
    lastNameOk = false;
  }
  enableRegisterBtn()
};

const checkInputEmail = () => {
  let errorArr = validateEmail(inputEmail.value);
  if (errorArr.length === 0) {
    inputEmail.classList.remove("is-invalid");
    document.getElementById("register-alert-email").classList.add("d-none");
    emailOk = true;
  } else {
    inputEmail.classList.add("is-invalid");
    document.getElementById("register-alert-email").classList.remove("d-none");
    document.getElementById("register-alert-email").innerHTML =
      errorArr.join("<br>");
    emailOk = false;
  }
  enableRegisterBtn();
}

const checkInputPassword = () => {
  let errorArr = validatePassword(inputPassword.value);
  if (errorArr.length === 0) {
    inputPassword.classList.remove("is-invalid");
    document.getElementById("register-alert-password").classList.add("d-none");
    passwordOk = true;
  } else {
    inputPassword.classList.add("is-invalid");
    document.getElementById("register-alert-password").classList.remove("d-none");
    document.getElementById("register-alert-password").innerHTML =
      errorArr.join("<br>");
    passwordOk = false;
  }
  enableRegisterBtn();
}
const checkInputRePassword = () => {
  if ((inputPassword.value) !== (inputRePassword.value)) {
    document.getElementById("register-alert-rePassword").classList.remove("d-none");
    document.getElementById("register-alert-rePassword").innerHTML = ("Password not matching")
    rePasswordOk = false;
  } else {
    document.getElementById("register-alert-rePassword").classList.add("d-none");
    rePasswordOk = true;
  }
  enableRegisterBtn();
}
const checkInputState = () => {
  let errorArr = validateLettersOnly(inputState.value);
  if (errorArr.length === 0) {
    document.getElementById("register-alert-state").classList.add("d-none");
  } else {

    document
      .getElementById("register-alert-state")
      .classList.remove("d-none");
    setTimeout(() => {
      document
        .getElementById("register-alert-state")
        .classList.add("d-none");
    }, 4000)

  }
};

const checkInputCountry = () => {
  let errorArr = validateLettersOnly(inputCountry.value);
  if (errorArr.length === 0) {
    document.getElementById("register-alert-Country").classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-Country")
      .classList.remove("d-none");
    setTimeout(() => {
      document
        .getElementById("register-alert-Country")
        .classList.add("d-none");
    }, 4000)
  }
};
const checkInputCity = () => {
  let errorArr = validateLettersOnly(inputCity.value);
  if (errorArr.length === 0) {
    document.getElementById("register-alert-City").classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-City")
      .classList.remove("d-none");
    setTimeout(() => {
      document
        .getElementById("register-alert-City")
        .classList.add("d-none");
    }, 4000)
  }
};
const checkInputStreet = () => {
  let errorArr = validateNumAndLetters(inputStreet.value);
  if (errorArr.length === 0) {
    document.getElementById("register-alert-Street").classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-Street")
      .classList.remove("d-none");
    setTimeout(() => {
      document
        .getElementById("register-alert-Street")
        .classList.add("d-none");
    }, 4000)
  }
};
const checkInputHouse = () => {
  let errorArr = validateNumAndLetters(inputHouseNumber.value);
  if (errorArr.length === 0) {
    document.getElementById("register-alert-House").classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-House")
      .classList.remove("d-none");
    setTimeout(() => {
      document
        .getElementById("register-alert-House")
        .classList.add("d-none");
    }, 4000)
  }
};
const checkInputZip = () => {
  let errorArr = validateNumAndLetters(inputZipCode.value);
  if (errorArr.length === 0) {
    document.getElementById("register-alert-Zip").classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-Zip")
      .classList.remove("d-none");
    setTimeout(() => {
      document
        .getElementById("register-alert-Zip")
        .classList.add("d-none");
    }, 4000)
  }
};

const checkInputPhone = () => {
  let errorArr = validatePhoneNumber(inputPhone.value);
  if (errorArr.length === 0) {
    document.getElementById("register-alert-Phone").classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-Phone")
      .classList.remove("d-none");
    setTimeout(() => {
      document
        .getElementById("register-alert-Phone")
        .classList.add("d-none");
    }, 4000)
  }

};

//enable the btn if all is conditions are meet
const enableRegisterBtn = () => {
  (registerBtn.disabled = !(firstNameOk && lastNameOk && emailOk && passwordOk && rePasswordOk));
}

//make the value of the checkbox into boolean for user class
const checkifchecked = () => {
  if (businessCheckBox.checked) {
    return true;
  } else {
    return false;
  }
}

//set the register btn save to localstorge
registerBtn.addEventListener("click", () => {
  if (!(firstNameOk && lastNameOk && emailOk && passwordOk && rePasswordOk)) {
    return;
  }
  let userId = localStorage.getItem("nextUserid");
  let users = localStorage.getItem("users");
  userId = +userId
  let newUser = new User(
    inputFirstName.value,
    inputLastName.value,
    inputEmail.value,
    inputPassword.value,
    checkifchecked(),
    userId++,
    inputState.value,
    inputCountry.value,
    inputCity.value,
    inputStreet.value,
    inputHouseNumber.value,
    inputZipCode.value,
    inputPhone.value,
  );
  localStorage.setItem("nextUserid", userId + "")
  if (!users) {
    users = [newUser];
    localStorage.setItem("users", JSON.stringify(users));

  } else {
    users = JSON.parse(users);
    for (let user of users) {
      if (user.email === inputEmail.value) {
        document.getElementById("email-exists").classList.remove("d-none");
        scrollTo(0, 0);
        return;


      }
    }
    users = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(users));
  }
  document.getElementById("email-exists").classList.add("d-none");
  pageChange(PAGES.LOGIN);

});



