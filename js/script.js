$(document).ready(function () {
    //set #grid_container's width to 70% of the browswers height
    var window_height = window.innerHeight*0.7;
    $("#grid_container").css("width", Math.round(window_height));

    //Change color on mouseover
    $(document).on('mouseover', '.squareDiv', function() {
    	$(this).css("background-color", getRandomColor());
	});

    //set background
    backgroundChanger();

    //nav menu effects
    navMenu();
});

//Creates grid
function createGrid() {
	//Ask user for grid size
	var input = prompt("Size of grid:");
	//Calculate size of each block
	var blockSize = $('#grid_container').width()/input;

	//Create Grid
	for (var i = 1; i <= input; i++) {
    	for (var x = 1; x <= input; x++) {
    		$("#grid_container").append('<div class="squareDiv"></div>');
    	};
    	$("#grid_container").append('<div class="newRow"></div>');
    };

    //Set size of each block
    $('.squareDiv').css('width', blockSize);
	$('.squareDiv').css('height', blockSize);
}

//Clear the grid
function clearGrid() {
	$('.squareDiv').css("background-color", "transparent");
}

//New grid
function newGrid() {
	$("#grid_container").css("display", "block");
	$('#grid_container').css("visibility", "hidden");
	$("#grid_container").empty();
	createGrid();
	$('#grid_container').css("visibility", "visible");

	//check if buttons exist
	var clearExists = !!document.getElementById("clear_button");
		if (clearExists == false) {
			$("#button_container").prepend('<a class="btn" id="clear_button" onclick="clearGrid()">Clear the grid!</a>')
		}
	var removeExists = !!document.getElementById("remove_button");
	if (removeExists == false) {
		$("#button_container").append('<a class="btn" id="remove_button" onclick="removeGrid()">Remove grid!</a>')
	}
}

//Remove grid
function removeGrid() {
	$("#grid_container").css("display", "none");
	$("#remove_button").remove();
	$("#clear_button").remove();
}

//Get random color
function getRandomColor() {
	var random_color_int = Math.floor(Math.random()*16777215);
	var random_color_hex = '#'+random_color_int.toString(16);
	//console.log("Hex = " + random_color_hex + " Int = " + random_color_int);

	while (random_color_int > 16777215 || random_color_int < 1118481) {
		//console.log(random_color_hex + " = INVALID HEX! Generating new...");
		random_color_int = Math.floor(Math.random()*16777215);
		random_color_hex = '#'+random_color_int.toString(16);
	}

	return random_color_hex;
}

//background selector
function backgroundChanger() {
	//check if cookie exists, otherwise uses default background
	if (docCookies.hasItem("background")) {
    	$("body").css("background-image", docCookies.getItem("background"));
    }

    else {
    	$("body").css("background-image", $("#default_background").val());
	}

	//creates/overwrites background cookie when #pick_style is changed
    $("#pick_style").change(function() {
    	docCookies.setItem("background", $("#pick_style option:selected").val(), 2592000);
		$("body").css("background-image", docCookies.getItem("background"));
		console.log("Selected background: " + docCookies.getItem("background").slice(4, -1));
    });
}

//Navigation menu effects
function navMenu() {
	//hover
	$("li").css("opacity", "0.5");
	$("li:nth-child(1)").hover(function() {
		$(this).fadeTo("400", 1);
	}, function() {
		$(this).fadeTo("400", 0.5);
	});
	$("li:nth-child(2)").hover(function() {
		$(this).fadeTo("400", 1);
	}, function() {
		$(this).fadeTo("400", 0.5);
	});
	$("li:nth-child(3)").hover(function() {
		$(this).fadeTo("400", 1);
	}, function() {
		$(this).fadeTo("400", 0.5);
	});

	//click
	$("li:nth-child(1)").click(function() {
		//do something
	});

	$("li:nth-child(2)").click(function() {
		//do something
	});

	$("li:nth-child(3)").click(function() {
		//do something
	});
}

function animeSchedule() {
	//add stuff
}

function niceRobin() {
	//add stuff
}

function animeTorrents() {
	//add stuff
}