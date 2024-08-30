const buttonContainers = document.querySelectorAll('.button-container');

buttonContainers.forEach((container) => {
    const lottiePlayer = container.querySelector('dotlottie-player');

    // Stop then start animation
    container.addEventListener('mouseenter', () => {
        lottiePlayer.stop();
        lottiePlayer.play();
    });

    // Reset the animation to the beginning, then start
    lottiePlayer.addEventListener('complete', () => {
        if (container.matches(':hover')) {
            lottiePlayer.seek(0); // Reset the animation to the beginning
            lottiePlayer.play();  // Play the animation
        }
    });

    // Stop the animation
    container.addEventListener('mouseleave', () => {
        lottiePlayer.stop();
    });
});