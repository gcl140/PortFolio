// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    const interestedLink = document.getElementById('interested-link');
    const skillsLink = document.getElementById('skills-link');

    interestedLink.addEventListener('click', (event) => {
        event.preventDefault();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Add glowing effect to skills link
        skillsLink.classList.add('glow');

        // Remove the glowing effect after a certain period
        setTimeout(() => {
            skillsLink.classList.remove('glow');
        }, 100000); // glow effect lasts for 7 seconds
    });
});








// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    const interestedLink = document.getElementById('interested-link');
    const skillsLink = document.getElementById('skills-link');
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    interestedLink.addEventListener('click', (event) => {
        event.preventDefault();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Add glowing effect to skills link
        skillsLink.classList.add('glow');

        // Remove the glowing effect after a certain period
        setTimeout(() => {
            skillsLink.classList.remove('glow');
        }, 5000); // glow effect lasts for 5 seconds
    });

    menuIcon.addEventListener('click', () => {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
            menu.style.maxHeight = menu.scrollHeight + 'px';
        } else {
            menu.style.display = 'none';
            menu.style.maxHeight = '0px';
        }
    });
});




// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    // Smooth scrolling for interested link and glowing effect
    const interestedLink = document.getElementById('interested-link');
    const skillsLink = document.getElementById('skills-link');

    interestedLink.addEventListener('click', (event) => {
        event.preventDefault();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Add glowing effect to skills link
        skillsLink.classList.add('glow');

        // Remove the glowing effect after a certain period
        setTimeout(() => {
            skillsLink.classList.remove('glow');
        }, 5000); // glow effect lasts for 5 seconds
    });
});
