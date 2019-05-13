<?php

namespace Core\ZeroBundle\Twig;

class SolonumerosExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('solonumeros', array($this, 'reemplazar')),
        );
    }

    public function reemplazar($string)
    {
        return preg_replace("/[^0-9,.]/", "", $string);
    }

    public function getName()
    {
        return 'CoreZeroBundle:SolonumerosExtension';
    }
}
