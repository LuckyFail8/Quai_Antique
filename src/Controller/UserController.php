<?php

namespace App\Controller;

use LogicException;
use App\Entity\User;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Container\NotFoundExceptionInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Psr\Container\ContainerExceptionInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
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
    #[Security("is_granted('ROLE_USER') and user === request.attributes.get('user')")]
    #[Route('/utilisateur/edition/{id}', name: 'user.edit', methods: ['GET', 'POST'])]
    public function update(
        User $user,
        Request $request,
        EntityManagerInterface $manager,
        Security $security
    ): Response {
        $currentUser = $security->getUser();
        if (!$currentUser) {
            return $this->redirectToRoute('security.login');
        }
        if ($currentUser !== $user) {
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
