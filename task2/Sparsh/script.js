document.getElementById('setAlarm').addEventListener('click', function() {
    var alarmTime = document.getElementById('alarmTime').value;

    if (alarmTime !== "") {
        var now = new Date();
        var alarm = new Date(now.toDateString() + " " + alarmTime);

        if (alarm < now) {
            alarm.setDate(alarm.getDate() + 1);
        }

        var timeUntilAlarm = alarm - now;

        setTimeout(function() {
            document.getElementById('alarmStatus').innerText = "Time's up! Wake up!";
        }, timeUntilAlarm);
        
        document.getElementById('alarmStatus').innerText = "Alarm set for " + alarm.toLocaleTimeString();
    }
});
