let mybackground;
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let direction = document.querySelector("#direction");
let code = document.querySelector("#code");
let form = document.querySelector("#form");
let codeWrap = document.querySelector(".codeWrap");
let copyCode = document.querySelector(".copy");
let textInput;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let color1Val = color1.value;
    let color2Val = color2.value;
    let directionVal = direction.value;

    mybackground = `linear-gradient(to ${directionVal}, ${color1Val}, ${color2Val})`;

    codeWrap.style.display = "block";
    code.textContent = `your bg code here : ${mybackground}`;

    document.body.style.backgroundImage = mybackground;
    copyText(mybackground);
});

function copyText(mybackground) {
    copyCode.addEventListener("click", () => {
        if (document.querySelector("textarea") == null) {
            textInput = document.createElement("textarea");
            codeWrap.append(textInput);
            textInput.value = mybackground;

            textInput.select();
            document.execCommand("copy");

            code.textContent = "code copied";

            setTimeout(() => {
                code.hidden = true;
            }, 1000);
        } else {
            textInput.value = mybackground;

            textInput.select();
            document.execCommand("copy");
            code.textContent = "code copied";

            setTimeout(() => {
                code.hidden = true;
            }, 1000);
        }
    });
}