const dayOfWeek = document.getElementById("currentDayOfTheWeek");
const timeUTC = document.getElementById("currentUTCTime");

const day = new Date().toLocaleDateString("en-US", { weekday: "long" });

dayOfWeek.innerHTML = day;

setInterval(changeTime, 1000);

function changeTime() {
    const time = new Date().toLocaleTimeString('en-US');
    timeUTC.innerHTML = time;
}

changeTime();