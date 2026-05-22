// Récupérer les élement
const zone = document.getElementById("zone");
const btnFirst = document.getElementById("replaceFirst");
const btnLast = document.getElementById("replaceLast");

// Remplacer le premier element
btnFirst.addEventListener("click", function () {

  if (zone.children.length > 0) {

    const first = zone.firstElementChild;

    // Créeation d'une nouvelle div 
    const nouveau = document.createElement("div");
    newDiv.textContent = "Nouveau";
    // Ajouter d'une classe à cette div
    newDiv.classList.add("card");

    zone.replaceChild(newDiv, first);
  }

});
// Remplacer le dernier element
btnLast.addEventListener('click', function(){
    if (zone.children.length > 0){
        const ancien = zone.lastElementChild;

        const nouveau = document.createElement('div');
        nouveau.textContent = 'Nouveau';
        nouveau.classList.add('card');

        zone.replaceChild(nouveau,ancien);
    }
});