const dayOfWeek = document.getElementById("currentDayOfTheWeek");
const timeUTC = document.getElementById("currentUTCTime");

const day = new Date().toLocaleDateString("en-US", { weekday: "long" });

dayOfWeek.innerHTML = day;

const updateTime = () => {
    const date = new Date();
    timeUTC.textContent = date.getTime();
  }
  
  const todayTag = document.getElementById('today');  
  
  setInterval(updateTime,1);