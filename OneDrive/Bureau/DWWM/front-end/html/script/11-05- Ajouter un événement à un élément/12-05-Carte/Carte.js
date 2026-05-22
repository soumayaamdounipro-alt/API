// 1. Sélection des éléments HTML nécessaires
const treasureMap = document.getElementById("treasure-map");
const treasure = document.getElementById("treasure");

const clientInfo = document.getElementById("client-info");
const pageInfo = document.getElementById("page-info");
const distanceInfo = document.getElementById("distance-info");

const newTreasure = document.getElementById("new-treasure");


// 2. Création des 2 variables pour stocker la position du trésor sur la carte
let treasureX = 0;
let treasureY = 0;


/* 3. Création de la premiere fonction pour placer le trésor
 aléatoirement sur la carte */
function placeTreasure() {

    /* Calcul d'une position aléatoire en X en tenant compte de la
    taille de la carte et de celle du trésor
    ---> Math.random() * (treasureMap.offsetWidth - 50);*/
    treasureX = Math.random() * (treasureMap.offsetWidth - 50);

    // Pareil pour la position aléatoire en Y
    treasureY = Math.random() * (treasureMap.offsetHeight - 50);

    // Positionner le trésor dans la carte avec les coordonnées calculées
    // (utiliser .style.left et .style.top)
    treasure.style.left = treasureX + "px";
    treasure.style.top = treasureY + "px";

    // Cacher le trésor
    treasure.classList.add("hidden");
}


// 4. Création de la 2eme fonction au clic sur la carte
treasureMap.addEventListener('click', function(event) {

    // récupérer les coordonnées du clic par rapport a la fenetre
    const clientX = event.clientX;
    const clientY = event.clientY;

    // récupérer les coordonnées du clic par rapport a la page
    const pageX = event.pageX;
    const pageY = event.pageY;

    // Afficher ces coord. dans la console
    console.log("Client :", clientX, clientY);
    console.log("Page :", pageX, pageY);

    // Mettre à jour l'affichage des coordonnées client et page dans notre page
    clientInfo.textContent = `Client : X=${clientX}, Y=${clientY}`;
    pageInfo.textContent = `Page : X=${pageX}, Y=${pageY}`;

    /* Calculer la position du clic par rapport a la carte
    ---> treasureMap.getBoundingClientRect(); Pour récupérer la position et la taille de la carte
    ---> Faire la soustraction entre la position de la souris dans la fenetre et la position de la carte
        par rapport au bord gauche de la fenetre */
    const mapRect = treasureMap.getBoundingClientRect();

    const clickX = clientX - mapRect.left;
    const clickY = clientY - mapRect.top;

    // Calculer la distance entre le clic et la position du trésor
    const distance = Math.sqrt(
        (clickX - treasureX) ** 2 +
        (clickY - treasureY) ** 2
    );

    // Afficher la distance arrondie en pixel
    distanceInfo.textContent = `${Math.round(distance)}px`;

    // Si la distance est inferieure a 30px, trésor trouvé
    if (distance < 30) {

        // Faire apparaitre le trésor
        treasure.classList.remove("hidden");

        // Afficher un message
        distanceInfo.textContent = "🎉 Trésor trouvé !";
    }

});


// Au clic sur le bouton de reset on appel notre fonction de placement aléatoire du trésor
newTreasure.addEventListener("click", placeTreasure);


// Ici on appel notre fonction de placement du trésor au chargement de la page
placeTreasure();