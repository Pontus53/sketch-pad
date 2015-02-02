$(document).ready(function () {
    //Change color on mouseover
    $(document).on('mouseover', '.squareDiv', function() {
    	$(this).css("background-color", "#3D3D99");
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