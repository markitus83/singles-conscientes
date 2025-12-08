window.addEventListener('scroll', function () {
    const video = document.querySelector('.parallax-video video');
    const scrollPosition = window.scrollY;

    // Mover el video a una velocidad diferente
    video.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});