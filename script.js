const textElement = document.getElementById("text-content");
const cursorElement = document.getElementById("cursor");
const textToDisplay = "> Hichioo Development Services";
let currentIndex = 0;
let isReversing = false;

function typeText() {
    if (!isReversing) {
        if (currentIndex < textToDisplay.length) {
            textElement.textContent += textToDisplay.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeText, 100); 
        } else {
            isReversing = true;
            setTimeout(eraseText, 1000); 
        }
    } else {
        if (currentIndex > 0) {
            currentIndex--;
            textElement.textContent = textToDisplay.substr(0, currentIndex);
            setTimeout(typeText, 100);
        } else {
            isReversing = false;
            setTimeout(typeText, 1000); 
        }
    }
}

function eraseText() {
    if (currentIndex > 0) {
        currentIndex--;
        textElement.textContent = textToDisplay.substr(0, currentIndex);
        setTimeout(eraseText, 100); 
    } else {
        isReversing = false;
        setTimeout(typeText, 1000); //
    }
}



setTimeout(typeText, 0); 
