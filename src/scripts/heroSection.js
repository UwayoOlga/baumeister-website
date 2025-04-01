const polysHolder = document.getElementById("polysHolder");
function checkSectionPosition() {
    const rect = polysHolder.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom > 0) {
        polysHolder.classList.add("scrollable");
    } else {
        polysHolder.classList.remove("scrollable");
    }
}

window.addEventListener("scroll", checkSectionPosition);