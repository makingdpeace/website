console.log("Hello from your script.js file!");

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');

    document.querySelectorAll('.clickable-image').forEach(image => {
        image.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-audio');
            audioPlayer.src = audioSrc;
            audioPlayer.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        });
    });
});
