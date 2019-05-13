<?php
namespace Core\ZeroBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Core Base Entity
 * @author Roger Cruz <info@rogerca.com>
 */
abstract class Base
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\NotBlank()
     */
    protected $created;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\NotBlank()
     */
    protected $modified;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank()
     */
    protected $createdUser;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank()
     */
    protected $modifiedUser;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->procesos = new \Doctrine\Common\Collections\ArrayCollection();
        $this->created = new \DateTime();
        $this->modified = new \DateTime();
        $this->createdUser = 0;
        $this->modifiedUser = 0;
    }

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set created
     *
     * @param \DateTime $created
     * @return Vehiculos
     */
    public function setCreated($created)
    {
        $this->created = $created;

        return $this;
    }

    /**
     * Get created
     *
     * @return \DateTime
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Set modified
     *
     * @param \DateTime $modified
     * @return Vehiculos
     */
    public function setModified($modified)
    {
        $this->modified = $modified;

        return $this;
    }

    /**
     * Get modified
     *
     * @return \DateTime
     */
    public function getModified()
    {
        return $this->modified;
    }

    /**
     * Set createdUser
     *
     * @param integer $createdUser
     * @return Vehiculos
     */
    public function setCreatedUser($createdUser)
    {
        $this->createdUser = $createdUser;

        return $this;
    }

    /**
     * Get createdUser
     *
     * @return integer
     */
    public function getCreatedUser()
    {
        return $this->createdUser;
    }

    /**
     * Set modifiedUser
     *
     * @param integer $modifiedUser
     * @return Vehiculos
     */
    public function setModifiedUser($modifiedUser)
    {
        $this->modifiedUser = $modifiedUser;

        return $this;
    }

    /**
     * Get modifiedUser
     *
     * @return integer
     */
    public function getModifiedUser()
    {
        return $this->modifiedUser;
    }
}
