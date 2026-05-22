// Sélectionner les éléments nécessaires
const menu = document.getElementById('menu');
const info = document.getElementById('info'); 

// Ajouter un event listener sur le menu
menu.addEventListener("click", function(event) {
    // Dans la fonction de callback
    console.log("Target:" , event.target);
    console.log("CurrentTarget:" , event.currentTarget);

    //Logique de traitement
    if (event.target.classList.contants('submenu-item')) {

        // Récupérer data-product ou data-service
        const productAttr = event.target.getAttribute("data-product");
        const serviceAttr = event.target.getAttribute("data-service");

        // Choisir la valeur disponible
        const value = product || service;

        // Afficher le résultat dans #info
        info.internHTML = `<p>Sous-élément sélectionné: ${value} </p>`;

       // Sinon, si l’élément cliqué ou un de ses parents a la classe menu-item
    }else {

        // Recherche du parent .menu-item
        const menuItem = event.target.closest(".menu-item");

        // Si Trouver
        if(menuItem){
            const category = menuItem.getAttribute("data-category");

            // Afficher le résultat dans #info
            info.innerHTML = `<p>Catégorie sélectionnée : ${category} </p>`;
        }

    }
});