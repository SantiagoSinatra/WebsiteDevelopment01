window.onload = () => {
    let i = 0;
    let images = ["placeholder.jpg"];
    let time = 3000;
    let carousel = document.getElementById("carousel");

    function changeImage() {
        carousel.src = `img/${images[i]}`;
        if(i < images.length - 1){
            i++
        } else {
            i = 0;
        }
    }

    changeImage();
}