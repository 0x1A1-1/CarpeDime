/**
    counts up the timer and increases the amount the user is burning each
    second determined by the rate: "rate"
*/
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var rate = 1.29;
var money = document.getElementById("money");
var duration = 0;
setInterval(setTime, 1000);


function setTime()
{
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds%60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
    duration = duration + rate;
    money.innerHTML = parseInt(duration);
}

function pad(val)
{
    var valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
}
