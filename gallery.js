document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  // Show lightbox when an image is clicked
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      lightbox.style.display = "flex"; // Show the lightbox
      lightboxImg.src = item.src; // Set the lightbox image source
      lightboxImg.alt = item.alt; // Set the alt text
    });
  });

  // Close lightbox when close button is clicked
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none"; // Hide the lightbox
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg && e.target !== closeBtn) {
      lightbox.style.display = "none"; // Hide the lightbox
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;

      // Close all other accordion items
      document.querySelectorAll(".accordion-item").forEach((item) => {
        if (item !== accordionItem) {
          item.classList.remove("active");
        }
      });

      // Toggle the current accordion item
      accordionItem.classList.toggle("active");
    });
  });
});

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
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show"); // Toggle the "show" class to display the menu
  });
});
