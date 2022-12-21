$(document).ready(function () {
	
})

//
function input_title() {
	const title = $('#title').val();
	$('#titleLength').html(title.length);
	$('#title').val(title.substring(0, 50));
}

//
function input_content() {
	const content = $('#content').val();
	$('#contentLength').html(content.length);
	$('#content').val(content.substring(0, 5000));
}

//
function cancel_write() {
	swal({
		  title: '작성을 취소합니다.',
		  text: '작성중인 내용은 저장되지 않습니다.',
		  icon: 'warning',
		  buttons: {
			cancel : '취소',
			ok :  '확인'
			}
		}).then((value) => {
		  if (value == 'ok') {
              location.href = "/auth/community/faq"
		  }
		})
}

//
function write_board() {
	
	const formData = new FormData($('#registFAQForm')[0]);
	const title = formData.get('title');
	const content = formData.get('content');
	
	if (title == null || title == '') {
		swal('', '필수 입력 항목을 확인해 주세요.', 'warning').then(function(){
			$('#title').focus();
		});
		return
	} else if (content == null || content == '') {
		swal('', '필수항목을 모두 입력해주세요.', 'warning').then(function(){
			$('#content').focus();
		});
		return;
	}
	var aoo = ajax_formdata_options("POST", "/user/api/regist/faq", formData);
	ajax(aoo, wfs_callback_function, wff_callback_function)
}

// 
function wfs_callback_function(resp) {
	console.log(resp)
	if (resp.resultCode == 200) {
		swal('', '성공적으로 작성되었습니다.', 'success').then(function(){
			//location.href = '/auth/community/faq/detail';
		});
		return;	
	} else {
		swal('', '작성에 실패하였습니다.', 'error');
		return;	
	}
}
// 
function wff_callback_function(resp) {
	console.log(resp)
}