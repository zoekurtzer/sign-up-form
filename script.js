const button = document.getElementById("submitBtn");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const error = document.getElementById("errorMessage");

// Event listeners
button.addEventListener("click", checkPasswords);
password.addEventListener("input", clearStyles);
passwordConfirm.addEventListener("input", clearStyles);

// Clear error message and borders
function clearStyles() {
    error.innerText = "";
    password.classList.remove("redBorder", "greenBorder");
    passwordConfirm.classList.remove("redBorder", "greenBorder");
}

// Check if passwords match
function checkPasswords() {
    const match = password.value === passwordConfirm.value;
    const borderClass = match ? "greenBorder" : "redBorder";
    const messageClass = match ? "correct" : "error";

    password.classList.add(borderClass);
    passwordConfirm.classList.add(borderClass);
    error.innerText = match ? "Passwords match!" : "Passwords don't match!";

    error.classList.remove("error", "correct");
    error.classList.add(messageClass);

// Password message will blink if it doesn't match
    if (!match) {
        let visible = true;
        blinkInterval = setInterval(() => {
            error.style.visibility = visible ? "hidden" : "visible";
            visible = !visible;
        }, 500);
    } else {
        clearInterval(blinkInterval);
        error.style.visibility = "visible";
    }
}
