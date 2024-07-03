gsap.to(".slide", {
    transform: 'translate(-300%)',
    duration: 2,
    scrollTrigger: {
        trigger: ".slide",
        start: "top 0",
        end: "+=2500",
        scrub: 0.3,
    }
})

var tl = gsap.timeline({
    repeat: -1
})

tl.to(".banner-img", {
    transform: 'translateX(-100%)',
    duration: 1,
    ease: "power4"
}, "+=2")

tl.to(".banner-img", {
    transform: 'translateX(-200%)',
    duration: 1,
    ease: "power4"
}, "+=2")

tl.to(".banner-img", {
    transform: 'translateX(-300%)',
    duration: 1,
    ease: "power4"
}, "+=2")

tl.to(".banner-img", {
    transform: 'translateX(-400%)',
    duration: 1,
    ease: "power4"
}, "+=2")