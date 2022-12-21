let username_confirm = 0;

$(document).ready(function () {
	
})

// 회원가입 팝업 - css 및 값 초기화
function init_join_modal() {
	$('#joinUsername, #joinPassword, #joinPasswordConfirm').val(null);
	$('.modal_warning').css('opacity', '0');
}

// 회원가입 팝업 - 열기
function open_join_modal() {
	init_join_modal();
	$('.modal').css('display', 'flex');
}

// 회원가입 팝업 - 닫기
function close_join_modal() {
	init_join_modal();
	$('.modal').css('display', 'none');
}

// 회원가입 팝업 - 아이디 입력 유효성 체크
function check_join_username() {
	username_confirm = 0;
	const username = $('#joinUsername').val();
	$('#joinUsername').val(username.toLowerCase().replace(/[^0-9A-Za-z]/gi,'').substring(0, 20))
}

// 회원가입 팝업 - 비밀번호 입력 유효성 체크
function check_password() {
	const password = $('#joinPassword').val();
	$('#joinPassword').val(password.replace(/[^0-9A-Za-z\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi,'').substring(0, 20));
}

// 회원가입 팝업 - 비밀번호 입력 유효성 체크
function check_password_confirm() {
	const passwordConfirm = $('#joinPasswordConfirm').val();
	$('#joinPasswordConfirm').val(passwordConfirm.replace(/[^0-9A-Za-z\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi,'').substring(0, 20));
}

// 회원가입 팝업 - 아이디 중복확인
function confirm_username() {
	const username = $('#joinUsername').val();
	if (username == null || username.replace(' ', '') == '') {
		swal('', '아이디를 입력해주세요.', 'warning');
		return;
	}
	const data = {username: username};
	const aoo = ajax_object_options("POST", "/auth/api/confirm/username", data);
	ajax(aoo, cus_callback_function, cuf_callback_function)
}

// 회원가입 팝업 - 아이디 중복확인 성공 콜백 함수
function cus_callback_function(resp) {
	console.log(resp)
	if (resp.resultCode == 200) {
		swal('', '사용가능한 아이디입니다.', 'success').then(function(){
			username_confirm = 1;
		});
	} else if (resp.resultCode == -1) {
		swal('', '아이디를 입력해주세요.', 'warning');
	} else if (resp.resultCode == -2) {
		swal('', '아이디는 최소 6자리입니다.', 'warning');
	} else if (resp.resultCode == -3) {
		swal('', '아이디는 최대 20자리입니다.', 'warning');
	} else if (resp.resultCode == -4) {
		swal('', '아이디에는 특수문자가 포함될 수 없습니다.', 'warning');
	} else if (resp.resultCode == -5) {
		swal('', '이미 사용중인 아이디입니다.', 'warning');
	}
}

// 회원가입 팝업 - 아이디 중복확인 실패 콜백 함수
function cuf_callback_function(resp) {
	console.log(resp)
}

// 회원사입 팝업 - 회원가입
function join_user() {
	const username = $('#joinUsername').val();
	const password = $('#joinPassword').val();
	const passwordConfirm = $('#joinPasswordConfirm').val();
	console.log(typeof(password));
	if (username == null || username.replace(' ', '') == '') {
		swal('', '아이디를 입력해주세요.', 'warning').then(function(){
			$('#joinUsername').focus();
		});
		return;
	} else if (username.length < 6){
		swal('', '아이디는 최소 6자리입니다.', 'warning').then(function(){
			$('#joinUsername').focus();
		});
		return;		
	} else if (username.length > 20){
		swal('', '아이디는 최대 20자리입니다.', 'warning').then(function(){
			$('#joinUsername').focus();
		});
		return;		
	} else if (/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/.test(username)){
		swal('', '아이디에는 특수문자가 포함될 수 없습니다.', 'warning').then(function(){
			username_confirm = 0;
			$('#joinUsername').focus();
		});
		return;		
	} else if (username_confirm == 0){
		swal('', '아이디 중복 확인을 진행해주세요.', 'warning').then(function(){
			$('#joinUsername').focus();
		});
		return;		
	} else if (password == null || password.replace(' ', '') == '') {
		swal('', '비밀번호를 입력해주세요.', 'warning').then(function(){
			$('#joinPassword').focus();
		});
		return;
	} else if (!(/[0-9]/.test(password)) || !(/[a-zA-z]/.test(password))) {
		swal('', '최소 영문, 숫자를 조합하시오.', 'warning').then(function(){
			$('#joinPassword').focus();
		});
		return;		
	} else if (passwordConfirm == null || passwordConfirm.replace(' ', '') == '') {
		swal('', '비밀번호 확인을 입력해주세요.', 'warning').then(function(){
			$('#joinPasswordConfirm').focus();
		});
		return;
	} else if (!(/[0-9]/.test(passwordConfirm)) || !(/[a-zA-z]/.test(passwordConfirm))) {
		swal('', '최소 영문, 숫자를 조합하시오.', 'warning').then(function(){
			$('#joinPasswordConfirm').focus();
		});
		return;		
	} else if (password != passwordConfirm) {
		$('.modal_warning').css('opacity', '1');
		return;		
	}
	const data = {username: username, password: password};
	const aoo = ajax_object_options("POST", "/auth/api/regist/userinfo", data);
	ajax(aoo, jus_callback_function, juf_callback_function)
}

// 회원가입 팝업 - 아이디 중복확인 성공 콜백 함수
function jus_callback_function(resp) {
	console.log(resp)
	if (resp.resultCode == 200) {
		swal('', '회원가입이 완료되었습니다.', 'success').then(function(){
			location.href = location.href;
		});
	} else if (resp.resultCode == -1) {
		swal('', '아이디를 입력해주세요.', 'warning');
	} else if (resp.resultCode == -2) {
		swal('', '아이디는 최소 6자리입니다.', 'warning');
	} else if (resp.resultCode == -3) {
		swal('', '아이디는 최대 20자리입니다.', 'warning');
	} else if (resp.resultCode == -4) {
		swal('', '아이디에는 특수문자가 포함될 수 없습니다.', 'warning');
	} else if (resp.resultCode == -5) {
		swal('', '이미 사용중인 아이디입니다.', 'warning');
	} else if (resp.resultCode == -6) {
		swal('', '비밀번호를 입력해주세요.', 'warning');
	} else if (resp.resultCode == -7) {
		swal('', '비밀번호는 최소 6자리입니다.', 'warning');
	} else if (resp.resultCode == -8) {
		swal('', '비밀번호는 최대 20자리입니다.', 'warning');
	} else if (resp.resultCode == -9) {
		swal('', '비밀번호는 영문, 숫자의 조합이여야 합니다.', 'warning');
	}
}

// 회원가입 팝업 - 아이디 중복확인 실패 콜백 함수
function juf_callback_function(resp) {
	console.log(resp)
}