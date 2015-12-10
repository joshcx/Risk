$('#playButton').click(function(evt){
	$('#btn-container').hide();
    $('#gameInterface').show();
    $('#roundInfo').text("Reinforce Phase for Player 1");
	$(".pText").show();
	$(".icon").show();
	init();
    turn = "player1";
    $("#country2").attr("id", "troopInfo");
    console.log(players);
    $("#troopInfo").html("Troops remaining: <span id='numTroops'>"+ players["player1"]["troops"] + "</span>");
});

$('#topBtn').click(function(evt){
    reinforceTroops(turn, clicked);
    $('#numTroops').html(players[turn]["troops"]);
});

$('#botBtn').click(function(evt){
   fortifyTroops(turn, clicked, "minus"); 
    $('#numTroops').html(players[turn]["troops"]);
});

$('#nextBtn').click(function(evt){
    if(phase=="reinforce"){
        if(players[turn]["troops"]>0)
            alert('Must place all troops first');
        else if(turn=="player2"){
            turn="player1";
            startAttackPhase();
        }
        else{
            turn="player2";
            $('#roundInfo').html("Reinforce Phase for Player 2");
        }
    }
    if(phase=="attack"){
        if(player=="player1"){
            player="player2";
            startAttackPhase();
        }
        else
            phase="fortify";
            player="player1";
    }
});
