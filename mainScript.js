//trigger writing stuff to the file, and stay on the same page
function writeFile() {
    var bp = [];
    bp[0] = document.getElementById("head").src;
    bp[1] = document.getElementById("lArm").src;
    bp[2] = document.getElementById("body").src;
    bp[3] = document.getElementById("rArm").src;
    bp[4] = document.getElementById("legs").src;
    window.location.href = "write.php?write=1&b1="+ bp[0]+"&b2="+bp[1]
    +"&b3="+bp[2]+"&b4="+bp[3]+"&b5="+bp[4];
}

//helper class to handle the current location in the undo/redo list
//GRADING: MANAGE
function History() {
	var UndoRedos =[];
	var index = 0
	
	//new UndoRedo, remove everything after the current UndoRedo index
	//and append the new function
	this.executeAction = function(cmd){
		UndoRedos.length = index; //trims length from 0 to index
        //GRADING: ACTION
		UndoRedos.push(cmd);
		index = UndoRedos.length
		
		//run the UndoRedo and update
		cmd.exec();
		updateUI();
	}
	
	
	//undo called. Call the undo functin on the current UndoRedo and move back one
	this.undoCmd = function(){
		if(index > 0)
		{
			var cmd = UndoRedos[index-1];
			cmd.undo();
			index= index - 1;
			updateUI();
        }
	}
	
	//redo called. Call the execution function on the current UndoRedo and move forward one
	this.redoCmd = function(){
		if(index < UndoRedos.length)
		{
			var cmd = UndoRedos[index];
			cmd.exec();
			index = index + 1;
			updateUI();
		}
	}
	
	
	//is undo available
	this.canUndo = function(){
		return index != 0;
	}
	
	//is redo available
	this.canRedo = function(){
		return index < UndoRedos.length;
	}
}

//concrete UndoRedo class. Since we have undo and redo, we much have 
//a "action" (exec) function and an undo
//ideally, this should forward these calls onto the class that does the task
//GRADING: COMMAND
function UndoRedo(bp, img){
    this.bodyPart = [];
    this.currentImg = [];

    var i;
    for(i = 0; i < bp.length; i++){
        this.bodyPart[i] = bp[i];
        this.currentImg[i] = document.getElementById(bp[i]).src;
    }
	//appends the given letter to our result
	this.exec = function(){
        for(i = 0; i < bp.length; i++){
            var stickman = document.getElementById(this.bodyPart[i]);
            stickman.src = img[i];
        }
	}
	
	//removes a letter
	this.undo = function(){
        for(i = 0; i < bp.length; i++){
            var stickman = document.getElementById(this.bodyPart[i]);
            stickman.src = this.currentImg[i];
        }
	}
}

