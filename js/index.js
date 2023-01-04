window.onload = function() {
    // #home의 텍스트 플립 애니메이션
    const $textFlip = document.getElementById('textFlip');

    $textFlip.addEventListener('click', () => {
        setInterval(autoFlip, 1000)
    });


    function autoFlip() {
        document.querySelector('.prev').classList.remove();

        let current = document.querySelector('.current');
        current.classList.remove('current');
        current.classList.add('prev');

        let next = document.querySelector('.next');
        if(next.nextElementSibling == null) {
            document.querySelector('#textFlip div:first-child').classList.add('next');
        } else {
            next.nextElementSibling.classList.add('next');
        }
        next.classList.remove('next');
        next.classList.add('current');
    }

    



    // 모바일 햄버거 메뉴 열기, 닫기
    function openMobileNav() {
        document.getElementById("mobileNav").style.width = "100%"; 
    }

    function closeMobileNav() {
        document.getElementById("mobileNav").style.width = "0"; 
        document.getElementById("mobileNav").animate({opacity: "0"}, 600);
    }

}




