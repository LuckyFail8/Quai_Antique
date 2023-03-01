<?php

namespace App\Entity;

use App\Repository\RestaurantHoursRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RestaurantHoursRepository::class)]
class RestaurantHours
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $Day = null;

    #[ORM\Column(length: 50)]
    private ?string $Half_day = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $Open_at = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $Close_at = null;

    #[ORM\Column]
    private ?int $Number_max_guests = null;

    #[ORM\OneToMany(mappedBy: 'Restaurant_hour', targetEntity: Reservation::class, orphanRemoval: true)]
    private Collection $reservations;

    public function __construct()
    {
        $this->reservations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDay(): ?\DateTimeInterface
    {
        return $this->Day;
    }

    public function setDay(\DateTimeInterface $Day): self
    {
        $this->Day = $Day;

        return $this;
    }

    public function getHalfDay(): ?string
    {
        return $this->Half_day;
    }

    public function setHalfDay(string $Half_day): self
    {
        $this->Half_day = $Half_day;

        return $this;
    }

    public function getOpenAt(): ?\DateTimeInterface
    {
        return $this->Open_at;
    }

    public function setOpenAt(?\DateTimeInterface $Open_at): self
    {
        $this->Open_at = $Open_at;

        return $this;
    }

    public function getCloseAt(): ?\DateTimeInterface
    {
        return $this->Close_at;
    }

    public function setCloseAt(?\DateTimeInterface $Close_at): self
    {
        $this->Close_at = $Close_at;

        return $this;
    }

    public function getNumberMaxGuests(): ?int
    {
        return $this->Number_max_guests;
    }

    public function setNumberMaxGuests(int $Number_max_guests): self
    {
        $this->Number_max_guests = $Number_max_guests;

        return $this;
    }

    /**
     * @return Collection<int, Reservation>
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservation $reservation): self
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations->add($reservation);
            $reservation->setRestaurantHour($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): self
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getRestaurantHour() === $this) {
                $reservation->setRestaurantHour(null);
            }
        }

        return $this;
    }
}
