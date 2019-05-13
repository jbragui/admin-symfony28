<?php

namespace Core\ZeroBundle\Twig;

class InarraycoincidenciasExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('inarraycoincidencias', array($this, 'opciones')),
        );
    }

    public function opciones($cadena, $busqueda)
    {
        $array = preg_split('/,/', $cadena, null, PREG_SPLIT_NO_EMPTY);
        $contador = 0;

        foreach ($array as $key => $value) {
            if (preg_match("/$busqueda/i", $value)) {
                $contador++;
            }
        }

        return $contador;
    }

    public function getName()
    {
        return 'CoreZeroBundle:InarraycoincidenciasExtension';
    }
}
