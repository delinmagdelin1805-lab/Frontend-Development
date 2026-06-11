/* Webinar Button */

const button =
  document.querySelector("button");

/* Click Effect */

button.addEventListener("click", () => {

  button.innerText =
    "Registered Successfully";

  setTimeout(() => {

    button.innerText =
      "Register Now";

  }, 2000);

});