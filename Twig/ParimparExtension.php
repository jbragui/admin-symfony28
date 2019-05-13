<?php

namespace Core\ZeroBundle\Twig;

class ParimparExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('parimpar', array($this, 'opciones')),
        );
    }

    public function opciones($numero)
    {
        $response = 2; //No es entero

        if (is_int($numero)) {
            if ($numero % 2 == 0) {
                $response = 0; //Par
            }else {
                $response = 1; //Impar
            }
        }

        return $response;
    }

    public function getName()
    {
        return 'CoreZeroBundle:ParimparExtension';
    }
}
