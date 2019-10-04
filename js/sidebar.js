jQuery(function($) {
		
	$(window).on('load', function() {handleResponsive()});
	$(window).on('resize', function() {handleResponsive()});

	$(window).on('load', function() {handleScroll()});
	$(window).on('scroll',function() {handleScroll()});
	$(window).on('resize',function() {handleScroll()});


	function handleScroll() {
		if(!isToTall()) {
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
				console.log("sidebar: " )
				console.log(sidebar.top)
				console.log('top')
				console.log(top + 30 + toolbar)
				if(
					(sidebar.top <= top+25 && (footer.top > (sidebar.top + $('#sidebar').height())))
					|| ((sidebar.top > top+30+toolbar) && !(sidebar.top <= header + 10))
				) {
					console.log('conditions set' + (toolbar + 30));
					$('#sidebar').css({'position':'fixed','top': toolbar + 30,'left':mainoffset.left + mainwidth + 30});
				} 

				else if(sidebar.top <= header + 10) {
					$('#sidebar').css({'position':'relative','top':'','right':'','left':''});
				}
				if(footer.top <= (sidebar.top + $('#sidebar').height()) && !(sidebar.top > top+30+toolbar)) {
					console.log("stop!");
					$('#sidebar').css({'position':'absolute','top': footer.top - $('#sidebar').height(),'left':mainoffset.left + mainwidth + 30});
				}
			}
			else {
				$('#sidebar').css({'position':'relative','top':'','right':'','left':''});
			}	
		}
	}


	function isToTall() {
		if($(window).height() < ($("#sidebar").height() + 150)) {
			return true;
		}
		return false;
	}


	function handleResponsive() {
		if(window.innerWidth < 768) {
			if(!$('#course-nav-mobile #block-hmp-cme-hmpcmecourseprogress').length) {
				var element = $('#block-hmp-cme-hmpcmecourseprogress').detach();
				$('#course-nav-mobile').append(element);
			}
		}else {
			if(!$('#sidebar #block-hmp-cme-hmpcmecourseprogress').length) {
				var element = $('#block-hmp-cme-hmpcmecourseprogress').detach();
				$('#sidebar').append(element);
			}
		}
	}
});