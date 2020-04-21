$(document).ready(function(){
    gsap.to("#logo", {duration: 1, x: 15, opacity: 1});
    gsap.from(".gallery-item", 1, { opacity: 0, y: 150, duration: 1.25, stagger: 0.25, delay: 0 })
    var tl = new TimelineMax({ onComplete: selectNextElement }) ;
    tl.from(".load-cir", 1, {
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        repeat: 1.5,
        yoyo: true,
        autoAlpha: 0
    })
});
$("#browseBtn").mouseover(
    function(){
        gsap.to('#browseBtn', 1, {scale: 1.2, ease: "elastic"});
    }
).mouseout(
    function(){
        gsap.to('#browseBtn', 1, {scale: 1, ease: "elastic"});
    }
);
$(".gallery-btn").mouseover(
    function(){
        gsap.to('.gallery-btn', 1, {scale: 1.3, ease: "elastic"});
    }
).mouseout(
    function(){
        gsap.to('.gallery-btn', 1, {scale: 1, ease: "elastic"});
    }
);
$(".dropbtn").mouseover(
    function(){
        gsap.to(".dropdown-content", 1, { opacity: 1, y: -10, duration: 1, delay: 0 })
    }
).mouseout(
    function(){
        gsap.to(".dropdown-content", 1, { opacity: 1, y: 0, duration: .25, delay: 0 })
    }
);
function selectNextElement() {
    gsap.to("#loadingDiv", {duration: .25, opacity: 0, display: "none"});
}

