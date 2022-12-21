$(function () {
    // 로딩이벤트
    $(document).ready(function(){
        let percent =  $('#change_number').text()

        $('.loading_content').css('width','100%');

        setInterval(( ) => {
            $('#change_number').text(Number(percent++))
        }, 50);

        if ($('#change_number').text() == Number(100)) {
            clearInterval()
        }
        
        setTimeout(() => {
            $('.loading_overlay').fadeOut();
            $('.sectiton_loading').css('display','none');
        }, 4000);
    })


    // 듀토리얼
    $(document).on('click', '.tutorial_close_btn', function () {
        $('.tutorial').fadeOut(200)
    })

    // 미니맵 지도 팝업호출
    $(document).on('click', '.map_scale_btn', function () {
        $('.map_scale_bg').fadeIn(200)
    })
    $(document).on('click', '.map_scale_down', function () {
        $('.map_scale_bg').fadeOut(200)
    })

    // 월드맵 지도 팝업 호출
    $(document).on('click', '.world_map_btn', function () {
        $(this).children().attr('src', '/img/worldmap_off.png')
        $('.word_outer_wrap').fadeIn(200)
    })
    $(document).on('click', '.close_icon_big', function () {
        $('.world_map_btn').children().attr('src', '/img/worldmap.png')
        $('.word_outer_wrap').fadeOut(200)
    })

    // 공지사항
    $(document).on('click', '.notice_btn', function () {
        $('.notice_popup').toggleClass('on')
        $(this).toggleClass('on')

    })
    // $(document).on('click', '.popup_close', function () {
    //     $('.notice_popup').css('display','none')
    // })

    // 채팅
    $(document).on('click', '.message_btn', function () {
        $('.message_bg').toggleClass('on')
        $(this).toggleClass('on')
    })

    // 메뉴
    $(document).on('click', '.menu_btn', function () {
        $('.menu_bg').toggleClass('on')
        $(this).toggleClass('on')
    })
    // 감정표현
    $(document).on('click', '.emotion_btn', function () {
        $(this).children().attr('src', '/img/emotion_off.png')
        $('.emotion_list').fadeIn(200)
    })
    $(document).on('click', '.emotion_off', function () {
        $('.notice_btn').children().attr('src', '/img/notice.png')
        $('.emotion_list').fadeOut(200)
    })

    $(document).on('click', '.chat_btn', function () {
        let value = $('.text_input').val()

        if ($('.text_input').val() !== '') {
            $('.chat_inner').append(`<div class="mychat">
            닉네임2 : ${value}
            </div>`)
            $('.text_input').val('')

            setTimeout(() => {
                $('.text_input').attr('placeholder', '관리자님이 입력중입니다...')
            }, 500);

            setTimeout(() => {
                $('.chat_inner').append(
                    `<p class="com_chat">닉네임1 : 반갑습니다.${value}님!</p>`
                )
                $('.text_input').attr('placeholder', '채팅을 입력하세요.')
                $('.text_input').attr('readonly', true)
            }, 3000);
        } else {

        }

    })


    // 효과음 슬라이더 
    var slider = document.getElementById("myRange");
    var output = document.getElementById("value");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }



    // 이동

    $(document).on('click', '.tutorial_move2', function () {
        $('.tutorial_move2').fadeOut(200)
        $('.tutorial_move3').fadeIn(200)
    })
    $(document).on('click', '.tutorial_move3', function () {
        $('.tutorial_move3').fadeOut(200)
        $('.tutorial_move4').fadeIn(200)
    })
    $(document).on('click', '.tutorial_move4', function () {
        $('.tutorial_move4').fadeOut(200)
        $('.tutorial_move5').fadeIn(200)
    })
    $(document).on('click', '.tutorial_move5', function () {
        $('.tutorial_move5').fadeOut(200)
        $('.tutorial_move6').fadeIn(200)
    })
    $(document).on('click', '.tutorial_move6', function () {
        $('.tutorial_move6').fadeOut(200)
    })
});