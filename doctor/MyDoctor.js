const header = document.getElementById('header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the header
        header.style.top = '0';
    } else {
        // Scrolling down, hide the header
        header.style.top = '-80px'; // Adjust the height of the header
    }

    prevScrollPos = currentScrollPos;
});













