let passwordLength = document.getElementById("passwordLength");
let numbersInp = document.getElementById("numbersInp");
let lowerLetters = document.getElementById("lowerLetters");
let upperLetters = document.getElementById("upperLetters");
let specialChar = document.getElementById("specialChar");
let passQuantity = document.getElementById("passQuantity");
let genPassBtn = document.getElementById("genPassBtn");
let clearEntry = document.getElementById("clearEntry");
let output = document.getElementById("output");
let smallLetters = "abcdefghijklmnopqrstuvwxyz";
let largeLetters = smallLetters.toUpperCase();
let symbols = "!@#$%^&*()";
let numbers = "1234567890";

function generatePass() {
    let allChars = "";
    let finalPass = "";

    if (lowerLetters.checked) {
        allChars += smallLetters;
    }
    if (upperLetters.checked) {
        allChars += largeLetters;
    }
    if (numbersInp.checked) {
        allChars += numbers;
    }
    if (specialChar.checked) {
        allChars += symbols;
    }
    if (!upperLetters.checked && !numbersInp.checked &&!specialChar.checked &&!lowerLetters.checked) 
        {
        output.innerText =
        "PLEASE SELECT AT LEAST ONE OPTION TO GENERATE A PASSWORD";
        return;
    }

    for (let i = 0; i < passwordLength.value; i++) {
        let randInd = Math.floor(Math.random() * allChars.length);
        finalPass += allChars[randInd];
    }

    output.innerText = finalPass;
}

function EmptyText() {
    output.innerText = "";
}
