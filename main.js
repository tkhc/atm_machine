// Account Constructor
class Account {
  constructor(pin, balance) {
    this.pin = pin;
    this.balance = balance;
  }

getAccount() {
  return `${this.pin} has a balance of $ ${this.balance}`;
}
getBalance() {
  const lsBalance = lsBalance - withdrawalAmount || lsBalance + depositAmount;
return `${this.balance}`;
}

login(loginPin) {
  this.pin = loginPin;
}

update(updatePin) {
  this.pin = updatePin;
}

create(createPin) {
  this.pin = createPin;
}
}

//Instantiate Object
const account1 = new Account("1234", "100");
const account2 = new Account("1111", "1000");
const account3 = new Account("2222", "10000");

/*
const clearErr = () => document.getElementById("displayAlerts").innerHTML = "";

let loginPin = parseInt(document.getElementById("loginPin").value);
  if (isNaN(loginPin)) {
    document.getElementById("displayAlerts").innerHTML =
      "Value must be numbers only";
    setTimeout(clearErr, 3000);
  } else if (loginPin == localStorage.getItem("pin")) {
    document.getElementById("login").style = "display:none";
    document.getElementById("withdrawalDeposit").style = "display:block";
    document.getElementById("displayBalance").innerHTML =
      "$" + localStorage.getItem("balance");
  } else {
    document.getElementById("displayAlerts").innerHTML =
      "Account Not Found";
    setTimeout(clearErr, 3000);
  }

let createPin = parseInt(document.getElementById("createPin").value);
  if (isNaN(createPin)) {
    document.getElementById("displayAlerts").innerHTML =
      "Value must be numbers only";
    setTimeout(clearErr, 3000);
  } else if (createPin == localStorage.getItem("pin")) {
    document.getElementById("displayAlerts").innerHTML =
      "PIN already exists";
    setTimeout(clearErr, 3000);
  } else {
    localStorage.setItem("pin", createPin);
    localStorage.setItem("balance", 0);
    document.getElementById("login").style = "display:none";
    document.getElementById("withdrawalDeposit").style = "display:block";
    document.getElementById("displayBalance").innerHTML =
      "$" + localStorage.getItem("balance");
  }

const withdrawal = () => {
  let withdrawalAmount = parseInt(
    document.getElementById("withdrawalInput").value
  );
  let lsBalance = parseInt(localStorage.getItem("balance"));
  if (isNaN(withdrawalAmount)) {
    document.getElementById("displayAlerts").innerHTML =
      "Value must be numbers only";
    setTimeout(clearErr, 3000);
  } else if (withdrawalAmount > localStorage.getItem("balance")) {
    document.getElementById("displayAlerts").innerHTML = "Back off Scrub";
    setTimeout(clearErr, 3000);
  } else {
    lsBalance -= withdrawalAmount;
    localStorage.setItem("balance", lsBalance);
    document.getElementById("displayBalance").innerHTML =
      "$" + localStorage.getItem("balance");
  }
};

//create a function to deposit money into the account
const deposit = () => {
  let depositAmount = parseInt(
    document.getElementById("depositInput").value
  ); // declared variable "depositAmount" which received value from deposit input as text and parsing it to a number.
  let lsBalance = parseInt(localStorage.getItem("balance"));
  if (isNaN(depositAmount)) {
    document.getElementById("displayAlerts").innerHTML =
      "Value must be numbers only"; //check for non number text value, if true, display error message.
    setTimeout(clearErr, 3000); //set timeout of error message display after 3000 milliseconds.
  } else if (depositAmount < 0) {
    document.getElementById("displayAlerts").innerHTML =
      "Can't deposit a negative number"; //check deposit amount is less than 0, if true, display error message.
    setTimeout(clearErr, 3000);
  } else {
    lsBalance += depositAmount;
    localStorage.setItem("balance", lsBalance); //check if no issue was found, deposit amount to local storage balance, set locol storage new balance, and display it.
    document.getElementById("displayBalance").innerHTML =
      "$" + localStorage.getItem("balance");
  }
};

const updatePin = () => {
  let updatePin = parseInt(document.getElementById("updatePin").value);
  if (isNaN(updatePin)) {
    document.getElementById("displayAlerts").innerHTML =
      "Value must be numbers only";
    setTimeout(clearErr, 3000);
  } else if (updatePin == localStorage.getItem("pin")) {
    document.getElementById("displayAlerts").innerHTML =
      "PIN already exists";
    setTimeout(clearErr, 3000);
  } else {
    localStorage.setItem("pin", updatePin);
    localStorage.setItem("balance");
    document.getElementById("login").style = "display:none";
    document.getElementById("withdrawalDeposit").style = "display:block";
    document.getElementById("displayBalance").innerHTML =
      "$" + localStorage.getItem("balance");
  }
};

const isBlank = (bal) => {};
*/
