<?php
namespace Core\ZeroBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

use Gedmo\Mapping\Annotation as Gedmo;
use Gedmo\Translatable\Translatable;

/**
 * Core Base Entity
 * @author Roger Cruz <info@rogerca.com>
 */
abstract class Translate extends Base implements Translatable
{
    /**
     * @Gedmo\Locale
     * Used locale to override Translation listener`s locale
     * this is not a mapped field of entity metadata, just a simple property
     */
    private $locale;

    public function setTranslatableLocale($locale)
    {
        $this->locale = $locale;
    }

    public function setLocale($locale)
    {
        $this->locale = $locale;

        return $this;
    }
}
