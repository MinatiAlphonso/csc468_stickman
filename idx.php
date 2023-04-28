<?php
require_once 'upload.php';
//determine what to do based on GET variables
if (isset($_GET['up'])) {
    upload();
}

header("Location: main.php");
exit();
?>
