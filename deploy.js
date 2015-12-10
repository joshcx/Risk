$('#playButton').click(function(evt){
	$('#btn-container').hide();
    $('#gameInterface').show();
    $('#roundInfo').text("Reinforce Phase for Player 1");

	init();
});
