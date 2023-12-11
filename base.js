gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);
ScrollTrigger.defaults({
  scroller: ".main"
});

const tl = gsap.timeline();
let textElement = document.getElementById("w")
let topg = "change the "
let mm = gsap.matchMedia()

mm.add("(max-width: 500px)", () => {

  topg = "change the "
  tl.to("#logo", {
    scrollTrigger: {
      trigger: "#logo",
      start: () => `+= ${window.innerHeight}`,
      scrub: true,
      
      // toggleActions: "restart none reverse none"
      },
    fontSize: "4vh"
    })
    gsap.to("#topG", {
      scrollTrigger: {
        trigger: "#topG",
        start: () => `+= ${window.innerHeight}`,
        scrub: true,
        
        // toggleActions: "restart none reverse none"
        },
      top: "2.88%",
      // fontFamily: 'Jetbrains Mono'
    
      })
});
mm.add("(min-width: 501px)", () => {

  topg = "change the "
  tl.to("#logo", {
    scrollTrigger: {
      trigger: "#logo",
      start: () => `+= ${window.innerHeight}`,
      scrub: true,
      
      // toggleActions: "restart none reverse none"
      },
    fontSize: "5vh"
    })
    gsap.to("#topG", {
      scrollTrigger: {
        trigger: "#topG",
        start: () => `+= ${window.innerHeight}`,
        scrub: true,
        
        // toggleActions: "restart none reverse none"
        },
      top: "3.6%",
      // fontFamily: 'Jetbrains Mono'
    
      })
});
  

tl
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
    pin: true,
    scrub: true,
    end: () => `+=${document.getElementById("main").offsetHeight * 30}`,
    onToggle: (self) => (f = self.isActive),
    onUpdate: self => {
      // Получаем прогресс прокрутки
      const progress = self.progress.toFixed(2);
  
      if (progress < 0.3) {
        // tl.to("#what", {
        //   textContent: "yourself",
        // }).fromTo(textElement, {opacity: 0}, { 
        //   textContent: "ВСЕ В ТВОИХ РУКАХ", 
        //   opacity: 1
        // });
        document.getElementById("what").textContent = "yourself";
        document.getElementById("w").textContent = "ВСЕ В ТВОИХ РУКАХ";
        document.getElementById("log").textContent = "change ";
      } else if (progress > 0.3 && progress < 0.6) {
      
        document.getElementById("what").textContent = "your life"
        document.getElementById("w").textContent = "ЛОМАЙ РАМКИ"
        document.getElementById("log").textContent = "change "
      }else if (progress > 0.6){
          document.getElementById("what").textContent = "world"
          document.getElementById("log").textContent = topg
          document.getElementById("w").textContent = "МЕНЯЙ МИР"


      }
  },
  onLeave: () => {
    gsap.fromTo("#logo", {textContent: "change"}, {
      opacity: 1,
      textContent: "changing",
      fontFamily: 'Jetbrains Mono',
      scrollTrigger: {
        trigger: "#trgg",
        scrub: true
      },
    })
    gsap.to(".main", {
      background: "red",
      duration: 2
    });
  }
  }
}).to("#now",{
  scrollTrigger: {
    trigger: "#now", 
    start: "center center",
    pin: true,
    onUpdate: self => {
      // Получаем прогресс прокрутки
      const progress = self.progress.toFixed(2);
  
      // Здесь вы можете использовать прогресс для изменения текста с анимацией
      if (progress > 0.5 && !an) {
        gsap.fromTo("#now", {opacity: 0},{ 
          textContent: "ТО ТОЛЬКО СЕЙЧАС", 
          ease: "power3.out", 
          duration: 2,
          opacity: 1
          
        });
        an = true
      } else if (progress < 0.5){
        gsap.to("#now", { 
          textContent: "И ЕСЛИ УЖ МЕНЯТЬ", 
          ease: "power3.out", 
          duration: 2,
        });
        an = false;
      }
    },
    end:  () => `+=${document.getElementById("main").offsetHeight * 10}`}});

  

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
