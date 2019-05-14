<?php
namespace Core\ZeroBundle\Twig;

use Core\ZeroBundle\Helper\Util;
use Symfony\Bridge\Doctrine\RegistryInterface;

class GlobalsExtension extends \Twig_Extension implements \Twig_Extension_GlobalsInterface
{
    /**
     * @var ContainerInterface
     */
    protected $container;
    protected $doctrine;
    protected $util;
    protected $locals = array();

    public function __construct($container)
    {
        $this->container = $container;

        $this->util = new Util;
    }

    public function getGlobals()
    {
        $container = $this->container;
        $admin_zero = $container->getParameter('admin_zero');

        $admin_zero_1 = $admin_zero['sidebar'];
        $admin_zero_2 = ($container->hasParameter('admin_zero_sidebar2') == false) ? array():$container->getParameter('admin_zero_sidebar2');
        $admin_zero_3 = ($container->hasParameter('admin_zero_sidebar3') == false) ? array():$container->getParameter('admin_zero_sidebar3');
        $admin_zero_4 = ($container->hasParameter('admin_zero_sidebar4') == false) ? array():$container->getParameter('admin_zero_sidebar4');
        $admin_zero_5 = ($container->hasParameter('admin_zero_sidebar5') == false) ? array():$container->getParameter('admin_zero_sidebar5');
        $admin_zero_6 = ($container->hasParameter('admin_zero_sidebar6') == false) ? array():$container->getParameter('admin_zero_sidebar6');
        $admin_zero_7 = ($container->hasParameter('admin_zero_sidebar7') == false) ? array():$container->getParameter('admin_zero_sidebar7');
        $admin_zero_8 = ($container->hasParameter('admin_zero_sidebar8') == false) ? array():$container->getParameter('admin_zero_sidebar8');
        $admin_zero_9 = ($container->hasParameter('admin_zero_sidebar9') == false) ? array():$container->getParameter('admin_zero_sidebar9');

        $sidebar = array_merge(
            $admin_zero_1,
            $admin_zero_2,
            $admin_zero_3,
            $admin_zero_4,
            $admin_zero_5,
            $admin_zero_6,
            $admin_zero_7,
            $admin_zero_8,
            $admin_zero_9
        );

        $this->locals['zeroconfig'] = array(
            'title' => $admin_zero['developer'],
            'locales' => @$admin_zero['locales'],
            'js_externo' => @$admin_zero['js_externo'],
            'js_interno' => @$admin_zero['js_interno'],
            'sidebar' => $sidebar
        );
        return $this->locals;
    }

    public function getName()
    {
        return 'CoreZeroBundle:GlobalsExtension';
    }
}
