<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Allergy;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class UserType extends AbstractType
{
    private $security;


    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Name', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'minlength' => '2',
                    'maxlength' => '50',
                ],
                'label' => 'Prénom',
                'label_attr' => [
                    'class' => 'form-label '
                ],
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Length(['min' => 2, 'max' => 50])
                ]
            ])
            ->add('Last_name', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'minlength' => '2',
                    'maxlength' => '50',
                ],
                'label' => 'Nom',
                'label_attr' => [
                    'class' => 'form-label '
                ],
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Length(['min' => 2, 'max' => 50])
                ]
            ])
            ->add('Nbr_of_covers_by_default', IntegerType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'minlength' => '2',
                    'maxlength' => '50',
                ],
                'label' => 'Nombre de couvert par défaut (Facultatif)',
                'required' => false,
                'label_attr' => [
                    'class' => 'form-label '
                ],
                'constraints' => [
                    new Assert\PositiveOrZero,
                    new Assert\LessThanOrEqual(10)
                ]
            ]);
        /**@var User $user */
        $user = $this->security->getUser();
        if ($user !== null) {
            $userAllergies = $user->getAllergies()->toArray();
        } else {
            $userAllergies = null;
        }
        $builder->add('Allergies', EntityType::class, [
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
            'data_class' => User::class,
        ]);
    }
}
