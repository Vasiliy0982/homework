// ================================================================== Бургер-меню

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

// ================================================================== Аккордион

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


// ================================================================== Маска на инпут телефона

const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function (e) {
    let value = this.value.replace(/\D+/g, ''); 
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue += '+7 (';
    }
    if (value.length > 1) {
        formattedValue += value.substring(1, 4);
    }
    if (value.length >= 4) {
        formattedValue += ') ';
    }
    if (value.length > 4) {
        formattedValue += value.substring(4, 7);
    }
    if (value.length >= 7) {
        formattedValue += '-';
    }
    if (value.length > 7) {
        formattedValue += value.substring(7, 9);
    }
    if (value.length >= 9) {
        formattedValue += '-';
    }
    if (value.length > 9) {
        formattedValue += value.substring(9, 11);
    }
    this.value = formattedValue;
});

// ================================================================== Сайдбар

const AccountBody = document.querySelector('.account-body')
const sidebar = document.querySelector('.sidebar')
const sidebarToggler = document.querySelector('.sidebar__control-toggler')

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('collapsible')
    AccountBody.classList.toggle('active')
})

