var borders = {
	'East Africa': [ 'South Africa' , 'Congo' , 'North Africa' , 'Egypt' , 'Middle East' , 'Madagascar' ], 
	'Egypt': [ 'East Africa' , 'North Africa' , 'Southern Europe' , 'Middle East' ],
	'North Africa': [ 'Egypt' , 'East Africa' , 'Congo' , 'Western Europe' , 'Southern Europe' , 'Brazil' ],
	'Congo': ['South Africa' , 'East Africa' , 'North Africa'  ],
	'South Africa': [ 'Congo' , 'East Africa' , 'Madagascar' ],
	'Madagascar': ['East Africa' , 'South Africa' ],
	'Argentina': ['Peru' , 'Brazil' ],
	'Brazil': ['Venezuela' , 'Peru' , 'Argentina' , 'North Africa' ],
	'Peru': ['Argentina' , 'Brazil' , 'Venezuela' ],
	'Venezuela': ['Peru' , 'Brazil' , 'Central America' ],
	'Central America': ['Venezuela' , 'Western United States' , 'Eastern United States' ],
	'Western United States': ['Central America' , 'Eastern United States' , 'Ontario' , 'Alberta' ],
	'Eastern United States': ['Central America' , 'Western United States' , 'Ontario' , 'Quebec' ],
	'Quebec': ['Eastern United States' , 'Ontario' , 'Greenland' ],
	'Ontario': ['Western United States' , 'Eastern United States' , 'Quebec' , 'Alberta' , 'Northwest Territory' , 'Greenland' ],
	'Alberta': ['Western United States' , 'Ontario' , 'Northwest Territory' , 'Alaska' ],
	'Alaska': ['Alberta' , 'Northwest Territory' , 'Kamchatka' ],
	'Northwest Territory': ['Alaska' , 'Alberta' , 'Ontario' , 'Greenland' ],
	'Greenland': ['Northwest Territory' , 'Ontario' , 'Quebec' , 'Iceland' ],
	'Iceland': ['Greenland' , 'Scandinavia' , 'Great Britain' ],
	'Scandinavia': ['Iceland' , 'Great Britain' , 'Northern Europe' , 'Ukraine' ],
	'Ukraine': ['Scandinavia' , 'Northern Europe' , 'Afghanistan' , 'Ural' , 'Middle East', 'Southern Europe' ],
	'Ural': ['Ukraine' , 'Afghanistan' , 'China' , 'Siberia' ],
	'Siberia': ['Ural' , 'China' , 'Mongolia' , 'Irkutsk' , 'Yakutsk' ],
	'Yakutsk': ['Siberia' , 'Irkutsk' , 'Kamchatka' ],
	'Irkutsk': ['Yakutsk' , 'Siberia' , 'Mongolia' , 'Kamchatka' ],
	'Kamchatka': ['Yakutsk' , 'Irkutsk' , 'Mongolia' , 'Japan' , 'Alaska' ],
	'Japan': ['Kamchatka' , 'Mongolia' ],
	'Mongolia': ['Japan' , 'Kamchatka' , 'Irkutsk' , 'Siberia' , 'China' ],
	'China': ['Mongolia' , 'Siberia' , 'Ural' , 'Afghanistan' , 'India' , 'Siam' ],
	'Afghanistan': ['Ural' , 'Ukraine' , 'Middle East' , 'India' , 'China' ],
	'Middle East': ['Ukraine' , 'Southern Europe' , 'Egypt' , 'East Africa' , 'India' , 'Afghanistan' ],
	'India': ['Siam' , 'China' , 'Afghanistan' , 'Middle East' ],
	'Siam': ['China' , 'india' , 'Indonesia' ],
	'Indonesia': ['Siam' , 'Western Austrailia' , 'New Guniea' ],
	'New Guniea': ['Indonesia' , 'Western Austrailia' , 'Eastern Austrailia' ],
	'Eastern Austrailia': ['New Guniea' , 'Western Austrailia' ],
	'Western Austrailia': ['Eastern Austrailia' , 'New Guniea' , 'Indonesia' ],
	'Great Britain': ['Iceland' , 'Scandinavia' , 'Northern Europe' , 'Western Europe' ],
	'Western Europe': ['Great Britain' , 'North Africa' , 'Southern Europe' , 'Northern Europe' ],
	'Northern Europe': ['Scandinavia' , 'Western Europe' , 'Southern Europe' , 'Ukraine' ],
	'Southern Europe': ['Northern Europe' , 'Western Europe' , 'North Africa' , 'Egypt' , 'Middle East' , 'Ukraine' ]
};

function startAttackPhase(){
    phase="attack";
    $(".troopBtn").hide();
    $("#roundInfo").html("Attack Phase for Player "+turn);
	$('#hovering').off('click');
	
	$('#hovering').click(function(e){
		e.preventDefault();
		var countryId = $(this).attr('name');
		var d = $(this).attr('d');

		
		$('#clicked').attr('d', d);
	  	$('#country1').text(countries[countryId][0] + " | Owner: " + countries[countryId][1] + " | Troops: " + countries[countryId][2]);
	  	
	  	lightAttackable(countryId, countries[countryId][1]);

	});
}

// function attackable(attacker, defender){
// //Returns true if country "attacker" borders, or has a connection to, country "defender"
// 	if (borders[attacker][defender])
// 		return true;
// 	return false;
// }


function lightAttackable(country, owner){
	// var attackable = new Array();

	$('.country').removeAttr('fill');
	$('.country').removeAttr('stroke');
	$('.country').removeAttr('stroke-width');
	
	for(i = 0; i < borders[country].length; ++i){	
		var select = "[id='"+ borders[country][i] +"'";
		var borderId = borders[country][i];
		if(owner != countries[borderId][1]){
			$(select).attr('fill','red');
			$(select).attr('stroke','black');
			$(select).attr('stroke-width','8');
			$(select).addClass("attackable");
			// attackable.push(borderId);	
		}
		else{
			$(select).attr('fill','white');
			$(select).attr('stroke','black');
			$(select).attr('stroke-width','8');	
		}
	}
	// return attackable;
}
function canAttack(){

}
