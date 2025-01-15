const images = document.getElementsByClassName("img_wrapper");
console.log(images)
for (let image of images) {
    image.addEventListener("mouseover", (e) => {
        e.target.style.transform = "scale(2.5)";
        e.target.style.transition = "transform .7s ease-in-out";
        e.target.style.transition = "transform-origin .05s";
    });
    image.addEventListener("mousemove", (e) => {
        console.log(e.pageX, getOffset(e.target.parentElement)['left'])
        e.target.style.transformOrigin = (e.pageX - getOffset(e.target.parentElement)['left'])/e.target.clientWidth * 100 + "%" + (e.pageY - getOffset(e.target.parentElement)['top'])/event.target.clientHeight * 100 + "%";
    })
    image.addEventListener("mouseout", (e) => {
        e.target.style.transform = "scale(1)";
    });
}
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}