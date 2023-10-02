const inputSlider =document.querySelector("[data-lenghtSlider]")
const lengthDsiplay =document.querySelector("[data-lenghtNumber]")

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


// initially
let password ="";
let passwordLength =10;
let checkcount =1;
handleSlider();
// set strngth circle color to grey

// set passwordLength
function handleSlider(){
    inputSlider.value =passwordLength;
    lengthDsiplay.innerText =passwordLength;

    // or kuchh bhi karna chahiye ? hm
}


function setIndicator(color){
    indicator.computedStyleMap.backgroundColor =color;
}