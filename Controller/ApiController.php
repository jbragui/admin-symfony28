<?php

namespace Core\ZeroBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Response;
use Core\ZeroBundle\Helper\Util;
use Core\ZeroBundle\Helper\Filemanager;


/**
* API controller.
*
* @Route("/admin/api")
*/

class ApiController extends Controller
{

    private static function msg($status, $msg) {
        return new JsonResponse(array(
            'status' => $status,
            'msg' => $msg
        ));
    }


    /**
     * @Route("/resource-js/", name="zerobundle_admin_api_main_js")
    */
    public function adminJsAction()
    {
        $params = array( 'test' => 'ok' );
        $rendered = $this->renderView( 'CoreZeroBundle:Api:admin.js.twig', $params );
        $response = new \Symfony\Component\HttpFoundation\Response( $rendered );
        $response->headers->set( 'Content-Type', 'text/javascript' );
        return $response;
    }

    /**
     * @Route("/browser/", name="zerobundle_admin_api_browser")
     * @Template()
    */
    public function browserAction()
    {
        return array();
    }

    /**
    * @Route("/borrar/", name="zerobundle_admin_api_browser_delete")
    * @Method("POST")
    */
    public function borrarfileAction()
    {
        $fs = new Filesystem();
        $directorio = realpath($this->get('kernel')->getRootDir().'/../web/uploads');

        $file = $this->get('request')->request->get('data');
        $file = str_replace('..', '', $file);
        $file = (substr($file,0,8)=='uploads/') ? str_replace('uploads/', '', $file):$file;

        if ($file != '') {
            $file_orig = $directorio.'/'.$file;
            if ( $fs->exists($file_orig) ) {
                $fs->remove($file_orig);
                return self::msg(True, 'Archivo / carpeta eliminado');
            }else{
                $archivos['status'] = false;
                return self::msg(False, 'Archivo / carpeta no existe');
            }
        }

        return self::msg(False, 'Acción denegada');
    }

    /**
    * @Route("/crear/carpeta/", name="zerobundle_admin_api_browser_create_folder")
    * @Method("POST")
    */
    public function crearcarpetaAction()
    {
        $fs = new Filesystem();
        $util = new Util();
        $directorio = $this->get('kernel')->getRootDir().'/../web/uploads/';

        $getfile = $this->get('request')->request->get('data');
        $getfile = str_replace('..', '', $getfile);
        $getfile = explode('/', $getfile);
        array_walk($getfile, function (&$v, $k) use ($util) { $v = $util->url_slug($v); });
        $file = implode('/', $getfile);
        $file = (substr($file,0,8)=='uploads/') ? str_replace('uploads/', '', $file):$file;

        if ($file != '') {
            $target = $directorio.$file;

            if ($fs->exists($target))
                return self::msg(False, "Carpeta '$file' ya existe");

            $fs->mkdir($target, 0755);

            return self::msg(True, "Carpeta '$file' ha sido creado");
        }

        return self::msg(False, 'Acción denegada');
    }

    /**
    * @Route("/subir/", name="zerobundle_admin_api_browser_upload")
    * @Method("POST")
    */
    public function subirAction()
    {
        $fs = new Filesystem();
        $util = new Util();
        $request = $this->getRequest();

        $directorio = $this->get('request')->request->get('data');
        $directorio = str_replace('..', '', $directorio);
        $directorio = (substr($directorio,0,8)=='uploads/') ? substr($directorio, 8):$directorio;
        $directorio = ($directorio!='') ? 'uploads/'.$directorio:'uploads';
        $base = realpath($this->get('kernel')->getRootDir().'/../web/');
        $directorio = $base.'/'.$directorio;

        $file = $request->files->get('file');
        if ( in_array($_FILES['file']['type'], $util->ArchivosPermitidos()) ) {
            $extension = '.'.$file->getClientOriginalExtension();
            $name = str_replace($extension, '', $file->getClientOriginalName());
            $archivo = $util->url_slug($name).strtolower($extension);
            if ( $fs->exists($directorio.'/'.$archivo) ) {
                $archivo = $util->url_slug($name).'--'.date('Y-m-d--H-i-s').strtolower($extension);
            }
            $file->move($directorio, $archivo);
            return new response('ok');
        }else{
            return new response('Archivo no permitido ó corrupto - '.$_FILES['file']['type'], 403);
        }
        return new response();
    }

    /**
    * @Route("/filemanager/list/", name="zerobundle_admin_api_browser_list")
    * @Method("POST")
    */
    public function filemanagerListAction()
    {

        $fs = new Filesystem();
        $filemanager = new Filemanager();
        $util = new Util();
        $directorio = realpath($this->get('kernel')->getRootDir().'/../web/uploads');
        if ( !$fs->exists($directorio) ) $fs->mkdir($directorio);

        $path = $this->get('request')->request->get('data');
        $path = str_replace('..', '', $path);

        $files = array();
        $folders = array();
        $filemanager->list_dir($directorio, $path, $files, $folders);
        $files = array_merge($folders, $files);

        foreach ($files as $k => $v) {
            $i = $filemanager->get_file_info($v['path'], array(
                'name',
                'size',
                'date'
            ));

            if ($v['folder']) {
                $files[$k] = array (
                    'name' => $i['name'],
                    'medidas' => '',
                    'size' => '---',
                    'date' => date('Y-m-d H:i:s', $i['date']),
                    'folder' => True,
                    'link' => str_replace($directorio, '', $v['path'])
                );
            } else {
                $archivo = 'uploads'.str_replace($directorio, '', $v['path']);
                $ext = strtolower(pathinfo($archivo, PATHINFO_EXTENSION));
                if ($ext == 'gif' or $ext == 'png' or $ext == 'jpg' or $ext == 'jpeg') {
                    $thumbnail = $util->thumbnail($this->get('kernel')->getRootDir(),$archivo,50);
                }else{
                    $thumbnail = array(
                        'thumb' => $ext,
                        'medidas' => ''
                    );
                }

                $files[$k] = array(
                    'name' => $i['name'],
                    'medidas' => $thumbnail['medidas'],
                    'size' => $filemanager->human_filesize($i['size']),
                    'date' => date('Y-m-d H:i:s', $i['date']),
                    'folder' => False,
                    'thumb' => $thumbnail['thumb'],
                    'link' => $archivo
                );
            }
        }
        return new JsonResponse(array('status' => 'ok', 'files' => $files));
    }
}
