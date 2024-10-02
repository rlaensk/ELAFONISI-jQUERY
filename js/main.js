// scroll하면 헤더배경색 변하기
https: $(function () {
  let isOn = false;
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (!isOn) {
        $("header").addClass("on");
        isOn = true;

        $(".menu-trigger span").css("background-color", "rgb(128,128,128)");
        $(".logo_text>p").css("color", "rgb(128,128,128)");
        $(".country_toggle span").css("color", "rgb(128,128,128)");
        $(".dropdown_label").css("color", "rgb(128,128,128)");
        $("#book_tap a").css({ color: "rgb(128,128,128)" });
        $("#book_tap").css("border", "1px solid rgb(128,128,128)");
        $(".dropdown_menu").css("border", ".8px solid #99a1a7");
        $(".cstoggle+ul").css("border", ".8px solid #99a1a7");
        $(".arrow").css("background-image", "url(../img/arrow-g.png)");
      }
    } else {
      if (isOn) {
        $("header").removeClass("on");
        isOn = false;

        $(".menu-trigger span").css("background-color", "white");
        $(".logo_text>p").css("color", "white");
        $(".country_toggle span").css("color", "white");
        $(".dropdown_label").css("color", "white");
        $("#book_tap a").css({ color: "white" });
        $("#book_tap").css("border", "1px solid white");
        $(".dropdown_menu").css("border", ".8px, solid #99a1a7");
        $(".cstoggle+ul").css("border", ".8px, solid #99a1a7");

        $(".arrow").css("background-image", "url(../img/arrow-w.png)");
      }
    }
  });
});

// 햄버거메뉴 누르면 X
const menuTrigger = document.querySelector(".menu-trigger");

menuTrigger.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active");
});

$(".plus").click(function () {
  $(this).not(".plus").removeClass(" active").parent().next().slideUp();
  $(this).toggleClass(" active").parent().next().slideToggle();
});

// 사이드메뉴 나타나게
$(function () {
  $(".menu-trigger").click(function () {
    if ($("#menu_trigger").css("width") == "0px") {
      $("#menu_trigger").css("display", "block");
      $("#menu_trigger").css("width", "100%");

      $(".menu-trigger span").css("background-color", "rgb(128,128,128)");
      $(".logo_text>p").css("color", "rgb(128,128,128)");
      $(".country_toggle span").css("color", "rgb(128,128,128)");
      $(".dropdown_label").css("color", "rgb(128,128,128)");
      $("#book_tap a").css({ color: "rgb(128,128,128)" });
      $("#book_tap").css("border", "1px solid rgb(128,128,128)");
      $(".dropdown_menu").css("box-shadow", "0 0 8px #99a1a7 ");
      $(".cstoggle+ul").css("box-shadow", "0 0 8px #99a1a7 ");

      $("#about_us").css("transform", "translateY(0px)").css("opacity", "1");
      $("#accom").css("transform", "translateY(0px)").css("opacity", "1");

      $("#special").css("transform", "translateY(0px)").css("opacity", "1");

      $("#offers").css("transform", "translateY(0px)").css("opacity", "1");

      $("#community").css("transform", "translateY(0px)").css("opacity", "1");

      $("#reservation").css("transform", "translateY(0px)").css("opacity", "1");

      $(".side_footer").css("opacity", "1");
    } else {
      $(".logo_text>p").css("color", "#fff");
      $(".menu-trigger span").css("background-color", "#fff");
      $(".country_toggle span").css("color", "#fff");
      $(".dropdown_label").css("color", "#fff");
      $("#book_tap a").css("color", "#fff");
      $("#book_tap").css("border", "1px solid #fff");
      $(".dropdown_menu").css("box-shadow", "none ");
      $(".cstoggle+ul").css("box-shadow", "none");
      $("#about_us").css("transform", "translateY(100px)").css("opacity", "0");
      $("#accom").css("transform", "translateY(100px)").css("opacity", "0");

      $("#special").css("transform", "translateY(100px)").css("opacity", "0");

      $("#offers").css("transform", "translateY(100px)").css("opacity", "0");

      $("#community").css("transform", "translateY(100px)").css("opacity", "0");

      $("#reservation")
        .css("transform", "translateY(100px)")
        .css("opacity", "0");

      $(".side_footer").css("opacity", "0");

      $("#menu_trigger").css({ width: "0px" }, 1500);
      // $('#menu_trigger ').css({'display':'none'})
    }
  });
});

