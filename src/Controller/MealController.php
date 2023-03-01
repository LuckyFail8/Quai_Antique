<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Repository\MealRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\Pagination\PaginationInterface;
use LogicException;
use Psr\Container\NotFoundExceptionInterface;
use Psr\Container\ContainerExceptionInterface;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class MealController extends AbstractController
{
    /**
     * This function display all meals
     *
     * @param MealRepository $repository
     * @param PaginatorInterface $paginator
     * @param Request $request
     * @return Response
     */
    #[Route('/meal', name: 'app_meal')]
    public function index(MealRepository $mealRepository, CategoryRepository $categoryRepository, PaginatorInterface $paginator, Request $request): Response
    {

        $meals = $paginator->paginate(
            $mealRepository->findAll(),
            $request->query->getInt('page', 1),
            10
        );


        return $this->render('pages/meal/index.html.twig', [
            'meals' => $meals,
        ]);
    }
}