//map UndoRedos onto buttons
function letterEvent(event) {
	if( event.target.id == "headDefault" ){
        var bodyPart = ["head"];
        var img = ["stickman-head_Default.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
	else if( event.target.id == "headPirate" ){
        var bodyPart = ["head"];
        var img = ["stickman-head_Pirate-hat.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
	else if( event.target.id == "headLeprechaun" ){
        var bodyPart = ["head"];
        var img = ["stickman-head_Leprechaun-beard.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
    
    else if( event.target.id == "lArmDefault" ){
        var bodyPart = ["lArm"];
        var img = ["stickman-lArm_Default.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
	else if( event.target.id == "lArmPirate" ){
        var bodyPart = ["lArm"];
        var img = ["stickman-lArm_Pirate-hook.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
	else if( event.target.id == "lArmLeprechaun" ){
        var bodyPart = ["lArm"];
        var img = ["stickman-lArm_Leprechaun-gold.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
    
    else if( event.target.id == "bodyDefault" ){
        var bodyPart = ["body"];
        var img = ["stickman-body_Default.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
	else if( event.target.id == "bodyPirate" ){
        var bodyPart = ["body"];
        var img = ["stickman-body_Pirate-belt.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
	else if( event.target.id == "bodyLeprechaun" ){
        var bodyPart = ["body"];
        var img = ["stickman-body_Leprechaun-greenShirt.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }

    else if( event.target.id == "rArmDefault" ){
        var bodyPart = ["rArm"];
        var img = ["stickman-rArm_Default.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
	else if( event.target.id == "rArmPirate" ){
        var bodyPart = ["rArm"];
        var img = ["stickman-rArm_Pirate-sword.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
	else if( event.target.id == "rArmLeprechaun" ){
        var bodyPart = ["rArm"];
        var img = ["stickman-rArm_Leprechaun-shamrock.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
    
    else if( event.target.id == "legsDefault" ){
        var bodyPart = ["legs"];
        var img = ["stickman-legs_Default.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }	
	else if( event.target.id == "legsPirate" ){
        var bodyPart = ["legs"];
        var img = ["stickman-legs_Pirate-boots.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
	else if( event.target.id == "legsLeprechaun" ){
        var bodyPart = ["legs"];
        var img = ["stickman-legs_Leprechaun-shoe.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }

    else if( event.target.id == "styleDefault" ){
        var bodyPart = ["head","lArm","body","rArm","legs"];
        var img = ["stickman-head_Default.png","stickman-lArm_Default.png","stickman-body_Default.png","stickman-rArm_Default.png","stickman-legs_Default.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }	
	else if( event.target.id == "stylePirate" ){
        var bodyPart = ["head","lArm","body","rArm","legs"];
        var img = ["stickman-head_Pirate-hat.png","stickman-lArm_Pirate-hook.png","stickman-body_Pirate-belt.png","stickman-rArm_Pirate-sword.png","stickman-legs_Pirate-boots.png"]
		hist.executeAction(new UndoRedo(bodyPart,img))
    }
	else if( event.target.id == "styleLeprechaun" ){
        var bodyPart = ["head","lArm","body","rArm","legs"];
        var img = ["stickman-head_Leprechaun-beard.png","stickman-lArm_Leprechaun-gold.png","stickman-body_Leprechaun-greenShirt.png","stickman-rArm_Leprechaun-shamrock.png","stickman-legs_Leprechaun-shoe.png"];
        hist.executeAction(new UndoRedo(bodyPart,img))
    }
	updateUI();
     
}

 //toy version of the observer pattern
function updateUI()
{
  	document.getElementById("undo").disabled = !hist.canUndo();	   
	document.getElementById("redo").disabled = !hist.canRedo();
}

//our undo/redo helper class
var hist = new History();

window.onload = function() {

    document.getElementById("styleDefault").onclick = letterEvent;
    document.getElementById("stylePirate").onclick = letterEvent;
    document.getElementById("styleLeprechaun").onclick = letterEvent;

    document.getElementById("headDefault").onclick = letterEvent;
    document.getElementById("headPirate").onclick = letterEvent;
    document.getElementById("headLeprechaun").onclick = letterEvent;

    document.getElementById("lArmDefault").onclick = letterEvent;
    document.getElementById("lArmPirate").onclick = letterEvent;
    document.getElementById("lArmLeprechaun").onclick = letterEvent;

    document.getElementById("bodyDefault").onclick = letterEvent;
    document.getElementById("bodyPirate").onclick = letterEvent;
    document.getElementById("bodyLeprechaun").onclick = letterEvent;

    document.getElementById("rArmDefault").onclick = letterEvent;
    document.getElementById("rArmPirate").onclick = letterEvent;
    document.getElementById("rArmLeprechaun").onclick = letterEvent;

    document.getElementById("legsDefault").onclick = letterEvent;
    document.getElementById("legsPirate").onclick = letterEvent;
    document.getElementById("legsLeprechaun").onclick = letterEvent;

    document.getElementById("undo").onclick = hist.undoCmd;
	document.getElementById("redo").onclick = hist.redoCmd;

    document.body.onkeydown = function(e) {
        if(e.altKey && e.which == 81){
            document.getElementById("styleDefault").click();
        }
        else if(e.altKey && e.which == 65){
            document.getElementById("stylePirate").click();
        }
        else if(e.altKey && e.which == 90){
            document.getElementById("styleLeprechaun").click();
        }
        else if(e.altKey && e.which == 87){
            document.getElementById("headDefault").click();
        }
        else if(e.altKey && e.which == 83){
            document.getElementById("headPirate").click();
        }
        else if(e.altKey && e.which == 88){
            document.getElementById("headLeprechaun").click();
        } 
        else if(e.altKey && e.which == 69){
            document.getElementById("lArmDefault").click();
        }
        else if(e.altKey && e.which == 68){
            document.getElementById("lArmPirate").click();
        }
        else if(e.altKey && e.which == 67){
            document.getElementById("lArmLeprechaun").click();
        } 
        else if(e.altKey && e.which == 82){
            document.getElementById("bodyDefault").click();
        }
        else if(e.altKey && e.which == 70){
            document.getElementById("bodyPirate").click();
        }
        else if(e.altKey && e.which == 86){
            document.getElementById("bodyLeprechaun").click();
        }
        else if(e.altKey && e.which == 84){
            document.getElementById("rArmDefault").click();
        }
        else if(e.altKey && e.which == 71){
            document.getElementById("rArmPirate").click();
        }
        else if(e.altKey && e.which == 66){
            document.getElementById("rArmLeprechaun").click();
        }
        else if(e.altKey && e.which == 89){
            document.getElementById("legsDefault").click();
        }
        else if(e.altKey && e.which ==72){
            document.getElementById("legsPirate").click();
        }
        else if(e.altKey && e.which == 78){
            document.getElementById("legsLeprechaun").click();
        }   
    }
	
	updateUI();
}