// EU

$(function () {
  let btn = $(".country_toggle");
  let layer = $(".dropdown_menu");
  const arrow = $(".arrow");
  let isRotated = false; // 화살표의 회전 상태를 추적하는 변수

  btn.click(function () {
    layer.slideToggle();
    if (isRotated) {
      arrow.css("transform", "rotate(0deg)");
    } else {
      arrow.css("transform", "rotate(180deg)");
    }

    isRotated = !isRotated; // 상태를 토글
  });
});
// cs
$(function () {
  let btn1 = $(".cstoggle");
  let layer1 = $(".csdropdown");
  const arrow = $(".arrow");
  let isRotated = false; // 화살표의 회전 상태를 추적하는 변수

  btn1.click(function () {
    layer1.slideToggle();
    if (isRotated) {
      arrow.css("transform", "rotate(0deg)");
    } else {
      arrow.css("transform", "rotate(180deg)");
    }

    isRotated = !isRotated; // 상태를 토글
  });
});
$(document).ready(function () {
  // 페이지가 새로고침될 때 이전 스크롤 위치를 기억하지 않고 맨 위로 이동
  $(window).on("beforeunload", function () {
    $(window).scrollTop(0); // 새로고침되기 전에 스크롤을 맨 위로 이동
  });
  let pop1Closed = false; // 팝업1이 닫혔는지 여부
  let pop2Closed = false; // 팝업2가 닫혔는지 여부

  // 페이지 로드 시 팝업을 보여주고 스크롤 막기
  $(".pop1, .pop2").show(); // 팝업 표시
  $("body").css("overflow", "hidden"); // 스크롤 비활성화

  // 새로고침 후 강제로 맨 위로 이동
  $(window).scrollTop(0); // 스크롤을 맨 위로 이동

  // .pop1 닫기
  $("#close1").click(function (e) {
    e.preventDefault(); // 링크의 기본 동작 방지
    $(".pop1").hide();
    pop1Closed = true; // 팝업1이 닫혔음을 표시
    enableScrollIfBothClosed(); // 두 팝업이 모두 닫혔는지 확인 후 스크롤 활성화
  });

  // .pop2 닫기
  $("#close2").click(function (e) {
    e.preventDefault(); // 링크의 기본 동작 방지
    $(".pop2").hide();
    pop2Closed = true; // 팝업2가 닫혔음을 표시
    enableScrollIfBothClosed(); // 두 팝업이 모두 닫혔는지 확인 후 스크롤 활성화
  });

  // 두 팝업이 모두 닫혔는지 확인하고 스크롤 활성화
  function enableScrollIfBothClosed() {
    if (pop1Closed && pop2Closed) {
      $("body").css("overflow", "auto"); // 스크롤 활성화
      $("#popup").css("display", "none");
    }
  }
});
// hotel room
$(".room_").not(":first").css("display", "none");

$(".next_1").click(function () {
  $(".room_img:first").insertAfter(".room_img:last");
  $(".room_img_box").css("margin-left", -50.5);
  $(".room_img_box").stop().animate({ marginLeft: 0 }, 1000);

  $(".room_:first").insertAfter(".room_:last");
  $(".room_:first").css("display", "block");
  $(".room_").not(":first").css("display", "none");
  $(".room_").css("margin-left", 50);
  $(".room_").stop().animate({ marginLeft: 0 }, 1000);

  // $('.room_:first').insertAfter('.room_:last');
});

