/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
// Menu show
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden
// Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== ADD BLUR TO HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height, add
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_6dpvyfo",
      "template_921k9va",
      "#contact-form",
      "Pa0MtXJfYAsSCC6S5"
    )
    .then(
      () => {
        // Show send message
        contactMessage.textContent = "Message sent succesfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input field
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is higher than 350 viewport height, add scroll up
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
