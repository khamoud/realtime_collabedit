
var socket = io.connect('http://localhost:8000');
//listen to display message event
socket.on('insertText', function (data){
	$('textarea#textType').val(data);
	console.log(data);
});

//trigger send message event
$(document).ready(function()
{
	$('#textType').keyup(function()
	{	
		var message = $('#textType').val();
		console.log(message);

		//trigger send_message event, submit message to server
		socket.emit('textType', message);

		return false;
	});
	emmet.require('textarea').setup(
	{
	 	pretty_break: true, // enable formatted line breaks (when inserting 
                    		// between opening and closing tag) 
		use_tab: true       // expand abbreviations by Tab key
	});
});