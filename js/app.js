const $generatedPassword = document.querySelector(".generated-password");
const $selectedLength = document.querySelector(".selected-length");
const $rangeInput = document.querySelector("#length");
const $clipboardButton = document.querySelector(".copy-to-clipboard-btn");

// Checkboxes
const $includeUpperCase = document.querySelector("#uppercase");
const $includeLowerCase = document.querySelector("#lowercase");
const $includeNumbers = document.querySelector("#numbers");
const $includeSymbols = document.querySelector("#symbols");

// Strength indicators
const $tooWeakIndicator = document.querySelector(".indicator-1");
const $weakIndicator = document.querySelector(".indicator-2");
const $mediumIndicator = document.querySelector(".indicator-3");
const $strongIndicator = document.querySelector(".indicator-4");

// Strength
const $strengthText = document.querySelector(".strength-indicator");

// Checkbox state
let UpperCaseOn = false;
let LowerCaseOn = false;
let NumbersOn = false;
let SymbolsOn = false;

let checkboxLevel = 0;

// Current password length
let currentLength = 10;

// Password generator
function generatePassword(length) {
    let result = "";
    let parameters = "";

    const characters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharacters = characters.toUpperCase();
    const numbers = "1234567890";
    const symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    checkboxLevel = 0;
    parameters = "";

    if (UpperCaseOn) {
        parameters += uppercaseCharacters;
        checkboxLevel++;
    }
    if (LowerCaseOn) {
        parameters += characters;
        checkboxLevel++;
    }
    if (NumbersOn) {
        parameters += numbers;
        checkboxLevel++;
    }
    if (SymbolsOn) {
        parameters += symbols;
        checkboxLevel++;
    }

    if (parameters.length === 0) {
        $generatedPassword.textContent = "Veuillez sélectionner au moins un paramètre";
        return;
    }

    for (let i = 0; i < length; i++) {
        result += parameters.charAt(Math.floor(Math.random() * parameters.length));
    }

    $generatedPassword.textContent = result;
    passwordStrength();
}

// Password strength
function passwordStrength() {
    if (currentLength <= 5 && checkboxLevel <= 1) {
        $strengthText.textContent = "Too weak";
        $tooWeakIndicator.classList.add("indicator-too-weak");
        $weakIndicator.classList.remove("indicator-weak");
        $mediumIndicator.classList.remove("indicator-medium");
        $strongIndicator.classList.remove("indicator-strong");
    } else if (currentLength <= 10 && checkboxLevel <= 2) {
        $strengthText.textContent = "Weak";
        $tooWeakIndicator.classList.add("indicator-too-weak");
        $weakIndicator.classList.add("indicator-weak");
        $mediumIndicator.classList.remove("indicator-medium");
        $strongIndicator.classList.remove("indicator-strong");
    } else if (currentLength <= 15 && checkboxLevel <= 3) {
        $strengthText.textContent = "Medium";
        $tooWeakIndicator.classList.add("indicator-too-weak");
        $weakIndicator.classList.add("indicator-weak");
        $mediumIndicator.classList.add("indicator-medium");
        $strongIndicator.classList.remove("indicator-strong");
    } else if (currentLength > 15 && checkboxLevel > 3) {
        $strengthText.textContent = "Strong";
        $tooWeakIndicator.classList.add("indicator-too-weak");
        $weakIndicator.classList.add("indicator-weak");
        $mediumIndicator.classList.add("indicator-medium");
        $strongIndicator.classList.add("indicator-strong");
    }
}

// Checkbox listeners
$includeUpperCase.addEventListener("change", function () {
    UpperCaseOn = this.checked;
});

$includeLowerCase.addEventListener("change", function () {
    LowerCaseOn = this.checked;
});

$includeNumbers.addEventListener("change", function () {
    NumbersOn = this.checked;
});

$includeSymbols.addEventListener("change", function () {
    SymbolsOn = this.checked;
});

$selectedLength.textContent = $rangeInput.value;

$rangeInput.addEventListener("input", function (e) {
    $selectedLength.textContent = e.target.value;
    currentLength = e.target.value;
});

// Clipboard button
$clipboardButton.addEventListener("click", function () {
    const text = $generatedPassword.textContent;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied password: " + text);
        });
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Copied password: " + text);
    }
});

// Submit
const $submit = document.querySelector("button[type='submit']");

$submit.addEventListener("click", function (e) {
    e.preventDefault();
    generatePassword(currentLength);
});

// Initial password generation on page load
document.addEventListener("DOMContentLoaded", function () {
    generatePassword(currentLength);
});