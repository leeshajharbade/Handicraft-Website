function loader(){
    var tl = gsap.timeline();
tl
.to("#L8",{
    height: 0,
    duration: 1.5,
    delay: 3,
    ease: Power1.easeInOut
})
.to("#L7",{
    height: 0,
    duration: 1.5,
    delay:-1.2,
    ease: Power1.easeInOut
})
.to("#L6",{
    height: 0,
    duration: 1.5,
    delay:-1.2,
    ease: Power1.easeInOut
})
.to("#L5",{
    height: 0,
    duration: 1.5,
    delay:-1.2,
    ease: Power1.easeInOut
})
.to("#L4",{
    height: 0,
    duration: 1.5,
    delay:-1.2,
    ease: Power1.easeInOut
})
.to("#L3",{
    height: 0,
    duration: 1.5,
    delay:-1.2,
    ease: Power1.easeInOut
})
.to("#L2",{
    height: 0,
    duration: 1.5,
    delay:-1.2,
    ease: Power1.easeInOut
})
.to("#L1",{
    height: 0,
    duration: 1.5,
    delay:-1.2,
    ease: Power1.easeInOut
})
}
loader();

function loading(){
    var t2 = gsap.timeline();
t2
.to("#loading span",{
    duration: 0.5,
    top:0,
    stagger:0.1,
    delay:0.5,
    ease: Power1.easeInOut
})
.to("#loading span",{
    duration: 0.5,
    top:"-3.5vw",
    stagger:0.1,
    ease: Power1.easeInOut
})
.to("#L8 #line",{
    duration: 1,
    left:"0vw",
    delay:-3,
    ease: Power1.easeInOut
})
.to("#L8 #line",{
    duration: 1,
    delay:-1.5,
    left:"14vw",
    ease: Power1.easeInOut
})
}
loading();

function landingpage(){
    var t3 = gsap.timeline();
t3
.to("#logo",{
    y:"-315px",
    x:"-655px",
    duration:2,
    delay:10,
    ease: Power1.easeInOut,
    height:"7vw",
    width:"10vw",
    
})
.from("#menu",{
    opacity:0,
    delay:-0.3,
    ease: Power1.easeInOut
})
.from("#one i",{
    opacity:0,
    delay:-0.4,
    ease: Power1.easeInOut
})
.from("#created",{
    y:"40px",
    opacity:0,
    duration:1,
    ease: Power1.easeInOut
})
.from("#inner-one > h1",{
    y:"40px",
    opacity:0,
    delay:-0.7,
    duration:1,
    ease: Power1.easeInOut
})
.from("#circle",{
    y:"40px",
    opacity:0,
    ease: Power1.easeInOut,
    duration: 1,
    delay:-0.5
})

var i1 = document.querySelector("#one #menu");
var i2 = document.querySelector("#nav i");
var nav = document.querySelector("#nav");
var body = document.querySelector("body");

i1.addEventListener("click", function(){
    nav.style.display = "initial";
    nav.style.transition = "ease 10s";
    i1.style.cursor = "pointer";
    body.style.overflow = "hidden";
    nav.style.zIndex = "1";

})

i2.addEventListener("click", function(){
    nav.style.display = "none";
    nav.style.transition = "ease 10s";
    i2.style.cursor = "pointer";
    body.style.overflow = "initial";
})
}
landingpage();

gsap.to("#circle",{
    top: "45vw",
    left: "10%",
    width: "80vw",
    height: "38vw",
    borderRadius: "280px",
    ease: Power3.easeIn,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#circle",
        start: "top 45%",
    }
})


var i1 = document.querySelector("#b1 img");

i1.addEventListener("mouseenter", function(){
    i1.style.scale = "1.1";
    i1.style.transition = "ease 0.8s";
    i1.style.cursor = "pointer";
})

i1.addEventListener("mouseleave", function(){
    i1.style.scale = "initial";
    i1.style.cursor = "initial";
})

var i2 = document.querySelector("#b2 img");

i2.addEventListener("mouseenter", function(){
    i2.style.scale = "1.1";
    i2.style.transition = "ease 0.8s";
    i2.style.cursor = "pointer";
})

i2.addEventListener("mouseleave", function(){
    i2.style.scale = "initial";
    i2.style.cursor = "initial";
})

var i3 = document.querySelector("#b3 img");

i3.addEventListener("mouseenter", function(){
    i3.style.scale = "1.1";
    i3.style.transition = "ease 0.8s";
    i3.style.cursor = "pointer";
})

i3.addEventListener("mouseleave", function(){
    i3.style.scale = "initial";
    i3.style.cursor = "initial";
})

var i4 = document.querySelector("#b4 img");

