$(function(){
$('#username').on('keyup', writeIn);
$('#addAthlete').on('click', processText);
});

function writeIn(){
	$('.athleteName').html($('#username').val());
}

function processText(e){
	e.preventDefault();
	$('.athleteFeature').append($('#username').val());	
	$('#username').val('');
}