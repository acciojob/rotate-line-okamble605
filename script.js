const line = document.getElementById('line');
let angle = 0;

function rotateLine() {
  angle += 2; // Increase the angle by 2 degrees
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

setInterval(rotateLine, 20); // Rotate every 20 milliseconds
