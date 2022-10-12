window.onload = () => {
    let i = 0;
    let images = ["placeholder.jpg", "placeholder2.jpg"];
    let time = 5000;
    let carousel = document.getElementById("carousel");

    function changeSrc(delay) {
        i < images.length - 1 ? i++ : i = 0;
        setInterval(() => {
            carousel.src = `img/${images[i]}`;
        }, delay);
    }

    function toggleOpacity(delay) {
        carousel.style.opacity = 0;
        setInterval(() => {
            carousel.style.opacity = 1;
        }, delay);
    }

    function changeImage() {
        toggleOpacity(1000);
        changeSrc(500);
        setTimeout(changeImage, time);
    }

    changeImage();
}