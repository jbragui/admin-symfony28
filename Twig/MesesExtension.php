<?php

namespace Core\ZeroBundle\Twig;

class MesesExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('mes', array($this, 'opciones')),
        );
    }

    public function opciones($fecha)
    {
        $mes = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        return $mes[$fecha->format('m')-1];
    }

    public function getName()
    {
        return 'CoreZeroBundle:MesesExtension';
    }
}
