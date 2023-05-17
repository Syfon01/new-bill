$(function(e) {


	//Yinka, you can edit this to suit purpose.. Just make sure the id is same with the one here
	$(document).on("click", "#click", function(e) {
		$('body').removeClass('timer-alert');
		var type = $("#type").val();
		swal({
			title: "Title",
			text: "Your message",
			type: type
		});
	});

	//Yinka, this is the one I'm using
	$(document).on("click", "#click", function(e) {
		swal('Congratulations!', 'User created successfully', 'success');
	});

	//Yinka, this is the one I'm using for channel
	$(document).on("click", "#channel", function(e) {
		swal('Congratulations!', 'Channel config added successfully', 'success');
	});

	// Message
	$(document).on("click", "#but1", function(e) {
		$('body').removeClass('timer-alert');
		var message = $("#message").val();
		if (message == "") {
			message = "Your message";
		}
		swal(message);
	});
	// With message and title
	$(document).on("click", "#but2", function(e) {
		$('body').removeClass('timer-alert');
		var message = $("#message").val();
		var title = $("#title").val();
		if (message == "") {
			message = "Your message";
		}
		if (title == "") {
			title = "Your message";
		}
		swal(title, message);
	});
	// Show image
	$(document).on("click", "#but3", function(e) {
		$('body').removeClass('timer-alert');
		var message = $("#message").val();
		var title = $("#title").val();
		if (message == "") {
			message = "Your message";
		}
		if (title == "") {
			title = "Your message";
		}
		swal({
			title: title,
			text: message,
			imageUrl: '../assets/images/brand/logo-2.png'
		});
	});
	// Timer
	$(document).on("click", "#but4", function(e) {
		$('body').addClass('timer-alert');
		var message = $("#message").val();
		var title = $("#title").val();
		if (message == "") {
			message = "Your message";
		}
		if (title == "") {
			title = "Your message";
		}
		message += "(close after 2 seconds)";
		swal({
			title: title,
			text: message,
			timer: 2000,
			showConfirmButton: false
		});
	});
	// Prompt
	$(document).on("click", "#prompt", function(e) {
		$('body').removeClass('timer-alert');
		swal({
			title: "Add",
			text: "Enter your message",
			type: "input",
			showCancelButton: true,
			closeOnConfirm: false,
			inputPlaceholder: "Your message"
		}, function(inputValue) {
			if (inputValue != "") {
				swal("Input", "You have entered : " + inputValue);
			}
		});
	});
	// Confirm
	$(document).on("click", "#confirm", function(e) {
		$('body').removeClass('timer-alert');
		swal({
			title: "Alert",
			text: "Are you really want to exit",
			type: "warning",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});


	$(document).on("click", "#click1", function(e) {
		$('body').removeClass('timer-alert');
		swal({
			title: "Alert",
			text: "Waring alert",
			type: "warning",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});
	$(document).on("click", "#click2", function(e) {
		$('body').removeClass('timer-alert');
		swal({
			title: "Alert",
			text: "Danger alert",
			type: "error",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});
	$(document).on("click", "#click3", function(e) {
		$('body').removeClass('timer-alert');
		swal({
			title: "Alert",
			text: "Info alert",
			type: "info",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});
});