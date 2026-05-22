// Sélection toutes les touches du piano 
const touches = document.querySelectorAll('.touche');
const noteAffichee = document.getElementById('note-affichee');

// =============================
// ÉVÉNEMENT : TOUCHE APPUYÉE
// =============================

document.addEventListener('keydown', function(event) {

    // Récupère la touche pressée
    const touchePressee = event.key.toLowerCase();

    // Recherche la touche correspondante dans le HTML
    const touche = document.querySelector(
        `.touche[data-key="${touchePressee}"]`
    );

    // Vérifie si la touche existe
    if (touche) {

        // Évite les répétitions si la touche reste appuyée
        if (!touche.classList.contains('active')) {

            // Ajoute la classe active
            touche.classList.add('active');

            // Récupère le nom de la note
            const note = touche.dataset.note;

            // Affiche la note
            noteAffichee.textContent = note;
        }
    }
});


// =============================
// ÉVÉNEMENT : TOUCHE RELÂCHÉE
// =============================

document.addEventListener('keyup', function(event) {

    // Récupère la touche relâchée
    const toucheRelachee = event.key.toLowerCase();

    // Recherche la touche correspondante
    const touche = document.querySelector(
        `.touche[data-key="${toucheRelachee}"]`
    );

    // Vérifie si elle existe
    if (touche) {

        // Supprime la classe active
        touche.classList.remove('active');

        // Remet le texte par défaut
        noteAffichee.textContent = 'Aucune';
    }
});

/*
***********************************************************************
SOLUTION
***********************************************************************
*/

// Sélectionner les éléments
const touches = document.querySelectorAll('.touche');
const noteAffichee = document.getElementById('note-affichee');

// Écouter les événements du clavier
document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    
    // Trouver la touche correspondante
    const toucheCorrespondante = document.querySelector(`[data-key="${key}"]`);
    
    if (toucheCorrespondante) {
        // Éviter la répétition si la touche est maintenue
        if (!toucheCorrespondante.classList.contains('active')) {
            // Activer la touche
            toucheCorrespondante.classList.add('active');
            
            // Afficher la note
            const note = toucheCorrespondante.getAttribute('data-note');
            noteAffichee.textContent = note + ' ♪';
        }
    }
});

document.addEventListener('keyup', function(event) {
    const key = event.key.toLowerCase();
    
    // Trouver la touche correspondante
    const toucheCorrespondante = document.querySelector(`[data-key="${key}"]`);
    
    if (toucheCorrespondante) {
        // Désactiver la touche
        toucheCorrespondante.classList.remove('active');
        
        // Remettre "Aucune" note
        noteAffichee.textContent = 'Aucune';
    }
});