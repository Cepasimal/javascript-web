# Cepasimal - Javascript Web
## Input réactif
### Correction
1- Créer une fonction pageLoaded qui sera la fonction qui sera exécuter une fois que la page est chargé.
2 -Ajouter un écouteur de l'évènement 'load' qui exécutera la fonction pageLoaded. (c'est important de mettre cette ligne en fin de script)
3 - Dans la fonction load récupérer l'input possédant l'id randomInput.,
4 - Récupérer la div possédant l'id reactivText.
5 - Ajouter un écouteur d'évènement input qui prendra une fonction anonyme () => {} comme ci-dessous :

```js
input.addEventListener('input', () => {
     // code à exécuter quand la personne écrira
})
```

Vous pourriez créer une fonction à part mais c'est une bonne pratique de s'entrainer à faire des fonction anonyme surtout quand on a qu'une ligne de code à écrire.

6 - Dans la fonction anonyme attribuer à l'html de la div la valeur de l'input
Pour récupérer la valeur de l'input utiliser l'évènement (en paramètre d'entrée) et à l'aide de `console.log` chercher comment récupérer la valeur de l'input.
Une fois que vous l'avez trouvé insérer la dans l'html de la div reactivText

Normalement, si vous écrivez dans votre input le même texte s'affichera en dessous en direct.

Voila !!! Vous avez un input réactif !
