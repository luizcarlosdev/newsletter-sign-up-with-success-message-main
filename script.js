const f_email = document.getElementById("f_email");
const button = document.getElementById("btn_submit");

function inspectValue() {
  const messageError = document.getElementById("message-error");
  messageError.style.display = "block";
  const emailValue = f_email.value;
  const emailString = emailValue.toString;
  if (emailValue.includes("@") && emailValue.endsWith(".com")) {
    if (f_email.classList.contains("error")) {
      f_email.classList.remove("error");
      f_email.classList.add("valid");
      messageError.style.color = "#044";
      messageError.innerHTML = "This argument is correct!";
      button.addEventListener("click", () => {
        window.location.replace("./sucess.html")
      })
    }
  } else {
    messageError.style.color = "hsl(4, 100%, 67%)";
    messageError.innerHTML = "Valid email required";
    f_email.classList.remove("valid");
    f_email.setAttribute("class", "error");
    button.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
}

f_email.addEventListener("input", inspectValue);
