<?php
namespace Core\ZeroBundle\Form\Type;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class TaggitType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array());
    }
    public function getParent()
    {
        return TextType::class;
    }
    public function getBlockPrefix()
    {
        return 'taggit';
    }
}
