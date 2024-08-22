document.getElementById("click__dropdown").addEventListener("click", function() {
    document.getElementsByClassName("dropdown__list")[0].classList.toggle("dropdown__list_active");
});

document.querySelectorAll(".dropdown__item").forEach(function(item) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelectorAll("dropdown__value").forEach(e =>
            e.textContent = item.textContent
        )
        document.getElementsByClassName("dropdown__list")[0].classList.remove("dropdown__list_active");
    });
});

