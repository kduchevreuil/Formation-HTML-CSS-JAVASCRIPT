function getUserData(userId, callback) {
    // Effectuer une requête asynchrone pour récupérer les données de l'utilisateur
    // Simulons une requête avec un délai de 1 seconde
    setTimeout(function () {
        const userData = {
            id: userId,
            name: 'John Doe',
            age: 30
        };
        // Appeler la fonction de rappel et passer les données de l'utilisateur en argument
        callback(userData);
    }, 1000);
}

function displayUserData(userData) {
    console.log('ID:', userData.id);
    console.log('Name:', userData.name);
    console.log('Age:', userData.age);
}

// Appeler la fonction getUserData en passant l'identifiant 
// de l'utilisateur et la fonction de rappel displayUserData
getUserData(123, displayUserData);

/*
En programmation informatique, une fonction de rappel (callback function en anglais) est une fonction 
qui est passée en argument à une autre fonction et qui est exécutée ultérieurement. L'idée principale 
est de permettre à une fonction donnée de spécifier une action à effectuer une fois qu'une autre fonction 
a terminé son exécution. 
Les fonctions de rappel sont largement utilisées dans JavaScript, notamment dans les opérations */

/*
Lorsque vous exécutez ce code, vous obtiendrez les données de l'utilisateur affichées après une seconde de délai. 
Cela montre comment la fonction de rappel est utilisée pour spécifier une action à effectuer une fois que les données sont prêtes.

Les fonctions de rappel sont également utilisées dans de nombreux autres contextes en JavaScript, 
tels que les événements du navigateur, les appels AJAX, les opérations de lecture/écriture de fichiers, etc. 
Elles sont essentielles pour gérer l'asynchronisme et exécuter des actions 
en réponse à des événements ou à des opérations longues.*/