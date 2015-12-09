var svg;
var doc;
var map;
var label;
var text;
var hilite;
var countries;
var seas;
function init( evt )
{
  svg = evt.target;
  doc = svg.ownerDocument;
  selected = null;
  map = doc.getElementById( 'map' );
  label = newElement( 'text', 'id=label font-size=30 stroke=none fill=black text-insert=middle x=100 y=700' );
  text = doc.createTextNode( 'Click a country' );
  label.appendChild( text );
  svg.appendChild( label );
  hilite = doc.getElementById( "hilite" );
  // countries = document.getElementsByClassName('country');
  var countries = [];
  $(".country").each(function(){
    $(this).troops = 0;
    $(this).owner = "None";
    $(this).on({
      mouseover: function(){
        var d = $(this).attr('d');
        $('#hovering').attr('d', d);
        $('#status').text($(this).attr('id') + '// Owner: ' + $(this).owner + ' Troops: ' + $(this).troops);
        
      }
    });
    $('#hovering').click(function(){
      var d = $(this).attr('d');
      $('#clicked').attr('d', d);
    });
  });

  function addText(p) {
    var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var b = p.getBBox();
    t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + (b.y + b.height/2) + ")");
    t.textContent = "counter";
    t.setAttribute("stroke", "black");
    t.setAttribute("font-size", "14");
    p.parentNode.insertBefore(t, p.nextSibling);
  }

  var paths = document.querySelectorAll("path");
    for (var p in paths) {
    addText(paths[p])
  }
  // $('.country').on({
  //     mouseover: function(){
  //       var tmp = $(this).attr('d');
  //       $('#clicked')[0].attr('d', tmp);
  //       $('#hovering')[0].attr('d', tmp);
  //     },
  //     mouseleave: function(){
  //       $('#hovering').removeAttr('d');
  //     },
  //     click: function(){
  //       $(this).off('mouseleave');
  //     } 
  //   });
  // for (var i = 0; i < countries.length; i++)
  // {
  //   country = countries[i];
  //   country.troops = 0;
  //   country.owner = 'None';
  //   country.addEventListener('mousedown', function(evt){ 
  //     clickCountry(evt);
  //   });
  //   country.addEventListener('mouseover', function(evt){
  //     hoverCountry(evt);
  //   });
  // }
  seas = document.getElementsByClassName('sea');
  for (var i = 0; i < seas.length; i++)
  {
    var sea = seas[i];
    sea.addEventListener('click', function(evt){ 
      clickSea(evt);
    });
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
function clickSea( evt )      
{
  var sea = evt.target;
  text.textContent = sea.getAttribute( 'id' );
  $('#clicked').attr( 'd', 'm0 0' );
  selected = null;
}
function selectCountry( evt )      
{
  var country = evt.target;
  var outline = country.getAttribute( 'd' );
  $('#clicked').attr( "d", outline );
  
  selected = country;
}
function deselectCountry(evt)
{
  var country = evt.target;
  var outline = country.getAttribute( 'd' );
  $('#clicked').removeAttr( "d" );
  text.textContent = country.getAttribute( 'id' ) +' Owner: ' +country.owner +' Troops: ' + country.troops;
  selected = country;
}

