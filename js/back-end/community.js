let selected_condition = 0;
let selected_keyword = '';
let selected_page = 1;

$(document).ready(function () {
	search_community(1);
})
function AddComma(num) {
	const regexp = /\B(?=(\d{3})+(?!\d))/g;
	return num.toString().replace(regexp, ',');
}
//
function reset_setting() {
	$('#condition').val(0);
	$('#keyword').val(null);
	$('input:checkbox[id="agree"]').prop('checked', false);
	search_community(1);
}

// 커뮤니티 - 커뮤니티 검색
function search_community(page) {
	const condition = $('#condition').val();
	const keyword = $('#keyword').val();
	const ischecked= $('input:checkbox[id="agree"]').is(':checked') ? 1 : 0;
	const data = {type: type, condition: condition, keyword: keyword, page: page, size: 10, ischecked: ischecked};
	const aoo = ajax_object_options("POST", "/auth/api/search/community", data);
	ajax(aoo, scs_callback_function, scf_callback_function)
	selected_condition = condition;
	selected_keyword = keyword;
	selected_page = page;
}

// 커뮤니티 - 커뮤니티 검색 (본인 작성 글만 보기)
function search_my_community(page) {
	const ischecked= $('input:checkbox[id="agree"]').is(':checked') ? 1 : 0;
	const data = {type: type, condition: selected_condition, keyword: selected_keyword, page: page, size: 10, ischecked: ischecked};
	const aoo = ajax_object_options("POST", "/auth/api/search/community", data);
	ajax(aoo, scs_callback_function, scf_callback_function)
	selected_page = page;
}

// 커뮤니티 - 커뮤니티 검색 성공 콜백 함수
function scs_callback_function(resp) {
	console.log(resp)
	$('#totalCommunityCount').html(AddComma(resp.totalCommunityCount));
	create_table(resp);
	create_pagination(resp.pageDto);
	/*if (resp.resultCode == 200) {
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
	}*/
}

// 커뮤니티 - 커뮤니티 검색 실패 콜백 함수
function scf_callback_function(resp) {
	console.log(resp)
}

//
function create_table(resp) {
	const list = resp.communityList;
	var table = '';
	for (var i = 0; i < list.length; i++) {
		table = table + '<tr class="border_bottom" onclick="detail_page('+list[i].primaryKey+')">'
			+ '<td class="table_display">'+list[i].primaryKey+'</td>'
			+ '<td>'+list[i].title+'</td>'
			+ '<td class="table_display">'+list[i].nickname+'</td>'
			+ '<td class="table_display">'+list[i].createDate.substring(0, 10)+'</td>'
			+ '<td class="table_display">'+list[i].hit+'</td>'
		if (type != 'faq') {			
			table = table + '<td class="table_display">';
			if (list[i].originalFileName != null && list[i].originalFileName != '') {
				table = table + '<img src="/img/Icon awesome-file-alt.png" alt="첨부파일">';
			}
			table = table + '</td>';
		}
		table = table + '</tr>';
	}
	$('#communityTable').empty();
	$('#communityTable').append(table);
}

// 
function create_pagination(pageDto) {
	let area = '<img src="/img/연속전페이지화살표.png" onclick="search_community('+1+')">'
		+ '<img src="/img/전페이지화살표.png" onclick="search_community('+pageDto.prePage+')">';
	for (var i = pageDto.startPage; i <= pageDto.endPage; i++) {
		if (i == pageDto.page) {			
			area = area + '<a class="active" onclick="search_community('+i+')">'+i+'</a>';
		} else {
			area = area + '<a onclick="search_community('+i+')">'+i+'</a>';
		}
	}
	area = area + '<img src="/img/다음페이지화살표.png" onclick="search_community('+pageDto.nextPage+')">'
		+ '<img src="/img/연속다음페이지화살표.png" onclick="search_community('+pageDto.totalPage+')">';
	$('#communityPagination').empty();
	$('#communityPagination').append(area);
}

//
function detail_page(number) {
	location.href = '/auth/community/' + type + '/detail?number='+number;
}