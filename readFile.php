<?php
session_start();
function readContents(){
    $file = fopen("uploads/test.txt", 'r');
    $contents = array();
    while (!feof($file))  //feof equivalent to C++ fin.eof()
    {
        $line = fgets($file);
        array_push($contents, $line);
    }
    fclose($file);
    
    $_SESSION["head"] = $contents[0];
    $_SESSION["lArm"] = $contents[1];
    $_SESSION["body"] = $contents[2];
    $_SESSION["rArm"] = $contents[3];
    $_SESSION["legs"] = $contents[4];
}   
?>