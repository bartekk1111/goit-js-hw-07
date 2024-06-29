function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const assignStyles = (element, styleObject) => {
    Object.entries(styleObject).forEach(([key, value]) => {
        element.style[key] = value;
    });
};

const textInput = document.querySelector("#controls > input");
const btnCreate = document.querySelector("#controls > button:nth-child(2)");
const btnDestroy = document.querySelector("#controls > button:nth-child(3)");
const boxesPlayground = document.querySelector("div#boxes");
let numberOfBoxes = 0;

textInput.addEventListener("input", (e) => {
    numberOfBoxes = e.currentTarget.value.trim();
});

const size = {
    width: 30,
    height: 30,
};

const createBox = () => {
    const div = document.createElement("div");
    assignStyles(div, {
        width: size.width + "px",
        height: size.height + "px",
        background: getRandomHexColor(),
    });
    return div;
};

btnCreate.addEventListener("click", (event) => {
    reset();
    if (numberOfBoxes < 1 || numberOfBoxes > 100) {
        return alert("Please enter numbers between 1 and 100");
    }
    for (let i = 0; i < numberOfBoxes; i++) {
        boxesPlayground.insertAdjacentElement("afterbegin", createBox());
        size.height += 10;
        size.width += 10;
    }
});

function reset() {
    boxesPlayground.innerHTML = "";
    size.height = 30;
    size.width = 30;
    textInput.value = "";
}

btnDestroy.addEventListener("click", reset);
