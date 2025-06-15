const body = document.querySelector('.body')
const burger = document.querySelector('.burger-icon')

burger.addEventListener('click', () => {
    body.classList.toggle('body--opened-menu')
})


const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.about__img-button')

modalButton.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)

function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
}

function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
        document.body.classList.remove('body--opened-modal')
    }

}


const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

    const tabControl = e.target.closest('.tab-link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-link--active')) return

    const tabContentID = tabControl.getAttribute('href')

    console.log(tabContentID)

    document.querySelector('.tab-content--active').classList.remove('tab-content--active')
    document.querySelector(tabContentID).classList.add('tab-content--active')

    document.querySelector('.tab-link--active').classList.remove('tab-link--active')
    tabControl.classList.add('tab-link--active')

}


const AccordionLists = document.querySelectorAll('.accordion__list')

AccordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const AccordionControl = e.target.closest('.accordion__list-button')
        if (!AccordionControl) return
        const AccordionItem = AccordionControl.parentElement
        const AccordionContent = AccordionControl.nextElementSibling

        AccordionItem.classList.toggle('accordion__list-item--opened')

        if (AccordionItem.classList.contains('accordion__list-item--opened')) {
            AccordionContent.style.maxHeight = AccordionContent.scrollHeight + 'px'
        } else {
            AccordionContent.style.maxHeight = null
        }
    })
})

// const AccordionLists = document.querySelectorAll('.accordion__list')

// AccordionLists.forEach(el => {

//     el.addEventListener('click', (e) => {

//         const AccordionList = e.currentTarget.target
//         const AccordionOpenedItem = AccordionList.querySelector('.accordion__list-item--opened')
//         const AccordionOpenedContent = AccordionList.querySelector('.accordion__list-item--opened .accordion__list-content')

//         const AccordionControl = e.target.closest('.accordion__list-button')
//         if (!AccordionControl) return
//         const AccordionItem = AccordionControl.parentElement
//         const AccordionContent = AccordionControl.nextElementSibling

//         if (AccordionOpenedItem && AccordionItem != AccordionOpenedItem) {
//             AccordionOpenedItem.classList.remove('accordion__list-item--opened')
//             AccordionOpenedContent.style.maxHeight = null
//         }
//         AccordionItem.classList.toggle('accordion__list-item--opened')

//         if (AccordionItem.classList.contains('accordion__list-item--opened')) {
//             AccordionContent.style.maxHeight = AccordionContent.scrollHeight + 'px'
//         } else {
//             AccordionContent.style.maxHeight = null
//         }
//     })
// })

const swiper = new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });
