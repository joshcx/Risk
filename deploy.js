var gameplay = {

}
$('#playButton').click(function(){
	$('.territory').show();
	$('.message').show();
	$('.icon').show();
	$('.player').show();
	$('#player1').css('color', 'blue');
	gameplay.player = "player1";
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
	gameplay.deployed = $("#"+gameplay.player+" span");
});
$('#plusButton').click(function(){
	var tmp = gameplay.clicked.text();
	tmp++;
	gameplay.clicked.text(tmp);

	tmp = parseInt(gameplay.deployed.text());
	tmp--;
	gameplay.deployed.text(tmp);
});
$('#minusButton').click(function(){
	var tmp = gameplay.clicked.text();
	tmp--;
	gameplay.clicked.text(tmp);

	tmp = parseInt(gameplay.deployed.text());
	tmp++;
	gameplay.deployed.text(tmp);
});