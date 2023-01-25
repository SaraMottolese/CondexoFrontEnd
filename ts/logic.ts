/********************VARIABILI ED OGGETTI ***********************/

//Regex for email e password
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{16,}$/;

//Const for info password modal
const modalPassword = document.getElementById("myModal") as HTMLInputElement;
const btnPassword = document.getElementById("info") as HTMLInputElement;
const spanPassword = document.getElementsByClassName(
  "close"
)[0] as HTMLInputElement;

//Const for successful registration modal
const modalSubmit = document.getElementById("modalSubmit") as HTMLInputElement;
const btnSubmit = document.getElementById("submit") as HTMLInputElement;
const spanSubmit = document.getElementsByClassName(
  "closeSubmit"
)[0] as HTMLInputElement;

//contatore per validare il submit
let contatore:number=0;

//oggetto user
const user = {
  nome: document.getElementById("name") as HTMLInputElement,
  surname: document.getElementById("surname") as HTMLInputElement,
  address: document.getElementById("address") as HTMLInputElement,
  cap: document.getElementById("cap") as HTMLInputElement,
  userType: document.getElementById("userType") as HTMLInputElement,
  phoneNumber: document.getElementById("phoneNumber") as HTMLInputElement,
  email: document.getElementById("exampleInputEmail1") as HTMLInputElement,
  genre: document.getElementById("genre") as HTMLInputElement,
  password: document.getElementById("password") as HTMLInputElement,
  age: document.getElementById("age") as HTMLInputElement,
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

  if(contatore==6){
    modalSubmit.style.display = "block";
  }
}

//NAME:
function checkName(name: string) {
  if (name === null || name === "") {
    let allert1 = <HTMLElement>document.createElement("h6");
    allert1.innerText = "Campo obbligatorio";
    document.querySelector(".campoNome")?.appendChild(allert1);
  } else {
    console.log("nome: " + name+ contatore);
    contatore+=1;
    console.log("contatore "+contatore);
  }
}

//SURNAME:
function checkSurname(surname: string) {
  if (user.surname.value === null || user.surname.value == "") {
    let allert2 = <HTMLElement>document.createElement("h6");
    allert2.innerText = "Campo obbligatorio";
    document.querySelector(".surname")?.appendChild(allert2);
  } else {
    console.log("cognome: " + user.surname.value);
    contatore+=1;
    console.log("contatore "+contatore);
  }
}

//ADDRESS:
function checkAddress(address: string) {
  if (user.address.value === null || user.address.value === "") {
    let allert3 = <HTMLElement>document.createElement("h6");
    allert3.innerText = "Campo obbligatorio";
    document.querySelector(".address")?.appendChild(allert3);
  } else {
    console.log("indirizzo: " + user.address.value);
    contatore+=1;
    console.log("contatore "+contatore);
  }
}

//USERTYPE:
function checkUserType(userType: string) {
  if (user.userType.value === null || user.userType.value === "") {
    let allert4 = <HTMLElement>document.createElement("h6");
    allert4.innerText = "Campo obbligatorio";
    document.querySelector(".userType")?.appendChild(allert4);
  } else {
    console.log("tipo di utente: " + user.userType.value);
    contatore+=1;
    console.log("contatore "+contatore);
  }
}

//EMAIL:
function checkEmail(email: string) {
  if (user.email.value === null || user.email.value == "") {
    let allert5 = <HTMLElement>document.createElement("h6");
    allert5.innerText = "Campo obbligatorio";
    document.querySelector(".email")?.appendChild(allert5);
  } else {
    if (!emailRegex.test(user.email.value)) {
      let allert7 = <HTMLElement>document.createElement("h6");
      allert7.innerText = "Email non valida";
      document.querySelector(".email")?.appendChild(allert7);
    } else {
      console.log(" email: " + user.email.value);
      contatore+=1;
      console.log("contatore "+contatore);
    }
  }
}

//PASSWORD:
function checkPassword(password: string) {
  if (user.password.value === null || user.password.value == "") {
    let allert6 = <HTMLElement>document.createElement("h6");
    allert6.innerText = "Campo obbligatorio";
    document.querySelector(".password")?.appendChild(allert6);
  } else {
    if (!passwordRegex.test(user.password.value)) {
      let allert7 = <HTMLElement>document.createElement("h6");
      allert7.innerText = "Password non valida";
      document.querySelector(".password")?.appendChild(allert7);
    } else {
      console.log("password: " + user.password.value);
      contatore+=1;
      console.log("contatore "+contatore);
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


