<?php

namespace Core\ZeroBundle\Twig;

class InarrayExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('inarray', array($this, 'opciones')),
        );
    }

    public function opciones($cadena, $busqueda)
    {
        $response = false;
        $array = preg_split('/,/', $cadena, null, PREG_SPLIT_NO_EMPTY);

        if (in_array($busqueda, $array)) {
            $response = true;
        }

        return $response;
    }

    public function getName()
    {
        return 'CoreZeroBundle:InarrayExtension';
    }
}
