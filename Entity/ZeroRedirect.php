<?php

namespace Core\ZeroBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Zenstruck\RedirectBundle\Model\Redirect as BaseRedirect;

/**
 * @ORM\Entity
 */
class ZeroRedirect extends BaseRedirect
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    public function __construct()
    {
        parent::__construct("/antigua-web", "/", $permanent = false);
        // your own logic
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
}
