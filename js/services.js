document.addEventListener('DOMContentLoaded', () => {
    // 3D Tilt Effect for Browser Mockup
    const mockup = document.querySelector('.browser-mockup');
    const mockupContainer = document.querySelector('.mockup-container');

    mockupContainer.addEventListener('mousemove', (e) => {
        const rect = mockupContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        mockup.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${-rotateY}deg)
            translateZ(50px)
            scale3d(1.02, 1.02, 1.02)
        `;
    });

    mockupContainer.addEventListener('mouseleave', () => {
        mockup.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale3d(1, 1, 1)';
    });

    // Floating Elements Animation
    const createFloatingElements = () => {
        const container = document.querySelector('.animated-background');
        const elements = ['square', 'circle', 'triangle'];
        const count = 15;

        for (let i = 0; i < count; i++) {
            const element = document.createElement('div');
            element.className = `floating-element ${elements[Math.floor(Math.random() * elements.length)]}`;
            
            // Random positions and animations
            element.style.left = `${Math.random() * 100}%`;
            element.style.top = `${Math.random() * 100}%`;
            element.style.animationDelay = `${Math.random() * 5}s`;
            element.style.animationDuration = `${10 + Math.random() * 20}s`;
            
            container.appendChild(element);
        }
    };

    createFloatingElements();

    // Typing Animation for Hero Text
    const heroText = document.querySelector('.hero-text');
    const text = heroText.textContent;
    heroText.textContent = '';
    let charIndex = 0;

    const typeText = () => {
        if (charIndex < text.length) {
            heroText.textContent += text[charIndex];
            charIndex++;
            setTimeout(typeText, 50);
        }
    };

    typeText();

    // Scroll Animation for Loading Elements
    const loadingElements = document.querySelectorAll('.loading-element');
    
    const animateLoading = () => {
        loadingElements.forEach((element, index) => {
            element.style.animation = `loadingPulse 2s ${index * 0.2}s infinite`;
        });
    };

    animateLoading();

    // Interactive Grid Animation
    const grid = document.querySelector('.grid-overlay');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        grid.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });
}); 