document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const manualInputs = document.querySelectorAll('.slider-manual input');
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        manualInputs[index].checked = true;
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    manualInputs.forEach(input => {
        input.addEventListener('change', () => {
            currentSlideIndex = parseInt(input.value);
            showSlide(currentSlideIndex);
        });
    });

    showSlide(currentSlideIndex);
    setInterval(nextSlide, 6000);
});

function toggleDescription(descriptionId) {
    const description = document.getElementById(descriptionId);
    if (description.classList.contains('has-ellipsis')) {
        description.classList.remove('has-ellipsis');
    } else {
        description.classList.add('has-ellipsis');
    }
}

const languageToggle = document.getElementById('languageToggle');

languageToggle.addEventListener('click', () => {
    languageToggle.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {
    const headerLogo = document.querySelector('.header-logo');

    function setLogoBasedOnWidth() {
        if (window.innerWidth <= 500) {
            // Cambiar el logo por el nuevo logo cuando la pantalla sea pequeña
            headerLogo.src = './resource/rect2-4.png';
        } else {
            // Cambiar de vuelta al logo original cuando la pantalla sea grande
            headerLogo.src = './resource/Logo1.png';
        }
    }

    // Llamar a la función inicialmente para establecer el logo según el ancho inicial de la pantalla
    setLogoBasedOnWidth();

    // Agregar un event listener para cambiar el logo cuando cambie el tamaño de la ventana
    window.addEventListener('resize', setLogoBasedOnWidth);
});