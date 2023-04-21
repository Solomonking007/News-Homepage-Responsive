const navLinks = document.querySelector('.nav-links');
const hambuger = document.querySelector('.hambuger');
const close = document.querySelector('.close');
const backDrop = document.querySelector('.back-drop');

hambuger.addEventListener('click', () => {
    navLinks.classList.add('active');
    hambuger.classList.add('active');
    close.classList.add('active');
    backDrop.classList.add('active');

})

close.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hambuger.classList.remove('active');
    close.classList.remove('active');
    backDrop.classList.remove('active');

});

