console.log("Bobjour,monde !");

// Code avec erreurs de syntaxe
let message = "Bonjour le monde" ;
const NOMBRE_MAXIMUM = 100 ;
let estActif = true ;

console.log(message) ;

// Bloc de code mal formé
{
    let compteur = 1 ;
    compteur = compteur + 1 ;
    console.log("Compteur: " + compteur);
}

// Variables mal déclarées
let premierEssai = ("Premier essai");
const number= 5;
let resultatTest = 42;

// Commentaires incorrects
// Ceci devrait être un commentaire sur une ligne
/* Ce commentaire 
   n'est pas fermé correctement
*/   
// 1. Déclarez deux variables : une appelée 'nom' avec la valeur "Alice" et une appelée 'Nom' avec la valeur "Bob"

let nom = ("Alice") ;
let Nom =("Bob") ;


console.log (nom) ;
console.log (Nom) ;

{
    let age = 25;
    console.log(age);
}

// CECI C'EST UN COMMENTAIRE

/*
Plusieurs lignes
de commentaire
*/

let total = (5 + 3) ;
total =5+3;

let messageBonjour = "Bonjour le monde"; // espaces importants (dans une chaîne de caractères)

// Reformatez le code suivant pour qu'il soit plus lisible, en ajoutant des espaces, des sauts de ligne et des indentations appropriés

let prix = 99 ;
const TAXE = 0.21 ;
total = prix + (prix * TAXE ) ;
console.log("Prix total:" + total) ;


// CORRIGEZ LES NOM DE VARIABLES INVALIDES 
let nombre = 42 ;
let motCompose = ("JavaScript") ;
let niveaux = "Debutant" ;

let $valide = true ;
let nomUtilisateur ="Adama" ;

/* Écrivez un code qui montre clairement la sensibilité à la casse en JavaScript, en utilisant des variables avec des noms similaires mais différenciés par les majuscules/minuscules. 
Puis amusez-vous à les faire apparaitre avec des console.log()
*/

let name ="Adama" ;
let Name = "Soumaya" ;
let NAME = "Faty" ; 

console.log ("name") ;
console.log ("Name") ;
console.log ("NAME") ;

// 1. Déclarez les variables suivantes :
//    - Une variable 'compteur' avec let et la valeur 5
//    - Une constante 'MAX_USERS' avec la valeur 100
//    - Une variable 'message' avec var et la valeur "Bienvenue"

let compteur = 5 ;
const MAXUSERS = 100 ;
var messageBienvenue = "Bienvenue" ;

// 2. Essayez de réassigner de nouvelles valeurs :
//    - Donnez la valeur 10 à 'compteur'
//    - Essayez de donner la valeur 200 à 'MAX_USERS' (commentez si erreur)
//    - Donnez la valeur "Bonjour" à 'message'

compteur = 10 ;
// MAXUSERS = 200;
messageBienvenue= "Bonjour" ;

// 3. Démontrez la portée de bloc pour chaque type :
//    - Créez un bloc avec des accolades {}
//    - À l'intérieur, déclarez une variable 'x' avec let et valeur 1
//    - À l'intérieur, déclarez une constante 'Y' avec valeur 2
//    - À l'intérieur, déclarez une variable 'z' avec var et valeur 3
//    - À l'intérieur, affichez les valeurs de x, Y et z

{
    let x = 1;
    const Y = 2 ; 
    var z = 3 ; 

    console.log(x); // 1
    console.log(Y); // 2
    console.log(z); // 3

}

//4. En dehors du bloc :
//    - Essayez d'afficher x (commentez si erreur)
//    - Essayez d'afficher Y (commentez si erreur)
//    - Affichez z

let x = 1 ;
const y = 2 ;
var z = 3 ; 

console.log(x) ;
console.log(y) ;
console.log(z) ;

// 1. Explorez les possibilités de redéclaration :
//    - Déclarez une variable 'nom' avec var et la valeur "Alice"
//    - Essayez de déclarer à nouveau 'nom' avec var et la valeur "Bob"
//    - Déclarez une variable 'age' avec let et la valeur 25
//    - Essayez de déclarer à nouveau 'age' avec let et la valeur 30 (commentez si erreur)
//    - Essayez de déclarer une variable 'age' avec var (commentez si cela pose problème)

var nome = "Alice" ;
console.log("nom initiale:" + nome); 

var nome = "Bob";
console.log("nom apré redeclaration:" + nome) ;

let age = 25 ;
console.log("age initiale:" + age) ;
/*
let age = 30 ;
console.log("Age redeclaration:" + age); 

var age = 60 ;
console.log("AGE declare:" + age); 
*/

// 2. Créez deux blocs de code imbriqués :
//    - Dans le bloc externe, déclarez une variable 'couleur' avec let et la valeur "rouge"
//    - Dans le bloc interne, essayez de déclarer une autre variable 'couleur' avec let et la valeur "bleu"
//    - Dans le bloc interne, affichez la valeur de 'couleur'
//    - Dans le bloc externe (après le bloc interne), affichez la valeur de 'couleur'

{
    let couleur = "rouge";
    console.log(couleur); 
    
    {
        let couleur = "bleu";
        console.log(couleur) ;
    }
    console.log(couleur);
}



// 3. Déclarez plusieurs variables sur une seule ligne :
//    - Déclarez trois variables a, b et c avec let et les valeurs 1, 2 et 3 respectivement
//    - Déclarez deux constantes MIN et MAX avec les valeurs 0 et 100 respectivement

let a = 1, b = 2,  c = 3 ;
console.log("Variables multiples:" +a, b, c) ; 

const MIN = 0, MAX = 100;
console.log(MIN, MAX);


// 4. Explorez la déclaration sans initialisation :
//    - Déclarez une variable 'données' avec let sans lui assigner de valeur
//    - Affichez sa valeur
//    - Déclarez une constante 'CONFIG' sans valeur (commentez si erreur)

let donnees; 
console.log(donnees) ;
const CONFIG = {}; 

// 1. Déclarez une variable pour stocker un nom d'utilisateur (type approprié)
let nom_Utilisateur = "AYA";
// 2. Déclarez une variable pour stocker l'âge d'une personne (type approprié)
let userAge = 22;
// 3. Déclarez une variable pour indiquer si un utilisateur est connecté (type approprié)
let connecté = true;
// 4. Déclarez une variable pour un champ qui n'a pas encore de valeur (type approprié)
let sansValeur = undefined;
// 5. Déclarez une variable pour indiquer explicitement l'absence de données (type approprié)
let result = null ;
// 6. Déclarez une variable pour stocker le prix d'un produit avec des décimales (type approprié)
let price = 30.55;
// 7. Déclarez une variable pour stocker un code postal (type approprié, en tenant compte du format)
let codePostal = "13005";
// 8. Déclarez une variable pour stocker un message vide (type approprié)
let MessageVide = "";







