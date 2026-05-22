/*
const titreprincipale = document.getElementById('titre-principale');
const elementsImportant = document.getElementsClasseName('important');
const paragraphes = document.getElementsByTagName('P');
const liImportantNote = document.querySelector("li.important.note");
const SoitImportant = document.querySelectorAll('.important, .note');
const malisteImportant = document.querySelector('li.important');
*/
console.log('Titre principale: , titreprincipale');
// Sélection par ID
const titrePrincipal = document.getElementById('titre-principal');
console.log("Titre principal :", titrePrincipal);
// Affiche : <h1 id="titre-principal">Liste de courses</h1>



// Sélection par classe
const elementsImportants = document.getElementsByClassName('important');
console.log("Éléments importants :", elementsImportants);
// Affiche : HTMLCollection(3) [p.important, li.important, li.important.note]
console.log("Nombre d'éléments importants :", elementsImportants.length); // 3
// Affiche : 3



// Sélection par balise
const paragraphes = document.getElementsByTagName('p');
console.log("Paragraphes :", paragraphes);
// Affiche : HTMLCollection(2) [p.important, p.note]
console.log("Nombre de paragraphes :", paragraphes.length); // 2
// Affiche : 2



// Sélection avec querySelector - éléments avec les deux classes
const elementImportantEtNote = document.querySelector('li.important.note');
console.log("Premier élément li important et note :", elementImportantEtNote);
// Affiche : <li class="important note">Fruits de saison</li>



// Sélection avec querySelectorAll - éléments avec l'une ou l'autre classe
const elementsImportantsOuNotes = document.querySelectorAll('.important, .note');
console.log("Éléments importants ou notes :", elementsImportantsOuNotes);
// Affiche : NodeList(4) [p.important, li.important, li.note, li.important.note]
console.log("Nombre d'éléments importants ou notes :", elementsImportantsOuNotes.length); // 4
// Affiche : 4



// Sélection du premier li important
const premierLiImportant = document.querySelector('li.important');
console.log("Premier li important :", premierLiImportant);
// Affiche : <li class="important">Pain</li>



// Nombre total d'éléments li
const tousLesLi = document.getElementsByTagName('li');
console.log("Tous les éléments li :", tousLesLi);
// Affiche : HTMLCollection(5) [li.important, li, li.note, li, li.important.note]
console.log("Nombre total d'éléments li :", tousLesLi.length); // 5
// Affiche : 5