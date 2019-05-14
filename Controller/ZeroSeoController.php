<?php

namespace Core\ZeroBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

use Core\ZeroBundle\Entity\ZeroSeo;
use Core\ZeroBundle\Form\ZeroSeoType;

/**
 * @Route("/admin/ZeroSeo")
 */
class ZeroSeoController extends Controller
{

    /**
     * Lists all ZeroSeo entities.
     *
     * @Route("/", name="zerobundle_admin_zeroseo")
     * @Method("GET")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('CoreZeroBundle:ZeroSeo')->findAll();

        return array(
            'entities' => $entities,
        );
    }

    /**
     * Creates a new ZeroSeo entity.
     *
     * @Route("/new", name="zerobundle_admin_zeroseo_new")
     * @Method({"GET", "POST"})
     * @Template("CoreZeroBundle:ZeroSeo:form.html.twig")
     */
    public function newAction(Request $request)
    {
        $entity = new ZeroSeo();
        $form = $this->createForm('Core\ZeroBundle\Form\ZeroSeoType', $entity, array(
            'action' => $this->generateUrl('zerobundle_admin_zeroseo_new'),
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

            $url = 'zerobundle_admin_zeroseo';

            if ($form->get('submit2')->isClicked())
            {
                $url = 'zerobundle_admin_zeroseo_edit';
                $return['id'] = $entity->getId();
            }elseif ($form->get('submit3')->isClicked()) {
                $url = 'zerobundle_admin_zeroseo_new';
            }

            return $this->redirectToRoute($url, $return);
        }

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Displays a form to edit an existing ZeroSeo entity.
     *
     * @Route("/{id}/edit", name="zerobundle_admin_zeroseo_edit")
     * @Method({"GET", "POST"})
     * @Template("CoreZeroBundle:ZeroSeo:form.html.twig")
     */
    public function editAction(Request $request, ZeroSeo $entity)
    {
        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createForm('Core\ZeroBundle\Form\ZeroSeoType', $entity, array(
            'action' => $this->generateUrl('zerobundle_admin_zeroseo_edit', array('id' => $entity->getId())),
        ));
        $editForm->add('submit', SubmitType::class, array('label' => 'button_edit_msg_1'));
        $editForm->add('submit2', SubmitType::class, array('label' => 'button_edit_msg_2'));
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            $request->getSession()
                ->getFlashBag()
                ->add('success', 'Se ha guardado con éxito!')
            ;

            $return = ($request->query->get('ajax') == 'true') ? array('ajax'=>'true'):array();

            $url = 'zerobundle_admin_zeroseo';

            if ($editForm->get('submit2')->isClicked())
            {
                $url = 'zerobundle_admin_zeroseo_edit';
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

    /**
     * Deletes a ZeroSeo entity.
     *
     * @Route("/{id}", name="zerobundle_admin_zeroseo_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, ZeroSeo $entity)
    {
        $form = $this->createDeleteForm($entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($entity);
            $em->flush();
        }

        $return = ($request->query->get('ajax') == 'true') ? array('ajax'=>'true'):array();
        return $this->redirectToRoute('zerobundle_admin_zeroseo', $return);
    }

    /**
     * Creates a form to delete a ZeroSeo entity.
     *
     * @param ZeroSeo $blog The ZeroSeo entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(ZeroSeo $entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('zerobundle_admin_zeroseo_delete', array('id' => $entity->getId())))
            ->add('submit', SubmitType::class, array('label' => 'button_msg_delete'))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
