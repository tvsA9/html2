
document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".box");
    const navbar = document.getElementById("navbar");


    box.addEventListener("mouseenter", () => {
        navbar.style.height = "100px";
    });

    box.addEventListener("mouseleave", () => {
        navbar.style.height = "0";
    });



});
