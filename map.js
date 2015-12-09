

var svg;
var doc;
var map;
var label;
var text;
var countries = [];
function init( evt )
{
  svg = evt.target;
  doc = svg.ownerDocument;
  selected = null;
  map = doc.getElementById( 'map' );
  $(".country").each(function(){
    $(this).on({  
      mouseover: function(e){
        var country = e.target;
        country.owner = "None";
        country.troops = 0;
        var d = $(this).attr('d');
        $('#hovering').attr('d', d);
        $('#dataDisplay').text(country.getAttribute('id') + " | Owner: " + country.owner + " | Troops: " + country.troops);
      }
    });
    $('#hovering').click(function(){
      var d = $(this).attr('d');
      $('#clicked').attr('d', d);
    });

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

