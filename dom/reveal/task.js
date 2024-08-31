const revealEl = document.querySelectorAll('.reveal');
function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
        return false;
    }
    return true;
}

setInterval(() => {
    for (let i = 0; i < revealEl.length; i++) {
        if (isVisible(revealEl[i])) {
            revealEl[i].classList.add('reveal_active');
        } else {
            revealEl[i].classList.remove('reveal_active');
        }
    }
}, 100);
