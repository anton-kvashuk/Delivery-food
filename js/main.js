const shopButton = document.querySelector('#shop-button');
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

shopButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal () {
    modal.classList.toggle('is-open');
};

new WOW().init();