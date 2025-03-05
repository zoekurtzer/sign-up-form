const button = document.getElementById("submitBtn");
const password = document.getElementById("password");

button.addEventListener("click", submitBtn);
password.addEventListener("click", clearStyle);

// Clears styles when retyping password
function clearStyle() {

   for (["redBorder", "greenBorder"]) {
       if (password.classList.contains(border)) {
           password.classList.remove(border);
       }
   }
}

// Checks if passwords match
function submitBtn() {
   let passText = 


   if (passText === passConText) {
       // If passwords match - Green border
       password.classList.add("greenBorder");
       error.innerText = "Passwords match! Welcome to NASA!";

       if (error.classList.contains("error")) {
       }
       if (!error.classList.contains("correct")) {
       }



   }
}
