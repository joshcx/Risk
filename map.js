var countries = new Array();

var players = {};
var numPlayers = 2; 
var startingTroops = 42; //Must be at least 42 for randomization and even for fairness.
var firstCountry = null; //for clicked countries
var secondCountry = null;
var turn;
var count;
var clicked;
var phase="reinforce";

function init()
{
	players = {'player1': {'troops': startingTroops, 'countriesHeld':0}, 'player2':{'troops': startingTroops, 'countriesHeld':0}};
	turn = "player1"; // remove later: testing purposes
	count = 0; // remove later: testing purposes

	updateAllTroopCounts();

  $(".country").each(function(){
    var countryId = this.getAttribute('id');
	//alert(countryId);
    countries[countryId] = new Array();
    countries[countryId][0] = countryId; // country name
    countries[countryId][1] = "None"; // owner of country
    countries[countryId][2] = 1; // num of troops
  });

  $(".country").each(function(){
    $(this).on({  
      mouseover: function(e){
     
        var countryId = e.target.getAttribute('id');
        var d = $(this).attr('d');
        $('#hovering').attr('d', d);
        $('#hovering').attr('name', countryId);
        $('#country2').text(countries[countryId][0] + " | Owner: " + countries[countryId][1] + " | Troops: " + countries[countryId][2]);
      }
    });
  });
  
  $('#hovering').click(function(e){
    var countryId = $(this).attr('name'); // get country name
	
    var d = $(this).attr('d');
    $('#clicked').attr('d',d);
    clicked = countryId;
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
    $('.country').removeAttr('fill');
    $('.country').removeAttr('stroke');
    $('.country').removeAttr('stroke-width');
    $('.country').removeClass('attackable');
      $('#clicked').removeAttr('d');
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
		if(paths[p].id){ // might be buggy
			countries[paths[p].id][1] = player;
			players[player]['countriesHeld']++;
			players[player]['troops']--;
			addText(paths[p], 1);
		}	
    }

  function addText(p, count) {
    var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var b = p.getBBox();
    t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + (b.y + b.height/2) + ")");
    t.textContent = countries[p.id][2];
    if (countries[p.id][1] == "player1") {
    	t.setAttribute("stroke", "blue");
    }
    else {
    	t.setAttribute("stroke", "red");
    }
    t.setAttribute("font-size", "20");
    t.setAttribute("id", p.getAttribute("id")+"text");
    p.parentNode.insertBefore(t, p.nextSibling);
  }
  
  function pickPlayer(){
	//picks player1 or player2 at random unless out of troops
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
} // init



// increment only
  function updateText(countryId) {
  	var c = countries[countryId]; // get country object: name, owner, num of troops
    document.getElementById(countryId+"text").textContent=c[2]; // update troops number count display on map
    updateAllTroopCounts();
  }

  function updateAllTroopCounts() {
  	console.log("BLAHH");
  	// both players total troop numbers
    $("#p1TotalTroops").text(startingTroops);
    $("#p1TroopsLeft").text(players['player1']['troops']);
	$("#p2TotalTroops").text(startingTroops);
	$("#p2TroopsLeft").text(players['player2']['troops']);
  }
