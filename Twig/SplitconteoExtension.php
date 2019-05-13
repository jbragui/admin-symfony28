<?php

namespace Core\ZeroBundle\Twig;

class SplitconteoExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('pregsplitconteo', array($this, 'opciones')),
        );
    }

    public function opciones($cadena)
    {
        $array = preg_split('/,/', $cadena, null, PREG_SPLIT_NO_EMPTY);
        $total = count($array);

        return $total;
    }

    public function getName()
    {
        return 'CoreZeroBundle:SplitconteoExtension';
    }
}
