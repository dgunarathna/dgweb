var windowWidth = $(window).width();

$('.page-container').mousemove(function(event) {

    var moveX =(($(window).width()/2) - event.pageX) * 0.2;
    var moveY =(($(window).height()/2) - event.pageY) * 0.2;
    $('.canvas').css('margin-left', moveX + 'px');
    $('.canvas').css('margin-top', moveY + 'px');

});


var blocks = document.querySelectorAll(".block");

blocks.forEach(function(block) {
    block.addEventListener("click", function() {
        var url = block.getAttribute("data-url");
        window.location.href = url;
    });
});




// animation


// var textWrapper = document.querySelector('.header-1, h1,h2,h3,h4,h5,h6,p,label, .form-control, .btn, .imgs');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


// anime.timeline()
// .add({
//     targets: '.header-1, h1,h2,h3,h4,h5,h6,p,label, .form-control, .btn .letter, .imgs',
//     scrollTrigger: {
//         trigger: "h1 .imgs",
//         toggleActions: "restart pause resume pause"

//     },
//     translateY: [100,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 2000,
//     toggleActions: "restart pause reverse pause",
//     delay: (el, i) => 100 + 50 * i
// });




// gsap.registerPlugin(ScrollTrigger); 

// gsap.to(".btn", {
//     scrollTrigger: {
//         trigger: ".imgs",
//         toggleActions: "restart pause reverse restart"
//     },
//     y: -50,
//     duration:3,
//   });



// gsap.to(".imgs", {
//     scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
//     y: -50,
//     duration:1,
//     translateY: [100,0],
//     translateZ: 0,
//     opacity: [0,1],
//     });

  

// gsap.to("h1, h3", {
//     scrollTrigger: {
//         trigger: "h1, h3",
//         scrub: true,
//         toggleActions: "restart pause resume pause"

//     },
//     x: 100,
//     duration: 2,
//     });



// gsap.from("h1,h2,h3,h4,h5,h6,p,label, .form-control, btn, .letter, .imgs, .block", 2, {
//         scrollTrigger: {
//             trigger: "h1,h2,h3,h4,h5,h6,p,label, .form-control, btn, .letter, .imgs, .block",
//             // scrub: true,
//             toggleActions: "restart pause resume pause"

//         },
//     y: "30px",
//     opacity: 0,
//     ease: "power4.inOut",
//     delay: 0,
//     stagger:{
//         amount: 0,
//     },
// });





// gsap.from(".header-1, h1,h2,h3,h4,h5,h6,p,label, .form-control, btn, .imgs,  .line",  2, {
//     scrollTrigger: {
//         trigger: ".header-1, h1,h2,h3,h4,h5,h6,p,label, .form-control, btn, .imgs, .line",
//         toggleActions: "restart none none none",
//     },
//     y: "0px",
//     opacity: 0,
//     ease: "power3.inOut",
//     delay: 1,
//     duration: 0,
// });






// gsap.from(" .imgs, .block, .line", 2, {
//     scrollTrigger: {
//         trigger: " .imgs, .block, .line",
//         scrub: true,
//         toggleActions: "restart none reverse pause"
//     },
//     width: "30%",
//     ease: "power3.inOut",
//     delay: 1,
//     duration: 1,
// });






// gsap.from(" .btn ", 2, {
//     scrollTrigger: {
//         trigger: ".btn",
//         toggleActions: "restart none reverse pause"
//     },
//     y: "100px",
//     width: "20%",
//     ease: "power3.inOut",
//     delay: 1.,
//     duration: 0,
//     opacity: 0,
//     stagger:{
//         amount: 0,
//             opacity: 0
//     },
// });










// gsap.from(" .reveler ", 1, {
//     height: "100",
//     ease: "power3.inOut",
//     delay: 0,

// });


// gsap.to(" .reveler ", 0.8, {
//     top: "100%",
//     ease: "power3.inOut",
//     delay: 1,
//     opacity: 0,

// });


// gsap.from(".imgs", {
//         scrollTrigger: {
//         trigger: ".imgs",
//         scrub: 1,
//         // toggleActions: "restart none reverse pause"
//     },
//     // width: "0%",
//     // height: "0%",
//     y: "30px",
//     ease: "power3.inOut",
//     });

// gsap.to(".imgs", {
//     scrollTrigger: {
//         trigger: ".imgs",
//         scrub: 1,
//         // toggleActions: "restart none reverse pause"
//     },
//     // width: "100%",
//     // height: "100%",
//     y: "0px",
//     ease: "power3.inOut",
//     });




    // gsap.to(".imgs", {
    //     scrollTrigger: {
    //         trigger: ".imgs",
    //         scrub: 1,
    //         start: "bottom center",
    //     },
    //      x: 500,
    //      width: "0%",
    //      rotation: 180,
    //      duration: 9,
    //      stagger: 0.8,
    //      delay: 0,
    //     });