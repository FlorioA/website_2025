<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

final class MainController extends AbstractController
{
    #[Route('/', name: 'app_main')]
    public function index(Request $request, MailerInterface $mailer): Response
    {
        // $form = $this->createFormBuilder()
        //     ->add('name', TextType::class)
        //     ->add('email', EmailType::class)
        //     ->add('content', TextareaType::class)
        //     ->getForm();
        

        // $form->handleRequest($request);
        // if ($form->isSubmitted() && $form->isValid()) {
        //     $messageForm = $form->getData();

        //     $email = (new Email())
        //     ->from($messageForm['email'])
        //     ->to('adrien.florio@gmail.com')
        //     ->subject('Un message depuis le site de la part de ' . $messageForm['name'])
        //     ->text($messageForm['content']);

        //     $mailer->send($email);

        //     $this->addFlash('success', "Message reçu, merci !");
        //     return $this->redirectToRoute('app_main');
        // }

        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
            // 'form' => $form->createView(),
        ]);
    }


    #[Route('/download_cv', name: 'download_cv')]
    public function download(): BinaryFileResponse
    {
        $projectDir = $this->getParameter('kernel.project_dir');
        
        $file = new File($projectDir . '/assets/data/web_fev25.pdf');
        
        return $this->file($file, 'adrienflorio_cv.pdf', ResponseHeaderBag::DISPOSITION_INLINE);
    }
}
