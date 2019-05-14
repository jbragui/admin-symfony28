<?php

namespace Core\ZeroBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Core\ZeroBundle\Form\Type\FileBrowserType;

class ZeroSeoType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('path', TextType::class, array(
                'label' => 'URL'
            ))
            ->add('titulo', TextType::class, array(
                'attr' => array(
                    'help_text' => 'Maximo de 70 caracteres'
                )
            ))
            ->add('descripcion', TextType::class, array(
                'attr' => array(
                    'help_text' => 'Maximo de 150 caracteres'
                )
            ))
            ->add('socialTitulo')
            ->add('socialDescripcion')
            ->add('socialImagen', FileBrowserType::class)
        ;
    }
}
