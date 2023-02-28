<?php

namespace App\Controller;

use App\Repository\MealRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MealController extends AbstractController
{
    #[Route('/meal', name: 'app_meal')]
    public function index(MealRepository $repository): Response
    {
        return $this->render('pages/meal/index.html.twig', [
            'meals' => $repository->findAll()
        ]);
    }
}
