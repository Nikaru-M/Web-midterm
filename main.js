const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) {
    function updateBackToTopButton() {
        backToTopButton.hidden = window.scrollY < 400;
    }

    window.addEventListener('scroll', updateBackToTopButton);

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    updateBackToTopButton();
}
