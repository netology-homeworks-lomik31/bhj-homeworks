let tooltips = document.querySelectorAll(".has-tooltip");

for (let i = 0; i < tooltips.length; i++) {
    let tooltip = tooltips[i];
    tooltip.insertAdjacentHTML(
        "afterend",
        `<div class="tooltip" id=tooltip_${i}>${tooltip.getAttribute("title")}</div>`
    );
    // tooltip.id = `tooltip__text_${i}`;
    tooltip.addEventListener("click", (e) => {
        e.preventDefault();
        let tooltipDiv = document.getElementById(`tooltip_${i}`);
        let tooltipRect = tooltip.getBoundingClientRect();

        // Установка позиции подсказки ниже текста
        tooltipDiv.style.left = `${tooltipRect.left}px`; // Позиция слева
        tooltipDiv.style.top = `${tooltipRect.bottom + window.scrollY}px`; // Позиция сверху, с учетом прокрутки страницы

        tooltipDiv.classList.toggle("tooltip_active");
    });
}
