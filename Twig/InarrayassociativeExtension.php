<?php

namespace Core\ZeroBundle\Twig;

class InarrayassociativeExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('inarrayassociative', array($this, 'opciones')),
        );
    }

    public function opciones($array, $busqueda, $columna)
    {
        $response = false;

        if (in_array($busqueda, array_column($array, $columna))) {
            $response = true;
        }

        return $response;
    }

    public function getName()
    {
        return 'CoreZeroBundle:InarrayassociativeExtension';
    }
}
