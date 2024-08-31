let fontSizeControls = document.querySelector(".book__control.book__control_font-size").querySelectorAll("a.font-size");

fontSizeControls.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log(e);
        e.preventDefault();
        fontSizeControls.forEach((i) => i.classList.remove("font-size_active"));
        item.classList.toggle("font-size_active");
        document.querySelector(".book").classList.remove("book_fs-big", "book_fs-small");
        if (item.dataset.size)
            document.querySelector(".book").classList.add(`book_fs-${item.dataset.size}`);
    });
});