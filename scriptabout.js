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

//// about page ////
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".scroll-animation");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  animatedElements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
  const menuOptions = document.querySelectorAll(".menu-option");
  const imageDisplay = document.getElementById("image-display");

  // Define images and descriptions for each option
  const content = {
    package: {
      images: ["https://img1.wsimg.com/isteam/ip/f7beeaa2-96fd-4b2d-bf7f-fac9e5f5a098/IMG_2058.jpeg/:/cr=t:7.2%25,l:0%25,w:100%25,h:57.61%25/rs=w:1240,h:932.3308270676691,cg:true"],
      description:
        "Once upon a time in the heart of Wilmington NC, King Richard had a vision: to create a detailing service that treated every car like a royal carriage. With a relentless pursuit of perfection, King Richard Lamborghini Detailing was born. Each service we offer is designed to deliver unmatched care and precision, earning the loyalty and trust of our clients. After all, every car deserves to feel like it’s part of the royal fleet.",
    },
    exterior: {
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzUbBQzIXSrC3olVuL7HIp7AGGjb9g07FxA6VoGu87vuAHUX1EC-qUNSNTVkabXNoztc&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRWLVxlfDocCVRDgzoK7ccuseb5rBPHbTo-iEHup17xczJ3mjp2_NVuvwIGVkuj7pFqY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2AHCWoqD0Ys7Wj7psY6CgCLFAK89qakopDOy4M_YoiSMWxOuLkVlAr-BXnjQCeKVmgM&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRNhR64LD2Nuo-J9k4jIaRhO-VQEzjAa2haRr65pdlZsuNZijgon2Deug4WrtEShY6fo&usqp=CAU",
      ],
      description:
        "The story of King Richard's love for cars began generations ago. His grandfather, a master craftsman, started a humble detailing business after returning from the war. Known for his meticulous attention to detail, he would spend hours restoring cars to their former glory, earning the nickname 'The Car Whisperer.' It was in that workshop where Richard's father met his future wife—Richard's mother—when she brought in her beloved classic Camaro for detailing. A shared love for cars brought them together, and that passion was passed down to Richard.\n\nOn his seventh birthday, Richard unwrapped a toy Lamborghini that became his prized possession. He spent hours polishing it, mimicking the techniques he saw his father use in the family shop. Those moments ignited a dream to one day work on the world’s most luxurious cars. Fast forward to today, King Richard has turned that childhood passion into a profession, making every car sparkle like the ones in his boyhood dreams. His detailing business isn’t just a career—it’s the continuation of a family legacy.",
    },
    interior: {
      images: ["https://image.made-in-china.com/2f0j00KsEbTprhaaqO/St6018-Hot-Selling-Size-3-16-4-415m-Car-Detailing-Workshop-Capsule-Box-Work-Inspection-Repair-Lamp.webp"],
      description:
        "When it comes to detailing, King Richard is not just about appearances—he’s about the soul of the car. From vacuuming the tiniest crevices to restoring leather seats to their original glory, his meticulous attention to detail transforms interiors into pristine sanctuaries. Each job is approached like an artisan restoring a masterpiece, leaving behind a legacy of excellence in every car he touches.",
    },
    headlights: {
      images: ["https://content.presspage.com/uploads/1441/1920_commercial-desk.png?10000"],
      description:
        "In the kingdom of detailing, no job is too small or overlooked. King Richard knows that headlights are the eyes of every car, and they deserve to shine brightly. With precision and care, he restores foggy, weathered headlights to their former brilliance. And for every client who worries, King Richard assures: 'Yes, we are fully insured. Your chariot is safe in our hands.'",
    },
    maintenance: {
      images: ["https://www.researchgate.net/publication/330731039/figure/tbl1/AS:720789133344768@1548860929603/Five-year-plans-for-the-development-of-the-national-economy-of-the-USSR.png"],
      description:
        "As King Richard gazes into the future, his five-year plan is bold and ambitious. His vision is to expand the royal detailing empire, offering cutting-edge services that redefine luxury car care. With plans to introduce mobile units, eco-friendly products, and a state-of-the-art workshop, King Richard Lamborghini Detailing is destined to become the crown jewel of the car detailing world.",
    },
  };

  // Function to display images and description based on the clicked option
  function displayContent(key) {
    // Clear previous content
    imageDisplay.innerHTML = "";

    // Add new content
    if (content[key]) {
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = content[key].description;
      descriptionElement.classList.add("content-description");

      imageDisplay.appendChild(descriptionElement);

      content[key].images.forEach((imgSrc) => {
        const imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.alt = `${key} image`;
        imgElement.classList.add("content-image");
        imageDisplay.appendChild(imgElement);
      });
    }
  }

  // Event listener for menu options
  menuOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const key = option.getAttribute("data-images");
      displayContent(key);
    });
  });

  // Display default content
  displayContent("package");
});
