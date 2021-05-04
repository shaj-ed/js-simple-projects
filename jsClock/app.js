// Select items
const hours = document.querySelector('[data-get-hour]');
const minutes = document.querySelector('[data-get-minute]');
const seconds = document.querySelector('[data-get-second]');


function setClock() {
    const currentTimes = new Date();

    const currentSecond = currentTimes.getSeconds();
    const currentMinute = currentTimes.getMinutes();
    const currentHour = currentTimes.getHours();

    const secondRatio = currentSecond / 60;
    const minuteRatio = (secondRatio + currentMinute) / 60;
    const hourRatio = (minuteRatio + currentHour) / 12;

    setRatio(seconds, secondRatio);
    setRatio(minutes, minuteRatio);
    setRatio(hours, hourRatio);
}


function setRatio(element, ratio) {
    element.style.setProperty('--rotation', ratio * 360);
}

setInterval(setClock, 1000);
setClock();