// console.log("Hello from your script.js file!");

let currentTrack = null; // Variable to keep track of the currently playing track

function toggleTrack(trackSrc, element) {
    const audio = document.getElementById('track'); // Get the audio element

    if (currentTrack === trackSrc) {
        // If the same track is clicked, toggle play/pause
        if (audio.paused) {
            audio.play(); // Play the audio
            element.classList.remove('paused'); // Update the class to show it's playing
            element.classList.add('playing');
        } else {
            audio.pause(); // Pause the audio
            element.classList.remove('playing'); // Update the class to show it's paused
            element.classList.add('paused');
        }
    } else {
        // If a different track is clicked
        audio.src = trackSrc; // Set the new track source
        audio.play(); // Play the new track
        currentTrack = trackSrc; // Update the current track

        // Update the classes for all record sleeves
        const sleeves = document.querySelectorAll('.record-sleeve');
        sleeves.forEach(sleeve => {
            sleeve.classList.remove('playing');
            sleeve.classList.add('paused');
        });
        element.classList.remove('paused');
        element.classList.add('playing');
    }
}
