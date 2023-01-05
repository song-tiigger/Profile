window.onload = function() {
    // 자동 실행 함수 
    let autoAnimaton = setInterval(() => {
        autoFlip();
    }, 1200);
    
    // 구름 흘러가는 애니메이션
    const cloudAnimation = document.getElementsByClassName('cloud-animation');

    // function movingCloud() {
        
    // }














    // #home의 텍스트 플립 애니메이션
    // const $textFlip = document.getElementById('textFlip');

    // setInterval(() => {
    //     autoFlip();
    // }, 1200);

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
    


    
}

// 모바일 햄버거 메뉴 열기, 닫기 시작
function openMobileNav() {
    document.getElementById("mobileNav").style.width = "100%"; 
}

function closeMobileNav() {
    document.getElementById("mobileNav").style.width = "0"; 
    document.getElementById("mobileNav").animate({opacity: "0"}, 600);
} // 모바일 햄버거 메뉴 열기, 닫기 끝

// 스크롤 탑 메뉴 걸리게
function fixedMenu() {
    const navPos = document.getElementById('gnb').offsetTop; // !!여기가 다르고
    console.log(navPos);
    let curPos = document.documentElement.scrollTop;
    if(curPos > navPos) { // !! 여기가 다름!
        document.getElementById('gnb').classList.add('menu_top');
    } else {
        document.getElementById('gnb').classList.remove('menu_top');
    }
}
document.addEventListener('scroll', fixedMenu); 




// section #about me-emoticon 클릭시 rotate
const $flip = document.getElementsByClassName('flip');
// function circleRotate() {

    
// }

const $front = document.getElementsByClassName('front');
const $back = document.getElementsByClassName('back');


$flip.onclick = function(e) {
    e.current.target == $front ? addClass("back").show() : addClass("front");
}


