const body = document.querySelector('.body')
const burger = document.querySelector('.burger-icon')

burger.addEventListener('click', () => {
    body.classList.toggle('body--opened-menu')
})