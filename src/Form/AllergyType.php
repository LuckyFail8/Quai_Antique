<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Allergy;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class AllergyType extends AbstractType
{
    private $manager;
    private $security;


    public function __construct(EntityManagerInterface $manager, Security $security)
    {
        $this->manager = $manager;
        $this->security = $security;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $userAllergies = [];
        /**@var User $user */
        $user = $this->security->getUser();

        if ($user !== null) {
            $userAllergies = $user->getAllergies()->toArray();
        } else {
            $userAllergies = null;
        }
        $builder->add('allergies', EntityType::class, [
            'attr' => [
                'class' => 'form-control',
            ],
            'class' => Allergy::class,
            'choice_label' => 'name',
            'label' => 'Allergies',
            'mapped' => false,
            'required' => false,
            'multiple' => true,
            'expanded' => true,
            'data' => $userAllergies
        ]);
    }



    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Allergy::class,
            'label' => false,
        ]);
    }
}
