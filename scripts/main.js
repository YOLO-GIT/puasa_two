// gsap.registerPlugin(ScrollTrigger);

// const contents = gsap.utils.toArray("#horizontal .content");

// gsap.to(contents, {
//   xPercent: -100 * (contents.length - 1),
//   scrollTrigger: {
//     trigger: "#horizontal",
//     pin: true,
//     scrub: 1,
//   },
// });

// document.addEventListener("scroll", function () {
//   let scrollPosition = window.scrollY;
//   let parallaxImg = document.querySelector(".parallax");

//   if (parallaxImg) {
//     parallaxImg.style.transform = `translateY(${scrollPosition * 0.3}px)`;
//     // Adjust 0.3 for faster/slower effect
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // Initial fade-in animation
  gsap.from(".image-card", {
    opacity: 0,
    scale: 0.8,
    y: 50,
    stagger: 0.15,
    duration: 0.8,
    ease: "power3.out",
  });

  // Hover effect for image cards
  document.querySelectorAll(".image-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.1,
        rotate: 2,
        duration: 0.3,
        ease: "power1.out",
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
    });
  });

  // Modal opening effect
  document.querySelectorAll("[data-modal-toggle]").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      let modalId = this.getAttribute("data-modal-target");
      let modal = document.getElementById(modalId);
      let modalContent = modal.querySelector(".modal-content");
      modal.classList.remove("hidden");
      gsap.to(modalContent, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    });
  });

  // Click outside to close modal
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        let modalContent = modal.querySelector(".modal-content");
        gsap.to(modalContent, {
          scale: 0.8,
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
          onComplete: () => modal.classList.add("hidden"),
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".animated-img", {
    scale: 1.1, // Slightly increase the size
    duration: 0.6, // Duration of animation
    repeat: -1, // Infinite loop
    yoyo: true, // Reverse animation after scaling up
    stagger: 0.2, // Delay between each image animation
    ease: "power1.inOut", // Smooth easing
  });
});
