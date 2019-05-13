<?php

namespace Core\ZeroBundle\Twig;

use Core\ZeroBundle\Helper\Util;
use Core\ZeroBundle\Entity\ZeroSeo;
use Symfony\Bridge\Doctrine\RegistryInterface;

class MetatagsExtension extends \Twig_Extension
{
    protected $doctrine;
    protected $util;

    public function __construct(RegistryInterface $doctrine)
    {
        $this->doctrine = $doctrine;
        $this->util = new Util;
    }

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('metatags', array($this, 'getMetatags')),
        );
    }

    public function getMetatags($url)
    {
        $metatags = $this->doctrine->getRepository('CoreZeroBundle:ZeroSeo')->findOneByPath($url);
        if ( !$metatags ) {
            $metatags = new ZeroSeo();
            $metatags->setPath($url);

            $em = $this->doctrine->getManager();
            $em->persist($metatags);
            $em->flush();
        }
        return $metatags;
    }

    public function getName()
    {
        return 'CoreZeroBundle:MetatagsExtension';
    }
}
