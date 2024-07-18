document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });

        // Adăugarea gestionării hover pe mobile (pentru click)
        panel.addEventListener('touchstart', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });
    });

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
    }

    const backgroundBlur = document.getElementById('backgroundBlur');
    const images = document.querySelectorAll('.panel');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const backgroundUrl = getComputedStyle(this).getPropertyValue('background-image');
            backgroundBlur.style.backgroundImage = backgroundUrl;
        });
    });
});
