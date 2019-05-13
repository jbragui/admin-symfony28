<?php

namespace Core\ZeroBundle\Twig;

class YoutubeExtension extends \Twig_Extension
{

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('youtube', array($this, 'opciones')),
        );
    }

    public function opciones($url)
    {
        $result = preg_match("#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#", $url, $matches);
        if (false !== $result and $matches !== false) {
            return $matches[0];
        }
        return '';
    }

    public function getName()
    {
        return 'CoreZeroBundle:YoutubeExtension';
    }
}
