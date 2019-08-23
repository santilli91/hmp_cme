jQuery(function($) {
	$(window).on('load', function() {handleScroll()});
	$(window).on('scroll',function() {handleScroll()});
	$(window).on('resize',function() {handleScroll()});

	function handleScroll() {

		var mainoffset = $('#page-content').offset();
		var mainwidth = $('#page-content').width();
		var footer = $('#footer').offset();
		var below = $('#below-content').offset();
		var sidebar = $('#sidebar').offset();
		var top = $(window).scrollTop();
		var header = $('#header-wrapper').offset().top + $('#header-wrapper').height();
		var toolbar = 0;
		if($('#toolbar-bar').length)
			toolbar = $('#toolbar-bar').height() + 25;

		if($('#block-hmp-cme-hmpcmecourseprogress').length && ($(window).width() > 768)){
			console.log(toolbar);
			if(sidebar.top <= top+25) {
				$('#sidebar').css({'position':'fixed','top': toolbar + 30,'left':mainoffset.left + mainwidth + 30});
			} else if(sidebar.top <= header + 10) {
				$('#sidebar').css({'position':'relative','top':'','right':'','left':''});
			}
		}
		else {
			$('#sidebar').css({'position':'relative','top':'','right':'','left':''});
		}	
	}
});