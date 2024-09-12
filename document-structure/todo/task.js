let tasks_list = document.getElementById("tasks__list");

document.getElementById("tasks__add").addEventListener("click", function(e) {
    e.preventDefault();
    let task_text = document.getElementById("task__input").value;
    if (task_text) {
        tasks_list.insertAdjacentHTML(
            "beforeend",
            `
                <div class="task">
                <div class="task__title">
                    ${task_text}
                </div>
                <a href="#" class="task__remove">&times;</a>
                </div>
            `
        );
        tasks_list.lastElementChild
            .querySelector(".task__remove")
            .addEventListener("click", function(event) {
                event.preventDefault();
                event.target.parentElement.remove();
            });
    }
});
