window.onload = function() {
    // 자동 실행
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
    function circleRotate() {
        const meEmoticon = document.getElementsByClassName('flip');
    
        meEmoticon.addEventListener('click', e => {
            e.current.target.toggleClass("front")

        })

        // transform: rotateY(180deg);
            // transition: all 1s linear;
    }
}

// 모바일 햄버거 메뉴 열기, 닫기
function openMobileNav() {
    document.getElementById("mobileNav").style.width = "100%"; 
}

function closeMobileNav() {
    document.getElementById("mobileNav").style.width = "0"; 
    document.getElementById("mobileNav").animate({opacity: "0"}, 600);
}





