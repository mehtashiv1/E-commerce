const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) { 
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

const productImages = document.querySelectorAll(".product-images img");
const productImagesSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImagesSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;

    })
})

//toggle size buttons
const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})

