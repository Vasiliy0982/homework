const openWindow = document.querySelector('.open__window')
const closeWindow = document.querySelector('.close__window')
const modal = document.querySelector('.modal')

openWindow.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

modal.addEventListener('click', (event) => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('close__window')) {
        modal.classList.remove('modal--open')
    }
})

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        modal.classList.remove('modal--open')
    }
})
