// 제이쿼리
$(function () {
  // pc 메뉴 스크롤 이동
  const gnbA = $('#gnb > li > a');

  gnbA.click(function () {
    const target = $(this).attr('href');
    $('html').animate({ 'scrollTop': $(target).offset().top - 100 });
  })

  // 모바일 메뉴 클릭하면 메뉴 창 닫힘
  $(".mobile-nav > li > a").on("click", closeMobileNav
  );

  // 모바일 메뉴 클릭하면 스크롤로 이동 
  const m_gnbA = $('.mobile-nav > li > a');

  m_gnbA.click(function () {
    const target = $(this).attr('href');
    $('html').animate({ 'scrollTop': $(target).offset().top - 50 });

    // 모바일 메뉴 클릭하면 액티브 상태 적용
    m_gnbA.removeClass('active');
    $(this).addClass('active');
  });

  $(window).resize(function () {
    if (window.innerWidth > 1200) {
      $(".info-box").hide();
    } else {
      $(".info-box").show();
    }
  }).resize();

  // skill-circle에 마우스오버하면 info-box 나타나는 이벤트
  $(".skill-circle div").on({
    "mouseover": function () {
      var idx = $(".skill-circle div").index(this);
      $("#skill .skill-info > div").eq(idx).fadeIn(400);
    },
    "mouseout": function () {
      var idx = $(".skill-circle div").index(this);
      $("#skill .skill-info > div").eq(idx).stop().fadeOut(400);
    }
  });
});

// 자바스크립트
window.onload = function () {
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
  document.getElementById("mobileNav").style.width = "100%";
}

function closeMobileNav() {
  document.getElementById("mobileNav").style.width = "0";
  document.getElementById("mobileNav").animate({ opacity: "0" }, 600);
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





// section #about me-emoticon 클릭시 rotate ****미완성****
// let $flip = document.querySelectorAll('.flip');
// function circleRotate() {
//     console.log(22);
// }
// $flip.addEventListener('click', circleRotate);


// const $front = document.getElementsByClassName('front');
// const $back = document.getElementsByClassName('back');
// section #about me-emoticon 클릭시 rotate ****미완성****



// 스크롤 내릴 때 내용 보이기
window.addEventListener('scroll', function () {
  let scPos = window.scrollY;
  
  
})