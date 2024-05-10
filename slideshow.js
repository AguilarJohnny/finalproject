document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const slideshow = document.querySelector('.slideshow');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    const images = ['9.png', '10.png', '11.png', '12.png', '13.png'];
    let currentIndex = 0;

    function showImage(index) {
        const image = document.createElement('img');
        image.src = images[index];
        slideshow.innerHTML = ''; // Clears the previous image
        slideshow.appendChild(image); // Appends the new image
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; // Wrap around to the first image
        }
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1; // Wrap around to the last image
        }
        showImage(currentIndex);
    }

    showImage(currentIndex); // Show the initial image

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    // Set interval for automatic slideshow
    setInterval(nextImage, 3000);
});
