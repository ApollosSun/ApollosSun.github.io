$(document).ready(function() {
	$("#push").click(function(){
		$.get('words.txt', function(data) {
        	var lines = data.split('\n');
        	var index = Math.floor(Math.random()*lines.length);
        	var word = lines[index];
        	$("#word").text(word);
        	$.get('translate.txt', function(data) {
        		var lines = data.split('\n');
                        if (lines[index]) {
                                var word = lines[index];
                        } else {
                                var word = "";
                        }
        		$("#translation").text(word);
    		});
    	});

	});

	$.get('words.txt', function(data) {
        	var lines = data.split('\n');
        	var index = Math.floor(Math.random()*lines.length);
        	var word = lines[index];
        	$("#word")."text(word)";
        	$.get('translate.txt', function(data) {
        		var lines = data.split('\n');
        		var word = lines[index];
        		$("#translation").text(word);
    		});
    	});
 });