const alertBox = document.querySelector(".pop-container");
const mainBox = document.querySelector("main");
const email = document.querySelector('input[type="email"]');
const btn = document.querySelector(".send-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const errMsg = document.querySelector(".err-msg");
const emailSend = document.querySelector(".receiver-email");
// const emailValue = document.querySelector("#email");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.checkValidity()) {
    emailSend.innerText = email.value.trim();
    errMsg.style.display = "none";
    mainBox.style.display = "none";
    alertBox.style.display = "block";
  } else {
    errMsg.style.display = "block";
    console.log("submit");
    // e.preventDefault();
  }
  dismissBtn.addEventListener("click", (e) => {
    mainBox.style.display = "grid";
    alertBox.style.display = "none";
  });
});