i4.addEventListener("mouseenter", function(){
    i4.style.scale = "1.1";
    i4.style.transition = "ease 0.8s";
    i4.style.cursor = "pointer";
})

i4.addEventListener("mouseleave", function(){
    i4.style.scale = "initial";
    i4.style.cursor = "initial";
})

var i5 = document.querySelector("#c2 img");

i5.addEventListener("mouseenter", function(){
    i5.style.scale = "1.1";
    i5.style.transition = "ease 0.8s";
    i5.style.cursor = "pointer";
})

i5.addEventListener("mouseleave", function(){
    i5.style.scale = "initial";
    i5.style.cursor = "initial";
})


console.clear();

gsap.utils.toArray(".cardCont").forEach(function(card) {
  gsap.set(card, {
    transformStyle: "preserve-3d",
    transformPerspective: 1000
  });
  const q = gsap.utils.selector(card);
  const front = q(".cardFront");
  const back = q(".cardBack");
  
  gsap.set(back, { rotationY:-180 });
  
  const tl = gsap.timeline({ paused: true })
    .to(front, { duration: 1, rotationY: 180 })
    .to(back, { duration: 1, rotationY: 0 }, 0)
    .to(card, { z: 50 }, 0)
    .to(card, { z: 0 }, 0.5);
  card.addEventListener("mouseenter", function() {
    tl.play();
  });
  card.addEventListener("mouseleave", function() {
    tl.reverse();
  });
});



var close1 = document.querySelector("#close1")
var close2 = document.querySelector("#close2")
var close3 = document.querySelector("#close3")
var close4 = document.querySelector("#close4")
var close5 = document.querySelector("#close5")
var close6 = document.querySelector("#close6")
var close7 = document.querySelector("#close7")
var close8 = document.querySelector("#close8")

var modal1 = document.querySelector("#modal1");
var modal2 = document.querySelector("#modal2");
var modal3 = document.querySelector("#modal3");
var modal4 = document.querySelector("#modal4");
var modal5 = document.querySelector("#modal5");
var modal6 = document.querySelector("#modal6");
var modal7 = document.querySelector("#modal7");
var modal8 = document.querySelector("#modal8");

var p1 = document.querySelector("#p1 p");
var img1 = document.querySelector("#p1 img");
var p2 = document.querySelector("#p2 p");
var img2 = document.querySelector("#p2 img");
var p3 = document.querySelector("#p3 p");
var img3 = document.querySelector("#p3 img");
var p4 = document.querySelector("#p4 p");
var img4 = document.querySelector("#p4 img");
var p5 = document.querySelector("#p5 p");
var img5 = document.querySelector("#p5 img");
var p6 = document.querySelector("#p6 p");
var img6 = document.querySelector("#p6 img");
var p7 = document.querySelector("#p7 p");
var img7 = document.querySelector("#p7 img");
var p8 = document.querySelector("#p8 p");
var img8 = document.querySelector("#p8 img");



img1.addEventListener("click",function(){
    modal1.style.display = "initial"
})
p1.addEventListener("click",function(){
    modal1.style.display = "initial"
})
close1.addEventListener("click",function(){
    modal1.style.display = "none"
})

img2.addEventListener("click",function(){
    modal2.style.display = "initial"
})
p2.addEventListener("click",function(){
    modal2.style.display = "initial"
})
close2.addEventListener("click",function(){
    modal2.style.display = "none"
})

img3.addEventListener("click",function(){
    modal3.style.display = "initial"
})
p3.addEventListener("click",function(){
    modal3.style.display = "initial"
})
close3.addEventListener("click",function(){
    modal3.style.display = "none"
})

img4.addEventListener("click",function(){
    
    modal4.style.display = "initial"
})
p4.addEventListener("click",function(){
    modal4.style.display = "initial"
})
close4.addEventListener("click",function(){
    modal4.style.display = "none"
})

img5.addEventListener("click",function(){
    modal5.style.display = "initial"
})
p5.addEventListener("click",function(){
    modal5.style.display = "initial"
})
close5.addEventListener("click",function(){
    modal5.style.display = "none"
})

img6.addEventListener("click",function(){
    modal6.style.display = "initial"
})
p6.addEventListener("click",function(){
    modal6.style.display = "initial"
})
close6.addEventListener("click",function(){
    modal6.style.display = "none"
})

img7.addEventListener("click",function(){
    modal7.style.display = "initial"
})
p7.addEventListener("click",function(){
    modal7.style.display = "initial"
})
close7.addEventListener("click",function(){
    modal7.style.display = "none"
})

img8.addEventListener("click",function(){
    modal8.style.display = "initial"
})
p8.addEventListener("click",function(){
    modal8.style.display = "initial"
})
close8.addEventListener("click",function(){
    modal8.style.display = "none"
})