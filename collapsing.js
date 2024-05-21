document.addEventListener("DOMContentLoaded", function() {
    let collapsible = document.getElementsByClassName("collapsible");
    for (let i = 0; i < collapsible.length; i++) {
        collapsible[i].addEventListener("click", collapseNeighbor);
    }
});

function collapseNeighbor() {

    this.classList.toggle("active");

    let collapsing = this.parentElement.parentElement.nextElementSibling;

    if (collapsing.style.display === "block") {
        collapsing.style.display = "none";
    } else {
        collapsing.style.display = "block";
    }
}