// thêm giỏ hàng


const cartNotify = document.getElementById('cart-notify');

let countCart = 0;
const newNotify = document.createElement('div');
cartNotify.appendChild(newNotify);
// newNotify.textContent = countCart;

function addItem() {
    // e.preventDefault();
    for (let i = 0; i < 1; i++) {

        countCart++;

        newNotify.textContent = countCart;
        newNotify.style.background = 'red';
        newNotify.style.color = '#fff';
        newNotify.style.width = '15px';
        newNotify.style.height = '15px';
        newNotify.style.fontSize = '10px';
        newNotify.style.borderRadius = '50%';
        newNotify.style.display = 'flex';
        newNotify.style.justifyContent = 'center';
        newNotify.style.alignItems = 'center';
        newNotify.style.marginLeft = '-3px';
        newNotify.style.zIndex = '-1';
    }
}


// THÊM VÀO GIỎ HÀNG -----------------------------------------------------------------
const btnAdd = document.querySelectorAll('#list-product .btn-add');
// console.log(btnAdd)
const itemCart = document.querySelector('#cart-product .item-cart tbody');
// console.log (itemCart)


btnAdd.forEach(function (button) {

    // console.log(button)
    button.addEventListener('click', (e) => {
        e.preventDefault();

        let btnItem = e.target;
        let itemProduct = btnItem.parentElement;
        // console.log(itemProduct)
        let productImg = itemProduct.querySelector('img').src;
        // console.log(productImg)
        let productName = itemProduct.querySelector('.type-food').innerText;
        // console.log(productName)
        let productPrice = itemProduct.querySelector('p').innerText;
        // console.log(productPrice)

        
        let newItemCart = document.createElement('tr');
        itemCart.appendChild(newItemCart);
        newItemCart.innerHTML = `<tr>
                                <td style="display: flex; align-items: center;padding-top: 10px;"><img style="width:70px; height: 50px; border-radius: 10px;" src="${productImg}" alt="">${productName}</td>
                                <td><span>${productPrice}<span></td>
                                <td><input  id= 'number-product' style="width: 40px" type="number" value="1" min="1"></td>
                                <td style="cursor: pointer;text-decoration: underline;"><span class='btn-delete'>Xóa</span></td>
                            </tr>`
                            
        itemCart.appendChild(newItemCart);

        
        let trCount = document.querySelectorAll('.item-cart tbody tr');

        function deleteProduct() {
            let count = 0;
            for (i=0;i<trCount.length;i++){
            const btnDelete = document.querySelectorAll('.btn-delete');
             console.log(btnDelete);


                btnDelete[i].addEventListener('click',(e)=>{
                    let cartDelete = e.target;
                    let cartItemDelete = cartDelete.parentElement.parentElement;
                    // console.log(cartItemDelete)
                    cartItemDelete.remove();

                        
                })

                // Tính tổng số tiền -----------------------------------------------
                
            let productPrice = trCount[i].querySelector('td span').innerText;
            // console.log(productPrice)
            let numberProduct = trCount[i].querySelector('td #number-product').value;
            // console.log(numberProduct)
            // let priceParse = parseInt(productPrice); // ép về kiểu số thực
            let priceAndNumber = productPrice * numberProduct * 1000;

            // console.log(priceAndNumber)
            count += priceAndNumber
            var countParse = count.toLocaleString('de-DE');

            console.log(countParse)
            const total = document.querySelector('#cart-product .total');
            let totalPrice = document.createElement('span');
            total.appendChild(totalPrice);
            total.textContent = 'Tổng tiền : ' + countParse + ' vnd';
            total.style.fontSize = '17px';
            total.style.fontWeight = 'bolder';
                
            }
        }

        deleteProduct();

    
        
        // TÍNH TỔNG SỐ TIỀN------------------------------------------------------
        // var trCount = document.querySelectorAll('.item-cart tbody tr');

        // console.log(trCount.length)

        // let count = 0;
    //     function cartTotal(){
    //     for (let i = 0; i <= trCount.length; i++) {

    //         let productPrice = trCount[i].querySelector('td span').innerText;
    //         // console.log(productPrice)
    //         let numberProduct = trCount[i].querySelector('td #number-product').value;
    //         // console.log(numberProduct)
    //         // let priceParse = parseInt(productPrice); // ép về kiểu số thực
    //         let priceAndNumber = productPrice * numberProduct * 1000;

    //         // console.log(priceAndNumber)
    //         count += priceAndNumber
    //         var countParse = count.toLocaleString('de-DE');

    //         console.log(countParse)
    //         const total = document.querySelector('#cart-product .total');
    //         let totalPrice = document.createElement('span');
    //         total.appendChild(totalPrice);
    //         total.textContent = 'Tổng tiền : ' + countParse + ' vnd';
    //         total.style.fontSize = '17px';
    //         total.style.fontWeight = 'bolder';

    //     }
    // }

    // cartTotal()
        

    })

    // deleteProduct();

  


})












