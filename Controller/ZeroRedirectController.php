<?php

namespace Core\ZeroBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

use Core\ZeroBundle\Entity\ZeroRedirect;
use Core\ZeroBundle\Form\ZeroRedirectType;

/**
 * @Route("/ZeroRedirect")
 */
class ZeroRedirectController extends Controller
{

    /**
     * Lists all ZeroRedirect entities.
     *
     * @Route("/", name="zerobundle_admin_zeroredirect")
     * @Method("GET")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('CoreZeroBundle:ZeroRedirect')->findAll();

        return array(
            'entities' => $entities,
        );
    }

    /**
     * Creates a new ZeroRedirect entity.
     *
     * @Route("/new", name="zerobundle_admin_zeroredirect_new")
     * @Method({"GET", "POST"})
     * @Template("CoreZeroBundle:ZeroRedirect:form.html.twig")
     */
    public function newAction(Request $request)
    {
        $entity = new ZeroRedirect();
        $form = $this->createForm('zenstruck_redirect', $entity, array(
            'action' => $this->generateUrl('zerobundle_admin_zeroredirect_new'),
        ));
        $form->add('permanent');
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

            $url = 'zerobundle_admin_zeroredirect';

            if ($form->get('submit2')->isClicked())
            {
                $url = 'zerobundle_admin_zeroredirect_edit';
                $return['id'] = $entity->getId();
            }elseif ($form->get('submit3')->isClicked()) {
                $url = 'zerobundle_admin_zeroredirect_new';
            }

            return $this->redirectToRoute($url, $return);
        }

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Displays a form to edit an existing ZeroRedirect entity.
     *
     * @Route("/{id}/edit", name="zerobundle_admin_zeroredirect_edit")
     * @Method({"GET", "POST"})
     * @Template("CoreZeroBundle:ZeroRedirect:form.html.twig")
     */
    public function editAction(Request $request, ZeroRedirect $entity)
    {
        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createForm('zenstruck_redirect', $entity, array(
            'action' => $this->generateUrl('zerobundle_admin_zeroredirect_edit', array('id' => $entity->getId())),
            'disable_source' => true,
        ));
        $editForm->add('permanent');
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

            $url = 'zerobundle_admin_zeroredirect';

            if ($editForm->get('submit2')->isClicked())
            {
                $url = 'zerobundle_admin_zeroredirect_edit';
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
     * Deletes a ZeroRedirect entity.
     *
     * @Route("/{id}", name="zerobundle_admin_zeroredirect_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, ZeroRedirect $entity)
    {
        $form = $this->createDeleteForm($entity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($entity);
            $em->flush();
        }

        $return = ($request->query->get('ajax') == 'true') ? array('ajax'=>'true'):array();
        return $this->redirectToRoute('zerobundle_admin_zeroredirect', $return);
    }

    /**
     * Creates a form to delete a ZeroRedirect entity.
     *
     * @param ZeroRedirect $blog The ZeroRedirect entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(ZeroRedirect $entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('zerobundle_admin_zeroredirect_delete', array('id' => $entity->getId())))
            ->add('submit', SubmitType::class, array('label' => 'button_delete_msg'))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
