const startButton = document.querySelector('#start');
let timerId;

startButton.addEventListener('click', function() {
    const timer = document.querySelector('#pomodoro-time');
    let [minutes, seconds] = timer.textContent.split(':').map(Number);


    if (startButton.textContent == 'stop') {
        clearInterval(timerId);
        startButton.textContent = 'start';
    } else {
        startButton.textContent = 'stop';

        timerId = setInterval(() => {

            if (minutes == 0 && seconds == 0) {
                clearInterval(timerId);
                timer.textContent = '25:00';
                startButton.textContent = 'start';
                return;
            } else if (seconds == 0) {
                minutes--;
                seconds = 60;
                // сначала поставила 59, но при работе таймера появлялось 24:58 сразу после 25:00
            };

            if (seconds > 0) {
                seconds--;
            };

            function addNum(num) {
                if (num < 10) {
                    return `0${num}`;
                };
                return num;
            };

            timer.textContent = `${addNum(minutes)} : ${addNum(seconds)}`;
        }, 1000);
    };
});