let menu = document.querySelector('#menu-icon');

let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
console.log('Classes toggled:', menu.classList.contains('bx-x'), navlist.classList.contains('open'));
console.log('Navlist visibility:', navlist.style.display);

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay:450,
    reset:true,
})

sr.reveal('.hero-text', {delay: 200 , origin:'top'});
sr.reveal('.div-img', {delay: 480, origin:'left'});
sr.reveal('.icons', {delay: 535 , origin:'bottom'});
sr.reveal('.scrolldown', {delay: 535 , origin:'right'});