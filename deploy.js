$('#playButton').click(function(){
	$('.territory').show();
});
$('.territory').click(function(){
	var tmp = $("#"+this.id+" p").text();
	tmp++;
	$("#"+this.id+" p").text(tmp);
})