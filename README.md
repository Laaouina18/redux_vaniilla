# Guide pour Implémenter Redux avec Vanilla JavaScript

## 1. Comprendre les Concepts de Redux :

- **Actions :** Les actions sont des objets qui décrivent un changement d'état. Par exemple, `INCREMENT`, `DECREMENT` et `RESET` sont des actions.
- **Reducers :** Les reducers sont des fonctions qui spécifient comment l'état de l'application change en réponse à une action. Par exemple, votre `countReducer` est un reducer.
- **Store :** Le store est l'objet qui détient l'état de votre application. Il offre des méthodes pour mettre à jour l'état avec des actions et pour accéder à l'état actuel de l'application.

## 2. Implémenter Redux dans Vanilla JavaScript :

- Créez vos actions, reducers et le store comme dans l'exemple fourni.
- Utilisez `store.dispatch(action)` pour envoyer des actions au store.
- Utilisez `store.getState()` pour obtenir l'état actuel de l'application.
- Utilisez `store.subscribe(listener)` pour s'abonner aux mises à jour du store. Le paramètre `listener` sera appelé à chaque fois que l'état de l'application changera.

## 3. Créer une Interface Utilisateur :

- Créez une interface utilisateur (HTML, CSS) avec des éléments tels que des boutons pour les actions d'incrémentation, de décrémentation et de réinitialisation, et un élément pour afficher l'état actuel de l'application.
- Ajoutez des écouteurs d'événements aux éléments de l'interface utilisateur pour appeler `store.dispatch(action)` en réponse aux actions de l'utilisateur.
- Utilisez `store.subscribe(listener)` pour mettre à jour l'interface utilisateur à chaque fois que l'état de l'application change.

## 4. Ressources Additionnelles :

- [Présentation Canva sur Redux Vanilla](https://www.canva.com/design/DAFywlqnmyU/FvuvqWm1v87mWYhXkTv6Bw/edit?utm_content=DAFywlqnmyU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) 


