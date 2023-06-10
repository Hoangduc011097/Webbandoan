
// trượt bình luận

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .comment')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -310
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 310
  comment.style.transform = `translateY(${translateY}px)`
  count++
})



// thêm giỏ hàng

const btnAdd = document.getElementById ('btn-add');
const cartNotify = document.getElementById ('cart-notify');

let countCart = 0;
const newNotify = document.createElement ('div');
      cartNotify.appendChild(newNotify);
    // newNotify.textContent = countCart;

function addItem (){
    // e.preventDefault();
    for(let i = 0;i<1;i++){
        
        countCart ++;
      
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