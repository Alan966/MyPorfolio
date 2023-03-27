const content_2 = document.getElementById('content_2');
const hamburger = document.getElementById('hamburger');
const content_1 = document.querySelector('.hamburguer_button', '::before');
const content_3 = document.querySelector('.hamburguer_button', '::after');
content_2.addEventListener('click', () => {
    content_2.classList.toggle('active');
    hamburger.classList.toggle('active');
    if (document.querySelector('.hamburguer_button.active') && content_1 && content_3) {
        content_1.style.transform = 'translateY(-50%) rotate(-90deg)';
        content_3.style.transform = 'translateY(50%) rotate(-90deg)';
        hamburger.style.transform = 'translateY(0%) rotate(-90deg)';
    } else {
        content_1.style.transform = 'translateY(-50%) rotate(0deg)';
        content_3.style.transform = 'translateY(50%) rotate(0deg)';
        hamburger.style.transform = 'translateY(0%) rotate(0deg)';

    }
});
