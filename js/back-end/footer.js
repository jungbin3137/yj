$(document).ready(function () {
	$('.footer_sns_top, .footer_sns_bottom').children('a').css('cursor', 'pointer');
})

function open_site(idx) {
	if (idx == 0) {
		const url = $('.firestaion_select').val();
		window.open(url);
	} else if (idx == 1) {		
		const url = $('.reservation_page_select').val();
		window.open(url);
	}
}
