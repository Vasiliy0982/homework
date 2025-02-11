const modal = document.querySelector('.modal')
const btnOpen = document.querySelector('.btn-open')
const cross = document.querySelector('.cross')
const modalWindow = document.querySelector('.modal__window')

btnOpen.addEventListener('click', () => {
    modal.style.display = 'flex'
})

cross.addEventListener('click', () => {
    modal.style.display = 'none'
})

modal.addEventListener('click', (event) => {
    if (event.target === modalWindow) {
        modal.style.display = 'none'
    }
})