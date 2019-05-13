<?php

namespace Core\ZeroBundle\Twig;

class DiasExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('dia', array($this, 'opciones')),
        );
    }

    public function opciones($fecha)
    {
        $fecha_string = $fecha->format("Y-m-d H:i:s");
        $dia_numero = date('N', strtotime($fecha_string));
        $dias = array("Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo");

        return $dias[$dia_numero-1];
    }

    public function getName()
    {
        return 'CoreZeroBundle:DiasExtension';
    }
}
