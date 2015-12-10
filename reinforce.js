// keep calling this function until player runs out of troops
function reinforceTroops (turn, countryId) { 
	console.log("Arrived to reinforceTroops!");
	console.log(players['player1']['troops']);
	if (turn == countries[countryId][1]) {
		// if troops != 0
		if (turn == "player1") {
			if (players['player1']['troops'] == 0) {
				alert("You're out of troops!")
				return;
			}
			players['player1']['troops']--;
			countries[countryId][2]++;
			console.log("Remaining number of troops: " + players['player1']['troops'])
		}
		else {
			if (players['player2']['troops'] == 0) {
				alert("You're out of troops!")
				return;
			}
			players['player2']['troops']--;
			countries[countryId][2]++;
		}
		updateText(countryId);
	}
	else alert("That's not your territory!");
}