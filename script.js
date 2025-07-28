function updateTime() {
    const timeDisplay = document.getElementById('time');
    
    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time to be two digits (e.g., 09:05:03)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the time in the HTML element
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Call updateTime every 1000ms (1 second)
setInterval(updateTime, 1000);

// Initialize the clock immediately
updateTime();
