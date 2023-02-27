<?php

namespace App\Entity;

use App\Repository\MenuRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: MenuRepository::class)]
class Menu
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank()]
    #[Assert\Length(min: 2, max: 100)]
    private ?string $Title = null;

    #[ORM\ManyToMany(targetEntity: Meal::class, mappedBy: 'menu')]
    private Collection $meals;

    #[ORM\ManyToMany(targetEntity: Fromula::class, inversedBy: 'menus')]
    private Collection $formula;

    public function __construct()
    {
        $this->meals = new ArrayCollection();
        $this->formula = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->Title;
    }

    public function setTitle(string $Title): self
    {
        $this->Title = $Title;

        return $this;
    }

    /**
     * @return Collection<int, Meal>
     */
    public function getMeals(): Collection
    {
        return $this->meals;
    }

    public function addMeal(Meal $meal): self
    {
        if (!$this->meals->contains($meal)) {
            $this->meals->add($meal);
            $meal->addMenu($this);
        }

        return $this;
    }

    public function removeMeal(Meal $meal): self
    {
        if ($this->meals->removeElement($meal)) {
            $meal->removeMenu($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Fromula>
     */
    public function getFormula(): Collection
    {
        return $this->formula;
    }

    public function addFormula(Fromula $formula): self
    {
        if (!$this->formula->contains($formula)) {
            $this->formula->add($formula);
        }

        return $this;
    }

    public function removeFormula(Fromula $formula): self
    {
        $this->formula->removeElement($formula);

        return $this;
    }
}
