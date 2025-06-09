// form validation js
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload

  // inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  // clear previous
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  // name validation
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  // message validation
  if (message === "") {
    messageError.textContent = "Message is required.";
    valid = false;
  }

  // show success
  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
  }
});