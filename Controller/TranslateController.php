<?php

namespace Core\ZeroBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Core\ZeroBundle\Entity\Translate;
use Core\ZeroBundle\Form\TranslateType;

/**
 * @Route("/admin/Translate")
 */
class TranslateController extends Controller
{

    /**
     * Lists all Translate entities.
     *
     * @Route("/", name="zerobundle_admin_translate")
     * @Method("GET")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('CoreZeroBundle:Translate')->findAll();

        return array(
            'entities' => $entities,
        );
    }

    /**
     * Displays a form to edit an existing Blog entity.
     *
     * @Route("/{id}/edit", name="zerobundle_admin_translate_edit")
     * @Method({"GET", "POST"})
     * @Template("CoreZeroBundle:Translate:form.html.twig")
     */
    public function editAction(Request $request, Translate $entity)
    {
        $editForm = $this->createForm('Core\ZeroBundle\Form\TranslateType', $entity, array(
            'action' => $this->generateUrl('zerobundle_admin_translate_edit', array('id' => $entity->getId())),
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

            $url = 'zerobundle_admin_translate';

            if ($editForm->get('submit2')->isClicked())
            {
                $url = 'zerobundle_admin_translate_edit';
                $return['id'] = $entity->getId();
            }

            return $this->redirectToRoute($url, $return);
        }

        return array(
            'entity' => $entity,
            'form' => $editForm->createView(),
        );
    }
}
