// Scroll Event Listener for Header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuOptions = document.querySelectorAll(".menu-option");
  const imageDisplay = document.getElementById("image-display");

  // Define images for each option
  const images = {
    package: ["/img/gold.png", "/img/elite.png"],
    exterior: ["/img/paint.png"],
    interior: ["/img/interior.png"],
    headlights: ["/img/headlitght.png"],
    maintenance: ["/img/maintain.png"],
  };

  // Function to display images based on the clicked option
  function displayImages(imageKey) {
    // Clear previous images
    imageDisplay.innerHTML = "";

    // Add new images
    if (images[imageKey]) {
      images[imageKey].forEach((imgSrc) => {
        const imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.alt = `${imageKey} image`;
        imageDisplay.appendChild(imgElement);
      });
    }
  }

  // Event listener for menu options
  menuOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const imageKey = option.getAttribute("data-images");
      displayImages(imageKey);
    });
  });
  displayImages("package");
});
