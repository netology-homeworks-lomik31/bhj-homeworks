const cookie = document.getElementById('cookie');
let cookieValue = 0;
let cookieSize = 100;
let clickTime = Date.now();
let clickSpeed;
let cookieSizeMultiplier = 1;
let cookieWidth = parseInt(cookie.width);

cookie.addEventListener('click', () => {
    cookieValue++;
    cookieSizeMultiplier = cookieSizeMultiplier === 1 ? 1.2 : 1;

    cookie.width = cookieWidth * cookieSizeMultiplier;

    clickSpeed = (1 / ((Date.now() - clickTime) / 1000)).toFixed(2);
    clickTime = Date.now();

    // console.log(timeFromLastClick);

    // Update the cookie value
    document.getElementById('clicker__counter').textContent = cookieValue;
    document.getElementById('clicker__speed').textContent = clickSpeed;
});