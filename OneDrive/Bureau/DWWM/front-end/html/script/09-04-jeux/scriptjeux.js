// // mini-jeu où le joueur doit trouver un trésor
// let tresor = 7;
// function chercher(nombre) {
//     if(nombre === tresor){
//         console.log("Bravo, trésor trouvé !");
//         return true;
//     } else if(nombre < tresor){
//         console.log("Trop petit, cherche plus grand ");
//         return false;
//     }else {
//         console.log("Trop grand, cherchez plus petit");
//         return false;
//     }  
// }
// // Tests
// chercher(3);  // Trop petit
// chercher(10); // Trop grand
// chercher(7);  // Trouvé !


// // EXERCICE FABRIQUES
// const fabriquePotions = (ingredient1, ingredient2) => {

//     let resultat = "Potion ";
//     let couleur  = "verte";

//     if (ingredient1 === "champignon" && ingredient2 === "étoile") {
//         resultat += "d'invincibilité";
//         couleur   = "dorée";

//     } else if (ingredient1 === "fleur" && ingredient2 === "miel") {
//         resultat += "de guérison";
//         couleur   = "bleue";

//     } else {
//         resultat += "étrange";
//     }

//     console.log(`Potion créée : ${resultat} (couleur : ${couleur})`);

//     return resultat;
// };

// // Tests
// fabriquePotions("champignon", "étoile");
// fabriquePotions("fleur", "miel");
// fabriquePotions("caillou", "boue");

// // // Créez un compteur magique
//  const sortsTotaux = 0; 

//  function lancerFeu(){

//  };

// let compteurFeu = 0;

// function lancerFeuFinal(){
//     compteurFeu ++;
//     sortsTotaux++;


//     console.log(`Sorts de feu lancés  : ${compteurFeu}`);
//      console.log(`Total tous sorts     : ${sortsTotaux}\n`);
// };

// let compteurGlace = 0; 
// const lancerGlace = () => {
//     compteurGlace++;
//     sortsTotaux++;

//     console.log(`Sorts de glaces lancés : ${compteurGlace}`);
//     console.log(`Total tous sorts : ${sortsTotaux}\n`);
// };

// lancerFeuFinal();
// lancerFeuFinal();
// lancerGlace();
// lancerFeuFinal();
// lancerGlace();

// // consile LOG
// console.log("=".repeat(35));
// console.log(`Total sorts de feu   : ${compteurFeu}`);
// console.log(` Total sorts de glace : ${compteurGlace}`);
// console.log(`Total général        : ${sortsTotaux}`);
// console.log("=".repeat(35));



 let sortsTotaux = 0;

 let compteurFeu = 0;

const lancerFeuFinal = () => {
    compteurFeu++;
    sortsTotaux++;

    console.log(` Sorts de feu lancés  : ${compteurFeu}`);
    console.log(` Total tous sorts     : ${sortsTotaux}\n`);
};

// Fonction Glace 

 let compteurGlace = 0;

const lancerGlace = () => {
   compteurGlace++;
    sortsTotaux++;

    console.log(`Sorts de glace lancés : ${compteurGlace}`);
    console.log(` Total tous sorts      : ${sortsTotaux}\n`);
};

// ── Tests

lancerFeuFinal();
lancerFeuFinal();
lancerGlace();
lancerFeuFinal();
lancerGlace();

// // ── Total final 

console.log("=".repeat(35));
console.log(`Total sorts de feu   : ${compteurFeu}`);
console.log(` Total sorts de glace : ${compteurGlace}`);
console.log(`Total général        : ${sortsTotaux}`);
console.log("=".repeat(35));


// Créez un coffre-fort qui protège un message secret et ne le révèle que si on fournit le bon mot de passe.

function creerCoffreFort(messageSecret, motDePasse){
    return function(tentative){
        if(tentative === motDePasse){
            return (`Accès accordé ! Message : "${messageSecret}"`);
        }else{
            return (`Mot de passe incorrect. Accès refusé !`);
        }
    }
}; 

// TEST 
// Création de deux coffres-forts différents
const coffreDeJean = creerCoffreFort("Les cours de JS sont super!", "abcd123");
const coffreDeMarie = creerCoffreFort("J'adore les closures!", "secure456");

// Tentatives d'accès au coffre de Jean
console.log(coffreDeJean("123456")); // Accès refusé
console.log(coffreDeJean("abcd123")); // Message révélé

// Tentatives d'accès au coffre de Marie
console.log(coffreDeMarie("secure456")); // Message révélé
console.log(coffreDeMarie("abcd123")); // Accès refusé (même si c'est le mot de passe de Jean)


// Créez un système où un alchimiste peut préparer des potions avec des effets personnalisés.

function preparerPotion(effetPrincipal){
    let utilisations = 0;
        
}
return function(ingredient1, ingredient2){
    utilisations++;
}
    

// Calcule la puissance basée sur le nombre d'utilisations
    let puissance = ("utilisations * 10");

// CONSOLE LOG 
console.log(`Ingredient1 : ${ingredient1}` );  
