<?php

namespace Core\ZeroBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Translatable\Translatable;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity
 */
class ZeroSeo
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank()
     */
    private $path;

    /**
     * @ORM\Column(length=70, nullable=true)
     */
    private $titulo;

    /**
     * @ORM\Column(length=160, nullable=true)
     */
    private $descripcion;

    /**
     * @ORM\Column(length=160, nullable=true)
     */
    private $socialTitulo;

    /**
     * @ORM\Column(length=160, nullable=true)
     */
    private $socialDescripcion;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $socialImagen;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set path
     *
     * @param string $path
     * @return ZeroSeo
     */
    public function setPath($path)
    {
        $this->path = $path;

        return $this;
    }

    /**
     * Get path
     *
     * @return string
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * Set titulo
     *
     * @param string $titulo
     * @return ZeroSeo
     */
    public function setTitulo($titulo)
    {
        $this->titulo = $titulo;

        return $this;
    }

    /**
     * Get titulo
     *
     * @return string
     */
    public function getTitulo()
    {
        return $this->titulo;
    }

    /**
     * Set descripcion
     *
     * @param string $descripcion
     * @return ZeroSeo
     */
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    /**
     * Get descripcion
     *
     * @return string
     */
    public function getDescripcion()
    {
        return $this->descripcion;
    }

    /**
     * Set socialTitulo
     *
     * @param string $socialTitulo
     * @return ZeroSeo
     */
    public function setSocialTitulo($socialTitulo)
    {
        $this->socialTitulo = $socialTitulo;

        return $this;
    }

    /**
     * Get socialTitulo
     *
     * @return string
     */
    public function getSocialTitulo()
    {
        return $this->socialTitulo;
    }

    /**
     * Set socialDescripcion
     *
     * @param string $socialDescripcion
     * @return ZeroSeo
     */
    public function setSocialDescripcion($socialDescripcion)
    {
        $this->socialDescripcion = $socialDescripcion;

        return $this;
    }

    /**
     * Get socialDescripcion
     *
     * @return string
     */
    public function getSocialDescripcion()
    {
        return $this->socialDescripcion;
    }

    /**
     * Set socialImagen
     *
     * @param string $socialImagen
     * @return ZeroSeo
     */
    public function setSocialImagen($socialImagen)
    {
        $this->socialImagen = $socialImagen;

        return $this;
    }

    /**
     * Get socialImagen
     *
     * @return string
     */
    public function getSocialImagen()
    {
        return $this->socialImagen;
    }
}
