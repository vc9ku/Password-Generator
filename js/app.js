const $passwordLength = document.querySelector("#length");
const $currentPasswordLength = document.querySelector(".selected-length");
const $hasUppercase = document.querySelector("#uppercase")
const $hasLowercase = document.querySelector("#lowercase")
const $hasNumbers = document.querySelector("#numbers")
const $hasSymbols = document.querySelector("#symbols")
const $submit = document.querySelector("button")

console.log($submit)


// console.log(generateUppercasePassword($currentPasswordLength.value))


    // function generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols) {
    //     let result = ""

    //     const symbols = "&#(-_^@$*!/"
    //     const numbers = "1234567890"
    //     const letters = "abcdefghijklmnopqrstuvwxyz"

    //     let parameters = ""

    //     if (hasUppercase) {
    //         parameters += letters.toUpperCase()
    //     }

    //     if (hasLowercase) {
    //         parameters += letters.toLowerCase()
    //     }

    //     if (hasSymbols) {
    //         parameters += symbols
    //     }

    //     if (hasNumbers) {
    //         parameters += numbers
    //     }

    //     for (let i = 0; i < length; i++) {
    //         const randomInd = Math.floor(Math.random() * parameters.length);
    //         result += parameters.charAt(randomInd);
    //     }

    //     return result
    // }
// console.log(generateLowercasePassword($currentPasswordLength.value))


// console.log(generatePassword(15, true, false, true, true))

// Quand j'appuie sur genetare,
    // Ca m'appelle la fonction generatePassWord
    // Ca met à jour le DOM


    $submit.addEventListener("click", function(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols) {
        let result = ""

        const symbols = "&#(-_^@$*!/"
        const numbers = "1234567890"
        const letters = "abcdefghijklmnopqrstuvwxyz"

        let parameters = ""

        if (hasUppercase) {
            parameters += letters.toUpperCase()
        }

        if (hasLowercase) {
            parameters += letters.toLowerCase()
        }

        if (hasSymbols) {
            parameters += symbols
        }

        if (hasNumbers) {
            parameters += numbers
        }

        for (let i = 0; i < length; i++) {
            const randomInd = Math.floor(Math.random() * parameters.length);
            result += parameters.charAt(randomInd);
        }

    })

    // onclick="generatePassword(10, true, true, true, true)"

$passwordLength.addEventListener("input", function(e) {
    $currentPasswordLength.textContent = e.target.value
})