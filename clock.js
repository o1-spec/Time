function printTime() {
    let d = new Date();
    let hours = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "am"

    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        session = 'pm'
    }

    if (hours < 10) {
        hours = "0" + hours
    }
    //hours = (hours < 10) ? "0" + hours : hours;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    let time = `${hours}:${min}:${sec} ${session}`;

    document.getElementById('my-clock').innerText = time;
    document.getElementById('my-clock').textContent = time;
    //document.body.innerHTML = `${hours}:${min}:${sec}`;
    //const time = document.getElementsByClassName('clock')
    //time.innerHTML(`${hours}:${min}:${sec}`)

    //setTimeout(printTime, 1000)
}

const myInterval = setInterval(printTime, 1000)
//printTime()

function stopTime() {
    clearTimeout(myInterval)
}

function startTime() {
    setInterval(printTime, 1000)
}
/*
function printTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = `${h}:${m}:${s}`;
    document.body.innerHTML = time;

    setTimeout(printTime, 1000);
}

printTime();*/