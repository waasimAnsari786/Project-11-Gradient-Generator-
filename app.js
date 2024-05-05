let gradBtn1 = document.querySelector("#gradient-btn-1");
let gradBtn2 = document.querySelector("#gradient-btn-2");
let copycodeBtn = document.querySelector(".copy-code-text");
let property = document.querySelector(".grad-property");
let body = gradBtn1.closest("body");

const generateColorCode = () => {
    let codeValues = `0123456789abcdef`;
    let colorCode = ``;
    
    for (let index = 0; index < 6; index++) {
        colorCode += codeValues[Math.floor(Math.random() * 16)];
    }

    return `#${colorCode}`;
};

const printColorCodeInBody = () => {
    gradBtn1.innerText = generateColorCode();
    gradBtn2.innerText = generateColorCode();

    let newProperty = `background:linear-gradient(to right , ${gradBtn1.innerText} , ${gradBtn2.innerText})`;
    let bodyProperty = `linear-gradient(to right , ${gradBtn1.innerText} , ${gradBtn2.innerText})`;
    body.style.background = bodyProperty;
    property.innerText = newProperty;
};

gradBtn1.addEventListener("click" , printColorCodeInBody);
gradBtn2.addEventListener("click" , printColorCodeInBody);

copycodeBtn.addEventListener("click" , () => {
    navigator.clipboard.writeText(property.innerText);
    alert(`Text Copied to the clipboard ${property.innerText}`);
});