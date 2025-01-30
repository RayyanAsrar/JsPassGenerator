let passwordLength = document.getElementById("passwordLength");
let numbersInp = document.getElementById("numbersInp");
let lowerLetters = document.getElementById("lowerLetters");
let upperLetters = document.getElementById("upperLetters");
let specialChar = document.getElementById("specialChar");
let passQuantity = document.getElementById("passQuantity");
let genPassBtn = document.getElementById("genPassBtn");
let output = document.getElementById("output");
let smallLetters = "abcdefghijklmnopqrstuvwxyz";
let largeLetters = smallLetters.toLocaleUpperCase();
let symbols = "!@#$%^&*()"
const numbers = 1234567890;

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
   for(let i=0 ;i<passwordLength.value;i++){
       let randInd= Math.floor(Math.random()*allChars.length)
      finalPass+=allChars[randInd]
       
    }
    output.innerText+=finalPass
    
}
