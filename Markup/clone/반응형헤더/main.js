const toggleBtn = document.querySelector('.navbar_toggle');
const menu = document.querySelector('.navbar_menu');
const sns = document.querySelector('.navbar_sns')
    ;


toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    sns.classList.toggle('active')
})