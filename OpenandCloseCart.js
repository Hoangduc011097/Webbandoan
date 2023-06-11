const btnClose =document.querySelector('#close-cart');
const openCart =document.querySelector('#open-cart');


openCart.addEventListener('click',()=>{
    document.querySelector('#cart-product').style.right = '0';
})

btnClose.addEventListener('click', ()=>{
    document.querySelector('#cart-product').style.right = '-100%';
    
})