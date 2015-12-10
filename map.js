var countries = new Array();
var players = {};
var numPlayers = 2;
var startingTroops = 42; //Must be at least 42 for randomization and even for fairness.
var firstCountry = null; //for clicked countries
var secondCountry = null;
function init()
{
	players = {'player1': {'troops': startingTroops/2, 'countriesHeld':0}, 'player2':{'troops': startingTroops/2, 'countriesHeld':0}};
  $(".country").each(function(){
    var countryId = this.getAttribute('id');
	alert(countryId);
    countries[countryId] = new Array();
    countries[countryId][0] = countryId;
    countries[countryId][1] = "None";
    countries[countryId][2] = 1;
  });
  $(".country").each(function(){
    $(this).on({  
      mouseover: function(e){
        
        var countryId = e.target.getAttribute('id');

        var d = $(this).attr('d');
        $('#hovering').attr('d', d);
        $('#hovering').attr('name', countryId);
		if(firstCountry){
			$('#country2').text(countries[countryId][0] + " | Owner: " + countries[countryId][1] + " | Troops: " + countries[countryId][2] + " | Attackable: " + attackable(firstCountry, countryId));
			if(attackable(firstCountry, countryId)){
				$('#attack').attr('d', d);
			}
		}
		else
			$('#country2').text(countries[countryId][0] + " | Owner: " + countries[countryId][1] + " | Troops: " + countries[countryId][2]);
      } 
    });
  });

  $('#hovering').click(function(e){
    var countryId = $(this).attr('name');
	var c = countries[countryId];
	c[2]++;
    document.getElementById(countryId+"text").textContent=c[2];
    var d = $(this).attr('d');
	if(firstCountry == null){
		firstCountry = countryId;
		$('#clicked').attr('d', d);
	}
	else{
		secondCountry = countryId;
		$('#clicked2').attr('d', d);
	}
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
		  $('#clicked').removeAttr('d');
	  }
      $('#hovering').removeAttr('d');
      $('#country1').text("Click on a country");
      $('#country2').text("Hover on a country");
    });
  });
  //  addText for all countries should go here
    console.log("test");
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
	//console.log(players['player1']['countriesHeld']);
	//console.log(players['player1']['troops']);
	//console.log(players['player2']['countriesHeld']);
	//console.log(players['player2']['troops']);
	
  // update counter display inside country
  function addText(p, count) {
    var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var b = p.getBBox();
    //b.select(t).remove();
    //console.log(p.getAttribute('id'));
    //t.setAttribute("id", p.getAttribute('id'));
    t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + (b.y + b.height/2) + ")");
    t.textContent = countries[p.id][2];
    t.setAttribute("stroke", "black");
    t.setAttribute("font-size", "16");
    t.setAttribute("id", p.getAttribute("id")+"text");

    // var text = document.createTextNode("Hi");
    p.parentNode.insertBefore(t, p.nextSibling);
    //countries[p.getAttribute('id')][3] = t;
    // b.select(t).remove();
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
}


// generic function to create an xml element
// format for attr is very strict
// attrs is a string of attribute=value pairs separated by single spaces, 
// no quotes inside the string, no spaces in attributes
// eg. newElement( 'circle', 'cx=20 cy=20 r=15 visibility=hidden' );
//
function newElement( type, attrs )
{
  var result = doc.createElementNS( "http://www.w3.org/2000/svg", type );
  if( result )
  {
    attr = attrs.split( ' ' );
    for( var i = 0; i < attr.length; i++ )
    {
      value = attr[i].split( '=' );
      result.setAttribute( value[0], value[1] );
    }
  }
  return result;
}


