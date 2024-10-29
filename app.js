document.addEventListener('scroll', function() {
    const mainContent = document.querySelector('.main-content');
    const position = mainContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        mainContent.classList.add('active');
    }
});
function printCV() {
    window.print(); // Memanggil dialog cetak
}

