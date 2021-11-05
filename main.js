//Hero Parllax//
const landingParallax = document.getElementById ("openerparallax");
window.addEventListener ("scroll", function(){
    let offset = window.pageYOffset;
    landingParallax.style.backgroundPositionY = (offset * 1 + "px");
});

//Loch Ness timeline animation//
const lochTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".rowboat",
        start: "top top",
        scrub:1,
        
    }
});

lochTimeline.to(".nessie",{y:650, translatez: "500px"});


const legendTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".gallery-container",
        start: "top bottom", 
        end: "bottom: bottom",
        scrub:1,
    }
});

legendTimeline.to(".legend-title",{y:800, translatez: "250px"});

//Nav Bar Animation//
document.querySelector(".navbar-btn").addEventListener
("click", () =>{
    var element = document.querySelector(".navbar-wrapper");
    element.classList.toggle("change");
});


//Big Foot timeline animation//
const bfTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#bigfoot-page",
        start: "top top",
        scrub:1,
    }
});

bfTimeline.to("#bf-animation",{x:400, translatey: "1000px"});

