// 제이쿼리
$(function() {
    // pc 메뉴 스크롤 이동
    const gnbA = $('#gnb > li > a');
    
    gnbA.click(function() {
        const target = $(this).attr('href');
        $('html').animate({'scrollTop' : $(target).offset().top});
    })

    // 모바일 메뉴 클릭하면 메뉴 창 닫힘
    $(".mobile-nav > li > a").on("click", closeMobileNav
    );

    // 모바일 메뉴 클릭하면 스크롤로 이동 
    const m_gnbA = $('.mobile-nav > li > a');

    m_gnbA.click(function() {
        const target = $(this).attr('href');
        $('html').animate({'scrollTop' : $(target).offset().top});

        //*수정하기(여기부터)
        if(m_gnbA.target) {
            m_gnbA.removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).addClass('active');
        }
        m_gnbA.target = this;
        return false;
        //*수정하기(여기까지)
    });

    $(window).resize(function() {
        if(window.innerWidth > 1200) {
            $(".info-box").hide();
        } else {
            $(".info-box").show();
        }
    });

    // skill-circle에 마우스오버하면 info-box 나타나는 이벤트
    $(".skill-circle div").on({
        "mouseover" : function() {
            var idx = $(".skill-circle div").index(this);
            $("#skill .skill-info > div").eq(idx).fadeIn(400);
        },
        "mouseout" : function() {
            var idx = $(".skill-circle div").index(this);
            $("#skill .skill-info > div").eq(idx).stop().fadeOut(400);
        }
    });


    // ***************8 스크롤 내용 보이기 **********수정하기-여기부터
    // 스크롤 내릴 때 내용 보이기
    // let scPosition = window.scrollY;
    // console.log(scPosition);
    // let curPos = $(window).scrollTop();
    // let aboutPos =  $('#about').offset().top;
    // let skillPos =  $('#skill').offset().top;
    // let portfolPos =  $('#portfolio').offset().top;

    // // console.log(aboutPos);
    // console.log(curPos);

    // $('#about, #skill, #portfolio').hide();

    // $(window).scroll(function() {
    //     console.log(curPos);
    //     if(curPos > aboutPos) {
    //         $('#about').fadeIn(1000);
    //     }       
    // });



    // 스크롤 내용 보이기
    // $(window).scroll( function(){
    //     $('.hideme').each(function(i){
    //         let bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         let bottom_of_window = $(window).scrollTop() + $(window).height();
    //         if( bottom_of_window > bottom_of_object/2 ){
    //             $(this).animate({'opacity':'1'}, 1000);
    //         }
    //     }); 
    // });

    $(window).scroll( function(){
        $('section').each(function(i){
            let bottom_of_object = $(this).offset().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();

            // 점검용
            console.log(`오브젝트: ${bottom_of_object}` );
            console.log(`윈도우: ${bottom_of_window}` );

            if( bottom_of_window > bottom_of_object/2 ){
                $(this).animate({'opacity':'1'}, 1000);
            }
        }); 
    });
    
    // ***************8 스크롤 내용 보이기 **********수정하기-여기까지



}); 

// 자바스크립트
window.onload = function() {
    // 자동 실행 함수 
    let autoAnimaton = setInterval(() => {
        autoFlip();
        // movingCloud();
    }, 1200);
    
    // header 텍스트 키워드 애니메이션
    function autoFlip() {
        document.querySelector('.prev').classList.remove('prev');

        let current = document.querySelector('.current');
        current.classList.remove('current');
        current.classList.add('prev');

        let next = document.querySelector('.next');
        if(next.nextElementSibling == null) {
            document.querySelector('#textFlip .text-wrap div:first-child').classList.add('next');
        } else {
            next.nextElementSibling.classList.add('next');
        }
        next.classList.remove('next');
        next.classList.add('current');
    }

    // top 버튼 스크롤 애니메이션
    const $topbtn = document.querySelector('.topbtn');
    $topbtn.onclick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }




} //window.onload

// 모바일 햄버거 메뉴 열기, 닫기
function openMobileNav() {
    document.getElementById("mobileNav").style.width = "100%"; 
}

function closeMobileNav() {
    document.getElementById("mobileNav").style.width = "0"; 
    document.getElementById("mobileNav").animate({opacity: "0"}, 600);
}

// 스크롤 내리면 pc gnb fix되는 기능
function fixedMenu() {
    let curPos = document.documentElement.scrollTop;
    // console.log(curPos);
    if(curPos > 60) {
        document.getElementById('gnb').classList.add('menu_top');
    } else {
        document.getElementById('gnb').classList.remove('menu_top');
    }
}
document.addEventListener('scroll', fixedMenu); 
        




// section #about me-emoticon 클릭시 rotate ****미완성****
// let $flip = document.querySelectorAll('.flip');
// function circleRotate() {
//     console.log(22);
// }
// $flip.addEventListener('click', circleRotate);


// const $front = document.getElementsByClassName('front');
// const $back = document.getElementsByClassName('back');
// section #about me-emoticon 클릭시 rotate ****미완성****


