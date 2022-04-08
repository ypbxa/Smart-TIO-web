
<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$to = "info@ayeconomics.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
$send=mail($to, $subject, $formcontent, $mailheader) 
if ($send) {
    echo 'Thank You!';
} else{
    echo 'error';
}
}
?>
