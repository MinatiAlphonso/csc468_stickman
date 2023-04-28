<?php
session_start();
if(!isset($_GET['flag'])){
    $_SESSION["head"] = "stickman-head_Default.png";
    $_SESSION["lArm"] = "stickman-lArm_Default.png";
    $_SESSION["body"] = "stickman-body_Default.png";
    $_SESSION["rArm"] = "stickman-rArm_Default.png";
    $_SESSION["legs"] = "stickman-legs_Default.png";
}

?>
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="utf-8">
        <title>Main Application Page</title>
        <link rel="stylesheet" type="text/css" href="mainStyle.css">
        <script src="mainScript.js"></script>
    </head>
    <body>
        <header>
            Stickman
        </header>
        <nav class="navItem">
            <a href="main.html">Main</a> |
            <a href="file.html">File</a> |
            <a href="help.html">Help</a>
        </nav>
        <div class="canvas" id="result">
            <div>
                <img src="<?php echo $_SESSION['head']; ?>" id="head">
            </div>
            <div>
                <img src="<?php echo $_SESSION['lArm']; ?>" id="lArm">
                <img src="<?php echo $_SESSION['body']; ?>" id="body">
                <img src="<?php echo $_SESSION['rArm']; ?>" id="rArm">
            </div>
            <img src="<?php echo $_SESSION['legs']; ?>" id="legs">
        </div>
        <table>
            <tr>
                <th>Style</th>
                <th>Head</th>
                <th>Left-Arm</th>
                <th>Body</th>
                <th>Right-Arm</th>
                <th>Legs</th>
                <th></th>
            </tr>
            <tr>
                <td><button type="button" id="styleDefault">Default</button></td>
                <td><button type="button" id="headDefault">Default</button></td>
                <td><button type="button" id="lArmDefault">Default</button></td>
                <td><button type="button" id="bodyDefault">Default</button></td>
                <td><button type="button" id="rArmDefault">Default</button></td>
                <td><button type="button" id="legsDefault">Default</button></td>
                <td><button type="button" id="undo">Undo</button></td>
            </tr>
            <tr>
                <td><button type="button" id="stylePirate">Pirate</button></td>
                <td><button type="button" id="headPirate">Hat</button></td>
                <td><button type="button" id="lArmPirate">Hook</button></td>
                <td><button type="button" id="bodyPirate">Belt</button></td>
                <td><button type="button" id="rArmPirate">Sword</button></td>
                <td><button type="button" id="legsPirate">Boots</button></td>
                <td><button type="button" id="redo">Redo</button></td>
            </tr>
            <tr>
                <td><button type="button" id="styleLeprechaun">Leprechaun</button></td>
                <td><button type="button" id="headLeprechaun">Beard</button></td>
                <td><button type="button" id="lArmLeprechaun">Gold</button></td>
                <td><button type="button" id="bodyLeprechaun">Green Shirt</button></td>
                <td><button type="button" id="rArmLeprechaun">Shamrock</button></td>
                <td><button type="button" id="legsLeprechaun">Shoes</button></td>
                <td><button onClick="writeFile()">Save</button></td>
            </tr>
        </table>   
    </body>
</html>