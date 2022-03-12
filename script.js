const homeButtons = document.querySelectorAll(".home");


// SMOOTH SCROLLING
homeButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const href = button.getAttribute("href");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// MOBILE NAVIGATION
const btnElement = document.querySelector('.mobile-nav-button');
const headerElement = document.querySelector('.navigation');

btnElement.addEventListener('click', function () {
  headerElement.classList.toggle('nav-open')
})