function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "23vh",
      duration: 0.3,
      ease: "power1.out",
    });

    tl.set(".nav-part2 h5", { display: "block" });

    tl.to(".nav-part2 h5 span", {
      y: 0,
      duration: 0.3,
      stagger: { amount: 0.5 },
      ease: "power2.out",
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();

    tl.to(".nav-part2 h5 span", {
      y: 25,
      duration: 0.2,
      stagger: { amount: 0.3 },
      ease: "power1.in",
    });

    tl.set(".nav-part2 h5", { display: "none", delay: 0.3 });

    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
      ease: "power1.inOut",
    });
  });
}

navAnimation();
