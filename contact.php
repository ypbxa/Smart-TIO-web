<?php $_POST["introducir_nombre"]; 
$_POST["introducir_email"]; 
 $_POST["repeat_email"];
 $_POST["introducir_telefono"]; 
 $name= $_POST["introducir_website"];
$_POST["introducir_asunto"]; 
  $_POST["introducir_mensaje"]; 
 $formcontent="From: $name \n Message: $message";
$recipient = "info@ayeconomics.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>

