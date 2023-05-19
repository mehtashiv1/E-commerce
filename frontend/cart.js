let cartBtn = document.querySelector('#cart-btn');
const setData = (data) =>{
    cartBtn.addEventListener('click', () => {
        cartBtn.innerHTML = add_product_to_cart(data);
    })
}