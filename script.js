document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var navLinks = document.getElementById('nav-links');
    var arrow = document.getElementById('arrow');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show'); // Toggle menu visibility
    });

});
