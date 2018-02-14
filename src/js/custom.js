$( document ).ready(function() {
		var request = new XMLHttpRequest();

		request.open('GET', 'http://design.propcom.co.uk/buildtest/accordion-data.json', true);

		request.onload = function () {
			// begin accessing JSON data here
			var data = JSON.parse(this.response);

			for (var i = 0; i < data.blocks.length; i++) {
			var dataHolder = $('<div class="heading"><h1>' + data.blocks[i].heading + '</h1></div><div class="inner-text"><p>' + data.blocks[i].content + '</p></div>');

			$("#blocks").append(dataHolder);
			}

			console.log(data.blocks[0].content);
			for (var i = 0; i < data.blocks.length; i++) {
				console.log(data.blocks[i].heading);
				console.log(data.blocks[i].content);
			}
		}

		request.send();

});