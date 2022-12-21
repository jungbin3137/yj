let regist_upload_file = [];
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
function registFile(e) {
	const image_file = $('#file').val();
	const image_file_name = image_file.split('\\')[image_file.split('\\').length-1];
	console.log(image_file_name)
	if (image_file == null || image_file == "") {
		return;
	} 
	const files = e.target.files;
	const filesArr = Array.prototype.slice.call(files);
	if (filesArr.length > 0) {	
	    filesArr.forEach(function(f){
			regist_upload_file.push(f);
			var str = '<div class="files_data" id="filearea'+regist_upload_file.length+'">'
				+ '<div class="files_input_wrap">'
				+ '<input class="file_data" placeholder="첨부파일을 업로드하세요." value="'+image_file_name+'" readonly>'
				+ '<div class="file_btn_wrap_data">'
				+ '<button type="button" onclick="delete_file('+regist_upload_file.length+')">삭제</button>'
				+ '</div>'
				+ '</div>'
				+ '</div>';
			$('.file_wrap').append(str);
			var reader = new FileReader();
			reader.readAsDataURL(f);	
		});
	}
	$('#file').val(null);
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
              location.href = "/auth/community/share"
		  }
		})
}

//
function write_board() {
	
	const formData = new FormData($('#registDataShareForm')[0]);
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
	let count = 0;
	if (regist_upload_file.length > 0) {
		for (var i = 0; i < regist_upload_file.length; i++) {	
			if (regist_upload_file[i] != null) {				
				formData.append("file"+count, regist_upload_file[i]);
				count++;
			}
		}
	} 
	var aoo = ajax_formdata_options("POST", "/user/api/regist/datashare", formData);
	ajax(aoo, wdss_callback_function, wdssf_callback_function)
}

// 
function wdss_callback_function(resp) {
	console.log(resp)
	if (resp.resultCode == 200) {
		swal('', '성공적으로 작성되었습니다.', 'success').then(function(){
			//location.href = '/auth/community/datashare/detail';
		});
		return;	
	} else {
		swal('', '작성에 실패하였습니다.', 'error');
		return;	
	}
}
// 
function wdssf_callback_function(resp) {
	console.log(resp)
}


//
function delete_file(idx) {
	regist_upload_file[idx-1] = null;
	$('#filearea'+idx).remove();
}