export function onMove() {
    const mobIconBtn = document.querySelector('.header-mob-button');
    const modalMenu = document.querySelector('.mob-menu-backdrop').classList;
    const mobIconClose = document.querySelector('.mob-close');
    const mobScrollSection = document.querySelectorAll('.mob-link');
    const mobBtnOrder = document.querySelector('.header-modal-button');
    // Таблет версія
    const tabletMenuHeader = document.querySelector('.header-menu');
    const hiddenMenu = document.querySelector('.tab-menu-hidden').classList;
    const tabBtnOrder = document.querySelector('.header-tab-button');
    tabletMenuHeader.addEventListener('click', () => {
        hiddenMenu.toggle("is-open-menu");
        
    });

    mobIconBtn.addEventListener('click', () => {
        modalMenu.add("is-open");
    });

    mobIconClose.addEventListener('click', () => {
        modalMenu.remove("is-open");
    });
    mobBtnOrder.addEventListener('click', (e) => {
        scrollSection(e, mobBtnOrder);
        modalMenu.remove("is-open");
        
    });
    mobScrollSection.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            modalMenu.remove("is-open");
            hiddenMenu.remove('is-open-menu');
            scrollSection(e, elem);
        });
    });
        tabBtnOrder.addEventListener('click', (e) => {
        scrollSection(e, tabBtnOrder);        
    });
    
} 
function scrollSection(e,item) {
    e.preventDefault();
    // console.log(item);
    const target = document.querySelector(item.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
}


