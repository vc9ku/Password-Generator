const $passwordLength = document.querySelector("#length");
const $currentPasswordLength = document.querySelector(".selected-length");
$passwordLength.addEventListener("input", function(e) {
    $currentPasswordLength.textContent = e.target.value
})