const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

console.log(textInput);
console.log(textOutput);

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() != "") {
        textOutput.textContent = event.currentTarget.value.trim();
    } else {
        textOutput.textContent = "Anonymous";
    }
});
