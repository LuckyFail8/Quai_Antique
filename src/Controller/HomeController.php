<?php

namespace App\Controller;

use App\Repository\PhotoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home.index', methods: ['GET'])]
    public function index(PhotoRepository $photoRepository): Response
    {
        $carrouselPhoto = $photoRepository->findCarrouselPhoto();

        return $this->render('home.html.twig', [
            'carrouselPhoto' => $carrouselPhoto,
        ]);
    }
}
