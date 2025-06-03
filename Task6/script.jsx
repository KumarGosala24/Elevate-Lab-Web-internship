const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");
const charCount = document.getElementById("charCount");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time character count
messageField.addEventListener("input", () => {
  charCount.textContent = `${messageField.value.length} / 300`;
});

// Reusable validation function
function validateInputs() {
  let isValid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format.";
    isValid = false;
  }

  if (message === "") {
    messageError.textContent = "Please enter a message.";
    isValid = false;
  }

  return isValid;
}

// Real-time validation
[nameField, emailField, messageField].forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});

// On form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    successMessage.textContent = "Message submitted successfully!";
    form.reset();
    charCount.textContent = "0 / 300";
  }
});
