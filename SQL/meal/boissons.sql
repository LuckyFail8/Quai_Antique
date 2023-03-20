INSERT INTO meal (title, price) VALUES ('Jus de pomme', 3);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Boissons'
        )
    );

INSERT INTO meal (title, price) VALUES ('Jus d\'orange', 3);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Boissons'
        )
    );

INSERT INTO meal (title, price) VALUES ('Limonade', 2);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Boissons'
        )
    );

INSERT INTO meal (title, price) VALUES ('Thé', 2);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Boissons'
        )
    );

INSERT INTO meal (title, price) VALUES ('Café', 2);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Boissons'
        )
    );

INSERT INTO meal (title, price) VALUES ('Vin de Savoie', 5);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Boissons'
        )
    );

INSERT INTO meal (title, price) VALUES ('Bière artisanale', 6);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Boissons'
        )
    );

INSERT INTO meal (title, price) VALUES ('Chartreuse', 8);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Boissons'
        )
    );

INSERT INTO meal (title, price) VALUES ('Génépi', 7);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Boissons'
        )
    );

INSERT INTO meal (title, price) VALUES ('Vin chaud', 6);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                name = 'Boissons'
        )
    );