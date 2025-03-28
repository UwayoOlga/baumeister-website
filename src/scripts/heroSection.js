const polysHolder = document.getElementById("polysHolder");
function checkSectionPosition() {
    const rect = polysHolder.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom > 0) {
        polysHolder.classList.add("scrollable");
        polysHolder.classList.add("overflow-auto");
    } else {
        polysHolder.classList.remove("scrollable");
        polysHolder.classList.remove("overflow-auto");
    }
}

window.addEventListener("scroll", checkSectionPosition);