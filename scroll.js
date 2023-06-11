
function viewToProduct (){
    const product = document.getElementById('wp-product');
    product.scrollIntoView({behavior: 'smooth'});

}

function viewBlog (){
    const blog =document.getElementById('comment-body');
    blog.scrollIntoView({behavior: 'smooth'}); 
}

function viewContact (){
    const contact = document.getElementById('footer');
    contact.scrollIntoView({behavior: 'smooth'}); 
}