
function videosfunctions(){
    var al = document.querySelector("#row1")
      
     
    al.addEventListener("mouseover",function(dets){
      
      document.querySelector(".video1").style.display = "flex";
 
      document.querySelector("#overlay").style.display = "none";
      
    })
    al.addEventListener("mouseout",function(dets){
     
     document.querySelector(".video1").style.display = "none";
     
     document.querySelector("#overlay").style.display = "flex";
     
   })


   var al = document.querySelector("#row2")
      
     
      al.addEventListener("mouseover",function(dets){
       
        document.querySelector(".video2").style.display = "flex";
        document.querySelector("#overlay").style.display = "none";
      })
      al.addEventListener("mouseout",function(dets){
       
       document.querySelector(".video2").style.display = "none";
       document.querySelector("#overlay").style.display = "flex";
     })


     var al = document.querySelector("#row3")
      
     
      al.addEventListener("mouseover",function(dets){
       
        document.querySelector(".video3").style.display = "flex";
        document.querySelector("#overlay").style.display = "none";
      })
      al.addEventListener("mouseout",function(dets){
       
       document.querySelector(".video3").style.display = "none";
       document.querySelector("#overlay").style.display = "flex";
     })
  
}

function animationwork(){

gsap.to(".create",{
    y: 0,
    
    ease : Power4,
    duration: .5,
    stagger : .1
})


gsap.to(".sld",{
  opacity: -0,
  ease : Power4,
  delay: 10,
  duration: 10,
  
  scrollTrigger: {
    trigger: ".sld",
    scroll: "main",
    start: "top 5%",
    end: "bottom",
    scrub: 2,
    // markers: true
    
  }
})

gsap.to(".create1",{
  y: 0,
  ease : Power4,
  duration: .5,
  stagger : .1,
  scrollTrigger: {
    trigger: ".create1",
    // scroll: "#heading",
    start: "top 70%",
    end: "bottom 30%",
    // markers: true
  }

})

gsap.to(".create2",{
  y: 0,
  ease : Power4,
  duration: .5,
  stagger : .1,
  scrollTrigger: {
    trigger: ".create2",
    // scroll: "#heading",
    start: "top 70%",
    end: "bottom 30%",
    // markers: true
  }

})
gsap.to(".create3",{
  y: 0,
  ease : Power4,
  duration: .5,
  stagger : .1,
  scrollTrigger: {
    trigger: ".create3",
    scroll: "#heading",
    start: "top 70%",
    end: "bottom 30%",
    // markers: true
  }

})

gsap.to(".create4",{
  y: 0,
  ease : Power4,
  duration: .5,
  stagger : .1,
  scrollTrigger: {
    trigger: ".create4",
    scroll: "#heading",
    start: "top 150%",
    end: "bottom 30%",
    // markers: true
  }

})

gsap.to(".create5",{
  y: 0,
  ease : Power4,
  duration: .5,
  stagger : .1,
  scrollTrigger: {
    trigger: ".create5",
    scroll: "#heading",
    start: "top 70%",
    end: "bottom 30%",
    // markers: true
  }

})


}

function navbaranimation(){
  var lasttop = 0;
  navbar = document.querySelector(".navbar");
  window.addEventListener("scroll",function(){
      var scrolltop = window.pageYOffset || document.documentElement.scrolltop;
      
      if(scrolltop > lasttop){
          navbar.style.top ="-80px";

      }
      else{
          navbar.style.top = "0";
      }
      lasttop = scrolltop;

  })
}

function locomotiveanimation(){
gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

gsap.to(".create",{
  y: 0,
  
  ease : Power4,
  duration: .5,
  stagger : .1
})


gsap.to(".sld",{
opacity: 0,
ease : Power4,
delay: 2,
duration: 100,

scrollTrigger: {
  trigger: ".sld",
  scroll: "main",
  start: "top top",
  end: "bottom 80%",
  scrub: 2,
  
}
})

gsap.to(".create1",{
y: 0,
ease : Power4,
duration: .5,
stagger : .1,
scrollTrigger: {
  trigger: ".create1",
  // scroll: "#heading",
  start: "top 70%",
  end: "bottom 30%",
  // markers: true
}

})

gsap.to(".create2",{
y: 0,
ease : Power4,
duration: .5,
stagger : .1,
scrollTrigger: {
  trigger: ".create2",
  // scroll: "#heading",
  start: "top 70%",
  end: "bottom 30%",
  // markers: true
}

})
gsap.to(".create3",{
y: 0,
ease : Power4,
duration: .5,
stagger : .1,
scrollTrigger: {
  trigger: ".create3",
  scroll: "#heading",
  start: "top 70%",
  end: "bottom 30%",
  // markers: true
}

})

gsap.to(".create4",{
y: 0,
ease : Power4,
duration: .5,
stagger : .1,
scrollTrigger: {
  trigger: ".create4",
  scroll: "#heading",
  start: "top 150%",
  end: "bottom 30%",
  // markers: true
}

})

gsap.to(".create5",{
y: 0,
ease : Power4,
duration: .5,
stagger : .1,
scrollTrigger: {
  trigger: ".create5",
  scroll: "#heading",
  start: "top 70%",
  end: "bottom 30%",
  // markers: true
}

})



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}



// locomotiveanimation();



videosfunctions();
animationwork();
navbaranimation();