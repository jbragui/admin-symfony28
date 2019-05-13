<?php

namespace Core\ZeroBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use Doctrine\Common\Collections\ArrayCollection;

class BaseZeroController extends Controller
{
    protected $NameModel;
    protected $ClassModel;
    protected $Collections = array();
    private $OriginalCollections = array();

    /**
     * Displays a form to edit an existing entity.
     */
    public function unicoAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('AdminBundle:'.$this->NameModel)->find(1);
        if (!$entity) $entity = $this->ClassModel;
        $editForm = $this->createForm('AdminBundle\Form\\'.$this->NameModel.'Type', $entity, array(
            'action' => $this->generateUrl('zerobundle_admin_'.strtolower($this->NameModel)),
        ));
        $editForm->add('submit', SubmitType::class, array('label' => 'button_edit_msg_1'));

        foreach ($this->Collections as $padre => $hijo) {
            $this->OriginalCollections[$padre] = new ArrayCollection();

            eval('$collectionCurrent = $entity->get'.$hijo.'();');

            foreach ($collectionCurrent as $item) {
                $this->OriginalCollections[$padre]->add($item);
            }
        }

        $editForm->handleRequest($request);
        $this->CollectionZero($entity);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            $request->getSession()
                ->getFlashBag()
                ->add('success', 'Se ha guardado con éxito!')
            ;

            $return = ($request->query->get('ajax') == 'true') ? array('ajax'=>'true'):array();

            $url = 'zerobundle_admin_'.strtolower($this->NameModel);

            return $this->redirectToRoute($url, $return);
        }

        return array(
            'entity' => $entity,
            'form' => $editForm->createView(),
        );
    }

    /**
     * Lists all entities.
     */
    public function listadoAction($orderby = '', $mode = 'DESC')
    {
        $em = $this->getDoctrine()->getManager();

        if ($orderby == '') {
            $entities = $em->getRepository('AdminBundle:'.$this->NameModel)->findAll();
        }else{
            $entities = $em->getRepository('AdminBundle:'.$this->NameModel)->findBy(
                array(),
                array($orderby => $mode)
            );
        }

        return array(
            'entities' => $entities,
        );
    }

    /**
     * Creates a new entity.
     */
    public function agregarAction(Request $request)
    {
        $entity = $this->ClassModel;
        $form = $this->createForm('AdminBundle\Form\\'.$this->NameModel.'Type', $entity, array(
            'action' => $this->generateUrl('zerobundle_admin_'.strtolower($this->NameModel).'_new'),
        ));
        $form->add('submit', SubmitType::class, array('label' => 'button_new_msg_1'));
        $form->add('submit2', SubmitType::class, array('label' => 'button_new_msg_2'));
        $form->add('submit3', SubmitType::class, array('label' => 'button_new_msg_3'));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            $request->getSession()
                ->getFlashBag()
                ->add('success', 'Se ha guardado con éxito!')
            ;

            $return = ($request->query->get('ajax') == 'true') ? array('ajax'=>'true'):array();

            $url = 'zerobundle_admin_'.strtolower($this->NameModel);

            if ($form->get('submit2')->isClicked())
            {
                $url = 'zerobundle_admin_'.strtolower($this->NameModel).'_edit';
                $return['id'] = $entity->getId();
            }elseif ($form->get('submit3')->isClicked()) {
                $url = 'zerobundle_admin_'.strtolower($this->NameModel).'_new';
            }

            return $this->redirectToRoute($url, $return);
        }

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Displays a form to edit an existing entity.
     */
    public function editarAction(Request $request, $entity)
    {
        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createForm('AdminBundle\Form\\'.$this->NameModel.'Type', $entity, array(
            'action' => $this->generateUrl('zerobundle_admin_'.strtolower($this->NameModel).'_edit', array('id' => $entity->getId())),
        ));
        $editForm->add('submit', SubmitType::class, array('label' => 'button_edit_msg_1'));
        $editForm->add('submit2', SubmitType::class, array('label' => 'button_edit_msg_2'));

        foreach ($this->Collections as $padre => $hijo) {
            $this->OriginalCollections[$padre] = new ArrayCollection();

            eval('$collectionCurrent = $entity->get'.$hijo.'();');

            foreach ($collectionCurrent as $item) {
                $this->OriginalCollections[$padre]->add($item);
            }
        }

        $editForm->handleRequest($request);
        $this->CollectionZero($entity);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->getDoctrine()->getManager();

            $em->persist($entity);
            $em->flush();

            $request->getSession()
                ->getFlashBag()
                ->add('success', 'Se ha guardado con éxito!')
            ;

            $return = ($request->query->get('ajax') == 'true') ? array('ajax'=>'true'):array();

            $url = 'zerobundle_admin_'.strtolower($this->NameModel);

            if ($editForm->get('submit2')->isClicked())
            {
                $url = 'zerobundle_admin_'.strtolower($this->NameModel).'_edit';
                $return['id'] = $entity->getId();
            }

            return $this->redirectToRoute($url, $return);
        }

        return array(
            'entity' => $entity,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    public function CollectionZero($entity){

        foreach ($this->OriginalCollections as $padre => $original) {
            eval('$collectionCurrent = $entity->get'.$this->Collections[$padre].'();');
            foreach ($collectionCurrent as $key => $value) {
                if (!$value->getCreated()) {
                    $value->setCreated( new \DateTime() );
                    $value->setCreatedUser( $this->getUser()->getId() );
                }
                $value->setModified( new \DateTime() );
                $value->setModifiedUser( $this->getUser()->getId() );
            }
            if ( count($original) > 0 ) {
                $em = $this->getDoctrine()->getManager();
                foreach ($original as $item) {
                    if (false === $collectionCurrent->contains($item)) {
                        eval('$item->set'.$padre.'(null);');
                        $em->remove($item);
                    }
                }
            }
        }
    }

    /**
     * Deletes a entity.
     */
    public function eliminarAction(Request $request, $entity)
    {
        $form = $this->createDeleteForm($entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($entity);
            $em->flush();
        }

        $return = ($request->query->get('ajax') == 'true') ? array('ajax'=>'true'):array();
        return $this->redirectToRoute('zerobundle_admin_'.strtolower($this->NameModel), $return);
    }

    /**
     * Creates a form to delete a entity.
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('zerobundle_admin_'.strtolower($this->NameModel).'_delete', array('id' => $entity->getId())))
            ->add('submit', SubmitType::class, array('label' => 'button_delete_msg'))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
