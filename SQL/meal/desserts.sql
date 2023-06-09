INSERT INTO
    meal (title, description, price)
VALUES (
        'Tarte aux myrtilles',
        'Pâte brisée, myrtilles, sucre, crème fraîche',
        6
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Desserts'
        )
    );

INSERT INTO
    meal (title, description, price)
VALUES (
        'Beignets aux pommes',
        'Pommes, farine, sucre, oeufs, lait',
        5
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Desserts'
        )
    );

INSERT INTO
    meal (title, description, price)
VALUES (
        'Gâteau de Savoie',
        'Farine, sucre, oeufs, levure, zeste de citron',
        7
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Desserts'
        )
    );

INSERT INTO
    meal (title, description, price)
VALUES (
        'Crème brûlée',
        'Crème fraîche, sucre, oeufs, vanille',
        6
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Desserts'
        )
    );

INSERT INTO
    meal (title, description, price)
VALUES (
        'Mousse au chocolat',
        'Chocolat noir, oeufs, sucre, crème fraîche',
        6
    );