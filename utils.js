function smoothToId(id = window.location.hash.replace('#', '')) {

    let target = document.getElementById(id)
    if (!target) return

    target.scrollIntoView({
        behavior: 'smooth', block: 'center'
    })
}

function handleCopy(event) {

    let selector = event.target.getAttribute('data-copy')
    let target = document.getElementById(selector)
    let text = target.innerText

    navigator.clipboard.writeText(text)

    target.classList.add('-copied')
    setTimeout(() => target.classList.remove('-copied'), 600)
}

function startTypeWriter() {

    let i = 0;
    let speed = 25;

    let node = document.getElementById("writer");
    if (!node) return

    let txt = node.innerText;
    let html = node.innerHTML
    node.innerText = "";

    function typeWriter() {
        if (i < txt.length) {
          node.innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        } else if (i == txt.length) {
          node.innerHTML = html;
          i++;
        }
      }

    typeWriter()
}

function updateCountdown() {

    const TARGETDATE = new Date('2024-10-19T10:00:00Z').getTime();

    let els = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    if (!els.days || !els.hours || !els.minutes || !els.seconds) return

    let interval = setInterval(() => {

        let now = new Date().getTime();
        let distance = TARGETDATE - now;

        if (distance < 0) {
            clearInterval(interval);
            els.days.textContent = '00';
            els.hours.textContent = '00';
            els.minutes.textContent = '00';
            els.seconds.textContent = '00'
            return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        els.days.textContent = days.toString().padStart(2, '0');
        els.hours.textContent = hours.toString().padStart(2, '0');
        els.minutes.textContent = minutes.toString().padStart(2, '0');
        els.seconds.textContent = seconds.toString().padStart(2, '0');
        
    }, 1000);
}

window.addEventListener('hashchange', () => smoothToId())
window.addEventListener('load', () => {

    smoothToId()
    updateCountdown()
    startTypeWriter()

    document.querySelectorAll('[data-copy]').forEach(el => {
        el.addEventListener('click', handleCopy)
    })

}, { once: true })
