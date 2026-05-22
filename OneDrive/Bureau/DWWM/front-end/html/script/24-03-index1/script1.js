// 1. Créez un objet 'personne' avec les propriétés suivantes :
//    - nom (votre choix)
//    - prenom (votre choix)
//    - age (votre choix)
//    - ville (votre choix)

let personne = {
    nom: "Fatnassi",
    prenom: "Asma",
    age: 24,
    ville: "Bassano Del Grappa"
};

let localisation = personne.ville;
console.log("localisation:" , localisation);
// 3. Ajoutez une nouvelle propriété 'email' à l'objet 'personne' avec la valeur de votre choix
// 2. Accédez à la propriété 'ville' de l'objet et stockez sa valeur dans une variable 'localisation'

personne.email = "asma.fatnassi@gmail.com";
console.log(personne.email);

// 4. Créez un objet 'coordonnees' avec deux propriétés :
//    - latitude (un nombre)
//    - longitude (un nombre)

const coordonnees = {
    latitude: 14.50,
    logitude: 7.7521,
}; 

let {latitude: lat} = coordonnees ;

// 1. Créez un tableau 'fruits' contanant les valeurs suivantes:"pomme","banane","orange","fraise","kiwi".
let Fruits = ["pomme", "banane", "orange", "fraise", "kiwi"];
console.log(Fruits);
// 2. Accédez au troisième élément du tableau et stockez-le dans une variable 'troisièmeFruit'
const troisièmeFruits = Fruits[2];
// 3. Modifiez le dernier élément du tableau pour qu'il devienne "mangue"
Fruits[Fruits.length-1] = ("mangue");
// 4. Ajoutez "ananas" à la fin du tableau
Fruits.push("ananas");
console.log(Fruits);
// 5. Supprimez le premier élément du tableau
Fruits.shift();
console.log(Fruits);
// 6. Insérez "citron" en deuxième position du tableau
Fruits.splice(1,0, "citron");
// 7. Créez un nouveau tableau 'legumes' avec trois légumes de votre choix
const legumes = ["pomme de terre", "carotte", "courgette"];
console.log(legumes);


// 1. Déclarez les variables suivantes :
let texte = "JavaScript";
let nombre = 42;
let decimal = 3.14;
let estVrai = true;
let nonDefini;
let valeurNulle = null;
let tableau = [1, 2, 3];
let objet = { nom: "Alice", age: 30 };
let fonction = function() { return "Bonjour"; };
let date = new Date();
let symbolValeur = Symbol("description");
let nombreSpecial = NaN;
let infini = Infinity;

// 2. Pour chaque variable, utilisez typeof pour déterminer et afficher son type
// Exemple : console.log(typeof texte);
texte = "JavaScript";
console.log(typeof texte);

nombre = 42;
console.log(typeof nombre);

tableau = [1, 2, 3];
console.log(typeof tableau);

valeurNulle = null;
console.log(typeof valeurNulle);

objet = { nom: "Alice", age: 30 };
console.log(typeof objet);

estVrai = true;
console.log(typeof estVrai);

fonction = function() { return "Bonjour"; };
console.log(typeof fonction);

date = new Date();
console.log(typeof Date);

symbolValeur = Symbol("description");
console.log(typeof symbolValeur);

nombreSpecial = NaN;
console.log(typeof nombreSpecial);

infini = Infinity;
console.log(typeof infini);


// Pour chaque ligne, prédisez le résultat avant de l'exécuter
// Puis écrivez en commentaire la raison du résultat obtenu

let a = "5";
let b = 2;
let c = true;
let d = "";
let e = null;

// Prédiction et explication des conversions implicites
let resultat1 = a + b;  // Prédiction : 52
let resultat2 = a - b;  // Prédiction : 3
let resultat3 = c + b;  // Prédiction : 3
let resultat4 = d + a;  // Prédiction : 5
let resultat5 = e + b;  // Prédiction : 2
let resultat6 = "10" * "2"; // Prédiction : 20
let resultat7 = "10" / 2;   // Prédiction : 5
let resultat8 = 1 + true;   // Prédiction : 2

// Affichez les résultats pour vérifier vos prédictions
console.log(resultat1, resultat2, resultat3, resultat4, resultat5, resultat6, resultat7, resultat8);

