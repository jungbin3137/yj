$(document).ready(function () {
	
})

// 마이페이지 - 닉네임 체크
function check_nickname() {
	const nickname = $('#nickname').val();
	let max = 20;
	for (var i = 0; i < nickname.length; i++) {
		var char = nickname.charAt(i);
		if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(char)) {
			max = max - 1;
		}
	}
	$('#nickname').val(nickname.toLowerCase().replace(/[^0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/gi,'').substring(0, max))
}

// 마이페이지 - 닉네임 변경
function update_nickname() {
	const nickname = $('#nickname').val();
	if (nickname == null || nickname.replace(' ', '') == '') {
		swal('', '닉네임을 입력해주세요.', 'warning').then(function(){
			$('#nickname').focus();
		});
		return;
	}
	
	let kolength = 0;
	let enlength = 0;
	let check = 0;
	for (var i = 0; i < nickname.length; i++) {
		var char = nickname.charAt(i);
		if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(char)) {
			kolength = kolength + 2;
		} else if (/[0-9a-zA-Z]/.test(char)) {
			enlength = enlength + 1;
		} else {
			check = 1;
			break;
		}
	}
	if (check == 1) {
		swal('', '닉네임에는 특수문자가 포함될 수 없습니다.', 'warning').then(function(){
			$('#nickname').focus();
		});
		return;
	} else if (kolength+enlength < 4) {
		swal('', '닉네임은 최소 한글 2자/영어 4자입니다.', 'warning').then(function(){
			$('#nickname').focus();
		});
		return;
	} else if (kolength+enlength > 20) {
		swal('', '닉네임은 최대 한글 10자/영어 20자입니다.', 'warning').then(function(){
			$('#nickname').focus();
		});
		return;
	}
	const data = {nickname: nickname};
	const aoo = ajax_object_options("POST", "/user/api/update/userinfo/nickname", data);
	ajax(aoo, uns_callback_function, unf_callback_function)
}

// 마이페이지 - 닉네임 변경 성공 콜백 함수
function uns_callback_function(resp) {
	console.log(resp)
	if (resp.resultCode == 200) {
		swal('', '등록되었습니다.', 'success').then(function(){
			location.href = location.href;
		});
	} else if (resp.resultCode == -10) {
		swal('', '닉네임을 입력해주세요.', 'warning').then(function(){
			$('#nickname').focus();
		});
	} else if (resp.resultCode == -11) {
		swal('', '닉네임은 최소 2자리입니다.', 'warning').then(function(){
			$('#nickname').focus();
		});
	} else if (resp.resultCode == -12) {
		swal('', '닉네임은 최대 한글 10자리, 영어 20자리입니다.', 'warning').then(function(){
			$('#nickname').focus();
		});
	} else if (resp.resultCode == -13) {
		swal('', '닉네임에는 특수문자가 포함될 수 없습니다.', 'warning').then(function(){
			$('#nickname').focus();
		});
	} else if (resp.resultCode == -14) {
		swal('', '이미 사용중인 닉네임입니다.', 'warning').then(function(){
			$('#nickname').focus();
		});
	}
}

// 마이페이지 - 닉네임 변경 실패 콜백 함수
function unf_callback_function(resp) {
	console.log(resp)
}

// 마이 페이지 - 회원 탈퇴 확인창 1
function open_leave_user_confirm_modal() {
	swal({
		  title: '',
		  text: '회원 탈퇴를 진행 하시겠습니까?',
		  icon: 'warning',
		  buttons: {
			cancel : '취소',
			ok :  '확인'
			}
		}).then((value) => {
		  if (value == 'ok') {
              open_leave_user_confirm_modal2();
		  }
		})
}

// 마이페이지 - 회원 탈퇴 확인창2
function open_leave_user_confirm_modal2() {
	swal({
		  title: '',
		  text: '회원탈퇴 시 모든 정보가 삭제되며,\n이후 복구가 불가능합니다.',
		  icon: 'warning',
		  buttons: {
			cancel : '취소',
			ok :  '확인'
			}
		}).then((value) => {
		  if (value == 'ok') {
              leave_user();
		  }
		})
}

// 마이페이지 - 회원 탈퇴
function leave_user() {
	const data = {};
	const aoo = ajax_object_options("POST", "/user/api/delete/userinfo", data);
	ajax(aoo, lus_callback_function, luf_callback_function)	
}

// 마이페이지 - 회원 탈퇴 성공 콜백 함수
function lus_callback_function(resp) {
	console.log(resp)
	if (resp.resultCode == 200) {
		swal('', '탈퇴되었습니다.', 'success').then(function(){
			location.href = "/auth/logout";
		});
	} else if (resp.resultCode == -10) {
		swal('', '닉네임을 입력해주세요.', 'warning').then(function(){
			$('#nickname').focus();
		});
	} else if (resp.resultCode == -11) {
		swal('', '닉네임은 최소 2자리입니다.', 'warning').then(function(){
			$('#nickname').focus();
		});
	} else if (resp.resultCode == -12) {
		swal('', '닉네임은 최대 한글 10자리, 영어 20자리입니다.', 'warning').then(function(){
			$('#nickname').focus();
		});
	} else if (resp.resultCode == -13) {
		swal('', '닉네임에는 특수문자가 포함될 수 없습니다.', 'warning').then(function(){
			$('#nickname').focus();
		});
	} else if (resp.resultCode == -14) {
		swal('', '이미 사용중인 닉네임입니다.', 'warning').then(function(){
			$('#nickname').focus();
		});
	}
}

// 마이페이지 - 회원 탈퇴 실패 콜백 함수
function luf_callback_function(resp) {
	console.log(resp)
}