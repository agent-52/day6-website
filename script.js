
/////
const circle1 = document.querySelector(".circleBoxText")
console.log()
circle1.innerHTML = circle1.textContent.split("").map((element,i)=>`<span style="transform:rotate(${i*13.2}deg)">${element}</span>`).join("")

const circle2 = document.querySelector(".circleBoxText1")
console.log()
circle2.innerHTML = circle2.textContent.split("").map((element,i)=>`<span style="transform:rotate(${i*13.2}deg)">${element}</span>`).join("")
///////

const blackCircle = document.querySelector(".black")
const whiteCircle = document.querySelector(".white")
const blueCircle = document.querySelector(".blue")
const page1Head = document.querySelector(".page1Left")





/////////////
blackCircle.addEventListener("mouseenter",()=>{
  document.querySelector("body").classList.add("vBlack");
  document.querySelector("body").classList.remove("vWhite");
  document.querySelector("body").classList.remove("vBlue")
  circle1.style = "color:black"
})

whiteCircle.addEventListener("mouseenter",()=>{
  document.querySelector("body").classList.add("vWhite");
  document.querySelector("body").classList.remove("vBlack");
  document.querySelector("body").classList.remove("vBlue")
  circle1.style = "color:black"
})

blueCircle.addEventListener("mouseenter",()=>{
  document.querySelector("body").classList.add("vBlue");
  document.querySelector("body").classList.remove("vBlack")
  document.querySelector("body").classList.remove("vWhite")
  circle1.style = "color:#6A87A5"
})


const tl = gsap.timeline()
tl.from(".page1Left>div",{
  x:500,
  opacity:0,
  duration:1,
  stagger:0.3
})
tl.from(".circleTextContainer",{
  scale:0,
  opacity:0
})
tl.from(".mainimgBox",{
  duration:1.5,
  opacity:0,
  rotate:-20,
})
gsap.to(".slider1Text",{
  xPercent:-100,
  duration:30,
  repeat:-1,
  ease: "linear",
  yoyo:true
})

gsap.from(".page3Head>div", {
  stagger:0.2,
  opacity:0,
  x:300,
  duration:1.2,
  scrollTrigger:{
    scrub:1,
    // markers:true,
    trigger:".page3",
    scroller:"body",
    end:"70% center"
  },

})
gsap.from(".circle3",{
  opacity:0,
  ease: "bounce.out",
  y: -500,
  stagger:0.3,
  duration:1,
  scrollTrigger:{
    trigger:".page3",
    scroller:"body",
    start:"top top",
    // markers:true,
  }

})

//////
const cursorTriangle = document.querySelector(".cursorTriangle")

window.addEventListener("mousemove", (e)=>{
  let x = e.clientX;
  let y = e.clientY;

  gsap.set(cursorTriangle, {
    x:x,
    y:y,
  })
})