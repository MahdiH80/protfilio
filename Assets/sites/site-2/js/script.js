$(document).ready(function () {
	$(window).resize(function () {
		var w = $(window).width();
		var h = $(window).height();
		$(".viewports").html(w + " * " + h);
	})


	$('.gotoTop').fadeOut(0);

	$(window).scroll(function () {
		var topscroll = $(window).scrollTop();
		// $(".viewports").html(topscroll);
		if (topscroll > 70) {
			$("nav").addClass("fixed");
		}
		else {
			$("nav").removeClass("fixed");
		}

		if (topscroll > 150) {
			$(".gotoTop").fadeIn(500);
		}
		else {
			$(".gotoTop").fadeOut(500);
		}

	})
	$('.gotoTop').click(function () {
		$('html,body').animate({ scrollTop: 0 }, '2000');
	})


	
	// =======================search=======
	
	
	$('.search button').on('click', function () {
		filterBlog($('.search input').val());
	});
	
	$('.category li').on('click', function (e) {
		filterBlog($(e.target).text());
	});
	
	function filterBlog(e) {
		$('.itemblog').each(function (i) {
			$(this).toggle($(this).find('.titr').text().includes(e));
		});
	}
})


