<?php

namespace Core\ZeroBundle\Twig;

class ArraytostringExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('arraytostring', array($this, 'opciones')),
        );
    }

    public function opciones($array, $separador)
    {
        return implode($separador, $array);
    }

    public function getName()
    {
        return 'CoreZeroBundle:ArraytostringExtension';
    }
}
