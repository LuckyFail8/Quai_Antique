INSERT INTO
    meal (
        title,
        description,
        price,
        category_id
    )
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
                title = 'Desserts'
        )
    );

INSERT INTO
    meal (
        title,
        description,
        price,
        category_id
    )
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
                title = 'Desserts'
        )
    );

INSERT INTO
    meal (
        title,
        description,
        price,
        category_id
    )
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
                title = 'Desserts'
        )
    );

INSERT INTO
    meal (
        title,
        description,
        price,
        category_id
    )
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
                title = 'Desserts'
        )
    );

INSERT INTO
    meal (
        title,
        description,
        price,
        category_id
    )
VALUES (
        'Mousse au chocolat',
        'Chocolat noir, oeufs, sucre, crème fraîche',
        6
    );