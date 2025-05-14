function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Pad with leading zeros if needed
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    // Update the HTML elements
    document.getElementById('hours').textContent = paddedHours;
    document.getElementById('minutes').textContent = paddedMinutes;
    document.getElementById('seconds').textContent = paddedSeconds;
    document.getElementById('ampm').textContent = ampm;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);