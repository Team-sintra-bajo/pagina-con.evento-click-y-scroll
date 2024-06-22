document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const extraContent = document.querySelector('.extra-content');

    window.addEventListener('scroll', function() {
        const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const red = Math.min(255, Math.floor(scrollPercentage * 255));
        const green = Math.min(255, Math.floor((1 - scrollPercentage) * 255));
        const blue = 150; // Ajusta este valor según tus preferencias

        body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.5)`; // Cambia el color de fondo con transparencia

        if (window.scrollY > 100) { // Mostrar el contenido adicional después de hacer scroll un poco
            extraContent.style.display = 'block';
        }
    });
});
