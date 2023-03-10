# MyComp Ionic

## Description
MyComp Ionic est une application mobile réalisée avec la bibliotheque Ionic. Cette application permet d'associer des compétences à des profils afin de mieux visualiser les stack d'une équipe et son évolution.

## Pré-requis
- [VS Code](https://code.visualstudio.com/) ou [WebStorm](https://www.jetbrains.com/fr-fr/webstorm/)
- [Ionic](https://ionicframework.com/)
- [Json Server](https://www.npmjs.com/package/json-server) : npm i json-server

## Lancement du projet
Une fois le projet ouvert :
- Lancez le projet

```bash
ionic serve
```

- Lancez le json-server

```bash
json-server --watch db.json
```

## Visualisation du projet
- [Application](localhost:8100/)
- [json-server Profils](localhost:3000/profils)
- [json-server Compétences](localhost:3000/competences)