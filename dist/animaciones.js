const timeLine = gsap.timeline({
  defaults: {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: Power4.easeOut,
  },
});

const animation = document.querySelector(".animacion");
const animation2 = document.querySelector(".animacion2");
const images = document.querySelector(".images");
const botones = document.querySelector(".botones");
const botones2 = document.querySelector(".botones2");
//Para parrafos
const parrafo = document.querySelector(".parrafo");
const parrafo2 = document.querySelector(".parrafo2");

timeLine
  .from(animation, {
    x: 50,
    stagger: 0.3,
  })
  .from(animation2, { x: -50, stagger: 0.3 }, "-=1.3")
  .from(images, { y: 60, stagger: 0.3 }, "-=1.5")
  .from(botones, { y: 90, stagger: 0.3 }, "-=1.8")
  .from(botones2, { x: -90, stagger: 0.3 }, "-=1.9")
  .from(parrafo, { y: 300, stagger: 0.3 }, "-=2.0")
  .from(parrafo2, { y: 700, stagger: 0.3 }, "-=2.2");
