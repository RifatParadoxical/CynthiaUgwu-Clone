const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

function mouseChapta() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0 ;
  var yprev = 0 ;
  document.addEventListener("mousemove", function(event){
    clearTimeout()
    var xdiff = event.clientX - xprev;
    xprev = event.clientX;

    var ydiff = event.clientY - yprev;
    yprev = event.clientY;
    var xchapta = gsap.utils.clamp(0.8, 1.2, xdiff)
    var ychapta = gsap.utils.clamp(0.8, 1.2, ydiff)
    circleCursor(xchapta, ychapta)
    timeout = setTimeout(() => {
      document.querySelector(".cursor").style.transform = `translate(${event.clientX}px , ${event.clientY}px) scale(1,1)`
    }, 50);
  })
}
mouseChapta()

function circleCursor( xchapta, ychapta){
  window.addEventListener("mousemove", function(event){
    document.querySelector(".cursor").style.transform = `translate(${event.clientX}px , ${event.clientY}px) scale(${xchapta}, ${ychapta})`
  })
}
circleCursor();


function firstPageAnim(){
  var tl = gsap.timeline();
  tl.from("nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
  })
  .to(".boundingelem",{
    y:0,
    ease: Expo.easeInOut,
    duration: 2,
    delay: -1,
    stagger: .2
  })
  .from(".footer", {
    y: -10,
    opacity: 0,
    duration:1.5,
    ease: Expo.easeInOut,
    delay: -1
  })
}
firstPageAnim()

function projectpage(){

  document.querySelectorAll(".elem").forEach(function(elem) {
    elem.addEventListener("mouseover", function(event) {
        var imgHeight = elem.querySelector('img').offsetHeight;
        var imgWidth = elem.querySelector('img').offsetWidth;
  
        var topPosition = event.clientY - elem.getBoundingClientRect().top - (imgHeight / 2);
        var leftPosition = event.clientX - (imgWidth / 2); 
  
        gsap.to(elem.querySelector('img'), {
            opacity: 1,
            ease: Power1,
            top: topPosition,
            left: leftPosition,
            scale: 0.8
        });
        gsap.to(elem.querySelector('h1'), {
          x: 100
      });
      gsap.to(document.querySelector('.cursor'), {
      //  scale: 9,
       height: '100px',
       width: '100px',
       duration: 1
    });

    document.querySelector('.cursor').textContent = "VIEW"
    });
  
    elem.addEventListener("mouseleave", function(event) {
        gsap.to(elem.querySelector('img'), {
            opacity: 0,
            ease: Power1,
        });
        gsap.to(elem.querySelector('h1'), {
          x: 0
      });
      gsap.to(document.querySelector('.cursor'), {
        // scale: 1,
        height:'1rem',
        width:'1rem',
        duration: 1
     });
         document.querySelector('.cursor').textContent = ""
    });
  });
}
projectpage()