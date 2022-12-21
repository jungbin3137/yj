$(document).ready(function () {
	$('.link_wrap').on('mouseover', function () {
		$(this).children('.bottom_line').css('display', 'block')
	})
	$('.link_wrap').on('mouseleave', function () {
		$(this).children('.bottom_line').css('display', 'none')
	})
	$('.header_top_right').children('a').css('cursor', 'pointer');
})

