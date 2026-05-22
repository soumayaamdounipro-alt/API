// Sélectionner les éléments nécessaires
const images = document.querySelectorAll('.galerie img');

const artworkTitle = document.getElementById('artwork-title');
const artworkArtist = document.getElementById('artwork-artist');
const artworkPosition = document.getElementById('artwork-position');

const displayKey = document.getElementById('display-key');
const displayCode = document.getElementById('display-code');
const displayKeycode = document.getElementById('display-keycode');
const displayAction = document.getElementById('display-action');


// Variable pour suivre l'image actuellement active
let indexActuel = 0;


// Ajoute la classe "active" à la première image
images[indexActuel].classList.add('active');


// Fonction pour mettre à jour les informations sur l'oeuvre
function updateArtworkInfo() {

    // Récupérer l'image active
    const currentImage = images[indexActuel];

    // Mettre à jour le titre
    artworkTitle.textContent = currentImage.dataset.title;

    // Mettre à jour l'artiste
    artworkArtist.textContent = currentImage.dataset.artist;

    // Affichage de la position
    artworkPosition.textContent =
        `Image ${indexActuel + 1} / ${images.length}`;
}


// Ecouteur d'évenement quand une touche du clavier est enfoncée
document.addEventListener('keydown', function(event) {

    // On récupère les infos sur la touche préssée
    const key = event.key;
    const code = event.code;
    const keycode = event.keyCode;

    // On affiche ces infos en console
    console.log(key);
    console.log(code);
    console.log(keycode);

    // Mise à jour des infos clavier dans la page
    displayKey.textContent = key;
    displayCode.textContent = code;
    displayKeycode.textContent = keycode;

    // -----------------------------------------------------

    // Si l'utilisateur appuie sur la flèche droite
    if (key === 'ArrowRight') {

        // Supression de la classe active de l'image actuelle
        images[indexActuel].classList.remove('active');

        // On passe à l'image suivante
        indexActuel = (indexActuel + 1) % images.length;

        // Ajout de la classe active à la nouvelle image
        images[indexActuel].classList.add('active');

        // Mise à jour des infos
        updateArtworkInfo();

        // Affichage de l'action
        displayAction.textContent = 'Navigation Droite';
    }

    // -----------------------------------------------------

    // Si l'utilisateur appuie sur la flèche gauche
    else if (key === 'ArrowLeft') {

        // Supression de la classe active
        images[indexActuel].classList.remove('active');

        // Retour à l'image précédente
        indexActuel = indexActuel - 1;

        // Boucle vers la dernière image si on est au début
        if (indexActuel < 0) {
            indexActuel = images.length - 1;
        }

        // Ajout de la classe active
        images[indexActuel].classList.add('active');

        // Mise à jour des infos
        updateArtworkInfo();

        // Affichage de l'action
        displayAction.textContent = 'Navigation Gauche';
    }

    // -----------------------------------------------------

    // Si l'utilisateur appuie sur Entrée
    else if (key === 'Enter') {

        // Ajout de la classe selected
        images[indexActuel].classList.add('selected');

        // Mise à jour du texte
        displayAction.textContent = 'Oeuvre sélectionnée';
    }

    // -----------------------------------------------------

    // Si l'utilisateur appuie sur Echap
    else if (key === 'Escape') {

        // Retirer la classe selected de toutes les images
        images.forEach(function(image) {
            image.classList.remove('selected');
        });

        // Mise à jour du texte
        displayAction.textContent = 'Reset effectué';
    }

    // -----------------------------------------------------
});


// Appel de la fonction au chargement
updateArtworkInfo();

       