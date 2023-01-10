function revealRight() {
    var reveals = document.querySelectorAll('.revealRight');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
function revealLeft() {
    var reveals = document.querySelectorAll('.revealLeft');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
function revealFade() {
    var reveals = document.querySelectorAll('.revealFade');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Initial loading of images on Destinations already on screen
revealRight();
revealLeft();
revealFade();

window.addEventListener('scroll', revealRight);
window.addEventListener('scroll', revealLeft);
window.addEventListener('scroll', revealFade);
