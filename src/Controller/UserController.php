<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
use LogicException;
use Psr\Container\NotFoundExceptionInterface;
use Psr\Container\ContainerExceptionInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class UserController extends AbstractController
{
    /**
     * This controller allow us to edit user's profile
     * @param User $user 
     * @param Request $request 
     * @param EntityManagerInterface $manager 
     * @return Response 
     */
    #[Route('/utilisateur/edition/{id}', name: 'user.edit', methods: ['GET', 'POST'])]
    public function update(User $user, Request $request, EntityManagerInterface $manager): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('security.login');
        }
        if ($this->getUser() !== $user) {
            return $this->redirectToRoute('home.index');
        }

        $formUser = $this->createForm(UserType::class, $user);

        $formUser->handleRequest($request);
        if ($formUser->isSubmitted() && $formUser->isValid()) {
            $user = $formUser->getData();
            $user->removeAllAllergies();
            $allergies = $formUser->get('Allergies')->getData();
            foreach ($allergies as $allergy) {
                $user->addAllergy($allergy);
            }

            $manager->persist($user);
            $manager->flush();

            $this->addFlash(
                'success',
                'Les informations de votre compte ont bien été modifiées'
            );
        }
        return $this->render('pages/user/edit.html.twig', [
            'formUser' => $formUser->createView(),
        ]);
    }
}
