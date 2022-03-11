const homeButtons = document.querySelectorAll(".home");

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
