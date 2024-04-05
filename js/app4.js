var windowWidth = $(window).width();

$(".page-container").mousemove(function (event) {
  var moveX = ($(window).width() / 2 - event.pageX) * 0.2;
  var moveY = ($(window).height() / 2 - event.pageY) * 0.2;
  $(".canvas").css("margin-left", moveX + "px");
  $(".canvas").css("margin-top", moveY + "px");
});

var blocks = document.querySelectorAll(".block");

blocks.forEach(function (block) {
  block.addEventListener("click", function () {
    var url = block.getAttribute("data-url");
    window.location.href = url;
  });
});

//----------------------------------------


// const videos = document.querySelectorAll('.video');

// videos.forEach(video => {
//   video.addEventListener('mouseenter', () => {
//     video.play();
//   });
  
//   video.addEventListener('mouseleave', () => {
//     video.pause();
//     video.currentTime = 0;
//   });
// });










// animation-----------------------------------------
// Home-----------------------------------------
gsap.from(" .block", 1.2, {
  scrollTrigger: {
    trigger: " .block",
    // markers: true,
  },
  width: "0px",
  scale: 1,
  ease: "power3.inOut",
  delay: 0,
  stagger: 0.2,
});
// text floating-----------------------------------------

gsap.from("#Title1", 1.2, {
  scrollTrigger: {
    trigger: "#Title1",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none none",
  },

  y: 100,
  ease: "power3.inOut",
  opacity: 0,
  
});



gsap.from("#Services", 1.2, {
  scrollTrigger: {
    trigger: "#Services",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none none",
  },

  y: 100,
  ease: "power3.inOut",
  opacity: 0,
});

gsap.from("#Brief", 1.2, {
  scrollTrigger: {
    trigger: "#Brief",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    // toggleActions: "play none none none"
  },
  y: 100,
  ease: "power3.inOut",
  opacity: 0,
});


gsap.from("#Solution", 1.2, {
  scrollTrigger: {
    trigger: "#Solution",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    // toggleActions: "play none none none"
  },
  y: 100,
  ease: "power3.inOut",
  opacity: 0,
});

gsap.from("#Title2", 1.2, {
  scrollTrigger: {
    trigger: "#Title2",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    // toggleActions: "play none none none",
  },
  x: 200,
  ease: "power3.inOut",
  opacity: 0,
});

gsap.from("#Title3", 1.2, {
  scrollTrigger: {
    trigger: "#Title3",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none none",
  },
  x: -200,
  ease: "power3.inOut",
  opacity: 0,
});

gsap.from("#Title4", 1.2, {
  scrollTrigger: {
    trigger: "#Title4",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none none",
  },
  x: 200,
  ease: "power3.inOut",
  opacity: 0,
});

gsap.from("#Projects", 1.2, {
  scrollTrigger: {
    trigger: "#Projects",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none none",
  },

  y: 100,
  ease: "power3.inOut",
  opacity: 0,
});

gsap.from("#Review", 1.2, {
  scrollTrigger: {
    trigger: "#Review",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none none",
  },
  x: -200,
  ease: "power3.inOut",
  opacity: 0,
});


gsap.from("#Contact", 1.2, {
  scrollTrigger: {
    trigger: "#Contact",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none none",
  },

  y: 100,
  ease: "power3.inOut",
  opacity: 0,
});


gsap.from(".btn", 1.2,{
  scrollTrigger: {
    trigger: ".btn",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none none",
  },
  y: 100,
  ease: "power3.inOut",
  opacity: 0,
  stagger: 0.2,
  // width: 0
})


gsap.from("#Footer", 1.2, {
  scrollTrigger: {
    trigger: "#Footer",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play play play play",
  },

  y: 100,
  ease: "power3.inOut",
  opacity: 0,
});

// imgs-----------------------------------------

gsap.from("#img1", 1.5, {
  scrollTrigger: {
    trigger: " #img1",
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none none",
  },
  x: -500,
  scale: 1,
  ease: "power3.inOut",
  opacity: 0,
});




gsap.from("#img2", 1.5, {
  scrollTrigger: {
    trigger: " #img2",
    // markers: true,
    // scrub: 1,
    start: "top bottom",
    end: "bottom center",
    toggleActions: "play none none none",
  },
  // height: 0,
  scale: 0.5,
  ease: "power3.inOut",
  opacity: 1,
});

gsap.from("#img3", 1.5, {
  scrollTrigger: {
    trigger: " #img3",
    // markers: true,
    start: "top bottom",
    end: "top center",
    // scrub: 1,
    toggleActions: "play none none none",
  },
  x: -200,
  scale: 1,
  ease: "power3.inOut",
  opacity: 0,
});

gsap.from("#img4", 1.5, {
  scrollTrigger: {
    trigger: " #img4",
    // markers: true,
    start: "top bottom",
    end: "top center",
    // scrub: 1,
    toggleActions: "play none none none",
  },
  x: 200,
  scale: 1,
  ease: "power3.inOut",
  opacity: 0,
});

gsap.from("#img5", 1.5, {
  scrollTrigger: {
    trigger: " #img5",
    // markers: true,
    start: "top bottom",
    end: "top center",
    // scrub: 1,
    toggleActions: "play none none none",
  },
  x: -200,
  scale: 1,
  ease: "power3.inOut",
  opacity: 0,
});

gsap.from("#img6", 1.5, {
  scrollTrigger: {
    trigger: " #img6",
    // markers: true,
    // scrub: 1,
    start: "top bottom",
    end: "bottom center",
    toggleActions: "play none none none",
  },
  // height: 0,
  scale: 0.5,
  ease: "power3.inOut",
  opacity: 1,
});

gsap.from("#img7 ", 1.5, {
  scrollTrigger: {
    trigger: " #img7",
    // markers: true,
    start: "top bottom",
    end: "top center",
    // scrub: 1,
    toggleActions: "play none none none",
  },
  x: 200,
  scale: 1,
  ease: "power3.inOut",
  opacity: 0,
});

// img with 100 -----------------------------------------




