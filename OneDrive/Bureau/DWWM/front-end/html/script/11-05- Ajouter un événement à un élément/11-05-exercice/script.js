/*
***********************************************************************
SOLUTION
***********************************************************************
*/



// Sélection des éléments 
const btnSombre = document.getElementById('btn-sombre');
const btnClair = document.getElementById('btn-clair');
const themeActuel = document.getElementById('theme-actuel');



// BOUTON SOMBRE avec onclick (premier gestionnaire)
btnSombre.onclick = function(){
    document.body.classList.add('theme-sombre');
    document.body.classList.remove('theme-clair');
    themeActuel.textContent = 'Sombre';
}


// BOUTON SOMBRE avec onclick (deuxième gestionnaire - va écraser le premier !)
btnSombre.onclick = function() {
    btnSombre.textContent = '🌙 Activé !';
    // Ce gestionnaire écrase complètement le précédent
    document.body.classList.add('theme-sombre');
    document.body.classList.remove('theme-clair');
    themeActuel.textContent = 'Sombre';
};

// BOUTON CLAIR avec addEventListener (premier gestionnaire)
btnClair.addEventListener('click', function() {
    document.body.classList.add('theme-clair');
    document.body.classList.remove('theme-sombre');
    themeActuel.textContent = 'Clair';
});

// BOUTON CLAIR avec addEventListener (deuxième gestionnaire - s'ajoute au premier)
btnClair.addEventListener('click', function() {
    console.log('Thème clair activé !');
    btnClair.textContent = '☀️ Activé !';
});