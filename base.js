gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer) 

const tl = gsap.timeline();
let textElement = document.getElementById("w")

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
    onUpdate: ({ progress}) => {prg = progress},
    pin: true,
    markers: true,
    end: () => `+=${document.getElementById("main").offsetHeight * 10}`,
    onUpdate: self => {
      // Получаем прогресс прокрутки
      const progress = self.progress.toFixed(2);
  
      // Здесь вы можете использовать прогресс для изменения текста с анимацией
      if (progress < 0.3) {
        gsap.to(textElement, { 
          textContent: "ВСЕ В ТВОИХ РУКАХ", 
          ease: "power3.out", 
          duration: 0.5 
        });
      } else if (progress > 0.3 && progress < 0.6) {
        gsap.to(textElement, { 
          textContent: "ЛОМАЙ РАМКИ", 
          ease: "power3.out", 
          duration: 0.5 
        })}else {
          gsap.to(textElement, { 
            textContent: "МЕНЯЙ МИР", 
            ease: "power3.out", 
            duration: 0.5 

        }

        );
      }
    }
  },
  
});
  

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
