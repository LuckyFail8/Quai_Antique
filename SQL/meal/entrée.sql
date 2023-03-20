INSERT INTO
    meal (title, description, price)
VALUES (
        'Salade de chèvre chaud',
        'Salade verte, chèvre chaud, noix, vinaigrette au miel',
        8
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Entrées'
        )
    );

INSERT INTO
    meal (title, description, price)
VALUES (
        'Soupe de légumes d\'hiver',
        'Carottes, poireaux, pommes de terre, navets, céleri, oignons, bouillon de légumes, crème fraîche',
        6
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Entrées'
        )
    );

INSERT INTO
    meal (title, description, price)
VALUES (
        'Croûte aux champignons',
        'Champignons de Paris, crème fraîche, ail, persil, pain de campagne',
        7
    );

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Entrées'
        )
    );