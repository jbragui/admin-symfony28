<?php

namespace Core\ZeroBundle\Twig;

class SplitExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('pregsplit', array($this, 'opciones')),
        );
    }

    public function opciones($cadena)
    {
        $array = preg_split('/,/', $cadena, null, PREG_SPLIT_NO_EMPTY);

        return $array;
    }

    public function getName()
    {
        return 'CoreZeroBundle:SplitExtension';
    }
}
