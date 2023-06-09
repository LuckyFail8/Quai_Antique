const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.classList.add('active'); 
    if (link.href !== window.location.href) {
        link.classList.remove('active'); 
    }
});
