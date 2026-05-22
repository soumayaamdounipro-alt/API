const image = document.getElementById('monImage');
const resultat = document.getElementById('resultat');

const btnGetSrc = document.getElementById("btnGetSrc");
const btnSetSrc = document.getElementById("btnSetSrc");
const btnGetWidth = document.getElementById("btnGetWidth");
const btnSetWidth = document.getElementById("btnSetWidth");
const btnSetCustom = document.getElementById("btnSetCustom");
const btnGetCustom = document.getElementById("btnGetCustom");


// 3. Afficher src
btnGetSrc.addEventListener("click", function () {
    const srcAttribute = image.getAttribute("src");
    resultat.textContent = "getAttribute('src'): ${srcAttribute} ";
});


// 4. Changer src
btnSetSrc.addEventListener("click", function () {
    image.setAttribute("src", "https://placehold.co/800x200");
    resultat.textContent = "Src de l'image modifiée !";
});


// 5. Afficher largeur
btnGetWidth.addEventListener("click", function () {
    const largeurAttr = image.getAttribute("width");
    const largeurProp = image.width;

    resultat.textContent = 
        "width (attribut) = " + largeurAttr + 
        " | width (propriété) = " + largeurProp;
});


// 6. Changer largeur
btnSetWidth.addEventListener("click", function () {
    image.width = 200;
    resultat.textContent = "Largeur modifiée à 200px !";
});


// 7. Ajouter data-test
btnSetCustom.addEventListener("click", function () {
    image.setAttribute("data-test", "exemple123");
    resultat.textContent = "Attribut data-test ajouté !";
});


// 8. Afficher data-test
btnGetCustom.addEventListener("click", function () {
    const valeur = image.getAttribute("data-test");
    resultat.textContent = "data-test = " + valeur;
});