function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const btn = document.querySelector("button.change-color");
const textColor = document.querySelector("span.color");

btn.addEventListener("click", (event) => {
    const randomColor = getRandomHexColor();
    textColor.textContent = randomColor;
    document.body.style.background = randomColor;
});
