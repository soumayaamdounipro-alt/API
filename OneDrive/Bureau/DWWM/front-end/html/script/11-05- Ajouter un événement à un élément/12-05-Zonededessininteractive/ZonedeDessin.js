// 1. Sélectionner les éléments nécessaires
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const clientDisplay = document.getElementById("client-display");
const pageDisplay = document.getElementById("page-display");
const canvasDisplay = document.getElementById("canvas-display");

const clearBtn = document.getElementById("clear-btn");
const colorPicker = document.getElementById("color-picker");
const sizeSlider = document.getElementById("size-slider");
const sizeValue = document.getElementById("size-value");

const toggleCoords = document.getElementById("toggle-coords");
const coordDisplay = document.getElementById("coord-display");


// 2. Initialiser les variables
let isDrawing = false;

let lastX = 0;
let lastY = 0;


// 3. Configuration initiale du style de dessin
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 3;
ctx.strokeStyle = "#ff6b6b";


// 4. Fonction pour calculer les coordonnées relatives au canvas
function getCanvasCoordinates(event) {

    // Position du canvas dans la fenêtre
    const rect = canvas.getBoundingClientRect();

    // Coordonnées relatives au canvas
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}


// 5. Fonction pour mettre à jour l'affichage des coordonnées
function updateCoordinatesDisplay(event) {

    // Coordonnées relatives au canvas
    const coords = getCanvasCoordinates(event);

    // Affichage console
    console.log("Coord. Client :", event.clientX, event.clientY);
    console.log("Coord. Page :", event.pageX, event.pageY);
    console.log("Coord. Canvas :", coords.x, coords.y);

    // Mise à jour des affichages
    clientDisplay.textContent =
        `Client : X=${event.clientX}, Y=${event.clientY}`;

    pageDisplay.textContent =
        `Page : X=${event.pageX}, Y=${event.pageY}`;

    canvasDisplay.textContent =
        `Canvas : X=${Math.round(coords.x)}, Y=${Math.round(coords.y)}`;
}


// 6. Event listener mousedown - démarrer le dessin
canvas.addEventListener("mousedown", function(event) {

    // Activer le dessin
    isDrawing = true;

    // Position relative au canvas
    const coords = getCanvasCoordinates(event);

    // Stocker la position
    lastX = coords.x;
    lastY = coords.y;

    // Mettre à jour l'affichage
    updateCoordinatesDisplay(event);
});


// 7. Event listener mousemove - dessiner
canvas.addEventListener("mousemove", function(event) {

    // Toujours mettre à jour les coordonnées
    updateCoordinatesDisplay(event);

    // Vérifier si on dessine
    if (!isDrawing) {
        return;
    }

    // Nouvelle position
    const coords = getCanvasCoordinates(event);

    // Dessiner une ligne
    ctx.beginPath();

    ctx.moveTo(lastX, lastY);

    ctx.lineTo(coords.x, coords.y);

    ctx.stroke();

    // Mettre à jour la dernière position
    lastX = coords.x;
    lastY = coords.y;
});


// 8. Event listeners mouseup et mouseleave - arrêter le dessin
canvas.addEventListener("mouseup", function() {
    isDrawing = false;
});

canvas.addEventListener("mouseleave", function() {
    isDrawing = false;
});


// 9. Ajouter les contrôles

// Bouton clear
clearBtn.addEventListener("click", function() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


// Color picker
colorPicker.addEventListener("input", function() {

    ctx.strokeStyle = colorPicker.value;
});


// Size slider
sizeSlider.addEventListener("input", function() {

    ctx.lineWidth = sizeSlider.value;

    sizeValue.textContent = sizeSlider.value + 'px';
});


// Toggle button pour afficher / masquer les coordonnées
toggleCoords.addEventListener("click", function() {

    if (coordDisplay.style.display === "none") {

        coordDisplay.style.display = "block";
        toggleCoords.textContent ='Masquer les coordonnées';

    } else {

        coordDisplay.style.display = "none";
    }
});