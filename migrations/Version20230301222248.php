<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230301222248 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE allergy (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fromula (id INT AUTO_INCREMENT NOT NULL, price DOUBLE PRECISION NOT NULL, description LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE meal (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(100) NOT NULL, description LONGTEXT DEFAULT NULL, price DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE meal_category (meal_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_625E02B3639666D6 (meal_id), INDEX IDX_625E02B312469DE2 (category_id), PRIMARY KEY(meal_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE meal_menu (meal_id INT NOT NULL, menu_id INT NOT NULL, INDEX IDX_67DBE967639666D6 (meal_id), INDEX IDX_67DBE967CCD7E912 (menu_id), PRIMARY KEY(meal_id, menu_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE menu (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE menu_fromula (menu_id INT NOT NULL, fromula_id INT NOT NULL, INDEX IDX_C8D20749CCD7E912 (menu_id), INDEX IDX_C8D207491F3BE25A (fromula_id), PRIMARY KEY(menu_id, fromula_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE photo (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(100) NOT NULL, text_alt LONGTEXT DEFAULT NULL, image LONGBLOB NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reservation (id INT AUTO_INCREMENT NOT NULL, restaurant_hour_id INT NOT NULL, user_id INT DEFAULT NULL, date DATETIME NOT NULL, hour TIME NOT NULL, number_of_guests INT NOT NULL, INDEX IDX_42C849557FD8278C (restaurant_hour_id), INDEX IDX_42C84955A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE restaurant_hours (id INT AUTO_INCREMENT NOT NULL, day VARCHAR(50) NOT NULL, half_day VARCHAR(50) NOT NULL, open_at TIME DEFAULT NULL, close_at TIME DEFAULT NULL, number_max_guests INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', nbr_of_covers_by_default INT DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_allergy (user_id INT NOT NULL, allergy_id INT NOT NULL, INDEX IDX_93BC5CBFA76ED395 (user_id), INDEX IDX_93BC5CBFDBFD579D (allergy_id), PRIMARY KEY(user_id, allergy_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE meal_category ADD CONSTRAINT FK_625E02B3639666D6 FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE meal_category ADD CONSTRAINT FK_625E02B312469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE meal_menu ADD CONSTRAINT FK_67DBE967639666D6 FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE meal_menu ADD CONSTRAINT FK_67DBE967CCD7E912 FOREIGN KEY (menu_id) REFERENCES menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE menu_fromula ADD CONSTRAINT FK_C8D20749CCD7E912 FOREIGN KEY (menu_id) REFERENCES menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE menu_fromula ADD CONSTRAINT FK_C8D207491F3BE25A FOREIGN KEY (fromula_id) REFERENCES fromula (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C849557FD8278C FOREIGN KEY (restaurant_hour_id) REFERENCES restaurant_hours (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_allergy ADD CONSTRAINT FK_93BC5CBFA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_allergy ADD CONSTRAINT FK_93BC5CBFDBFD579D FOREIGN KEY (allergy_id) REFERENCES allergy (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE meal_category DROP FOREIGN KEY FK_625E02B3639666D6');
        $this->addSql('ALTER TABLE meal_category DROP FOREIGN KEY FK_625E02B312469DE2');
        $this->addSql('ALTER TABLE meal_menu DROP FOREIGN KEY FK_67DBE967639666D6');
        $this->addSql('ALTER TABLE meal_menu DROP FOREIGN KEY FK_67DBE967CCD7E912');
        $this->addSql('ALTER TABLE menu_fromula DROP FOREIGN KEY FK_C8D20749CCD7E912');
        $this->addSql('ALTER TABLE menu_fromula DROP FOREIGN KEY FK_C8D207491F3BE25A');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C849557FD8278C');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955A76ED395');
        $this->addSql('ALTER TABLE user_allergy DROP FOREIGN KEY FK_93BC5CBFA76ED395');
        $this->addSql('ALTER TABLE user_allergy DROP FOREIGN KEY FK_93BC5CBFDBFD579D');
        $this->addSql('DROP TABLE allergy');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE fromula');
        $this->addSql('DROP TABLE meal');
        $this->addSql('DROP TABLE meal_category');
        $this->addSql('DROP TABLE meal_menu');
        $this->addSql('DROP TABLE menu');
        $this->addSql('DROP TABLE menu_fromula');
        $this->addSql('DROP TABLE photo');
        $this->addSql('DROP TABLE reservation');
        $this->addSql('DROP TABLE restaurant_hours');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_allergy');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
