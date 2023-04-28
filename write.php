<?php
session_start();
if(isset($_GET['write']))
{
    $target_dir = "uploads/";
    $target_file = $target_dir . "test.txt";

    $file = fopen( $target_file, 'w');
    fwrite($file,$_GET['b1']);
    fwrite($file, "\n");
    fwrite($file,$_GET['b2']);
    fwrite($file, "\n");
    fwrite($file,$_GET['b3']);
    fwrite($file, "\n");
    fwrite($file,$_GET['b4']);
    fwrite($file, "\n");
    fwrite($file,$_GET['b5']);
    fwrite($file, "\n");
    fclose($file);
    $_SESSION["head"] = $_GET['b1'];
    $_SESSION["lArm"] = $_GET['b2'];
    $_SESSION["body"] = $_GET['b3'];
    $_SESSION["rArm"] = $_GET['b4'];
    $_SESSION["legs"] = $_GET['b5'];
}

header("Location: main.php?flag=1");
exit();
?>