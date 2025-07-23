function updateTime(){

    let now= new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes().toString().padStart(2,'0');
    let seconds=now.getSeconds().toString().padStart(2,'0');


    document.getElementById('hours').textContent=hours;
    document.getElementById('minutes').textContent=minutes;
    document.getElementById('seconds').textContent=seconds;


    const options={
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
    };

    document.getElementById('date').textContent=now.toLocaleDateString(undefined,options);
}

setInterval(updateTime,1000);
updateTime();