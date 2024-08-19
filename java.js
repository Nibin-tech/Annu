document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector('.background');
    const colors = ['#000', '#002244', '#004488', '#000'];
    let currentColorIndex = 0;

    setInterval(() => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        background.style.backgroundColor = colors[currentColorIndex];
    }, 5000);
});
// Function to show a prompt after 5 seconds
setTimeout(function() {
    alert("Click on the card to reveal the message!");
}, 5000);

// Function to handle card click
function handleCardClick() {
    alert("Happy Birthday! May your day be filled with joy and happiness!");
}


