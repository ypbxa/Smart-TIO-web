<?php echo $_POST["introducir_nombre"]; ?>
<?php echo $_POST["introducir_email"]; ?>
<?php echo $_POST["repeat_email"]; ?>
<?php echo $_POST["introducir_telefono"]; ?>
<?php echo $name= $_POST["introducir_website"]; ?>
<?php echo $_POST["introducir_asunto"]; ?>
<?php echo $_POST["introducir_mensaje"]; ?>
<?php $formcontent="From: $name \n Message: $message";
$recipient = "info@ayeconomics.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>

