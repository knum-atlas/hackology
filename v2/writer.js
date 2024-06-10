var i = 0;
var speed = 25;


let node = document.getElementById("writer");
let txt = node.innerText;
node.innerText = "";

function typeWriter() {
  if (i < txt.length) {
    node.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function updateCountdown() {
const countdownElements = {
days: document.getElementById('days'),
hours: document.getElementById('hours'),
minutes: document.getElementById('minutes'),
seconds: document.getElementById('seconds')
};

const targetDate = new Date('2024-10-19T09:30:00Z').getTime();

const interval = setInterval(() => {
const now = new Date().getTime();
const distance = targetDate - now;

if (distance < 0) {
  clearInterval(interval);
  countdownElements.days.textContent = '00';
  countdownElements.hours.textContent = '00';
  countdownElements.minutes.textContent = '00';
  countdownElements.seconds.textContent = '00'
  return;
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdownElements.days.textContent = days.toString().padStart(2, '0');
countdownElements.hours.textContent = hours.toString().padStart(2, '0');
countdownElements.minutes.textContent = minutes.toString().padStart(2, '0');
countdownElements.seconds.textContent = seconds.toString().padStart(2, '0');
}, 1000);
}

window.onload =function() {
    updateCountdown();
    typeWriter();
};