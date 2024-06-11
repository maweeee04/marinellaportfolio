// script.js
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
      let valid = true;

      // Name validation
      const name = document.getElementById("name");
      const nameError = document.getElementById("nameError");
      if (name.value.trim() === "") {
          nameError.textContent = "Name is required.";
          valid = false;
      } else {
          nameError.textContent = "";
      }

      // Email validation
      const email = document.getElementById("email");
      const emailError = document.getElementById("emailError");
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email.value.trim())) {
          emailError.textContent = "Invalid email address.";
          valid = false;
      } else {
          emailError.textContent = "";
      }

      // Password validation
      const password = document.getElementById("password");
      const passwordError = document.getElementById("passwordError");
      if (password.value.length < 6) {
          passwordError.textContent = "Password must be at least 6 characters long.";
          valid = false;
      } else {
          passwordError.textContent = "";
      }

      if (!valid) {
          event.preventDefault();
      }
  });
});
