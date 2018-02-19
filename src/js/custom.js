$( document ).ready(function() {
		var request = new XMLHttpRequest();

		request.open('GET', 'http://design.propcom.co.uk/buildtest/accordion-data.json', true);

		request.onload = function () {
			// starting to access JSON file
			var data = JSON.parse(this.response);

			//runs through all records within JSON file until last one is reached
			for (var i = 0; i < data.blocks.length; i++) {
			var textID 		= "text" + i; //setting up ID for content show/hide on click
			var arrowID 	= "arrow" + i; //setting up ID for arrow rotate on click
			var headerID 	= "header" + i; //setting up ID for header color change on click

			//setting up each record to be then appended to the html body (main-content div)
			var dataHolder = $('<div class="block"><div id="'+headerID+'" class="heading" onclick="toggle_visibility(\'' + textID +'\',\'' + arrowID +'\',\'' + headerID +'\')"><div class="header"><h1>' + data.blocks[i].heading + '</h1></div><img src="images/arrow.png" alt="arrowImage" id="'+arrowID+'" class="arrow"></div><div class="inner-text" id="'+textID+'"><p>' + data.blocks[i].content + '</p></div></div>'); 
								
			//appending each record to main-content div
			$("#main-content").append(dataHolder); 

			//getting hold of the element that holds the content of each record
			var divIDelement = document.getElementById(textID);
			//getting hold of the arrow element
			var arrowIDelement = document.getElementById(arrowID);
			//getting hold of the header element
			var headerIDelement = document.getElementById(headerID);

			//using the for loop to set up first record as open and rest as closed
			if (i === 0){
				divIDelement.classList.add("showText");
				arrowIDelement.classList.add("rotated");
				headerIDelement.classList.add("headingOpen");
			}
			else
				divIDelement.classList.add("hideText");	
			}

		}

		request.send();

});

//setting up function for openning and clossing records
function toggle_visibility(textid,arrowid,headerid) {
       var textDiv = document.getElementById(textid);
       var headerID = document.getElementById(headerid);

       if(textDiv.classList.contains("showText")) {
         textDiv.classList.remove("showText");
			textDiv.classList.add("hideText");
			headerID.classList.remove("headingOpen");
		}
       else if (textDiv.classList.contains("hideText")) {
         textDiv.classList.remove("hideText");
			textDiv.classList.add("showText");
			headerID.classList.add("headingOpen");
		}

		var arrowIMG = document.getElementById(arrowid);
		if(arrowIMG.classList.contains("rotated")) {
         arrowIMG.classList.remove("rotated");
		}
       else
			arrowIMG.classList.add("rotated");
    }