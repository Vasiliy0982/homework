document.addEventListener('click', burgerInit)

function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger')
    const burgerNavLink = e.target.closest('.header__navigation-link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }

}

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

    });

});

const AccountBody = document.querySelector('.account-body')
const sidebar = document.querySelector('.sidebar')
const sidebarToggler = document.querySelector('.sidebar__control-toggler')

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('collapsible')
    AccountBody.classList.toggle('active')
})