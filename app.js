$(function() {
// When clicked, generate user's inputs and starts randomizing
///////////////////////////////////////////////////////////////////////////////////////
$('#submit').on("click", function(){
	var counts = $('input.count').length;
	var markers = [];
	console.log($('#input1').val());
	for(x = 0; x < counts; x++){
		markers[x+1] = $('#input'+[x+1]).val();
	};
	if($('#input1').val() == '' || $('#input2').val() == ''){
		$('#inputs').append("<p style='color:red;'>Need atleast two inputs<p><br>");
	}else{
		show();
	};
	
});
///////////////////////////////////////////////////////////////////////////////////////


// For loading gif
///////////////////////////////////////////////////////////////////////////////////////
var loading = $('.loading');
var show = function(){
	$('#main').css("display", "none");
    loading.css("display", "block");
    setTimeout(hide, 2000);  	// 2 seconds
    setTimeout(success, 2000);  // 2 seconds
}
var hide = function(){
    loading.css("display", "none");
}
var showTwo = function(){
	$('#main').css("display", "none");
    loading.css("display", "block");
    setTimeout(hide, 2000);  	// 2 seconds
    setTimeout(randomize, 2000);  // 2 seconds
}
///////////////////////////////////////////////////////////////////////////////////////


// Generating random from user's inputs
///////////////////////////////////////////////////////////////////////////////////////
var arrayList = [];
var arrayText = ['Woohoo!! It is ', 'Lucky pick goes to... ', 'Fate has decided on '];
function success(){
	$('#main').css("display", "block");
	var counts = $('input.count').length;
	var markers = []
	for(x = 0; x < counts; x++){
		markers[x+1] = $('#input'+[x+1]).val();
		arrayList.push(markers[x+1]);
	}
	var chosenOne = Math.floor(Math.random() * arrayList.length);
	var chosenText = Math.floor(Math.random() * arrayText.length);
	var refresh = "<br><input type='button' class='btn btn-danger' onClick='history.go(0)' value='Reset'>";
	$('#main').html('<p class="chosenOne animated bounce">'+ arrayText[chosenText] + arrayList[chosenOne] + '!!</p>');
	$('#main').append(refresh);
};
///////////////////////////////////////////////////////////////////////////////////////


// Adding more inputs
///////////////////////////////////////////////////////////////////////////////////////
var i = 2;
$('#newEntry').on("click", function(){
	i++;
	$('#moreInput').append("<div class='form-inline animated slideInRight'><label for='input"+i+"'>"+i+"</label><input type='text' name='input"+i+"' id='input"+i+"' class='form-control count'></div>");
});
///////////////////////////////////////////////////////////////////////////////////////


// WE PICK FOR YOU
///////////////////////////////////////////////////////////////////////////////////////
var arrayFood = ['Pizza', 'Subways', 'McDonalds', 'TacoBell', 'WaWa', 'Bar and pub', 'Burger King', 'Chipotle', 'Indian', 'Chinese', 'Japanese', 'Thai'];
$('#randomize').on("click", function(){
	showTwo();
})

function randomize(){
	$('#main').css("display", "block");
	var chosenFood = Math.floor(Math.random() * arrayFood.length);
	var refresh = "<br><input type='button' class='btn btn-danger' onClick='history.go(0)' value='Reset'>";
	$('#main').html('<p class="chosenOne animated zoomIn">'+ arrayFood[chosenFood]+'!!</p>');
	$('#main').append(refresh);
};
///////////////////////////////////////////////////////////////////////////////////////


// Auto update year on copyright footer
///////////////////////////////////////////////////////////////////////////////////////
var d = new Date();
var n = d.getFullYear();
$('#footer').append("Copyright "+n+" | Random Generator Matt Yeung")
///////////////////////////////////////////////////////////////////////////////////////
});