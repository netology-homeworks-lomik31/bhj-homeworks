const holeList = Array.from(document.getElementsByClassName("hole"));
const scoreElement = document.getElementById("dead");
const missElement = document.getElementById("lost");

for (let i = 0; i < holeList.length; i++)
{
    holeList[i].addEventListener("click", () =>
    {
        if (holeList[i].classList.contains("hole_has-mole"))
        {
            scoreElement.textContent++;
            if (scoreElement.textContent >= 10)
            {
                alert("Победа!");
                startNewGame();
            }
        } else
        {
            missElement.textContent++;
            if (missElement.textContent >= 5)
            {
                alert("Вы проиграли!");
                startNewGame();
            }
        }
    });
}

function startNewGame()
{
    scoreElement.textContent = 0;
    missElement.textContent = 0;
}
