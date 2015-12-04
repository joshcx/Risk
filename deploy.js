var prevState;
var gameplay = {
	player : "player1",
	clicked: "",
	deployable: "",
	totalDeployable: 20
}
$('#playButton').click(function(){
	$('.territory').css('display','block');
	$('.message').show();
	$('.icon').show();
	$('.player').show();
	$('#playButton').off();

	$('#player1').css('color', 'blue');
});
$('.territory').click(function(){
	if(gameplay.player == "player1"){
		if($(this).hasClass('p2')){
			alert("You clicked on the enemy territory!");
			return;
		}
	}
	else if(gameplay.player == "player2"){
		if($(this).hasClass('p1')){
			alert("You clicked on the enemy territory!");
			return;
		}
	}
	gameplay.clicked = $("#"+this.id+" p");
	gameplay.deployable = $("#"+gameplay.player+" span");
});
$('#plusButton').click(function(){
	var anArmy = gameplay.clicked.text();
	var totalArmy = parseInt(gameplay.deployable.text());
	if(totalArmy > 0){
		anArmy++;
		gameplay.clicked.text(anArmy);
	
		totalArmy--;
		gameplay.deployable.text(totalArmy);	
	}
	else{
		alert("You have deployed all the troops!");
	}
	
});
$('#minusButton').click(function(){
	var anArmy = gameplay.clicked.text();
	var totalArmy = parseInt(gameplay.deployable.text());
	if(totalArmy < gameplay.totalDeployable){
		anArmy--;
		gameplay.clicked.text(anArmy);
	
		totalArmy++;
		gameplay.deployable.text(totalArmy);	
	}
	else{
		alert("You don't have any more troops to take out!");	
	}
});
$('#player1').click(function(){
	gameplay.player = "player1";
	gameplay.clicked = null;
	gameplay.deployable = null;
	$('#player1').css('color', 'blue');
	$('#player2').css('color', 'black');
});
$('#player2').click(function(){
	gameplay.player = "player2";
	gameplay.clicked = null;
	gameplay.deployable = null;
	$('#player2').css('color', 'red');
	$('#player1').css('color', 'black');
});
$('#nextButton').click(function(){
	var p1Deployable = parseInt($('#player1 span').text());
	var p2Deployable = parseInt($('#player2 span').text());
	if(p1Deployable > 0 && p2Deployable > 0){
		alert("You didn't deploy all the troops yet!");
		return;
	}
	prevState = $('body').clone();
	battleSetup();
});