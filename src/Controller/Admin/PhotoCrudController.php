<?php

namespace App\Controller\Admin;

use App\Entity\Photo;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class PhotoCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Photo::class;
    }
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Photos')
            ->setEntityLabelInSingular('Photo')
            ->setPageTitle('index', 'Quai Antique - Administration des photos')
            ->setDefaultSort(['CreatedAt' => 'DESC'])
            ->setPaginatorPageSize(20);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->hideOnForm(),
            TextField::new('ImageName')
                ->hideOnIndex()
                ->hideOnForm(),
            TextField::new('ImageTitle')
                ->setLabel('Nom de l\'image'),
            TextField::new('text_alt')
                ->setLabel('Texte alternatif (Description)'),
            TextField::new('ImageFile')
                ->setFormType(VichImageType::class)
                ->setLabel('Importez votre image')
                ->onlyWhenCreating(),
            BooleanField::new('Carrousel'),
            ImageField::new('ImageName')
                ->setBasePath('/uploads/images/')
                ->setLabel('Vos images')
                ->onlyOnIndex(),
            TextareaField::new('ImageFile')
                ->setFormType(VichImageType::class)
                ->onlyOnForms(),
        ];
    }
}
