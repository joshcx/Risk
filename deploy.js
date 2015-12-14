var firstTurn = true;

function startReinforcePhase(){
	$('#clicked').removeAttr('d');
    $('#hovering').removeAttr('d');
    var name = "Player 1";
    if(turn=="player2")
        name = "Player 2";
    $('#roundInfo').text("Reinforce Phase for "+name);
    $("#troopInfo").html("Troops remaining: <span id='numTroops'>"+ players[turn]["troops"] + "</span>");
}

$('#playButton').click(function(evt){
	$('#btn-container').hide();
    $('#gameInterface').show();
	$(".pText").show();
	$(".icon").show();
	init();
    turn = "player1";

    $('#topBtn').click(function(evt){
        reinforceTroops(turn, clicked);
        $('#numTroops').html(players[turn]["troops"]);
    });

    $('#botBtn').click(function(evt){
       fortifyTroops(turn, clicked, "minus"); 
        $('#numTroops').html(players[turn]["troops"]);
    });

    startReinforcePhase();    
});

$('#nextBtn').click(function(evt){
    var name = "Player 1";
    if(turn=="player2")
        name = "Player 2";

    if(phase=="start"){
        if(players[turn]["troops"]>0)
            alert('Must place all troops first');
        else if(turn=="player2"){
            turn="player1";
            startAttackPhase();
        }
        else{
            turn="player2";
            $('#numTroops').html(players[turn]["troops"]);
            $('#roundInfo').html("Reinforce Phase for Player 2");
        }
    }
    else if(phase=="reinforce"){
        if(players[turn]["troops"]>0)
            alert('Must place all troops first');
        else{
            startAttackPhase();
        }
        
    }
    else if(phase=="attack"){
        startMovePhase();
    }
    else if(phase=="move"){

        if(turn=="player1")
            turn="player2"
        else
            turn="player1"
		
		//stops player 2 from getting extra troops on first round
		if(!firstTurn){
			players[turn]["troops"] = 10;
			phase="reinforce";
			startReinforcePhase();
		}
		else{
			startAttackPhase();
			firstTurn = false;
		}
    }
});
