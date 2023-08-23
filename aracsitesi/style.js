// Offcanvas öğesini alın
var offcanvasElement = document.querySelector('.offcanvas');

// Kapatma düğmesini alın
var closeButton = offcanvasElement.querySelector('.btn-close');

// Kapatma düğmesine tıklama olayı ekle
closeButton.addEventListener('click', function () {
    // Offcanvas öğesine 'hide' sınıfını ekleyin
    offcanvasElement.classList.add('hide');

    // Bir süre bekleyin ve ardından 'show' sınıfını kaldırın
    setTimeout(function () {
        offcanvasElement.classList.remove('show');
    }, 300); // 300ms, CSS'deki geçiş süresiyle eşleşmeli
});

const scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", function (event) {
    event.preventDefault();

    const targetElement = document.getElementById("31");
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Animasyon süresi (ms)
    const startTime = performance.now();

    function scrollToPosition(timestamp) {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easing = easeOutQuad(progress);
        const newPosition = startPosition + distance * easing;
        window.scrollTo(0, newPosition);

        if (elapsedTime < duration) {
            window.requestAnimationFrame(scrollToPosition);
        }
    }

    function easeOutQuad(t) {
        return t * (2 - t);
    }

    window.requestAnimationFrame(scrollToPosition);
});

const scrollButton2 = document.getElementById("scrollButton2");

scrollButton2.addEventListener("click", function (event) {
    event.preventDefault();

    const targetElement = document.getElementById("31");
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Animasyon süresi (ms)
    const startTime = performance.now();

    function scrollToPosition(timestamp) {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easing = easeOutQuad(progress);
        const newPosition = startPosition + distance * easing;
        window.scrollTo(0, newPosition);

        if (elapsedTime < duration) {
            window.requestAnimationFrame(scrollToPosition);
        }
    }

    function easeOutQuad(t) {
        return t * (2 - t);
    }

    window.requestAnimationFrame(scrollToPosition);
});
