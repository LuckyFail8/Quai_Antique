<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230227153914 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE meal_category (meal_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_625E02B3639666D6 (meal_id), INDEX IDX_625E02B312469DE2 (category_id), PRIMARY KEY(meal_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE meal_menu (meal_id INT NOT NULL, menu_id INT NOT NULL, INDEX IDX_67DBE967639666D6 (meal_id), INDEX IDX_67DBE967CCD7E912 (menu_id), PRIMARY KEY(meal_id, menu_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE menu_fromula (menu_id INT NOT NULL, fromula_id INT NOT NULL, INDEX IDX_C8D20749CCD7E912 (menu_id), INDEX IDX_C8D207491F3BE25A (fromula_id), PRIMARY KEY(menu_id, fromula_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE meal_category ADD CONSTRAINT FK_625E02B3639666D6 FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE meal_category ADD CONSTRAINT FK_625E02B312469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE meal_menu ADD CONSTRAINT FK_67DBE967639666D6 FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE meal_menu ADD CONSTRAINT FK_67DBE967CCD7E912 FOREIGN KEY (menu_id) REFERENCES menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE menu_fromula ADD CONSTRAINT FK_C8D20749CCD7E912 FOREIGN KEY (menu_id) REFERENCES menu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE menu_fromula ADD CONSTRAINT FK_C8D207491F3BE25A FOREIGN KEY (fromula_id) REFERENCES fromula (id) ON DELETE CASCADE');
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
        $this->addSql('DROP TABLE meal_category');
        $this->addSql('DROP TABLE meal_menu');
        $this->addSql('DROP TABLE menu_fromula');
    }
}
