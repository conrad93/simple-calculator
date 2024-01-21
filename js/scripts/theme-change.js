const switchInput = document.querySelector('.switch-input');
const main = document.querySelector('.main');
switchInput.addEventListener('change', () => {
    main.classList.toggle('dark-theme');
    main.classList.toggle('light-theme');
});