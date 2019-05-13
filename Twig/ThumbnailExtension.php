<?php
namespace Core\ZeroBundle\Twig;

use Core\ZeroBundle\Helper\Util;

class ThumbnailExtension extends \Twig_Extension
{
    protected $util;

    public function __construct($container)
    {
        $this->util = new Util;
        $this->container = $container;
    }

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('thumbnail', array($this, 'opciones')),
        );
    }

    public function opciones($file,$w,$h=0)
    {
        $resultado =  $this->util->thumbnail($this->container->get('kernel')->getRootDir(),$file,$w,$h);
        return $resultado['thumb'];
    }

    public function getName()
    {
        return 'CoreZeroBundle:ThumbnailExtension';
    }
}