resultat3 = c+b;
console.log(resultat3);

resultat4 = d + a; 
console.log(resultat4);

resultat5 = e + b;
console.log(resultat5);

resultat6 = "10" * "2";
console.log(resultat6);

resultat7 = "10" / 2;
console.log(resultat7);

resultat8 = 1 + true;
console.log(resultat8);

let valeur1 = "42";
let valeur2 = 42;
let valeur3 = true;
let valeur4 = null;
let valeur5 = undefined;
let valeur6 = NaN;
let valeur7 = "";
let valeur8 = [];
let valeur9 = {};
let valeur10 = 0;

// Partie 2 : Effectuez des conversions explicites et observez les résultats
console.log(String(valeur2)); // 42
console.log(Number(valeur1)); // "42"
console.log(Boolean(valeur7)); // false
console.log(Number(valeur3)); // 1
console.log(String(valeur4)); // "null"
console.log(Boolean(valeur10)); // false



/*Créez deux variables 'nombre1' et 'nombre2' avec des valeurs numériques de votre choix.
Créez des variables pour stocker les résultats des opérations suivantes :
Addition des deux nombres
Soustraction du deuxième nombre du premier
Multiplication des deux nombres
Division du premier nombre par le deuxième

Affichez tous les résultats dans la console avec des messages descriptifs.
*/

let nombre1 = 13;
let nombre2 = 29;
console.log(nombre1);
console.log(nombre2);

let Addition =(nombre1 + nombre2);
let Soustraction= (nombre2 - nombre1); 
let Multiplication = (nombre1 ** nombre2);
let Division = (nombre1 / nombre2);

console.log("Addition:" , Addition);
console.log("Soustraction:" , Soustraction);
console.log("Multiplication:", Multiplication);
console.log("Division:" , Division);

/*
Créez deux variables 'age1' et 'age2' avec des valeurs numériques de votre choix.
Utilisez les opérateurs de comparaison suivants et affichez les résultats dans la console :
age1 est égal à age2
age1 est strictement égal à age2
age1 est différent de age2
age1 est strictement différent de age2
age1 est supérieur à age2
age1 est inférieur à age2
age1 est supérieur ou égal à age2
age1 est inférieur ou égal à age2
*/
let age1 = 25;
let age2 = 30;
console.log(age1) ;
console.log(age2);

let egal=(age1 == age2);
console.log("age1 == age2  :", age1 == age2);

let strictementEgal = (age1 === age2);
console.log("strictementEgal:" , strictementEgal );

let différent = (age1 != age2);
console.log("différent:", différent);

let strictementDifférent =(age1 !== age2);
console.log("strictementDifférent:" ,strictementDifférent);

console.log("age1 > age2   :", age1 > age2);    // false
console.log("age1 < age2   :", age1 < age2);    // true
console.log("age1 >= age2  :", age1 >= age2);   // false
console.log("age1 <= age2  :", age1 <= age2);   // true

/*
Objectif : Utiliser les opérateurs de comparaison pour vérifier des conditions.
Instructions :

Créez les variables suivantes :
'age' : un âge de votre choix
'accompagne' : un booléen (true ou false) indiquant si la personne est accompagnée
'tailleMinimum' : fixée à 150 (cm)
'taille' : une taille en cm de votre choix

Utilisez les opérateurs de comparaison, puis rangez ces instructions dans des variables (let) :
La personne est-elle majeure (18 ans ou plus) ?
La personne est-elle mineure mais accompagnée ?
La personne a-t-elle la taille minimale requise ?
La personne est-elle éligible pour l'attraction ? (Elle doit soit être majeure, soit être accompagnée ET avoir la taille minimale)

Affichez toutes les variables dans des console.log().
*/

let age = 30; 
let accompagnée = false;
let tailleMinimum = 150;
let taille = 165;

let estMajeure = age>18;
let estMineurAccompagne    = age < 18 && accompagnée;
let aTailleRequise         = taille >= tailleMinimum;
let estEligible            = estMajeure || (accompagnée && aTailleRequise);

console.log("Estmajeur:", estMajeure);
console.log("MineureAccompagne:", estMineurAccompagne);
console.log("Taillesuffisante:", aTailleRequise);
console.log("Eligible à l'attraction:", estEligible);