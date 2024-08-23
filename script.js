function loadingAnimation(){
    var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
});

tl.from("#line1-part1",{
    opacity:0,
    onStart: function(){
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function (){
            if(grow < 100) {
                h5timer.innerHTML = grow++;
            }
            else {
                h5timer.innerHTML = grow;
            }
        }, 33);
    },
});

tl.to(".line h2",{
    animationName: "anime",
    opacity:1
})

tl.to("#loader",{
    top: -1000,
    duration:2,
    ease: Expo.easeInOut
});

tl.to("#green",{
    height: "100vh",
    duration: 2,
    delay: -2.25,
    ease: Expo.easeInOut
})

tl.to("#page-1",{
    height: "100vh",
    duration: 2,
    delay: -1.75,
    ease: Expo.easeInOut
})


}

loadingAnimation()
  
function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");
}

cursorAnimation(); 

    
