$( document ).ready(function() {
		var request = new XMLHttpRequest();

		request.open('GET', 'http://design.propcom.co.uk/buildtest/accordion-data.json', true);

		request.onload = function () {
			// begin accessing JSON data here
			var data = JSON.parse(this.response);


			for (var i = 0; i < data.blocks.length; i++) {
			var test = "text" + i;
			var dataHolder = $('<div class="block"><div onclick="toggle_visibility(\'' + test + '\')" class="heading"><h1>' + data.blocks[i].heading + '</h1></div><div class="inner-text" id="text'+i+'"><p>' + data.blocks[i].content + '</p></div></div>');
								
			$("#main-content").append(dataHolder);
			}

			console.log(data.blocks[0].content);
			for (var i = 0; i < data.blocks.length; i++) {
				console.log(data.blocks[i].heading);
				console.log(data.blocks[i].content);
			}
		}

		request.send();

});

function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display === 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }