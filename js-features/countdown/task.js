let timerValue = Math.random() * 10000;
let timerHours;
let timerMinutes;
let timerSeconds;
// Get the timer element using a selector
let timerElement = document.querySelector('#timer');

let intervalId = setInterval(() =>
    {
        if (timerValue >= 1)
        {
            timerValue--;
            timerHours = Math.floor(timerValue / 3600);
            timerMinutes = Math.floor((timerValue - timerHours * 3600) / 60);
            timerSeconds = Math.floor(timerValue - timerHours * 3600 - timerMinutes * 60);
            // Add leading zero to timer values if they are less than 10
            timerHours = timerHours < 10 ? `0${timerHours}` : timerHours;
            timerMinutes = timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes;
            timerSeconds = timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds;
            timerElement.textContent = `${timerHours}:${timerMinutes}:${timerSeconds}`;
        }
        else
        {
            alert("Вы победили в конкурсе!");
            clearInterval(intervalId);
        }
    }, 1000);
// Use the timer value as needed
console.log(timerValue);
