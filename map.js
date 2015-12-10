var countries = new Array();

var players = {};
var numPlayers = 2; 
var startingTroops = 42; //Must be at least 42 for randomization and even for fairness.
var firstCountry = null; //for clicked countries
var secondCountry = null;

function init()
{
	players = { player1: { 'troops': startingTroops/2, 
                        'countriesHeld':0}, 
              player2: {'troops': startingTroops/2, 
                       'countriesHeld':0}
            };

  $(".country").each(function(){
    var countryId = this.getAttribute('id');
	
    countries[countryId] = new Array();
    countries[countryId][0] = countryId;
    countries[countryId][1] = "None";
    countries[countryId][2] = 0;
  });

  $(".country").each(function(){
    $(this).on({  
      mouseover: function(e){
     
        var countryId = e.target.getAttribute('id');
        var d = $(this).attr('d');
        $('#hovering').attr('d', d);
        $('#hovering').attr('name', countryId);
        $('#country2').text(countries[countryId][0] + " | Owner: " + countries[countryId][1] + " | Troops: " + countries[countryId][2]);
    		// if(firstCountry){
    			// $('#attack').removeAttr('d');
    			// $('#attack').attr('name', countryId);
    			// $('#country2').text(countries[countryId][0] + " | Owner: " + countries[countryId][1] + " | Troops: " + countries[countryId][2] + " | Attackable: " + attackable(firstCountry, countryId));
    			// if(attackable(firstCountry, countryId)){
    			// 	$('#attack').attr('d', d);
    			// }
    		// }
      }
    });
  });
  
  $('#hovering').click(function(e){
	
    var countryId = $(this).attr('name');

    // var c = countries[countryId];
    // c[2]++;
    // document.getElementById(countryId+"text").textContent=c[2];
    
    var d = $(this).attr('d');
    $('#clicked').attr('d',d);
  	// if(firstCountry == null){
  	// 	firstCountry = countryId;
  	// 	$('#clicked').attr('d', d);
  	// }
  	// else{
  	// 	if(countryId != firstCountry){
  	// 		secondCountry = countryId;
  	// 		$('#attack').removeAttr('d');
  	// 		$('#clicked2').attr('d', d);
  	// 	}
  	// }
    $('#country1').text(countries[countryId][0] + " | Owner: " + countries[countryId][1] + " | Troops: " + countries[countryId][2]);
  });
  $(".sea").each(function(){
	$(this).on({  
    mouseover: function(e){
		$('#hovering').removeAttr('d');
		$('#attack').removeAttr('d');
		$('#country2').text("Hover on a country");
	}
	});
    $(this).click(function(){
		if(secondCountry){
			secondCountry = null;
			$('#clicked2').removeAttr('d');
		}
		else{
			firstCountry = null;
			$('#attack').removeAttr('d');
			$('#clicked').removeAttr('d');
			secondCountry = null;
			$('#clicked2').removeAttr('d');
		}
      $('#hovering').removeAttr('d');
      $('#country1').text("Click on a country");
      $('#country2').text("Hover on a country");
    });
  });
 
  $('#attack').click(function(e){
	var countryId = $(this).attr('name');
	if(countryId != firstCountry){
		var d = $(this).attr('d');
		secondCountry = countryId;
		$('#attack').removeAttr('d');
		$('#clicked2').attr('d', d);
	}
  });
  
  //  addText for all countries
    var paths = document.querySelectorAll(".country");
    for (var p in paths) {
		var player = pickPlayer();
		if(paths[p].id){
			countries[paths[p].id][1] = player;
			players[player]['countriesHeld']++;
			players[player]['troops']--;
			addText(paths[p], 1);
		}	
    }
	
  // update counter display inside country
function addText(p, count) {
  var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
  var b = p.getBBox();
  t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + (b.y + b.height/2) + ")");
  t.textContent = countries[p.id][2];
  t.setAttribute("stroke", "black");
  t.setAttribute("font-size", "16");
  t.setAttribute("id", p.getAttribute("id")+"text");

  p.parentNode.insertBefore(t, p.nextSibling);
}
  //picks player1 or player2 at random unless out of troops
function pickPlayer(){
	
	var num = Math.floor(Math.random() * 2) + 1;
	if(num == 1 && players['player1']['troops'] > 0)
		return 'player1';
	else if(num == 2 && players['player2']['troops'] > 0)
		return 'player2';
	else if(num == 1)
		return 'player2';
	else
		return 'player1';
  }
}




