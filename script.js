particlesJS("particles-js", {
    "particles": {
    "number": {
    "value": 50,
    "density": {
        "enable": true,
        "value_area": 800
        }
    },
    "color": {
    "value": "#ffffff"
    },
    "shape": {
    "type": "circle",
    "stroke": {
        "width": 0,
        "color": "#000000"
        },
    "polygon": {
        "nb_sides": 5
        },
    "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
        }
    },
    "opacity": {
    "value": 0.5,
    "random": false,
    "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
        }
    },
    "size": {
    "value": 3,
    "random": true,
    "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
        }
    },
    "line_linked": {
    "enable": true,
    "distance": 150,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 1
    },
    "move": {
    "enable": true,
    "speed": 6,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
        }
    }
    },
"interactivity": {
    "detect_on": "canvas",
    "events": {
    "onhover": {
        "enable": true,
        "mode": "grab"
    },
    "onclick": {
        "enable": true,
        "mode": "push"
    },
    "resize": true
    },
    "modes": {
    "grab": {
        "distance": 140,
        "line_linked": {
        "opacity": 1
        }
    },
    "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
    },
    "repulse": {
        "distance": 200,
        "duration": 0.4
    },
    "push": {
        "particles_nb": 4
    },
    "remove": {
        "particles_nb": 2
    }
    }
},
"retina_detect": true
});

// carousel

const carousel = document.querySelector(".carousel")
const slides = document.querySelectorAll(".slide")
const navigations = document.querySelectorAll(".slider_navigation")

init()

function init() {
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];

        slide.dataset.order = i;
        slide.style.transform = "translate(-50%, -50%)";
        slide.addEventListener("click", clickHandler);
    }
    
    for (let navigation of navigations) {
        navigation.addEventListener("click", navigationHandler);
    }

    activeOrder = Math.floor(slides.length / 2);

    update();
}

function update() {
    const {width, height} = carousel.getBoundingClientRect();
    const slideRect = slides[0].getBoundingClientRect();

    const a = width / 2;
    const b = height / 2 - slideRect.height / 7;

    const delta = Math.PI / slides.length / 4;

    for (let i = 0; i < slides.length; i++) {
        const leftSlider = document.querySelector(`.slide[data-order="${activeOrder - i}"]`);

        if (leftSlider) {
            leftSlider.style.zIndex = slides.length - i;
            leftSlider.style.opacity = 1 - (1.5 * i) / slides.length;

            leftSlider.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 - delta * i * 2)}px`
            
            leftSlider.style.top = `${-b * Math.sin((Math.PI * 3) / 2 - delta * i * 2)}px`
        }
        
        const rightSlider = document.querySelector(`.slide[data-order="${activeOrder + i}"]`);
        
        if (rightSlider) {
            rightSlider.style.zIndex = slides.length - i;
            rightSlider.style.opacity = 1 - (1.5 * i) / slides.length;

            rightSlider.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 + delta * i *2)}px`
            
            rightSlider.style.top = `${-b * Math.sin((Math.PI * 3) / 2 + delta * i *2)}px`
        }
    }
}

function clickHandler(e) {
    e.preventDefault();
    const order = parseInt(this.dataset.order, 10);

    if (activeOrder == order) {
        const { url } = this.dataset
        if (url) {
            window.open(url, '_blank')
        }
    }
    else {
        activeOrder = order; 
        update() 
    }
}

function navigationHandler(e) {
    e.preventDefault();
    const { dir } = this.dataset;
    
    if (dir === "prev") {
        activeOrder = Math.max(0, activeOrder - 1)
    }
    else if (dir === "next") {
        activeOrder = Math.min(slides.length - 1, activeOrder + 1);
    }
    
    update()
}

/* menu hamburger */

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-wrap');
let about = document.querySelector('.about-part');
let work = document.querySelector('.work-part');
let contact =document.querySelector('.contact-part');

menuBtn.addEventListener("click", function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    carousel.classList.add('active')
});

about.addEventListener("click", function(){
    menu.classList.remove('active');
    menuBtn.classList.toggle('active');
})

work.addEventListener("click", function(){
    menu.classList.remove('active');
    menuBtn.classList.toggle('active');
})

contact.addEventListener("click", function(){
    menu.classList.remove('active');
    menuBtn.classList.toggle('active');
})