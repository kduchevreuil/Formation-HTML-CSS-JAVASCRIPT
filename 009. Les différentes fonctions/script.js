/*
            ---LES DIFFRENTS TYPES DE FONCTIONS ---
*/

// Déclaration d'une fonction
function calculSimple1(choisirUnNombre) {
    return choisirUnNombre - 1;
}

// Expression d'une fonction (dans une variable)
const calculSimple2 = function (choisirUnNombre) {
    return choisirUnNombre - 1;
};
// Fonction fléché (=> ce que nous voulons retourné)
const calculSimple3 = (choisirUnNombre) => {
    return choisirUnNombre - 1;
};
// Affichage des résultat :
const resultat1 = calculSimple1(10);
const resultat2 = calculSimple2(10);
const resultat3 = calculSimple3(10);
//Affichage des résultat :
console.log(resultat1, resultat2, resultat3);