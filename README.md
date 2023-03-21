# **Quai Antique**
![Site Quai Antique](public/build/images/QuaiAnt_site.png)
Ce projet est réalisé dans le cadre de mon ECF. 

Il consiste à créer un site web pour un restaurant fictif appelé "Quai Antique"

Avec des fonctionnalités telles que :
- la connexion des utilisateurs, 
- la galerie de photos, 
- la publication de la carte et des menus, 
- la définition des horaires d'ouverture, 
- la réservation de table avec mention des allergies 
- la création de comptes clients. 
- Le site doit permettre de vérifier la disponibilité de la table en temps réel et de gérer le nombre maximum de convives.


## **Pré-requis** : 
---
- PHP >= [8.1][PHP]
- Symfony >= 6.1 avec le [CLI Symfony][CLI]
- Database [MySQL][MySQL]
- [Composer][Composer]
- [NodeJs][NodeJS]
- [Npm][NPM]

## **Installation en local** : 
---
Commencez par cloner le repository
```
git clone https://github.com/LuckyFail8/Quai_Antique.git
```
Exécuter la commande `cd Quai_Antique` pour vous rendre dans le dossier depuis le terminal.

Tapez ces commandes dans l'ordre pour installer les dépendances composer du projet ainsi que les dépendance npm
```
composer install
npm install 
```

Créez-y un fichier `.env.dev.local` afin de définir votre variable d'environnement 
```
DATABASE_URL="mysql://user:password@127.0.0.1:3306/DBname?serverVersion=5.7"
```
Exécutez ces commandes pour créer la database et effectuer la migration en base de donnée
```
symfony console doctrine:database:create
symfony console doctrine:migration:migrate
```
Si vous le souhaitez, vous pouvez profiter des fixtures déjà préparer et les modifier.

Pour les modifier, vous trouverez les fixture dans le fichier :
``src/DataFixtures/AppFixture.php``
```
php bin/console doctrine:fixtures:load
```
Vous pouvez à présent démarrer le serveur symfony :
```
symfony server:start
```
Pour finir de remplir la base de données, connectez-vous avec le compte admin générer depuis le chargement des fixtures.

### Compte admin : 

- email d'authentification : ``admin@quaiantique.fr``

- Mot de passe : ``password``

Le compte admin vous permettra de remplir les tables allergy, restaurantHours (et category si vous n'avez pas utilisé les fixtures).
Pour cela rendez-vous aux URL suivantes :

`http://127.0.0.1:8000/addallergies`

`http://127.0.0.1:8000/addhoraires`

`http://127.0.0.1:8000/addcategories` (si vous n'utilisez pas les fixtures)

Si vous souhaitez voir l'application côté client, il suffit de vous inscrire à l'aide d'une adresse mail fictive ou de sélectionner l'adresse mail d'un user généré par les fixtures.

Mot de passe : ``password``

## **Fabriquer avec** : 
---
Ce projet est développé avec :

- [Symfony 6.1][Symfony]

Bundle utilisé :

- EasyAdmin [Documentation EasyAdmin][EasyAdmin]
- FakerPHP [Documentation FakerPHP][FakerPHP]
- DoctrineFixture [Documentation DoctrineFixture][DoctrineFixture]
- VichUploader [Documentation VichUploader][VichUploader]
- WebpackEncore [Documentation WebpackEncore][WebpackEncore]

## **Auteur** : 
---
[Lionel Regisseur][Linkedin]

[CLI]: https://symfony.com/download
[Symfony]: https://symfony.com/doc/current/index.html
[PHP]: https://www.php.net/downloads.php
[MySQL]: https://dev.mysql.com/downloads/
[Composer]: https://getcomposer.org/download/
[NPM]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[NodeJS]:https://nodejs.org/en/download
[EasyAdmin]:https://symfony.com/bundles/EasyAdminBundle/current/index.html
[FakerPHP]:https://fakerphp.github.io/
[DoctrineFixture]:https://symfony.com/bundles/DoctrineFixturesBundle/current/index.html
[VichUploader]:https://github.com/dustin10/VichUploaderBundle/blob/master/docs/index.md
[WebpackEncore]:https://symfony.com/doc/current/frontend.html
[Linkedin]:https://www.linkedin.com/in/lionel-regisseur-487668213/

