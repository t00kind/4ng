gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer) 

const tl = gsap.timeline(); 

ScrollTrigger.defaults({
  scroller: ".main"
});

tl.to(".centered", {
  scrollTrigger: {
    trigger: ".centered",
    start: () => `+= ${window.innerHeight}`,
    scrub: true,
    // toggleActions: "restart none reverse none"
    },
  top: "5%",
  fontSize: "5vh",
  duration: 3,
  // fontFamily: 'Jetbrains Mono'

  })
  .to("#main", {
  scrollTrigger: {
    trigger: "#main",
    toggleActions: "restart none none none reverse",
    scrub: 3
  },
  opacity: 1,
  duration: 7,
})
.to('#create', {
  scrollTrigger: {
    trigger: "#create",
    start: "center center",
    onUpdate: ({ progress}) => {console.log(progress)},
    pin: true,
    markers: true,
    end: "+=1700"
  },
  
})
  

// Observer.create({
//   target: window, // can be any element (selector text is fine)
//   type: "wheel,touch", // comma-delimited list of what to listen for
//   ignore: "#main",
//   onPress: () => {alert("DONT TOUCH IT!!")}
// });

// gsap.to("#co", {
//   scrollTrigger: {
//     trigger: "#co",
//   },
//   duration: 3,
//   scrub: true,
//   onLeave: () => {document.body.style="background: white; color: black"}

// });
