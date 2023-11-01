const timeBox = document.getElementById("timeBox");

function displayTime() {
    timeBox.style.display = "block";
    update();
    let timer = setInterval(update, 1000);
}

function update() {
    const today = new Date();
    const hours = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
    const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
    const seconds = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();
    timeBox.innerHTML = hours + ":" + minutes + ":" + seconds + "<br>Unix Time: " + today.getTime();
}

displayTime();

setInterval(changeColor, 1000);

function changeColor() {
    const heading = document.querySelector("h1");
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    heading.style.color = colors[Math.floor(Math.random() * colors.length)];
}
