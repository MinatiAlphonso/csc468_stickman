<?php
require_once 'readFile.php';
if(isset($_GET['read'])){
    readContents();
}
header('Location: main.php?flag=1');
exit();
?>