$(".next_2").click(function () {
  $(".room_img:last").insertBefore(".room_img:first");
  $(".room_img_box").css("margin-left", 50.5);
  $(".room_img_box").stop().animate({ marginLeft: 0 }, 1000);

  $(".room_:last").insertBefore(".room_:first");
  $(".room_:first").css("display", "block");
  $(".room_").not(":first").css("display", "none");
  $(".room_").css("margin-left", 50.5);
  $(".room_").stop().animate({ marginLeft: 0 }, 1000);
});

//index.js
function dragSlide__init() {
  const slider = document.querySelector("#slider_box");
  const innerSlider = document.querySelector("#offer_box");
  const slides = document.querySelectorAll(".offer_img1");

  let pressed = false;
  let startX;
  let initialTranslateX = 0;
  let currentTranslateX = 0;
  const slideWidth = slides[0].offsetWidth;

  // 첫 번째와 마지막 슬라이드 복제
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  // 복제된 슬라이드를 삽입
  innerSlider.appendChild(firstClone);
  innerSlider.insertBefore(lastClone, slides[0]);

  // 슬라이더의 초기 위치를 설정 (복제된 첫 번째 슬라이드 고려)
  innerSlider.style.transform = `translateX(-${slideWidth}px)`;
  currentTranslateX = -slideWidth;

  // 마우스를 누를 때 실행되는 함수
  slider.addEventListener("mousedown", (e) => {
    pressed = true;
    slider.style.cursor = "grabbing";
    startX = e.pageX;
    initialTranslateX = currentTranslateX; // 현재 translateX 값 저장
  });

  // 마우스를 떼면 드래그 멈춤
  slider.addEventListener("mouseup", () => {
    pressed = false;
    slider.style.cursor = "grab";
    adjustInfiniteSlide();
  });

  // 마우스가 슬라이더 밖으로 나가면 드래그 멈춤
  slider.addEventListener("mouseleave", () => {
    pressed = false;
    slider.style.cursor = "grab";
    adjustInfiniteSlide();
  });

  // 마우스를 움직이면 슬라이더가 움직이는 함수
  slider.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    const x = e.pageX;
    const walk = x - startX;
    currentTranslateX = initialTranslateX + walk;
    innerSlider.style.transform = `translateX(${currentTranslateX}px)`;
  });

  // 무한 슬라이드를 위한 경계 처리 함수
  function adjustInfiniteSlide() {
    const slidesArray = Array.from(document.querySelectorAll(".offer_img1"));
    const slideCount = slidesArray.length;
    const maxTranslateX = -slideWidth * (slideCount - 1);

    // 왼쪽 끝에 도달하면 마지막 슬라이드로 이동
    if (currentTranslateX > 0) {
      innerSlider.style.transition = "none";
      currentTranslateX = maxTranslateX + slideWidth; // 마지막 슬라이드 위치
      innerSlider.style.transform = `translateX(${currentTranslateX}px)`;
      setTimeout(() => {
        innerSlider.style.transition = "transform 0.3s ease";
      }, 0);
    }

    // 오른쪽 끝에 도달하면 첫 번째 슬라이드로 이동
    if (currentTranslateX < maxTranslateX) {
      innerSlider.style.transition = "none";
      currentTranslateX = -slideWidth;
      innerSlider.style.transform = `translateX(${currentTranslateX}px)`;
      setTimeout(() => {
        innerSlider.style.transition = "transform 0.3s ease";
      }, 0);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  dragSlide__init();
});

// let slider = document.querySelector("#slider_box");
// let innerSlider = document.querySelector("#offer_box");
// let pressed = false;
// let startx;
// let isDragging = false; // 드래그 여부 확인 변수
// let clickThreshold = 5; // 클릭과 드래그를 구분하는 거리

// slider.addEventListener("mousedown", (e) => {
//   pressed = true;
//   startx = e.clientX - innerSlider.offsetLeft; // e.clientX 사용하여 좌표 추적
//   slider.style.cursor = "grabbing"; // 마우스가 눌렸을 때 'grabbing'으로 설정
//   isDragging = false; // 드래그 상태 초기화
// });

