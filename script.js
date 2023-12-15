function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveAnimation();

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


function loadinganimation() {
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

loadinganimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  // document.querySelector("#child1").addEventListener("mouseenter",function(){

  // })

  document.querySelector("#child1").addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });

  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}

document.querySelector("#main").addEventListener("mouseleave", function () {
  gsap.to("#cursor", {
    transform: "translate(-50%,-50%) scale(0)",
  });
});

document.querySelectorAll("#main").forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
});

document.querySelector("#page4").addEventListener("mouseleave",function(){
  gsap.to("#cursor",{
    transform: 'translate(-50%,-50%) scale(0)'
  })
})

document.querySelectorAll("#page4").forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
});

cursorAnimation();


//================================================================================================

// JavaScript array with image links
const imageLinks = [
  "https://images.pexels.com/photos/1552102/pexels-photo-1552102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/11385975/pexels-photo-11385975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3823188/pexels-photo-3823188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4324052/pexels-photo-4324052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/13106593/pexels-photo-13106593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4164650/pexels-photo-4164650.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/4401649/pexels-photo-4401649.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/4401813/pexels-photo-4401813.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/4608146/pexels-photo-4608146.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/7672103/pexels-photo-7672103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];


const elems = document.querySelectorAll(".elem");
const transitionDurations = [1.3, 2.4, 3.5]; // Add your desired durations here

let currentIndex = 0;

// Function to shuffle array elements
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to change the picture with fade-in and fade-out
function changePicture() {
  const shuffledLinks = shuffleArray(imageLinks);

  elems.forEach((elem, index) => {
    const img = elem.querySelector("img");
    const duration = transitionDurations[index] || 1; // Use the provided duration or default to 1

    // Fade out the current image
    gsap.to(img, {
      opacity: 0.3,
      duration,
      onComplete: () => {
        // Change the image source
        img.src = shuffledLinks[index];

        // Fade in the new image
        gsap.to(img, { opacity: 1, duration });
      },
    });
  });
}

// Move from left to right
// gsap.fromTo(
//   child1,
//   { left: "0%" },
//   { left: "100%", duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" }
// );

// // Move from right to left
// gsap.fromTo(child1, { left: '100%' }, { left: '0%', duration: 5, repeat: 0, yoyo: true, ease: 'power1.inOut' });

// Change picture every 5 seconds (5000 milliseconds)
const intervalId = setInterval(changePicture, 5000);

// Stop changing pictures after a certain number of iterations (optional)
// const maxIterations = 10;
// let currentIteration = 0;
// const intervalId = setInterval(() => {
//     changePicture();
//     currentIteration++;
//     if (currentIteration === maxIterations) {
//         clearInterval(intervalId);
//     }
// }, 5000);

const movingBox = document.getElementById("child1");
const movingBox2 = document.getElementById("child4");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Move from right to left
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

        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  },
  { threshold: 0.6 }
); // Trigger animation when 50% of the target is visible

observer.observe(movingBox);

//ScrollTrigger configuration for gallery

// ScrollTrigger.defaults({
//     toggleActions: "play pause resume reset",
// });

// gsap.utils.toArray('.elem').forEach((elem, index) => {
//     gsap.to(elem, {
//         xPercent: -100 * index,
//         ease: "none",
//         scrollTrigger: {
//             trigger: "#page2",
//             start: "top top",
//             end: () => `+=${(100 * index)}%`,
//             scrub: 1,
//         },
//     });
// });

// For the videos

document.addEventListener("DOMContentLoaded", function () {
  // List of video URLs
  var videoUrls = [
    "video1.mp4",
    "video2.mov",
    "video3.mov",
    "video4.mp4",
    "video5.mov",
    // Add more video URLs as needed
  ];

  // Get a random index to select a video from the array
  var randomIndex = Math.floor(Math.random() * videoUrls.length);

  // Get the video element
  var videoElement = document.getElementById("background-video");

  // Set the src attribute with the randomly selected video URL
  videoElement.src = videoUrls[randomIndex];
});

// Navbar

// document.addEventListener('DOMContentLoaded', function () {
//   const menuIcon = document.getElementById('menuIcon');
//   const fullScreenNav = document.getElementById('fullScreenNav');

//   menuIcon.addEventListener('click', function () {
//       fullScreenNav.style.display = fullScreenNav.style.display === 'block' ? 'none' : 'block';
//   });
// });

// Modified navbar function

document.addEventListener("DOMContentLoaded", function () {
  // const scrollContainer = document.querySelector("[data-scroll-container]");
  const menuIcon = document.getElementById("menuIcon");
  const fullScreenNav = document.getElementById("fullScreenNav");
  const closeNavButton = document.getElementById("closeNav");

  // const locoScroll = new LocomotiveScroll({
  //   el: scrollContainer,
  //   smooth: true,
  // });

  menuIcon.addEventListener("click", function () {
    toggleNav();
  });

  closeNavButton.addEventListener("click", function () {
    toggleNav();
  });

  const navLinks = document.querySelectorAll("#fullScreenNav a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      toggleNav();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        locoScroll.scrollTo(targetElement);
      }
    });
  });

  function toggleNav() {
    fullScreenNav.style.display =
      fullScreenNav.style.display === "block" ? "none" : "block";
  }
});

// Close the navigation bar when a menu item is clicked
