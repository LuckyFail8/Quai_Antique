INSERT INTO
    meal (title, price, category_id)
VALUES ('Jus de pomme', 3);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                title = 'Boissons'
        )
    );

INSERT INTO
    meal (title, price, category_id)
VALUES ('Jus d\'orange', 3);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                title = 'Boissons'
        )
    );

INSERT INTO
    meal (title, price, category_id)
VALUES ('Limonade', 2);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                title = 'Boissons'
        )
    );

INSERT INTO
    meal (title, price, category_id)
VALUES ('Thé', 2);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                title = 'Boissons'
        )
    );

INSERT INTO
    meal (title, price, category_id)
VALUES ('Café', 2);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                title = 'Boissons'
        )
    );

INSERT INTO
    meal (title, price, category_id)
VALUES ('Vin de Savoie', 5);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                title = 'Boissons'
        )
    );

INSERT INTO
    meal (title, price, category_id)
VALUES ('Bière artisanale', 6);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                title = 'Boissons'
        )
    );

INSERT INTO
    meal (title, price, category_id)
VALUES ('Chartreuse', 8);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                title = 'Boissons'
        )
    );

INSERT INTO
    meal (title, price, category_id)
VALUES ('Génépi', 7);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                title = 'Boissons'
        )
    );

INSERT INTO
    meal (title, price, category_id)
VALUES ('Vin chaud', 6);

INSERT INTO
    meal_category (meal_id, category_id)
VALUES (
        LAST_INSERT_ID(), (
            SELECT id
            FROM category
            WHERE
                title = 'Boissons'
        )
    );