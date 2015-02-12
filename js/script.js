$(document).ready(function () {
    //Change color on mouseover
    $(document).on('mouseover', '.squareDiv', function() {
    	$(this).css("background-color", getRandomColor());
	});

    $("#pick_style").change(function() {
    	var style_pick = $("#pick_style option:selected").val();
		console.log("Background: " + style_pick);
		$("body").css("background-image", style_pick);

		//if (style_pick==1) {
		//	$("body").css("background-image", "url(http://i.imgur.com/ib0TAfS.jpg)");
		//};
		//if (style_pick==2) {
		//	$("body").css("background-image", "url(http://i.imgur.com/UG3mC2q.png)");
		//};
		//if (style_pick==3) {
		//	$("body").css("background-image", "url(http://i.imgur.com/Pa4JQze.jpg)");
		//};
    });
});

//Creates grid
function createGrid() {
	//Ask user for grid size
	var input = prompt("Size of grid:");
	//Calculate size of each block
	var blockSize = $('#grid_container').width()/input;

	//Create Grid
	for (var i = 1; i <= input; i++) {
    	for (var x = 0; x < input; x++) {
    		$("#grid_container").append('<div class="squareDiv"></div>');
    	};
    	$("#grid_container").append('<div class="newRow"></div>');
    };

    //Set size of each block
    $('.squareDiv').css('width',blockSize);
	$('.squareDiv').css('height',blockSize);
}

//Clear the grid
function clearGrid() {
	$('.squareDiv').css("background-color", "transparent");
}

//New grid
function newGrid() {
	$('#grid_container').css("visibility", "hidden");
	$("#grid_container").empty();
	createGrid();
	$('#grid_container').css("visibility", "visible");
}

//Get random color
function getRandomColor() {
			var random_color_int = Math.floor(Math.random()*16777215);
			var random_color_hex = '#'+random_color_int.toString(16);
			//console.log("Hex = " + random_color_hex + " Int = " + random_color_int);

			while (random_color_int > 16777215 || random_color_int < 1118481) {
				console.log(random_color_hex + " INVALID HEX! Generating new...");
				random_color_int = Math.floor(Math.random()*16777215);
				random_color_hex = '#'+random_color_int.toString(16);
			}

			return random_color_hex;
		}
