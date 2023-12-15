// Locomotive Scroll Animation
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  
  locomotiveAnimation();
  
  // Navbar Animation
  function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  
  navbarAnimation();
  
  // Loading Animation
  function loadingAnimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
  }
  
  loadingAnimation();
  
  // Cursor Animation
  function cursorAnimation() {
    document.addEventListener("mousemove", function (details) {
      gsap.to("#cursor", {
        left: details.x,
        top: details.y,
      });
    });
  
    document.querySelector("#child1").addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(0)',
      });
    });
  
    document.querySelectorAll(".child").forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(1)",
        });
      });
  
      element.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(0)",
        });
      });
    });
  
    document.querySelector("#main").addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(0)',
      });
    });
  
    document.querySelectorAll("#main").forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(1)",
        });
      });
  
      element.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(0)",
        });
      });
    });
  
    document.querySelector("#page4").addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(0)',
      });
    });
  
    document.querySelectorAll("#page4").forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(1)",
        });
      });
  
      element.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(0)",
        });
      });
    });
  
    document.querySelector("#fullScreenNav").addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(0)',
      });
    });
  
    document.querySelectorAll("#fullScreenNav").forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(1)",
        });
      });
  
      element.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%, -50%) scale(0)",
        });
      });
    });
  }
  
  cursorAnimation();
  
  // Image Carousel Animation
  const imageLinks = [
    // ... (image links)
  ];
  
  const elems = document.querySelectorAll(".elem");
  const transitionDurations = [1.3, 2.4, 3.5];
  let currentIndex = 0;
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function changePicture() {
    const shuffledLinks = shuffleArray(imageLinks);
  
    elems.forEach((element, index) => {
      const img = element.querySelector("img");
      const duration = transitionDurations[index] || 1;
  
      gsap.to(img, {
        opacity: 0.3,
        duration,
        onComplete: () => {
          img.src = shuffledLinks[index];
  
          gsap.to(img, { opacity: 1, duration });
        },
      });
    });
  }
  
  const intervalId = setInterval(changePicture, 5000);
  
  const movingBox = document.getElementById("child1");
  const movingBox2 = document.getElementById("child4");
  
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            child1,
            { left: "40%" },
            { left: "0%", duration: 2.4, ease: "power1.inOut" }
          );
  
          gsap.fromTo(
            child4,
            { right: "40%" },
            {
              right: "0%",
              duration: 3,
              repeat: 0,
              yoyo: false,
              ease: "power1.inOut",
            }
          );
  
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  
  observer.observe(movingBox);
  
  // Video URLs
  const videoUrls = [
    // ... (video URLs)
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
    var randomIndex = Math.floor(Math.random() * videoUrls.length);
    var videoElement = document.getElementById('background-video');
    videoElement.src = videoUrls[randomIndex];
  });
  
  // Navbar Toggle
  document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const fullScreenNav = document.getElementById('fullScreenNav');
  
    menuIcon.addEventListener('click', function () {
      fullScreenNav.style.display = fullScreenNav.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  // Locomotive Scroll Initialization with Navigation Links
  document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    const menuIcon = document.getElementById('menuIcon');
    const fullScreenNav = document.getElementById('fullScreenNav');
  
    const locoScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });
  
    menuIcon.addEventListener('click', function (event) {
      event.preventDefault();
      toggleNav();
    });
  
    const navLinks = document.querySelectorAll('#fullScreenNav a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        toggleNav();
  
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          locoScroll.scrollTo(targetElement);
        }
      });
    });
  
    function toggleNav() {
      fullScreenNav.style.display = fullScreenNav.style.display === 'block' ? 'none' : 'block';
    }
  });
  
  // ... (continue with other parts of the code)
  