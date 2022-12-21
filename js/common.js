// 탑 헤더
$(function () {
    let header_top =
        `    <div class="header_top_wrap">
    <div class="header_top">
        <div class="header_top_left">
            <a href=""><img src="../img/Icon ionic-md-download.png" alt="메타버스다운로드">메타버스 다운로드</a>
            <a href="../html/web_login.html"><img src="../img/Icon awesome-user-alt.png" alt="로그인">로그인</a>
        </div>
        <div class="header_top_middle">
            <p>소방청 메타버스 월드에 오신 것을 환영합니다.</p>
        </div>
        <div class="header_top_right">
            <a href="https://www.facebook.com/safeppy">
                <img src="../img/Icon awesome-facebook-f.png" alt="페이스북">
            </a> 
            <a href="https://twitter.com/safeppy">
                <img src="../img/Icon awesome-twitter.png" alt="트위터">
            </a> 
            <a href="https://www.youtube.com/channel/UCbPBCZhgG_kX_1Wb0cdu5lw">
                <img src="../img/Icon ionic-logo-youtube.png" alt="유튜브">
            </a> 
            <a href="https://www.instagram.com/korea_fire_119/">
                <img src="../img/Icon awesome-instagram.png" alt="인스타그램">
            </a>
            <a href="https://blog.naver.com/safeppy">
                <img src="../img/Icon awesome-naver.png" alt="네이버블로그">
            </a>
            <a href="https://pf.kakao.com/_LxixfhC">
                <img src="../img/Icon awesome-kakao.png" alt="카카오">
            </a>
        </div>
    </div>
</div>`
    $('.header_top_section').append(header_top)


    // 헤더
    let header =
        `    <div class="header">
                <div class="header_wrap">
                    <div class="header_logo">
                        <div class="header_logo_white">
                            <a href="../html/main.html"><img src="../img/소방청로고.png"></a>
                        </div>
                        <div class="header_logo_black">
                            <a href="../html/main.html"><img src="../img/소방청로고_블랙.png"></a>
                        </div>
                    </div>
                    <div class="header_menus">
                        <div class="link_wrap">
                            <a class="" href="../html/web_notice.html">공지사항</a>
                            <div class="bottom_line"></div>
                        </div>
                        <div class="link_wrap">
                            <a class="" href="../html/web_community.html">커뮤니티</a>
                            <div class="bottom_line"></div>
                        </div>
                        <div class="link_wrap">
                            <a class="" href="../html/web_survey.html">설문조사</a>
                            <div class="bottom_line"></div>
                        </div>
                        <div class="link_wrap">
                            <a class="" href="../html/web_mypage.html">마이페이지</a>
                            <div class="bottom_line"></div>
                        </div>
                        <div class="link_wrap">
                            <a class="" href="../html/web_platform.html">플랫폼 소개</a>
                            <div class="bottom_line"></div>
                        </div>
                    </div>
                    <div class="sidebar_section"></div>
                </div>
            </div>`
    $('.header_section').append(header)

    let sidebar = `<div class="header_tabmenu">
    <input type="checkbox" class="openSidebarMenu hide" id="openSidebarMenu">
    <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
    </label>
    <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
            <div class="nickname">
                <span>닉네임</span>님
            <label for="openSidebarMenu" class="sidebarIconToggle">
                <div class="spinner close_1"></div>
                <div class="spinner close_2"></div>
                <div class="spinner close_3"></div>
            </div>
                <li><div class="tab_menu_title">
                    <a href="../html/web_notice.html">공지사항</a>
                    <img src="../../img/arrow_right.png"></div>
                </li>
                <li class="menu"><div class="tab_menu_title">
                    <a href="../html/web_community.html">커뮤니티</a>
                    <img class="arrow down" src="../../img/arrow_right.png"></div>
                    <ul class="inner_menu hide">
                        <li>자유게시판</li>
                        <li>문의게시판</li>
                        <li>학습자료공유</li>
                    </ul>
                </li>
                <li><div class="tab_menu_title">
                    <a href="../html/web_survey.html">설문조사</a>
                    <img  src="../../img/arrow_right.png"></div>
                </li>
                <li><div class="tab_menu_title">
                    <a href="../html/web_mypage.html">마이페이지</a>
                    <img src="../../img/arrow_right.png"></div>
                </li>
                <li><div class="tab_menu_title">
                    <a href="../html/web_platform.html">폴랫폼 소개</a>
                    <img src="../../img/arrow_right.png"></div>
                </li>
        </ul>
        <div class="sidebar_btn_wrap">
            <div class="meta_download">
                <img src="../img/Icon ionic-md-download.png" alt=""><a href="">메타버스 다운로드</a>
            </div>
            <div class="logout">
                <img src="../img/Icon awesome-user-alt.png" alt=""><button>로그아웃</button>
            </div>
        </div>
    </div>
</div>`
    $('.sidebar_section').append(sidebar)

    //컨텐츠
    let contents =
        `<div class="contents_wrap">
<div class="contents">
    <div class="contents_title">
        <p><span class="text_yellow">국민의 희망</span>을 안정으로 지켜내겠습니다.</p>
        <p>메타버스<span class="text_pink">119안전교육</span> 플랫폼에 오신걸 환영합니다.</p>
    </div>
    <div class="contents_sub_title">
        <p>소방안전에 대한 최신 소식 및 다양한 실감형 체험을 경험하세요.</p> 
    </div>
    <div class="contents_link">
        <a href="./meta_main.html">메타버스 실행하기  ></a> 
    </div>
</div>
</div>
`
    $('.contents_section').append(contents)

    //푸터
    let footer =
        `<div class="footer">
<div class="footer_top_wrap text_grey">
<div class="footer_top">
    <div class="footer_top_left">
        <a href="https://www.nfa.go.kr/nfa/operationguide/personalInfo/">개인정보처리방침</a>
    </div>
    <div class="footer_top_right">
        <select class="firestaion_select"> 
            <option disabled selected>시도 소방본부</option>
            <option>중앙119구조본부</option>
            <option>서울소방재난본부</option>
            <option>부산소방본부</option>
            <option>인천소방본부</option>
            <option>대구소방안전본부</option>
            <option>광주소방안전본부</option>
            <option>대전소방본부</option>
            <option>울산소방본부</option>
            <option>세종특별자치시소방본부</option>
            <option>경기북부소방재난본부</option>
            <option>강원소방본부</option>
            <option>충북소방본부</option>
            <option>충남소방본부</option>
            <option>전북소방안전본부</option>
            <option>전남소방본부</option>
            <option>경북소방본부</option>
            <option>경남소방본부</option>
            <option>창원소방본부</option>
            <option>제주특별자치도소방안전본부</option>
        </select>
        <select class="reservation_page_select">
            <option disabled selected>시도 안전체험관</option>
            <option>[서울] 광나루안전체험관</option>
            <option>[서울] 보라매안전체험관</option>
            <option>[부산] 119부산안전체험관</option>
            <option>[대구] 대구시민안전테마파크</option>
            <option>[인천] 인천119안전체험관</option>
            <option>[광주] 빛고을국민안전체험관</option>
            <option>[울산] 울산안전체험관</option>
            <option>[경기] 경기도국민안전체험관</option>
            <option>[충북] 충북안전체험관</option>
            <option>[충남] 충청남도안전체험관</option>
            <option>[전북] 전북119안전체험관</option>
            <option>[경남] 경상남도안전체험관</option>
            <option>[제주] 제주안전체험관</option>
        </select>
    </div>
</div>
</div>
<div class="footer_bottom_wrap">
<div class="footer_bottom">
    <div class="footer_logo">
        <img src="../img/소방청로고_블랙.png">
    </div>
    <div class="footer_middle">
        <div class="footer_address">
        <p>(30128) 세종특별자치시 정부2청사로 13(나성동) 소방시설민원센터 1661-9119, 대표전화:주간(일반)044-205-7032
            야간(당직) 및 토·공휴일 044-205-7037</p>  
        </div>
        <div class="footer_copyright">
            COPYRIGHT ⓒ 2017 National Fire Agency All Rights Reserved.
        </div>
    </div>
    <div class="footer_sns">
        <div class="footer_sns_top">
            <a href="https://www.facebook.com/safeppy">
                <img src="../img/페이스북.png" alt="페이스북">
            </a> 
            <a href="https://twitter.com/safeppy">
                <img src="../img/트위터.png" alt="트위터">
            </a> 
            <a href="https://www.youtube.com/channel/UCbPBCZhgG_kX_1Wb0cdu5lw">
                <img src="../img/유튜브.png" alt="유튜브">
            </a> 
        </div>
        <div class="footer_sns_bottom">
            <a href="https://www.instagram.com/korea_fire_119/">
                <img src="../img/인스타그램.png" alt="인스타그램">
            </a>
            <a href="https://blog.naver.com/safeppy">
                <img src="../img/네이버블로그.png" alt="네이버블로그">
            </a>
            <a href="https://pf.kakao.com/_LxixfhC">
                <img src="../img/카카오.png" alt="카카오">
            </a>
        </div>
    </div>
</div>
</div>
</div>`
    $('.footer_section').append(footer)


    //화면 작아질 시 우측 메뉴바 슬라이드
    $(document).ready(function () {

        // 하위메뉴바 접은 채로 시작
        $(".menu > a").click(function () {
            $(this).next("ul").toggleClass("hide");
        });

        // 메뉴바 클릭시 하위메뉴 보이면서 화살표 모양 바뀌기
        $('.tab_menu_title').click(function () {
            $(this).next($('.inner_menu')).slideToggle('fast');
            let arrow = $(this).children('.arrow');
            if (arrow.hasClass('down')) {
                arrow.attr('src', '../img/arrow_down.png');
                arrow.removeClass('down');
                arrow.addClass('up');
                return;
            }

            if (arrow.hasClass('up')) {
                arrow.attr('src', '../../img/arrow_right.png');
                arrow.removeClass('up');
                arrow.addClass('down');
                return;
            }
        })
    })

    // 회원가입 모달창 
    $('#modal_btn').on('click', function () {
        $('.modal').addClass('show_modal');
    });

    $('#close').on('click', function () {
        $('.modal').removeClass('show_modal');
    });

    // 헤더 메뉴 온클릭시 CSS
    // 생성
    $(document).on('mouseover', '.link_wrap', function () {
        $(this).children('.bottom_line').css('display', 'block')
    })
    // 삭제
    $(document).on('mouseleave', '.link_wrap', function () {
        $(this).children('.bottom_line').css('display', 'none')
    })

    // // 기존 버튼형 슬라이더
    $('.slider > .page_btns > div').click(function () {
        var $this = $(this);
        var index = $this.index();

        $this.addClass('active');
        $this.siblings('.active').removeClass('active');

        var $slider = $this.parent().parent();

        var $current = $slider.find(' > .slides > div.active');

        var $post = $slider.find(' > .slides > div').eq(index);

        $current.removeClass('active');
        $post.addClass('active');
    });

    // // 좌/우 버튼 추가 슬라이더
    $('.slider > .side_btns > div').click(function () {
        var $this = $(this);
        var $slider = $this.closest('.slider');

        var index = $this.index();
        var isLeft = index == 0;

        var $current = $slider.find(' > .page_btns > div.active');

        var $post;

        if (isLeft) {
            $post = $current.prev();
        } else {
            $post = $current.next();
        };

        if ($post.length == 0) {
            if (isLeft) {
                $post = $slider.find(' > .page_btns > div:last-child');
            } else {
                $post = $slider.find(' > .page_btns > div:first-child');
            }
        };

        $post.click();
    });

    setInterval(function () {
        $('.slider > .side_btns > div').eq(1).click();
    }, 2000);


    // 커뮤니티 탭 버튼
    const tabItem = document.querySelectorAll('.tab_item')
    const tabInner = document.querySelectorAll('.tab_inner')

    tabItem.forEach((tab, idx) => {
        tab.addEventListener('click', function () {
            tabInner.forEach((inner) => {
                inner.classList.remove('active_tab')
            })

            tabItem.forEach((item) => {
                item.classList.remove('active_tab')
            })

            tabItem[idx].classList.add('active_tab')
            tabInner[idx].classList.add('active_tab')
        })
    })


    // 설문조사 탭 버튼
    $(document).ready(function () {

        $('ul.tabs li').click(function () {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })

    })

        
    $('document').ready(function(){

        $('textarea').keyup(function(e) {

            $(this).css('height', 'auto');
            $(this).height(this.scrollHeight);
        });
    });

});