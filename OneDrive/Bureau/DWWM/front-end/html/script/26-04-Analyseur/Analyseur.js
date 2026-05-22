// Cibler et récupérer le contenu original
const contenuOriginal =document.getElementById('contenu-original');

// Cibler et récupérer le résultat (id résultat)
const resultat = document.getElementById("resultat");

// Cibler et récupérer la longueur (id longueur)
const longueur = document.getElementById("longueur");


// Cibler et récupérer les 3 boutons avec leur id
const btnInnerHtml = document.getElementById("btn-inner-html");
const btnTextContent = document.getElementById("btn-text-content");
const btnInnerText = document.getElementById("btn-inner-text");

// Fonction pour analyser avec innerHTML
btnInnerHtml.addEventListener('click', function()  {
    // Lecture du contenu au format innerhtml
   
    // qu'on range dans une vairable
    const contenu = contenuOriginal.innerHTML;
    // Affichage du contenu
    resultat.textContent = contenu;
    // Calcul de la longueur
    longueur.textContent = contenu.length + " caractères"; 
});


// Fonction pour analyser avec textContent
btnTextContent.addEventListener('click', function() {
    // Lecture du contenu au format innerHTML
    const contenu1 = contenuOriginal.innerHTML;

    // Affichage du contenu
    resultat.textContent = contenu1;

    // Calcul de la longueur
    longueur.textContent = contenu.length + " caractères";

});

// Fonction pour analyser avec innerText
btnInnerText.addEventListener('click', function() {
    const contenu2 = contenuOriginal.innerText;
    resultat.textContent = contenu2;
    longueur.textContent = contenu.length + " caractères";
});