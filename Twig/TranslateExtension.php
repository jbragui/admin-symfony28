<?php

namespace Core\ZeroBundle\Twig;

use Core\ZeroBundle\Helper\Util;
use Core\ZeroBundle\Entity\Translate;
use Symfony\Bridge\Doctrine\RegistryInterface;

class TranslateExtension extends \Twig_Extension
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
            new \Twig_SimpleFilter('t', array($this, 'traducir')),
        );
    }

    public function traducir($text)
    {
        $variable = $this->util->url_slug($text);
        $translate = $this->doctrine->getRepository('CoreZeroBundle:Translate')->findOneByVariable($variable);
        if ( !$translate ) {
            $converter = new \Markdownify\Converter;
            $translate = new Translate();
            $translate->setVariable($variable);
            $translate->setTexto($converter->parseString($text));

            $em = $this->doctrine->getManager();

            $em->persist($translate);
            $em->flush();
        }

        return $translate->getTexto();
    }

    public function getName()
    {
        return 'CoreZeroBundle:TranslationExtension';
    }
}
