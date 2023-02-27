// 제이쿼리
$(function () {
  // 메뉴 스크롤 이동 애니메이션 (pc)
  const gnbA = $('#gnb > li > a');

  gnbA.click(function () {
    const target = $(this).attr('href');
    $('html').animate({ 'scrollTop': $(target).offset().top - 100 });
  });


  // 모바일gnb 클릭 이벤트
  let m_gnbA = $('.mobile-nav > li > a');

  m_gnbA.click(function () {
    // 모바일 메뉴 클릭하면 메뉴 창 닫힘
    closeMobileNav();

    // 메뉴 스크롤 이동 애니메이션 (mobile)
    const target = $(this).attr('href');
    $('html').animate({ 'scrollTop': $(target).offset().top - 50 });

    // 액티브 상태 적용
    m_gnbA.removeClass('active');
    $(this).addClass('active');
  });


  // pc에서 .info-box숨기기
  $(window).resize(function () {
    if (window.innerWidth > 1200) {
      $(".info-box").hide();
    } else {
      $(".info-box").show();
    }
  }).resize();

  // pc에서 skill-circle에 마우스오버하면 info-box 나타나는 이벤트
  $(".skill-circle div").on({
    "mouseover": function() {
      var idx = $(".skill-circle div").index(this);
      $("#skill .skill-info > div").eq(idx).fadeIn(400);
    },
    "mouseout": function() {
      var idx = $(".skill-circle div").index(this);
      $("#skill .skill-info > div").eq(idx).stop().fadeOut(400);
    }
  });
  

  // 스크롤 이벤트
  $(window).scroll(function() {
    $('section').addClass('hide');
    $('#portfolio .pofol-box').addClass('hide');

    let sectionList = $('main > section');
    let pofolList = $('#portfolio .pofol-box');

    let scroll = $(window).scrollTop();
    let scrollY = window.scrollY;

    winW = window.innerWidth;
    winH = window.innerHeight;

    for(let i = 0; i < sectionList.length; i++) {
      let posFromTop = sectionList[i].getBoundingClientRect().top;

      if(winH > posFromTop) {
        // section fadeIn
        sectionList[i].classList.add('show');
      }
      
      let posBottom = posFromTop +  $('section').eq(i).outerHeight();
      let winHeight = $(window).height();
      let scrollBottom = $('.wrapper').height() - winHeight - 3000;
  
      if(scroll >= posFromTop -51 && scroll < posBottom) {
        gnbA.removeClass('active_pc');
        gnbA.eq(i).addClass('active_pc');

        m_gnbA.removeClass('active');
        $(this).addClass('active');
      }
      if(scroll >= scrollBottom) {
        gnbA.eq(2).removeClass('active_pc');
        gnbA.eq(3).addClass('active_pc');
      }
    }
    

    // .pofol-box fadeIn (모바일)
    for (let j = 0; j < pofolList.length; j++) {
      let posFromPofolTop = pofolList[j].getBoundingClientRect().top;

      if (winW < 768 && winH > posFromPofolTop * 1.5) {
        $('#portfolio .pofol-box').addClass('hide');

        pofolList[j].classList.remove('hide');
        pofolList[j].classList.add('show');
      }

      // .left와 .right 좌우에서 나타나는 애니메이션 (pc)
      // if (winW >= 768 && scrollY > 3200 + (550 * j)) {
      //   if(j % 2 == 0) {
      //     pofolList[j].animate({right: 0, opacity: 1}, 1200);

      //   } else {
      //     pofolList[j].animate({left: 0, opacity: 1}, 1200);
      //   }
      // }
      // => window resize이용해서 다시 해보면 좋을 듯 
    }

  
    // 스크롤 내릴 때 좌우에서 내용 나타나는 애니메이션
    console.log(scrollY);
    if(scrollY >= 540) {
      $('.me-emoticon').animate({left: 0, opacity: 1}, 400);
      $('.me-introduce').animate({right: 0, opacity: 1}, 400);
    }
    if(scrollY >= 900) {
      $('.about-work-title').animate({left: 0, opacity: 1}, 400);
      $('.about-work-content').animate({right: 0, opacity: 1}, 400);
    }
    //반복문으로 해결 실패 (시작)
    if(winW >= 768) {
      if(scrollY > 3000) {
        $('.pofol-box1').animate({right: 0, opacity: 1}, 800);
      }
      if(scrollY > 3500) {
        $('.pofol-box2').animate({left: 0, opacity: 1}, 800);
      }
      if(scrollY > 4000) {
        $('.pofol-box3').animate({right: 0, opacity: 1}, 800);
      }
      if(scrollY > 4500) {
        $('.pofol-box4').animate({left: 0, opacity: 1}, 800);
      }
      if(scrollY > 5000) {
        $('.pofol-box5').animate({right: 0, opacity: 1}, 800);
      }
    }
    //반복문으로 해결 실패 (끝)
  });
});

// 자바스크립트
window.onload = function () {
  //autoFlip 자동으로 실행하기
  let autoAnimaton = setInterval(() => {
    autoFlip();
  }, 1200);

  // header 텍스트 키워드 애니메이션
  function autoFlip() {
    document.querySelector('.prev').classList.remove('prev');

    let current = document.querySelector('.current');
    current.classList.remove('current');
    current.classList.add('prev');

    let next = document.querySelector('.next');
    
    if (next.nextElementSibling == null) {
      document.querySelector('#textFlip .text-wrap div:first-child').classList.add('next');
    } else {
      next.nextElementSibling.classList.add('next');
    }
    next.classList.remove('next');
    next.classList.add('current');
  }

  // top 버튼 스크롤 애니메이션
  const $topbtn = document.querySelector('.topbtn');
  $topbtn.onclick = e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
} //window.onload

// 모바일 햄버거 메뉴 열기, 닫기
function openMobileNav() {
  document.getElementById('mobileNav').style.width = "100%";
}

function closeMobileNav() {
  document.getElementById('mobileNav').style.width = "0";
  document.getElementById('mobileNav').animate({ opacity: "0" }, 600);
}

// pc화면 상단에 gnb fix되는 기능
function fixedMenu() {
  let curPos = document.documentElement.scrollTop;
  // console.log(curPos);

  if (curPos > 60) {
    document.getElementById('gnb').classList.add('menu_top');
  } else {
    document.getElementById('gnb').classList.remove('menu_top');
  }
}
document.addEventListener('scroll', fixedMenu);