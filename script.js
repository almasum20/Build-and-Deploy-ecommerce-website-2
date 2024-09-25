// Script for navigation bar
const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

// product details section
const mainImg = document.querySelector("#mainImg");
const smallImg = document.querySelectorAll(".small-img");

smallImg[0].addEventListener("click", () => {
    mainImg.src = smallImg[0].src;
});
smallImg[1].addEventListener("click", () => {
    mainImg.src = smallImg[1].src;
});
smallImg[2].addEventListener("click", () => {
    mainImg.src = smallImg[2].src;
});
smallImg[3].addEventListener("click", () => {
    mainImg.src = smallImg[3].src;
});

