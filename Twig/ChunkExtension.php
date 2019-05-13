<?php
namespace Core\ZeroBundle\Twig;

class ChunkExtension extends \Twig_Extension
{
    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('chunk', array($this, 'chunk')),
        );
    }

    public function chunk($array, $cant)
    {
        return array_chunk($array, $cant);
    }

    public function getName()
    {
        return 'CoreZeroBundle:ChunkExtension';
    }
}
