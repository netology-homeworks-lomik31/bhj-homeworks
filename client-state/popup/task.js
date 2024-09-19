const popupIsClosed = document.cookie.includes('popupIsClosed=true')


if (!popupIsClosed) {
    document.getElementById("subscribe-modal").classList.add("modal_active")
}

document.querySelector(".modal__close").addEventListener("click", function() {
    document.getElementById("subscribe-modal").classList.remove("modal_active");
    document.cookie = `popupIsClosed=${encodeURIComponent('true')}`;
});


// document.cookie