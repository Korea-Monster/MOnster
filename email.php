<?php

if (isset($_POST['sunmit'])) {

  $name = $_POST['name'];
  $mailFrom = $_POST['mail'];
  $title = $_POST['title'];
  $messag e= $_POST['meggage'];

  $mailTo = "ghewls54@gmail.com";
  $headers = "From:".$mailFrom;
  $txt = "You have received an e-mail from".$name."./n/n".$message;

  mail($mailTo, $txt, $headers ,$title);
  header("LocationL: index_emali.php?mailsned");
}
?>
