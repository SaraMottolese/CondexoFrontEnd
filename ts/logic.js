/********************VARIABILI ED OGGETTI ***********************/
//Regex for email e password
var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{16,}$/;
//Const for info password modal
var modalPassword = document.getElementById("myModal");
var btnPassword = document.getElementById("info");
var spanPassword = document.getElementsByClassName("close")[0];
//Const for successful registration modal
var modalSubmit = document.getElementById("modalSubmit");
var btnSubmit = document.getElementById("submit");
var spanSubmit = document.getElementsByClassName("closeSubmit")[0];
//contatore per validare il submit
var contatore = 0;
//oggetto user
var user = {
    nome: document.getElementById("name"),
    surname: document.getElementById("surname"),
    address: document.getElementById("address"),
    cap: document.getElementById("cap"),
    userType: document.getElementById("userType"),
    phoneNumber: document.getElementById("phoneNumber"),
    email: document.getElementById("exampleInputEmail1"),
    genre: document.getElementById("genre"),
    password: document.getElementById("password"),
    age: document.getElementById("age")
};
/******************** METODI ***********************/
//permette il salvataggio del form al click del pulsante submit
function save() {
    checkName(user.nome.value);
    checkSurname(user.surname.value);
    checkAddress(user.address.value);
    checkEmail(user.email.value);
    checkPassword(user.password.value);
    checkUserType(user.userType.value);
    console.log(" genere: " + user.genre.value);
    console.log(" età: " + user.age.value);
    console.log(" cap: " + user.cap.value);
    console.log(" numero di telefono: " + user.phoneNumber.value);
    if (contatore == 6) {
        modalSubmit.style.display = "block";
    }
}
//NAME:
function checkName(name) {
    var _a;
    if (name === null || name === "") {
        var allert1 = document.createElement("h6");
        allert1.innerText = "Campo obbligatorio";
        (_a = document.querySelector(".campoNome")) === null || _a === void 0 ? void 0 : _a.appendChild(allert1);
    }
    else {
        console.log("nome: " + name + contatore);
        contatore += 1;
        console.log("contatore " + contatore);
    }
}
//SURNAME:
function checkSurname(surname) {
    var _a;
    if (user.surname.value === null || user.surname.value == "") {
        var allert2 = document.createElement("h6");
        allert2.innerText = "Campo obbligatorio";
        (_a = document.querySelector(".surname")) === null || _a === void 0 ? void 0 : _a.appendChild(allert2);
    }
    else {
        console.log("cognome: " + user.surname.value);
        contatore += 1;
        console.log("contatore " + contatore);
    }
}
//ADDRESS:
function checkAddress(address) {
    var _a;
    if (user.address.value === null || user.address.value === "") {
        var allert3 = document.createElement("h6");
        allert3.innerText = "Campo obbligatorio";
        (_a = document.querySelector(".address")) === null || _a === void 0 ? void 0 : _a.appendChild(allert3);
    }
    else {
        console.log("indirizzo: " + user.address.value);
        contatore += 1;
        console.log("contatore " + contatore);
    }
}
//USERTYPE:
function checkUserType(userType) {
    var _a;
    if (user.userType.value === null || user.userType.value === "") {
        var allert4 = document.createElement("h6");
        allert4.innerText = "Campo obbligatorio";
        (_a = document.querySelector(".userType")) === null || _a === void 0 ? void 0 : _a.appendChild(allert4);
    }
    else {
        console.log("tipo di utente: " + user.userType.value);
        contatore += 1;
        console.log("contatore " + contatore);
    }
}
//EMAIL:
function checkEmail(email) {
    var _a, _b;
    if (user.email.value === null || user.email.value == "") {
        var allert5 = document.createElement("h6");
        allert5.innerText = "Campo obbligatorio";
        (_a = document.querySelector(".email")) === null || _a === void 0 ? void 0 : _a.appendChild(allert5);
    }
    else {
        if (!emailRegex.test(user.email.value)) {
            var allert7 = document.createElement("h6");
            allert7.innerText = "Email non valida";
            (_b = document.querySelector(".email")) === null || _b === void 0 ? void 0 : _b.appendChild(allert7);
        }
        else {
            console.log(" email: " + user.email.value);
            contatore += 1;
            console.log("contatore " + contatore);
        }
    }
}
//PASSWORD:
function checkPassword(password) {
    var _a, _b;
    if (user.password.value === null || user.password.value == "") {
        var allert6 = document.createElement("h6");
        allert6.innerText = "Campo obbligatorio";
        (_a = document.querySelector(".password")) === null || _a === void 0 ? void 0 : _a.appendChild(allert6);
    }
    else {
        if (!passwordRegex.test(user.password.value)) {
            var allert7 = document.createElement("h6");
            allert7.innerText = "Password non valida";
            (_b = document.querySelector(".password")) === null || _b === void 0 ? void 0 : _b.appendChild(allert7);
        }
        else {
            console.log("password: " + user.password.value);
            contatore += 1;
            console.log("contatore " + contatore);
        }
    }
}
// functions for password's modal
btnPassword.onclick = function () {
    modalPassword.style.display = "block";
};
spanPassword.onclick = function () {
    modalPassword.style.display = "none";
};
//function to close all modal
window.onclick = function (event) {
    if (event.target == modalPassword) {
        modalPassword.style.display = "none";
    }
    if (event.target == modalSubmit) {
        modalSubmit.style.display = "none";
    }
};
//fuction to close submit modal from X in the span
spanSubmit.onclick = function () {
    modalSubmit.style.display = "none";
};
