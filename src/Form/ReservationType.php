<?php

namespace App\Form;

use App\Entity\Allergy;
use App\Form\AllergyType;
use App\Entity\Reservation;
use App\Entity\RestaurantHours;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class ReservationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Date', DateType::class, [
                'widget' => 'single_text',
                'html5' => true,
                'data' => new \DateTime(),
                'attr' => [
                    'class' => 'datepicker',
                ]
            ])
            ->add('Restaurant_hour', EntityType::class, [
                'class' => RestaurantHours::class,
                'mapped' => false,
                'choice_label' => 'day',
            ])
            ->add('Number_of_guests', IntegerType::class)
            ->add('Allergies', CollectionType::class, [
                'entry_type' => AllergyType::class,
                'entry_options' => [
                    'label' => false,
                ],
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true,
                'by_reference' => false,
                'label' => "Allergies (Facultatif)",
                'required' => false,
                'label_attr' => [
                    'class' => 'form-label mt-4'
                ],
            ])
            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-primary mt-4'
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Reservation::class,
        ]);
    }
}
