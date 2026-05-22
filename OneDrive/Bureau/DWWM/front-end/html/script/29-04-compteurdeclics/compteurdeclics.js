// Sélection des éléments
const btnCompter = document.getElementById('btn-compter');
const btnReset = document.getElementById('btn-reset');
const nombreClics = document.getElementById('nombre-clics');

// Variable pour compter
let compteur = 0;

/* On crée d'abord la fonction
function incrementerCompteur() {
    compteur = compteur + 1;
    nombreClics.textContent = compteur;
}

btnCompter.onclick = incrementerCompteur; */

// BOUTON COMPTER avec onclick (premier gestionnaire)
btnCompter.onclick = function() {
    compteur = compteur + 1;
    nombreClics.textContent = compteur;
};

// BOUTON COMPTER avec onclick (deuxième gestionnaire - écrase le premier !)
btnCompter.onclick = function() {
    nombreClics.style.color = 'red';
    // Ce gestionnaire écrase le précédent, donc le compteur ne fonctionne plus !
    compteur = compteur + 1;
    nombreClics.textContent = compteur;
};

// BOUTON RESET avec addEventListener (premier gestionnaire)
btnReset.addEventListener('click', function() {
    compteur = 0;
    nombreClics.textContent = compteur;
    nombreClics.style.color = 'white';
});

// BOUTON RESET avec addEventListener (deuxième gestionnaire - s'ajoute au premier)
btnReset.addEventListener('click', function() {
    console.log('Reset !');
    this.textContent = '🔄 Fait !';

    // Remet le texte normal après 1 seconde
    setTimeout(function() {
        btnReset.textContent = '🔄 Reset';
    }, 1000);
});