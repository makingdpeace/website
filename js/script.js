// console.log("Hello from your script.js file!");

let currentTrack = null; // Variable to keep track of the current track

function toggleTrack(track) {
    const audio = document.getElementById('track');

    // If the clicked track is the same as the current track, toggle play/pause
    if (currentTrack === track) {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    } else {
        // If a different track is clicked, change the source and play it
        audio.src = track;
        audio.play();
        currentTrack = track; // Update the current track
    }
}
