/* step 1. selection all important elements  */
const watch = document.querySelector('.watch');
const minutes = watch.querySelector(".min");
const sec = watch.querySelector(".sec");
const millisecond = watch.querySelector(".millisecond");

/*  step 2. set event handle in start button  */
let interval;
let millisecondTime = 0;
let secTime = 0;
let minTime = 0;

function setInterVal() {
    interval = setInterval(() => {
        millisecondTime++;
        if (millisecondTime === 100) {
            secTime++;

            millisecondTime = 0;
            if (secTime === 59) {
                secTime = 0;
                minTime++;
            }
        }
        if (minTime <= 9 || secTime <= 9) {

        }
        minutes.innerText = minTime <= 9 ? '0' + minTime : minTime;
        sec.innerText = secTime <= 9 ? '0' + secTime : secTime;
        millisecond.innerText = millisecondTime;
    }, 10);
}
function startStopWatch() {
    if (this.classList.contains('active')) {
        startButton('Start', '#0097e6', 'active', true)
        clearInterval(interval)
        timeValue(parseFloat(millisecond.innerText), parseFloat(sec.innerText), parseFloat(minutes.innerText))
    } else {
        startButton('Stop', 'salmon', 'active', false)
        setInterVal();
    }
}
document.getElementById("start-btn").addEventListener("click", startStopWatch)
function resetStopWatch() {
    clearInterval(interval)
    minutes.innerText = '00'
    sec.innerText = '00'
    millisecond.innerText = '00';
    startButton('Start', '#0098e6', 'active', true)
    timeValue(0, 0, 0)
};
document.getElementById("reset-btn").addEventListener("click", resetStopWatch);
// function for times value 
function timeValue(milliSecond, secondTime, minutesTime) {
    millisecondTime = milliSecond;
    secTime = secondTime;
    minTime = minutesTime;
}
// function for start button 
function startButton(BtnName, btnColor, btnClass, isRemovable) {
    document.getElementById("start-btn").innerText = BtnName;
    document.getElementById("start-btn").style.backgroundColor = btnColor;
    if (isRemovable) {
        document.getElementById("start-btn").classList.remove(btnClass);
    } else {
        document.getElementById("start-btn").classList.add(btnClass);
    }
}