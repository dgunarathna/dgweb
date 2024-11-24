


//preloader


gsap.from(".letter", 0.8,{
  y: 20,
  opacity: 0,
  ease: "power3.inOut",
  stagger: 0.1,
});


// gsap.to(".top-left, .top-right", 2,{
//   top: "0",
//   ease: "power3.inOut",
//   delay: 2,
// });

gsap.to(".bottom-left, .bottom-right", 2,{
  bottom: "0%",
  ease: "power3.inOut",
  delay: 1,
});


gsap.to(".top-left", 2,{
  // left: "-100",
  ease: "power3.inOut",
  delay: 0.8,
  opacity: 0,
});

gsap.to(".top-right", 2,{
  // right: "-100",
  ease: "power3.inOut",
  delay: 0.8,
  opacity: 0,
});

gsap.to(".bottom-left", 2,{
  // left: "-100",
  ease: "power3.inOut",
  delay: 0.8,
  opacity: 0,
});

gsap.to(".bottom-right", 2,{
  // right: "-100",
  ease: "power3.inOut",
  delay: 0.8,
  opacity: 0,
});



gsap.to(".block-left", 2,{
  left: "-50%",
  ease: "power3.inOut",
  delay: 1,
});


gsap.to(".block-right", 2,{
  right: "-50%",
  ease: "power3.inOut",
  delay: 1,
});



// preloader

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










gsap.from(".reveler", 1,{
  width: "0",
  ease: "power3.inOut",
  delay: 0,
})


gsap.to(".reveler", 0.8,{
  left: "100%",
  ease: "power3.inOut",
  delay: 1,
})


// animation-----------------------------------------
// Home-----------------------------------------
gsap.from(" .block", 1.2, {
  scrollTrigger: {
    trigger: " .block",
    // markers: true,
  },
  width: "0px",
  // scale: 1,
  ease: "power3.inOut",
  delay: 2.2,
  stagger: 0.2,
});


gsap.from(".text", 1.2, {
  scrollTrigger: {
    trigger: ".text",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none none",
  },

  y: 30,
  ease: "power3.inOut",
  opacity: 0,
  delay: 2.5,
  
});


gsap.from(".header1", 1.2, {
  scrollTrigger: {
    trigger: ".header1",
    // scrub: 1,
    // markers: true,
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none none",
  },

  y: -30,
  ease: "power3.inOut",
  opacity: 0,
  delay: 2,
  
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
  delay: 1,
  
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

gsap.from("#Titlepersona", 1.2, {
  scrollTrigger: {
    trigger: "#Titlepersona",
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

gsap.from("#Title5", 1.2, {
  scrollTrigger: {
    trigger: "#Title5",
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

gsap.from("#Title6", 1.2, {
  scrollTrigger: {
    trigger: "#Title6",
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
  delay: 0.5
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
  delay: 1,
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

gsap.from("#imgpersona", 1.5, {
  scrollTrigger: {
    trigger: " #imgpersona",
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

gsap.from("#img7, #video7 ", 1.5, {
  scrollTrigger: {
    trigger: " #img7, #video7",
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


gsap.from("#img8", 1.5, {
  scrollTrigger: {
    trigger: " #img8",
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


// img with 100 -----------------------------------------



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


// var video = document.getElementById("video1");
// video.addEventListener("canplay", function() {
//   setTimeout(function() {
//     video.play();
//   }, 5500);
// });



// function videoPlay() {
//   const video = document.querySelector("video"); // Select the video element
//   if (video) {
//       video.muted(); // Play the video
//   }
// }

// function videoPause() {
//   const video = document.querySelector("video"); // Select the video element
//   if (video) {
//       video.muted(); // Pause the video
//   }
// }


const unmuteVideo = ()=>{
  let x = document.querySelector(".video")
  x.muted = false;
  
}


const muteVideo = ()=>{
  let x = document.querySelector(".video")
  x.muted = true;
}