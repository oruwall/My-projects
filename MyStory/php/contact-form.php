<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'iulainpreasca@gmail.com';

    $email_subject = 'Zdarova nahui';

    $email_body = "Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";
    
    $to = "preascaiulian@gmail.com";

    $headers = "From: $email__from \r\n";

    $headers .= "Replay-to: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

?>