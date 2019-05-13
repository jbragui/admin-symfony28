<?php
namespace Core\ZeroBundle\Twig;

class FileextExtension extends \Twig_Extension
{
    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('extension', array($this, 'extension')),
        );
    }

    public function extension($archivo)
    {
        return strtolower(pathinfo($archivo, PATHINFO_EXTENSION));
    }

    public function getName()
    {
        return 'CoreZeroBundle:FileextExtension';
    }
}
