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
            setTimeout(typeText, 100); // Délai entre l'affichage de chaque lettre (100ms)
        } else {
            isReversing = true;
            setTimeout(eraseText, 1000); // Délai avant d'effacer le texte
        }
    } else {
        if (currentIndex > 0) {
            currentIndex--;
            textElement.textContent = textToDisplay.substr(0, currentIndex);
            setTimeout(typeText, 100); // Délai entre la suppression de chaque lettre (100ms)
        } else {
            isReversing = false;
            setTimeout(typeText, 1000); // Délai avant de recommencer
        }
    }
}

function eraseText() {
    if (currentIndex > 0) {
        currentIndex--;
        textElement.textContent = textToDisplay.substr(0, currentIndex);
        setTimeout(eraseText, 100); // Délai entre la suppression de chaque lettre (100ms)
    } else {
        isReversing = false;
        setTimeout(typeText, 1000); // Délai avant de recommencer
    }
}



setTimeout(typeText, 0); // Délai avant de démarrer l'animation
