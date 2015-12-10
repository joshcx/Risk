var countries = new Array();
function init()
{
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
        $('#country2').text(countries[countryId][0] + " | Owner: " + countries[countryId][1] + " | Troops: " + countries[countryId][2]);
      }
    });
  });
  $('#hovering').click(function(e){
    var countryId = e.target.getAttribute('id');
    var d = $(this).attr('d');
    $('#clicked').attr('d', d);
    $('#country1').text(countries[countryId][0] + " | Owner: " + countries[countryId][1] + " | Troops: " + countries[countryId][2]);
  });

  $(".sea").each(function(){
    $(this).click(function(){
      $('#hovering').removeAttr('d');
      $('#clicked').removeAttr('d');
    });
  });
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

