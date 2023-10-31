var typed = new Typed(".text", {
    strings: ["Programmer", "Software Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Get the menu icon and the navbar by their IDs
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Use a class selector for navbar

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', function () {
    // Toggle the visibility of the navbar
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});

let navLinks = navbar.querySelectorAll('a');

// Add a click event listener to each link in the navbar
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        if (window.innerWidth < 800) {
            navbar.style.display = 'none';
        }
    });
});