// slider.addEventListener("mouseenter", () => {
//   slider.style.cursor = "grab";
// });

// slider.addEventListener("mouseup", (e) => {
//   slider.style.cursor = "grab"; // 마우스가 떼어질 때 'grab'으로 복구

//   // 드래그하지 않았을 경우에만 링크 클릭 처리
//   if (!isDragging) {
//     let link = e.target.closest(".o_text_box");
//     if (link) {
//       link.click(); // 링크 클릭
//     }
//   }
//   pressed = false; // 마우스 버튼 해제
//   isDragging = false; // 드래그 상태 초기화
// });

// window.addEventListener("mouseup", () => {
//   pressed = false; // 마우스 해제 시 드래그 종료
//   isDragging = false;
// });

// slider.addEventListener("mousemove", (e) => {
//   if (!pressed) return; // 마우스를 누르지 않으면 무시
//   e.preventDefault();

//   let moveX = e.clientX - startx; // 마우스 이동 거리 계산
//   if (Math.abs(moveX) > clickThreshold) {
//     isDragging = true; // 일정 거리 이상 움직였으면 드래그로 간주
//     innerSlider.style.left = `${moveX}px`;
//     checkboundary(); // 경계 체크 함수 호출
//   }
// });

function checkboundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}

// review 무한반복
let reviewWidth = document.querySelector(".review_img").offsetWidth;
$(".next_3").click(function () {
  $(".review_1 .review_img:last").prependTo(".review_1");
  $(".review_1").css("margin-left", -reviewWidth);
  $(".review_1").stop().animate({ marginLeft: 0 }, 800);
});

$(".next_4").click(function () {
  $(".review_1")
    .stop()
    .animate({ marginLeft: -reviewWidth }, 800, function () {
      $(".review_1 .review_img:first").appendTo(".review_1");
      $(".review_1").css({ marginLeft: 0 });
    });
});

// 반응형 js
let mal = window.matchMedia("screen and (max-width:1230px)");
if (mal.matches) {
  $("#about_line>p").text("Pool Villa Room");
  $("#infinity>p").text("Infinity&Rooftop Pool");
  $("#BBQ>p").text("Breakfast&BBQ");
}
let mal__ = window.matchMedia("(min-width:320px) and (max-width:774px)");
if (mal__.matches) {
  $(".room-text2>h2").text("Hotel Room");
}

