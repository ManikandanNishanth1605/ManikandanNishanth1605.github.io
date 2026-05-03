document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".project-card, .exp-cont, .About_txt, .interest-list, .contact-text");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => {
        el.classList.add("fade-in");
        observer.observe(el);
    });

});

// HERO IMAGE SLIDER
const images = document.querySelectorAll(".image-frame img");
let index = 0;

setInterval(() => {
    images[index].classList.remove("active");

    index = (index + 1) % images.length;

    images[index].classList.add("active");
}, 3000);

function openProject(id) {
    document.getElementById(id).classList.add("active");
    document.body.style.overflow = "hidden"; // prevent background scroll
}

function closeProject(id) {
    document.getElementById(id).classList.remove("active");
    document.body.style.overflow = "auto";
}