<?php

namespace Core\ZeroBundle\Twig;

class GeoLocationExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('geolocation', array($this, 'CrearDiccionario')),
        );
    }

    public function CrearDiccionario($string)
    {
        $data = explode('||', $string);

        return array(
            'texto' => @$data[0],
            'latitud' => @$data[1],
            'longitud' => @$data[2],
            'zoom' => @$data[3]
        );
    }

    public function getName()
    {
        return 'CoreZeroBundle:GeoLocationExtension';
    }
}
