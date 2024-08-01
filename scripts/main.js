document.addEventListener('DOMContentLoaded', () => {
    const interestedLink = document.getElementById('interested-link');
    const skillsLink = document.getElementById('skills-link');

    interestedLink.addEventListener('click', (event) => {
        event.preventDefault();

        window.scrollTo({ top: 0, behavior: 'smooth' });

        skillsLink.classList.add('glow');

        setTimeout(() => {
            skillsLink.classList.remove('glow');
        }, 100000);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const interestedLink = document.getElementById('interested-link');
    const skillsLink = document.getElementById('skills-link');
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    interestedLink.addEventListener('click', (event) => {
        event.preventDefault();

        window.scrollTo({ top: 0, behavior: 'smooth' });

        skillsLink.classList.add('glow');

        setTimeout(() => {
            skillsLink.classList.remove('glow');
        }, 5000);
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

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    const interestedLink = document.getElementById('interested-link');
    const skillsLink = document.getElementById('skills-link');

    interestedLink.addEventListener('click', (event) => {
        event.preventDefault();

        window.scrollTo({ top: 0, behavior: 'smooth' });

        skillsLink.classList.add('glow');

        setTimeout(() => {
            skillsLink.classList.remove('glow');
        }, 5000);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

document.getElementById('sendSmsLink').addEventListener('click', function (event) {
    event.preventDefault();

    var phoneNumber = "+255758523353";
    var message = document.getElementById('message').value;
    var encodedMessage = encodeURIComponent(message);

    var smsLink = "sms:" + phoneNumber + "?body=" + encodedMessage;
    window.location.href = smsLink;
});

