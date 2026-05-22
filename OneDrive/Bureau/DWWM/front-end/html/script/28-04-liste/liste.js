// Récupérez Etapes 1
const btnFin = document.getElementById('addEnd');
const btnDebut = document.getElementById('addStart');
const liste = document.getElementById('list');

// Créé une variable 
let compteur = 1;

// Etapes 03 Bouton "fin"
btnFin.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Élément " + compteur;

  liste.append(li);

  compteur++;
});

btnDebut.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'Element' + compteur;

    liste.prepend(li);
    compteur++;
});