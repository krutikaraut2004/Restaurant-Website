
// Get the menu bars and navbar elements from the DOM
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('header .flex .navbar');

// Toggle the menu icon and navbar's 'active' class on menu click
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// Get all sections and navigation links
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

// Handle navigation highlighting on scroll
window.onscroll = () => {
  // Close the menu and remove 'active' class on scroll
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    // Highlight the navigation link corresponding to the visible section
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
      });
    };
  });
}

// Toggle the search form's 'active' class on search icon click
document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

// Close the search form on close button click
document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}

// Initialize Swiper for the home slider
var homeSwiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// Initialize Swiper for the review slider with breakpoints
var reviewSwiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Function to add fade-out class to loader-container on window load
function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

// Function to fade out the loader after a delay
function fadeOut() {
  setInterval(loader, 3000);
}

// Trigger the fadeOut function on window load
window.onload = fadeOut;
