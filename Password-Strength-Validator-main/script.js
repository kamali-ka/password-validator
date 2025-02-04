const passwordInput = document.querySelector("#password");
const eyeIcon = document.querySelector("#togglePassword");
const requirementList = document.querySelectorAll(".requirement-lists li");

const requirements = [
  { regex: /.{8,}/, index: 0 },
  { regex: /[0-9]/, index: 1 },
  { regex: /[a-z]/, index: 2 },
  { regex: /[^A-Za-z0-9]/, index: 3 },
  { regex: /[A-Z]/, index: 4 },
];

passwordInput.addEventListener("keyup", (e) => {
  const passwordValue = e.target.value;
  let passwordStrength = 0;

  requirements.forEach((item) => {
    const isValid = item.regex.test(passwordValue);
    const requirementItem = requirementList[item.index];

    if (isValid) {
      requirementItem.firstElementChild.className = "fa-solid fa-check";
      requirementItem.classList.add("is-valid");
      passwordStrength++;
    } else {
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
      requirementItem.classList.remove("is-valid");
    }
  });

  if (passwordStrength <= 2) {
    passwordInput.style.border = "2px solid #FF6E77";
  } else if (passwordStrength === 3) {
    passwordInput.style.border = "2px solid #F49F17";
  } else if (passwordStrength === 5) {
    passwordInput.style.border = "2px solid #06EBAE";
  }
});

eyeIcon.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  eyeIcon.className = `fa-solid fa-eye${
    passwordInput.type === "password" ? "" : "-slash"
  }`;
});
