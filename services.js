// Image URLs
var imgs = [
    'bg-1.jpg',
    'bg-2.jpg',
    'bg-3.jpg',
    'bg-4.jpg',
    'bg-5.jpg'
  ];
  
  // Number of images
  var n = imgs.length;
  
  // Current image index
  var current = n - 1;
  
  // Width for each closed box based on window width
  var closedWidth = Math.floor(window.innerWidth / 10);
  
  // Names for accordion items
  const names = ['Cardio', 'Yoga', 'Core', 'Strength', 'Kick-boxing'];
  const descriptions = [
    "Elevate your heart rate and boost endurance with our cardio workouts. From treadmill runs to cycling sessions, our cardio exercises are designed to improve cardiovascular health and burn calories effectively.",
    "Achieve your fitness goals faster with the guidance of a certified personal trainer. Receive personalized workout plans, expert advice, and motivation tailored to your unique needs, ensuring a more efficient and enjoyable fitness journey.",
    "Fuel your body for success with our nutrition services. Gain access to expert guidance on balanced eating, personalized meal plans, and nutritional strategies to complement your fitness routine, promoting overall health and wellness.",
    "Build a stronger, more resilient body through our strength training programs. Whether you're a beginner or advanced, our workouts focus on enhancing muscle tone, increasing strength, and improving functional fitness for everyday activities.",
    "Unleash your power and improve agility with our dynamic kick-boxing classes. Led by experienced instructors, these high-energy sessions combine martial arts techniques with cardiovascular exercise, providing a fun and effective full-body workout."
];

  
  // Background container
  var bg = document.getElementById('bg');
  
  // Foreground container
  var fg = document.getElementById('fg');
  
  // Loop through images
  for (var i = 0; i < n; i++) {
    // Create background image div
    var bgImg = document.createElement('div');
    bg.appendChild(bgImg);
  
    // Set background image properties
    gsap.set(bgImg, {
      attr: { id: 'bgImg' + i, class: 'bgImg' },
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + imgs[i] + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    });
  
    // Create accordion box
    var b = document.createElement('div');
    fg.appendChild(b);
  
    // Set accordion box properties and animation
    gsap.fromTo(b, {
      attr: { id: 'b' + i, class: 'box' },
      innerHTML: '<p><sub>' + names[i] + '</sub> ' + (i+1) + '</p>',
      width: '100%',
      height: '100%',
      borderLeft: (i > 0) ? 'solid 1px #eee' : '',
      backgroundColor: 'rgba(250,250,250,0)',
      left: i * closedWidth,
      transformOrigin: '100% 100%',
      x: '100%'
    }, {
      duration: i * 0.15,
      x: 0,
      ease: 'expo.inOut'
    });
  
    // Mouse Hover Event
    b.onmouseenter = b.onclick = (e) => {
      if (Number(e.currentTarget.id.substr(1)) === current) return;
  
      var staggerOrder = !!(current < Number(e.currentTarget.id.substr(1)));
      current = Number(e.currentTarget.id.substr(1));
  
      gsap.to('.box', {
        duration: 0.5,
        ease: 'elastic.out(0.3)',
        left: (i) => (i <= current) ? i * closedWidth : window.innerWidth - ((n - i) * closedWidth),
        x: 0,
        stagger: staggerOrder ? 0.05 : -0.05
      });
  
      // Kenburns Transition Animation
      bg.appendChild(document.getElementById('bgImg' + current));
      gsap.fromTo('#bgImg' + current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power1.inOut' });
      gsap.fromTo('#bgImg' + current, { scale: 1.05, rotation: 0.05 }, { scale: 1, rotation: 0, duration: 1.5, ease: 'sine' });
    };
  }
  
  // Responsive Support Window Resizing
  window.onresize = (e) => {
    closedWidth = Math.floor(window.innerWidth / 10);
    gsap.set('.box', { x: 0, left: (i) => (i <= current) ? i * closedWidth : window.innerWidth - ((n - i) * closedWidth) });
  };
  

