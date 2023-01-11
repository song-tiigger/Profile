// 제이쿼리
$(function() {
    // 모바일 메뉴 클릭하면 메뉴 창 닫힘
    $(".mobile-nav li a").on("click", closeMobileNav
    );

    $(window).resize(function() { 
        if(window.innerWidth > 1200) {
            $(".info-box").hide();
        } else {
            $(".info-box").show();
        }
    }).resize();

    // 마우스오버하면 스킬 나타나는 이벤트
    $(".skill-circle div").on({
        "mouseover" : function() {
            var idx = $(".skill-circle div").index(this);
            // $("#skill .skill-info>div").stop().fadeOut(500);
            $("#skill .skill-info>div").eq(idx).fadeIn(400);
            
        },
        "mouseout" : function() {
            var idx = $(".skill-circle div").index(this);
            $("#skill .skill-info>div").eq(idx).fadeOut(400);
        }
    });
}); 

window.onload = function() {
    // 자동 실행 함수 
    let autoAnimaton = setInterval(() => {
        autoFlip();
        // movingCloud();
    }, 1200);
    


    // 텍스트 키워드 무한 플립
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

    // section #about me-emoticon 클릭시 rotate



    // top 버튼 스크롤 효과
    const $topbtn = document.querySelector('.topbtn');
    $topbtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
} //window.onload

// 모바일 햄버거 메뉴 열기, 닫기 시작
function openMobileNav() {
    document.getElementById("mobileNav").style.width = "100%"; 
}

function closeMobileNav() {
    document.getElementById("mobileNav").style.width = "0"; 
    document.getElementById("mobileNav").animate({opacity: "0"}, 600);
}

// 스크롤 탑 메뉴 걸리게
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

// section #about me-emoticon 클릭시 rotate
const $flip = document.getElementsByClassName('flip');
function circleRotate() {
    console.log(1);
}

const $front = document.getElementsByClassName('front');
const $back = document.getElementsByClassName('back');







