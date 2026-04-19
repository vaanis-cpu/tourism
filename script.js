'use strict';

// Parallax scrolling effects
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.parallax').forEach((element) => {
        const speed = element.dataset.speed;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// 3D card hover transforms
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const { width, height } = card.getBoundingClientRect();
        const xPos = (e.clientX - card.offsetLeft) / width;
        const yPos = (e.clientY - card.offsetTop) / height;
        const tiltX = (yPos - 0.5) * 30;
        const tiltY = (xPos - 0.5) * -30;
        card.style.transform = `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});

// Scroll animations using GSAP library
GSAP.to('.fade-in', {
    scrollTrigger: {
        trigger: '.fade-in',
        start: 'top bottom',
        toggleActions: 'play none none reverse',
    },
    opacity: 1,
    duration: 1,
});

// Mouse tracking for 3D depth effects
window.addEventListener('mousemove', (e) => {
    const depthElements = document.querySelectorAll('.depth');
    depthElements.forEach((element) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
});

// Smooth animations on page load
window.onload = () => {
    const elements = document.querySelectorAll('.smooth');
    elements.forEach((element) => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transition = 'opacity 1s ease';
        }, 300);
    });
};