/*create small product cards
const createSmallCards = (data) => {
    return `
    <div class="sm-product">
        <img src="${data.image}" class="sm-product-image" alt="">
        <div class="sm-text">
            <p class="sm-product-name">${data.name}</p>
            <p class="sm-des">${data.shortDes}</p>
        </div>
        <div class="item-counter">
            <button class="counter-btn decrement">-</button>
            <p class="item-count">${data.item}</p>
            <button class="counter-btn increment">+</button>
        </div>
        <p class="sm-price" data-price="${data.sellPrice}">$${data.sellPrice * data.item}</p>
    </div>
    `;
}

let totalBill = 0;
const setProducts = (name) => {
    const element = document.querySelector(`.${name}`);
    let data = JSON.parse(localStorage.getItem(name));
    if(data == null){
        element.innerHTML = `<img src="images/img/empty-cart.png" class = "empty-img" alt="">`
    }else{
        for(let i = 0; i < data.length ; i++){
            element.innerHTML += createSmallCards(data[i]);
            if(name == 'cart'){
                totalBill += Number(data[i].sellPrice * data[i].item);
            }
        }
        let billPrice = document.querySelector('.bill');
        billPrice.innerHTML = `$${totalBill}`
    } 
}


setProducts('cart');
setProducts('wishlist');
*/
const product = [
    {
        id: 1,
        brand: 'Adidas',
        image: 'images/products/f2.jpg',
        title: 'Adidas Floral Printed T-shirt',
        price: 80,
    },
    {
        id: 2,
        brand: 'Dillinger',
        image: 'images/products/f3.jpg',
        title: 'Dillinger Printed T-shirt',
        price: 65,
    },
    {
        id: 3,
        brand: 'Nautica',
        image: 'images/products/f4.jpg',
        title: 'Nautica Printed Shirt',
        price: 70,
    }
];
const categories = [...new Set(product.map((item)=>{
    return item
}))]
let i =0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {brand, image, title , price} = item;
    return(
        `<div class = 'box'>
            <div class = 'img-box'>
                <img class = 'images' src=${image}></img>
            </div>
            <div class = 'bottom'>
                <h2>${brand}</h2>
                <p>${title}</p>
                <h2 class="add-to-cart-h2">$ ${price}</h2>`+
                "<button class='add-to-cart-btn' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
        </div>`         
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function displaycart(a){
    let j=0;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your Cart is Empty";
    }else{
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var {image, title, price} = items;
            return(
                `<div class='cart-item>
                <div class = row-img>
                    <img class = 'rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style = 'font-size: 15px;'>${price}</h2>`+
                "<i class = 'fa-solid fa-trash' onclick='delElement(" +(j++) + ")'></i></div>"`     `
            );
        }).join('');
    }
}