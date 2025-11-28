/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNav');
    const body = document.body;
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) { // Cambia después de 100px de scroll
            navbar.classList.add('scrolled');
            body.classList.add('has-fixed-navbar');
        } else {
            navbar.classList.remove('scrolled');
            body.classList.remove('has-fixed-navbar');
        }
    });
});
