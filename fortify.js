// turn == p1 or p2
// buttonSign == "+" or "-" button
function fortifyTroops(turn, countryId, buttonSign) {
	console.log("Arrived to fortifyTroops!");
	if (turn == countries[countryId][1]) {
		if (buttonSign == "plus") { //plusSign
			if (turn == "player 1") {
				if (players['player1']['troops'] == 0) {
					alert("You are out of troops!");
					return;
				}
				countries[countryId][2]++;
				players['player1']['troops']--;
			}
			else { //player2's turn
				if (players['player2']['troops'] == 0) {
					alert("You are out of troops!");
					return;
				}
				countries[countryId][2]++;
				players['player2']['troops']--;
			}
		}
		else { // minusSign
			if (countries[countryId][2] == 1) {
				alert("You need at least one troop to defend your territory!");
				return;
			}
			if (turn == "player1") {
				players['player1']['troops']++;
			}
			else { //player2's turn
				players['player2']['troops']++;
			}
			countries[countryId][2]--;
		}	
		updateText(countryId);
	}
	else alert("That's not your territory!");
}

function startMovePhase(){
	unLightAttackable();
    phase="move";
    $(".troopBtn").show();
    var name = "Player 1";
    if(turn=="player2")
        name = "Player 2";
    $('#roundInfo').text("Move Phase for "+name);
    setMoveListeners();
}