window.addEventListener("scroll", function () {
  let mal_1 = window.matchMedia("(min-width:320px) and (max-width:774px)");
  let mal_2 = window.matchMedia(
    "(min-width:775px) and (max-width:1000px)"
  ).matches;
  let mal_3 = window.matchMedia(
    "(min-width:1001px) and (max-width:1206px)"
  ).matches;
  let mal_4 = window.matchMedia(
    "(min-width:1207px) and (max-width:1600px)"
  ).matches;
  let mal_5 = window.matchMedia("(min-width:1601px)").matches;
  let value1 = window.scrollY;
  console.log("scrollY", value1);
  console.log(mal_5);
  $("#infinity p").text("Infinity Pool");
  $("#BBQ p").text("Breakfast & BBQ");
  if (mal_5) {
    if (value1 > 300) {
      $("#about_line p").css("animation", "pool 1.3s").css("opacity", "1");
      $("#about_text .but").css("animation", "pool_p 1.5s").css("opacity", "1");
    }
    if (value1 > 1400) {
      $(".room-text2>h2").css("animation", "hotel 1.3s").css("opacity", "1");
      $(".room-text2>p").css("animation", "hotel_p 1.5s").css("opacity", "1");
    }
    // if (value1 > 2100) {
    //   $("#room_kind .see a").css("animation", "see 1.3s").css("opacity", "1");
    // }
    if (value1 > 3270) {
      $(".tion_box h2").css("animation", "fac 1.5s ease").css("opacity", "1");
    }
    if (value1 > 3470) {
      $(".tion_box p").css("animation", "fac_p 1.5s ease").css("opacity", "1");
    }
    // if (value1 > 4054) {
    //   $("#infinity p")
    //     .text("Inpinity Pool")
    //     .css("animation", "infi 1.3s .5s")
    //     .css("opacity", "1");
    //   $("#BBQ p")
    //     .text("Breakfast & BBQ")
    //     .css("animation", "infi 1.3s ")
    //     .css("opacity", "1");
    // }
    // if (value1 > 3700) {
    //   $(".read1").css("animation", "infi 1.3s 1.2s").css("opacity", "1");
    //   $(".read2").css("animation", "infi 1.3s").css("opacity", "1");
    // }
    if (value1 > 4554) {
      $("#review h2").css("animation", "rew 1.3s").css("opacity", "1");
    }
    // if (value1 > 5254) {
    //   $(".review_>p").css("animation", "rew_p 1.3s").css("opacity", "1");
    //   $(".see_2").css("animation", "event2 1.5s").css("opacity", "1");
    // }
    if (value1 > 5554) {
      $("#Event_s h2").css("animation", "infi1 1.5s").css("opacity", "1");
    }
    if (value1 > 6200) {
      $(".newsletter_text p")
        .css("animation", "infi2 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 6250) {
      $(".newsletter_text span")
        .css("animation", "news2_ 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 6300) {
      $(".form_a").css("animation", "event 1.3s").css("opacity", "1");
    }
    if (value1 > 8054) {
      $("#neighbourhood p").css("animation", " neibg 1.3s").css("opacity", "1");
    }
    if (value1 > 8165) {
      $("#neighbourhood span")
        .css("animation", "rew_ 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 8210) {
      $("#neighbourhood a").css("animation", "rew1 1.3s").css("opacity", "1");
    }
    if (value1 > 8560) {
      $("#map p").css("animation", "map 1.3s").css("opacity", "1");
    }
    if (value1 > 9060) {
      $("#about_hotel").css("transform", "scale(1.5)").css("transition", ".5s");
    }
  } else if (mal_4) {
    const room_textH2 = document.querySelector(".room-text2>h2");
    room_textH2.textContent = "Hotel Room";
    if (value1 > 100) {
      $("#about_line p").css("animation", "pool 1.3s").css("opacity", "1");
    }
    if (value1 > 230) {
      $("#about_text .but").css("animation", "pool_p 1.5s").css("opacity", "1");
    }

    if (value1 > 1100) {
      $(".room-text2>h2")
        .css("animation", "mdia4Roomtext2h2 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 1200) {
      $(".room-text2>p")
        .css("animation", "mdia4Roomtext2P 1.5s")
        .css("opacity", "1");
    }
    if (value1 > 1100) {
      $("#room_kind .see a").css("animation", "see 1.3s").css("opacity", "1");
    }
    if (value1 > 2800) {
      $(".tion_box h2").css("animation", "fac 1.5s").css("opacity", "1");
      $(".tion_box p").css("animation", "fac_p 1.5s").css("opacity", "1");
    }

    if (value1 > 3500) {
      $("#review h2")
        .css("animation", " media4ReviewH2 1.3s")
        .css("opacity", "1");
    }
    const offerText = document.querySelector("#Event_s h2");
    offerText.innerHTML = "Special Offers";
    if (value1 > 4500) {
      $("#Event_s h2")
        .css("animation", "midea4EventH2 1.5s")
        .css("opacity", "1");
      $(".see_").css("animation", "event1 1.3s").css("opacity", "1");
    }
    if (value1 > 6200) {
      $(".newsletter_text p")
        .css("animation", "infi2 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 6250) {
      $(".newsletter_text span")
        .css("animation", "news2 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 6300) {
      $(".form_a").css("animation", "event 1.3s").css("opacity", "1");
    }
    if (value1 > 7544) {
      $("#neighbourhood p")
        .css("animation", "medi4NeighbourhoodP 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 7570) {
      $("#neighbourhood span")
        .css("animation", "rew_ 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 7570) {
      $("#neighbourhood a").css("animation", "rew1 1.3s").css("opacity", "1");
    }
    if (value1 > 8059) {
      $("#map p").css("animation", "map 1.3s").css("opacity", "1");
    }
    if (value1 > 8500) {
      $("#about_hotel").css("transform", "scale(1.5)").css("transition", ".5s");
    }
  } else if (mal_3) {
    const eventsH2Text = document.querySelector("#Event_s h2");
    eventsH2Text.textContent = "Special Offers";
    if (value1 > 180) {
      $("#about_line p").css("animation", "pool 1.3s").css("opacity", "1");
    }
    if (value1 > 330) {
      $("#about_text .but").css("animation", "pool_p 1.3s").css("opacity", "1");
    }
    $(".room-text2>h2").text("Hotel Room");
    if (value1 > 1100) {
      $(".room-text2>h2")
        .css("animation", "media3Roomtext2h2 1.3s")
        .css("opacity", "1");
      $(".room-text2>p").css("animation", "hotel_p 1.5s").css("opacity", "1");
    }
    if (value1 > 2100) {
      $("#room_kind .see a").css("animation", "see 1.3s").css("opacity", "1");
    }
    if (value1 > 2800) {
      $(".tion_box h2")
        .css("animation", "mdia3TionH2 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 2900) {
      $(".tion_box p").css("animation", "fac_p 1.3s").css("opacity", "1");
    }

    if (value1 > 3500) {
      $("#review h2")
        .css("animation", "media3ReviewH2 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 3900) {
      $(".review_>p")
        .css("animation", "media3ReviewP 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 4500) {
      $("#Event_s h2")
        .css("animation", "medi3event_sH2 1.5s")
        .css("opacity", "1");
    }
    if (value1 > 5400) {
      $(".newsletter_text p")
        .css("animation", "infi2 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 5500) {
      $(".newsletter_text span")
        .css("animation", "news2_ 1.3s")
        .css("opacity", "1");
    }

    if (value1 > 6725) {
      $("#neighbourhood p")
        .css("animation", "mdie3NeighbourhoodP  1.3s")
        .css("opacity", "1");
    }
    if (value1 > 6700) {
      $("#neighbourhood span")
        .css("animation", "rew_ 1.3s")
        .css("opacity", "1");
    }

    if (value1 > 6750) {
      $("#neighbourhood a").css("animation", "rew1 1.3s").css("opacity", "1");
    }
    if (value1 > 7250) {
      $("#map p").css("animation", "map 1.3s").css("opacity", "1");
    }
    if (value1 > 7560) {
      $("#about_hotel a")
        .css("transform", "scale(1.5)")
        .css("transition", ".5s");
    }
  } else if (mal_2) {
    const room_textH2 = document.querySelector(".room-text2>h2");
    room_textH2.textContent = "Hotel Room";
    if (value1 > 300) {
      $("#about_line p").css("animation", "mediaPoolP 2s").css("opacity", "1");
    }
    if (value1 > 350) {
      $("#about_text .but")
        .css("animation", "mediaPool 1.5s")
        .css("opacity", "1");
    }
    if (value1 > 1000) {
      $(".room-text2>h2")
        .css("animation", "mediaHotelH2 1.5s")
        .css("opacity", "1");
      $(".room-text2>p")
        .css("animation", "mediaRoomHotelP 1.5s")
        .css("opacity", "1");
    }
    if (value1 > 1450) {
      $("#room_kind .see a").css("animation", "see 1.3s").css("opacity", "1");
    }
    if (value1 > 2200) {
      $(".tion_box h2")
        .css("animation", "mediationBoxH2 1.5s")
        .css("opacity", "1");
      $(".tion_box p")
        .css("animation", "mediationBoxP 1.5s")
        .css("opacity", "1");
    }

    if (value1 > 3000) {
      $("#review h2")
        .css("animation", "mediaReviewH2 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 3500) {
      $(".review_>p").css("animation", "mediaREviewP 1.3s").css("opacity", "1");
    }
    $("#Event_s h2").text("Special Offers");
    if (value1 > 3850) {
      $("#Event_s h2")
        .css("animation", "mediaEventH2 1.5s")
        .css("opacity", "1");
    }
    if (value1 > 4893) {
      $(".newsletter_text p")
        .css("animation", "mediaNewsP 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 4993) {
      $(".newsletter_text span")
        .css("animation", "mediaNewsP 1.3s .3s")
        .css("opacity", "1");
    }
    if (value1 > 5293) {
      $(".form_a").css("animation", "event 1.3s").css("opacity", "1");
    }
    if (value1 > 5800) {
      $("#neighbourhood p")
        .css("animation", "mediaNeighbourhoodP  1.3s")
        .css("opacity", "1");
    }
    if (value1 > 6000) {
      $("#neighbourhood span")
        .css("animation", "mediaNeighbourhoodSpan 1.3s")
        .css("opacity", "1");
    }

    if (value1 > 6300) {
      $("#map p").css("animation", "map 1.3s").css("opacity", "1");
    }
    if (value1 > 6600) {
      $("#about_hotel").css("transform", "scale(1.5)").css("transition", ".5s");
    }
  } else if (mal_1) {
    $("#popup").css("display", "none");
    if (value1 > 100) {
      $("#about_line p")
        .css("animation", "miniaboutH2 1.3s")
        .css("opacity", "1");
    }

    if (value1 > 900) {
      $(".room-text2>h2").css("animation", "pool_p_ 1.3s").css("opacity", "1");
      $(".room-text2>p").css("animation", "pool_p_ 1.5s").css("opacity", "1");
    }
    if (value1 > 1700) {
      $("#room_kind .see a").css("animation", "see_ 1.3s").css("opacity", "1");
    }
    if (value1 > 2200) {
      $(".tion_box h2").css("animation", "fac 1.5s").css("opacity", "1");
      $(".tion_box p").css("animation", "fac_p_1 1.5s").css("opacity", "1");
    }
    if (value1 > 2600) {
      $("#infinity p")
        .text("Infinity Pool")
        .css("animation", "infi1 1.3s")
        .css("opacity", "1");
      $(".read1").css("animation", "infi 1.3s").css("opacity", "1");
    }
    if (value1 > 2900) {
      $("#BBQ p")
        .text("Breakfast & BBQ")
        .css("animation", "infi 1.3s")
        .css("opacity", "1");
      $(".read2").css("animation", "infi 1.3s").css("opacity", "1");
    }
    if (value1 > 3300) {
      $("#review h2").css("animation", "infi2 1.3s").css("opacity", "1");
    }
    if (value1 > 3900) {
      $(".review_>p").css("animation", "rew_p_ 1.3s").css("opacity", "1");
      $(".see_2").css("animation", "event2_ 1.5s").css("opacity", "1");
    }
    if (value1 > 4184) {
      $("#Event_s h2").css("animation", "infi2_ 1.5s").css("opacity", "1");
    }
    $("#Event_s h2").text("Special Offers");
    if (value1 > 4684) {
      $(".see_").css("animation", "event1 1.3s").css("opacity", "1");
    }
    if (value1 > 4782) {
      $(".newsletter_text p")
        .css("animation", "infi2 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 4980) {
      $(".newsletter_text span")
        .css("animation", "news2__ 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 5282) {
      $(".form_a").css("animation", "event 1.3s").css("opacity", "1");
    }
    if (value1 > 5582) {
      $("#neighbourhood p").css("animation", "fac_p_ 1.3s").css("opacity", "1");
    }
    if (value1 > 5650) {
      $("#neighbourhood span")
        .css("animation", "rew__ 1.3s")
        .css("opacity", "1");
    }
    if (value1 > 5660) {
      $("#neighbourhood a").css("animation", "rew11 1.3s").css("opacity", "1");
    }
    if (value1 > 5900) {
      $("#map p").css("animation", "map 1.3s").css("opacity", "1");
    }
    if (value1 > 6150) {
      $("#about_hotel")
        .css("transform", "scale(1.3)")
        .css("transition", "1.3s");
    }
  }
});
