// Sent body to overflow hidden on first click of hamburger icon
$('.burger-lottie').click(function() {
    var clicks = $(this).data('clicks');
    if (clicks) {
       $("body").css("overflow", "auto");
    } else {
       $("body").css("overflow", "hidden");
    }
    $(this).data("clicks", !clicks);
  });
  
  
  
  
  
  // TEXT ANIMATIONS – GSAP/TRICKS
  let windowWidth = window.outerWidth;
  
  // General script that splits all texts after 200ms
  
  setTimeout(function () {
    var pagewidth = $("body").width();
  
    if (pagewidth > 1024) {
      $(
        ".txt.h1, .txt.h2, .txt.h3, .txt.section-number, .txt.mono, .feature-subline, .txt.p-small.hero"
      ).each(function (index) {
        let myText = $(this);
        let mySplitText;
        function createSplits() {
          mySplitText = new SplitText(myText, {
            type: "chars,words,lines",
            charsClass: "split-chars",
            wordsClass: "split-words",
            linesClass: "split-lines"
          });
        }
        createSplits();
        $(window).resize(function () {
          if (window.outerWidth !== windowWidth) {
            mySplitText.revert();
            location.reload();
          }
          windowWidth = window.outerWidth;
        });
      });
    } else {
      // MOBILE SCRIPT (UDEN TXT.MONO)
      $(
        ".txt.h1, .txt.h2, .txt.h3, .txt.section-number, .txt.burger-menu, .feature-subline .txt.mono.button-txt"
      ).each(function (index) {
        let myText = $(this);
        let mySplitText;
        function createSplits() {
          mySplitText = new SplitText(myText, {
            type: "chars,words,lines",
            charsClass: "split-chars",
            wordsClass: "split-words",
            linesClass: "split-lines"
          });
        }
        createSplits();
        $(window).resize(function () {
          if (window.outerWidth !== windowWidth) {
            mySplitText.revert();
            location.reload();
          }
          windowWidth = window.outerWidth;
        });
      });
    }
  }, 200);
  
  gsap.registerPlugin(ScrollTrigger);
  
  // This script contains all the text animations
  function createTextAnimations() {
    //
    // ANIMATIONS START BELOW HERE
    //
    // Animation: write (START)
    $(".write").each(function (index) {
      let triggerElement = $(this);
      let myText = $(this).find(".txt");
      let targetElement = $(this).find(".split-chars");
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart none none none"
        }
      });
      tl.from(targetElement, {
        duration: 0.002,
        y: "0%",
        opacity: 0.1,
        rotationX: -0,
        ease: "power1.none",
        stagger: {
          amount: 0.7,
          from: "0"
        }
      });
    });
  
    function allDone() {
      mySplitText.revert();
    }
    // Animation: write (END)
  
    // Animation: write-02 (START)
    $(".write-02").each(function (index) {
      let triggerElement = $(this);
      let myText = $(this).find(".txt");
      let targetElement = $(this).find(".split-chars");
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart none none none"
        }
      });
      tl.from(targetElement, {
        duration: 0.002,
        y: "0%",
        opacity: 0.0,
        rotationX: -0,
        ease: "power1.none",
        delay: "0.2",
        stagger: {
          amount: 0.2,
          from: "0"
        }
      });
    });
    // Animation: write-02 (END)
  
    $(".button").on("mouseenter mouseleave", function () {
      $(this).toggleClass("hover-write");
    });
  
    // Animation: BUTTON HOVER (START)
    $(".button").mouseenter(function () {
      $(".hover-write").each(function (index) {
        let triggerElement = $(this);
        let myText = $(this).find(".txt");
        let targetElement = $(this).find(".split-chars");
  
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart none none none"
          }
        });
        tl.from(targetElement, {
          duration: 0.001,
          y: "0%",
          opacity: 0.0,
          rotationX: -0,
          ease: "power1.none",
          delay: "0.10",
          stagger: {
            amount: 0.2,
            from: "0"
          }
        });
      });
    });
  
    // Animation: BUTTON HOVER (END)
  
    // Animation for hero text with delay (START)
    $(".typewriter-loader").each(function (index) {
      let triggerElement = $(this);
      let myText = $(this).find(".txt");
      let targetElement = $(this).find(".split-chars");
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart none none none"
        }
      });
      tl.from(targetElement, {
        duration: 0.002,
        y: "0%",
        opacity: 0.0,
        rotationX: -0,
        ease: "power1.none",
        delay: ".5",
        stagger: {
          amount: 0.8,
          from: "0"
        }
      });
    });
    // Animation for hero text with delay (END)
  
    // Animation for burger-menu text with delay (START)
    $(".burger-lottie").click(function () {
      $(".burger-write").toggleClass("writer");
      $(".burger-txt.burger-write.writer").each(function (index) {
        let triggerElement = $(this);
        let myText = $(this).find(".txt");
        let targetElement = $(this).find(".split-chars");
  
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart none none none"
          }
        });
        tl.from(targetElement, {
          duration: 0.001,
          y: "0%",
          opacity: 0.0,
          rotationX: -0,
          ease: "power1.none",
          delay: ".4",
          stagger: {
            amount: 0.5,
            from: "0"
          }
        });
      });
    });
  
    // Animation for burger-menu text with delay (END)
  }
  
  setTimeout(function () {
    createTextAnimations();
  }, 200);
  
  //
  // EXTRA ANIMATIONS FOR LINE/WORD BELOW
  //
  
  /*  // Line Animation
    $(".line-animation").each(function (index) {
      let triggerElement = $(this);
      let myText = $(this).find(".split-text");
      let targetElement = $(this).find(".split-lines");
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart none none none"
        }
      });
      tl.from(targetElement, {
        duration: 0.6,
        delay: 0.1,
        y: "110%",
        rotationX: -0,
        opacity: 0.25,
        ease: "power1.inOut",
        stagger: {
          amount: 1,
          from: "0"
        }
      });
    });
    // Word Animation
    $(".word-animation").each(function (index) {
      let triggerElement = $(this);
      let myText = $(this).find(".split-text");
      let targetElement = $(this).find(".split-words");
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart none none none"
        }
      });
      tl.from(targetElement, {
        duration: 0.3,
        y: "80%",
        rotationX: -90,
        opacity: 0,
        ease: "power1.inOut",
        stagger: {
          amount: 0.9,
          from: "0"
        }
      });
    });
  */