const form = document.getElementById("contact");
const error = document.getElementById("email-error");
form.addEventListener("change", isValidity);

function isValidity(event) {
  const target = event.target;

  if (!target.checkValidity()) {
    target.classList.add("error");
    form.classList.add("error");
    error.classList.add("active");
    error.hidden = true;
  } else {
    target.classList.remove("error");
    form.classList.remove("error");
    error.classList.remove("active");
    error.hidden = false;
  }
}
