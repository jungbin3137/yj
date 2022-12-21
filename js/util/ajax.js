var upload_file = []; // 업로드에 필요한 파일을 담는 리스트

$(document).ready(function(){
	//var data = {page : 1, size : 10};
	//var aoo = ajax_object_options("POST", "/auth/callbackSample", data);
	//ajax(aoo, callback_function, callback_function)
})

// 객체형 options (ApiController에서 @RequestBody로 받음)
function ajax_object_options(type, url, data) {
	var options = {
		type: type,
		url : url,
		data : JSON.stringify(data),
		contentType: "application/json; charset=utf-8",
		dataType: "json"
	}
	
	return options;
}

// DataForm 형태 options (ApiController에서 @ModelAttribute로 받음)
function ajax_formdata_options(type, url, formdata) {
	var options = {
		type: type,
		enctype: 'multipart/form-data',
		url: url,
		data: formdata,
		processData: false,
		contentType: false,
		cache: false,
		timeout: 600000,
	}
	
	return options;
}

// ajax
function ajax(options, doneCallback, failCallback) {
	$.ajax(options).done(function(resp) {
		doneCallback(resp)
	}).fail(function(error){
		failCallback(error)
	})
}

// 업로드 사용 (단일 파일 업로드 기준)
function fileUpload(e) {
	var files = e.target.files;
	var filesArr = Array.prototype.slice.call(files);
	
	
    filesArr.forEach(function(f){
		upload_file.push(f);
		var reader = new FileReader();
		reader.readAsDataURL(f);	
	});
}

// 파일 업로드 담기 예시
function upload() {
	var formdata = new FormData();
	formdata.append("page", 1)
	formdata.append("size", 10)
	if (upload_file.length > 0) {
		for (var i = 0; i < upload_file.length; i++) {			
			formdata.append("file"+i, upload_file[i]);
		}
	}
	var afo = ajax_formdata_options("POST", "/auth/callbackFormTest", formdata);
	ajax(afo, callback_function, callback_function)
}

// 콜백 함수 예시 (자유롭게 커스텀 하면 됨 / resp는 java에서 돌려받은 값[responseDto / returnDto])
function callback_function(resp) {
	console.log(resp)
}