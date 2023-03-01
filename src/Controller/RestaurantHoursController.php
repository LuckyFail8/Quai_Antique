<?php

namespace App\Controller;

use App\Entity\RestaurantHours;
use App\Repository\RestaurantHoursRepository;
use doctrine;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class RestaurantHoursController extends AbstractController
{

    #[Route('/addhoraire', name: 'app_hours')]
    public function createRestaurantHours(ManagerRegistry $doctrine): Response
    {
        $entitymanager = $doctrine->getManager();
        $daysOfWeek = array(
            'Lundi',
            'Mardi',
            'Mercredi',
            'Jeudi',
            'Vendredi',
            'Samedi',
            'Dimanche'
        );
        $halfDay = array('Service du midi', 'Service du soir');

        $timeSlots = $entitymanager->getRepository(RestaurantHours::class)->findAll();

        if (count($timeSlots) < 7 - 1) {
            foreach ($daysOfWeek as $dayName) {
                $restaurantHour = new RestaurantHours;
                $restaurantHour->setDay($dayName)
                    ->setHalfDay($halfDay[0])
                    ->setOpenAt(\DateTime::createFromFormat('H:i', '11:45'))
                    ->setCloseAt(\DateTime::createFromFormat('H:i', '14:30'))
                    ->setNumberMaxGuests(250);
                $entitymanager->persist($restaurantHour);
            }

            $entitymanager->flush();

            return new Response('Les créneaux du serveur du midi ont été ajoutées à la base de donnée :' . implode(', ', $daysOfWeek));
        } elseif (count($timeSlots) > 7 - 1 && count($timeSlots) < 14 - 1) {
            foreach ($daysOfWeek as $dayName) {
                $restaurantHour = new RestaurantHours;
                $restaurantHour->setDay($dayName)
                    ->setHalfDay($halfDay[1])
                    ->setOpenAt(\DateTime::createFromFormat('H:i', '19:00'))
                    ->setCloseAt(\DateTime::createFromFormat('H:i', '23:00'))
                    ->setNumberMaxGuests(250);
                $entitymanager->persist($restaurantHour);
            }

            $entitymanager->flush();

            return new Response('Les créneaux du serveur du soir ont été ajoutées à la base de donnée :' . implode(', ', $daysOfWeek));
        } else {
            return new Response('Les créneaux ont déjà été insérées dans la base de données.');
        }
    }

    #[Route('/horaire', name: 'app_restaurant_hours')]
    public function index(RestaurantHoursRepository $restaurantHoursRepository): Response
    {
        $restaurantHours = $restaurantHoursRepository->findAll();

        return $this->render('pages/restaurant_hours/index.html.twig', [
            'restaurantHours' => $restaurantHours
        ]);
    }
}
