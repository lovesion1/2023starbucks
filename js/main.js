// 돋보기를 선택해도 search되도록 지정
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

// 메인이미지 순차적으로 출력
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소,지속시간,옵션)
  gsap.to(fadeEl, 1 ,{
    delay:( index +1 ) * .7, //  0.7, 1.4, 2.1, 2.7 몇초뒤에 실행
    opacity:1
  });
});
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction:'vertical',
  autoplay:true,
  loop:true
});

const swiper = new Swiper('.promotion .swiper-container',{
  slidesPerView : 3, //한번에 보여줄 슬라이드 개수
  spaceBetween : 10, //슬라이드 사이 여백
  centeredSlides : true, //1번 슬라이드가 가운데 보이기
  loop:true,
  autoplay:{
    delay:5000    //기본 3초(3000)
  },
  pagination:{
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable:true //사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl:'.promotioin .swiper-prev',
    nextEl:'.promotioin .swiper-next'
  }
  
});

// const stopEl = document.querySelector('.swiper-stop');
// stopEl.addEventListener('click',function(){
//   swiper.autoplay.stop();  
// });


const promotionEl = $('.promotion');
const promotionToggleBtn = $('.toggle-promotion');
const togglebtnEl =$('.toggle-btn');
let isHidePromotion = false;

promotionToggleBtn.click(function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionEl.addClass('show');
    togglebtnEl.attr('src','./images/btn_prom_up.png');
  }else{
    promotionEl.removeClass('show');
    togglebtnEl.attr('src','./images/btn_prom_down.png');
  }
})

const spyEls = document.querySelectorAll('section.scroll-spay');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement:spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8   //뷰포트 최상단:0, 최하단:1 .8이면 마지막지점임.
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});
 //Scene은 ScrollMagic을 통해서 특정한 요소를 감시하는 옵션
  //scrollMagic이라는 자바스크립트라이브러리가 필요한 컨트롤러라는 
  //개념을 추가하기위해서addTo()메소드를 사용함
  //화면에 보이는 정보들을 입력, 특정한 세션이 화면에 보이면 에니메이션 추가기능

  const thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear();

  const toTopEl = document.querySelector('#to-top');

  window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
      // gsap.to(요소,지속시간,옵션);
      gsap.to(toTopEl, .2 , {
        x:0
      });
    }else{
      // 버튼 숨기기
      gsap.to(toTopEl, .2 , {
        x:100
      });     
    }
  },300));

  
  toTopEl.addEventListener('click',function(){
    gsap.to(window,.7 , {
      scrollTo:0
    })
  });
