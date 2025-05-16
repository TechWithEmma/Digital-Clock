function updateClock(){
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    //convert to 12 hour format
    let ampm;
    if(hours >= 12){
        ampm = "PM";
    }else{
        ampm = "AM";
    }


    hours = hours % 12;
    if(hours === 0){
        hours = 12; 
    }

    //pad with leading zeros where necessary
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    //DOM Update to HTML
    document.getElementById('hours').textContent = paddedHours;
    document.getElementById('minutes').textContent = paddedMinutes;
    document.getElementById('seconds').textContent = paddedSeconds;
    document.getElementById('ampm').textContent = ampm;
}

updateClock();
setInterval(updateClock, 1000);