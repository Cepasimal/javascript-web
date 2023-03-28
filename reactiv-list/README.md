# Cepasimal - Javascript Web
## Liste réactive
### Correction
Avant de commencer, l'exercice il faut analyser les fichiers fournis.
Je vous invite à ouvrir index.html et de regarder tout les éléments qui ont des ID (Il y en a 4).

C'est avec ces éléments que vous allez pouvoir interagir.
Ensuite, si vous ouvrez le fichier style.css vous remarquerez beaucoup de chose dont une classe se nommant `red`,
c'est celle ci qu'il faut mettre au bouton qui permettra de supprimer un fruit.

Avec les fichiers fournis en énoncés votre résultat de départ est celui-ci :

[[image]]

Remarque : Si je ne précise pas l'endroit où écrire des instructions, faites les en dehors des fonctions, généralement en haut du script.

1. Afficher la liste
2. Créer une fonction pageLoaded vide
3. Ajouter un écouteur de l'évènement 'load' qui exécutera la fonction pageLoaded. (c'est important de mettre cette ligne en fin de script)
4. Créer un tableau de fruits et remplissez le de string (exemple : ['fraise', 'framboise', 'citron' ,'banane', 'poire'])
5. Créer deux variable égale à null. Une représentant la liste de fruit dans l'html et une autre représentant l'input dans l'html
6. Récupérer la div représentant la liste de fruit dans pageLoaded
7. Récupérer l'input dans pageLoaded
8. Créer une fonction updateHTML qui aura pour but de mettre à jour la liste de fruit dans l'html.
9. Dans cette fonction, créer une variable qui représentera la liste de fruit en html.
10. Pour la remplir boucler sur le tableau de fruits en insérant à chaque fois dans une balise <li></li> le nom du fruit.

Faite en sorte que toutes les balises `li` soient entre des balise `ul` comme ci-dessous :

```html
<ul>
      <li> ... </li>
      <li> ... </li>
      <li> ... </li>
</ul>
```

11. Puis insérer la string dans l'html de la bonne div.
12. Appeler updateHTML à la fin de pageLoaded

Normalement, vous devrez voir votre liste de fruits s'afficher, comme ci-dessous :

[[image]]

13. Ajouter des éléments dans la liste
14. Créer une fonction nommé add
15. Dans add, ajouter (push) au tableau fruit la valeur de l'input (vous avez une variable représentant l'input dans l'html pour récupérer sa valeur faite .value)
16. Dans add, metter une string vide "" dans la valeur de l'input pour le réinitialiser.
17. Dans add appeler la fonction updateHtml
18. Dans pageLoaded récupérer le bouton Ajouter dans l'html et ajouter lui un écouteur d'évènement qui fera que lorsque l'on clique sur le bouton cela appel la fonction add.

Maintenant, essayer de taper un fruit dans l'input et d'appuyer sur Ajouter cela l'ajoutera normalement en fin de liste.

19. Enlever un éléments précis dans la liste
20. Créer une fonction nommé remove qui prend en paramètre un element.
21. Dans remove, on va utiliser la fonction filter d'un tableau. Celle-ci permet de filtrer des élément par rapport à une condition.
Le but ici est de filtrer le tableau de fruits donc de ne garder que les fruits différent d'element.
N'oubliez pas de mettre le nouveau tableau filtré dans le tableau fruits si vous voulez avoir la modification.

Exemple d'utilisation de filter :

```js
let tab = [1, 3, 2]
tab = tab.filter((element) => element !== 2)
// result : tab = [1,3]
```

22. Dans remove, appeler updateHtml
23. Dans updateHtml, il faut rajouter un bouton rouge après chaque élément pour pouvoir le supprimer. Pour cela, dans la boucle, ajouter après le nom du fruit un bouton avec la classe red et un évènement onClick qui appellera remove avec le nom du fruit passer en paramètre.

Aide: Il faut que l'appel de remove soit entre guillemet et il faut que le fruit soit entre quote.
Tout cela dans une string, excepter le nom du fruit. Pour faire simple le résultat compilé en html sera : onclick="remove('fraise')"

Une fois fini, vous devriez avoir ce résultat :

[[image]]

Et lorsque vous cliquez sur une des croix cela devrais supprimer l'élément associé.

4 - Tri des fruits
Voila la parti plus compliquée 😛

1. Créer une fonction nommé filter
2. Pour trier, nous allons utiliser la fonction sort des tableaux javascript.
sort prend en paramètre une fonction comme filter. La fonction mis en paramètre de filter sont un élément a et un élément b comme ceci :

```js
let tab = [1, 3, 2]
tab = tab.sort((a, b) => {
      // condition
})
```

Maintenant que c'est compris parlons de la condition.
Le javascript permet de comparer des mots comme il comparait des chiffres.
Par exemple, vous êtes d'accord que 1 < 2 et bien banane < fraise (par ordre alphabétique).

C'est comme ça que l'on va créer notre condition. Nous voulons que si motA > motB on veut retourner 1, si c'est l'inverse -1 et sinon 0.*

3. Dans filter, appeler updateHtml
4. Dans pageLoaded récupérer le bouton Trier le tableau.... dans l'html et ajouter lui un écouteur d'évènement qui fera que lorsque l'on clique sur le bouton cela appel la fonction filter.

Normalement, si vous cliquez sur Trier le tableau.... cela triera par ordre alphabétique comme ci-dessous :

Avant :
[[image]]

Après :
[[image]]

Voila vous avez un Tableau dynamique !!!
