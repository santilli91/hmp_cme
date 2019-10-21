jQuery(function($) { 

	$(window).on('load', function() {handleSearch()});

	function handleSearch() {
		if($('#course-users-list').length) {
			$("#user-manage-email").on('keyup',function() {
				$email = $(this).val();
				if($email == '')
					$('#course-users-list tr').removeClass('hidden');
				else {
					$('#course-users-list tbody tr').addClass('hidden');
					$('#course-users-list tbody tr').each(function(index) {
						var val = $(this).children('.user-email').text();
						if(~val.indexOf($email)) {
							$(this).removeClass('hidden');
						}
					});
				}	
			})
		}
	}


});