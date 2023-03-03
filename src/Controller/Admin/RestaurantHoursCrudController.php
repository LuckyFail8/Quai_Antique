<?php

namespace App\Controller\Admin;

use App\Entity\RestaurantHours;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TimeField;

class RestaurantHoursCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return RestaurantHours::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Horaires')
            ->setEntityLabelInSingular('Horaire')
            ->setPageTitle('index', 'Quai Antique - Administration des horaires du restaurant le Quai Antique')
            ->setPaginatorPageSize(20);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->hideOnIndex()
                ->hideOnForm(),
            TextField::new('day')
                ->setLabel('Jours de la semaine'),
            TimeField::new('opening_lunch')
                ->setFormat('HH:mm')
                ->setLabel('Midi - Ouverture'),
            TimeField::new('closing_lunch')
                ->setFormat('HH:mm')
                ->setLabel('Midi - Fermeture'),
            IntegerField::new('places_available_lunch')
                ->setLabel('Places disponible le midi'),
            TimeField::new('opening_dinner')
                ->setFormat('HH:mm')
                ->setLabel('Soir - Ouverture'),
            TimeField::new('closing_dinner')
                ->setFormat('HH:mm')
                ->setLabel('Soir - Fermeture'),
            IntegerField::new('places_available_dinner')
                ->setLabel('Places disponible le soir'),
        ];
    }
}
