const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#primary-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("open");
  });
}

const form = document.querySelector(".contact-form");
const status = document.querySelector("#form-status");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      status.textContent = "Please complete the required fields.";
      form.reportValidity();
      return;
    }
    status.textContent = "Thank you. Your message has been validated successfully.";
    form.reset();
  });
}
