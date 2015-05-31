$(document).ready(function(){

	$('.home section').flexVerticalCenter();

	$(".contact-button").click(function(){
		$(".contact-modal").modal({
			opacity:100,
//			closeClass: "close",
			position:top,
			closeHTML: "<a href='#' class='button'>Close</a>",
			onOpen: function (dialog) {
				dialog.overlay.fadeIn("fast", function () {
					dialog.data.hide();
					dialog.container.fadeIn("fast", function () {
						dialog.data.fadeIn("fast");	 
					});
				});
			},
			onClose: function (dialog) {
				dialog.data.fadeOut("fast", function () {
					dialog.container.slideUp("fast", function () {
						dialog.overlay.fadeOut("fast", function () {
							$.modal.close(); // must call this!
						});
					});
				});
			}
		});
		
	});

});