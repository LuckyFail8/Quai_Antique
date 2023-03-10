<?php

namespace App\Entity;

use InvalidArgumentException;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ReservationRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: ReservationRepository::class)]
class Reservation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $Date = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $Hour = null;

    #[ORM\Column]
    private ?int $Number_of_guests = null;

    #[ORM\ManyToOne(inversedBy: 'reservations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?RestaurantHours $Restaurant_hour = null;

    #[ORM\ManyToOne(inversedBy: 'reservations')]
    #[ORM\JoinColumn(nullable: true)]
    private ?User $User = null;

    #[ORM\ManyToMany(targetEntity: Allergy::class, inversedBy: 'reservations')]
    private Collection $Allergy;

    public function __construct()
    {
        $this->Allergy = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->Date;
    }

    public function setDate(\DateTimeInterface $Date): self
    {
        $this->Date = $Date;

        return $this;
    }

    public function getHour(): ?\DateTimeInterface
    {
        return $this->Hour;
    }

    public function setHour(\DateTimeInterface $Hour): self
    {
        $this->Hour = $Hour;

        return $this;
    }

    public function getNumberOfGuests(): ?int
    {
        return $this->Number_of_guests;
    }

    public function setNumberOfGuests(int $Number_of_guests): self
    {
        $this->Number_of_guests = $Number_of_guests;

        return $this;
    }

    public function getRestaurantHour(): ?RestaurantHours
    {
        return $this->Restaurant_hour;
    }

    public function setRestaurantHour(?RestaurantHours $Restaurant_hour): self
    {
        $this->Restaurant_hour = $Restaurant_hour;

        return $this;
    }

    public function getRestaurantHourID(\DateTimeInterface $day): int
    {
        switch ($day->format('l')) {
            case 'Monday':
                return 1;
            case 'Tuesday':
                return 2;
            case 'Wednesday':
                return 3;
            case 'Thursday':
                return 4;
            case 'Friday':
                return 5;
            case 'Saturday':
                return 6;
            case 'Sunday':
                return 7;
            default:
                throw new InvalidArgumentException('Invalid day of the week');
        }
    }

    public function getUser(): ?User
    {
        return $this->User;
    }

    public function setUser(?User $User): self
    {
        $this->User = $User;

        return $this;
    }

    /**
     * @return Collection<int, Allergy>
     */
    public function getAllergies(): Collection
    {
        return $this->Allergy;
    }

    public function addAllergy(Allergy $allergy): self
    {
        if (!$this->Allergy->contains($allergy)) {
            $this->Allergy->add($allergy);
        }

        return $this;
    }

    public function removeAllergy(Allergy $allergy): self
    {
        $this->Allergy->removeElement($allergy);

        return $this;
    }
}
