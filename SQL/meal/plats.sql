INSERT INTO
    meal (title, description, price)
VALUES (
        'Tartiflette',
        'Pommes de terre, lardons, oignons, reblochon, crème fraîche',
        15
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Plats'
        )
    );

INSERT INTO
    meal (title, description, price)
VALUES (
        'Raclette',
        'Pommes de terre, charcuterie, fromage à raclette',
        18
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Plats'
        )
    );

INSERT INTO
    meal (title, description, price)
VALUES (
        'Fondue savoyarde',
        'Fromage à fondue, vin blanc, ail',
        20
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Plats'
        )
    );

INSERT INTO
    meal (title, description, price)
VALUES (
        'Diots au vin blanc',
        'Diots, vin blanc, oignons, carottes, pommes de terre',
        14
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Plats'
        )
    );

INSERT INTO
    meal (title, description, price)
VALUES (
        'Crozets au gratin',
        'Crozets, lardons, oignons, crème fraîche, fromage râpé',
        12
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Plats'
        )
    );

INSERT INTO
    meal (title, description, price)
VALUES (
        'Pormoniers',
        'Pormoniers, pommes de terre, oignons, vin blanc',
        16
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Plats'
        )
    );