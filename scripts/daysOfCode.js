function updateDaysCount() {
    let currentCount = parseInt(document.getElementById('daysCount').innerText);

    currentCount++;

    document.getElementById('daysCount').innerText = currentCount;
}

updateDaysCount();

setInterval(updateDaysCount, 24 * 60 * 60 * 1000); 