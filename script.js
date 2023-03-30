// Hamburger Icon code

let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



// single Product img selection 

let mainImg = document.getElementById('mainImg');
let smallImg = document.getElementsByClassName('small-img');
let single_pro_details = document.getElementsByClassName('single-pro-details');
let product_name = document.getElementById('product-name');
let product_price = document.getElementById('product-price');

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
    product_name.innerText  = "Cartoon Astronaut Shirt";
    product_price.innerText  = "$78.00";
}

smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
    product_name.innerText  = "Beach Flower Shirt";
    product_price.innerText  = "$91.00";
}

smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
    product_name.innerText  = "Funky Flowers Shirt";
    product_price.innerText  = "$59.00";
}

smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
    product_name.innerText  = "Japanese Flowers Shirt";
    product_price.innerText  = "$56.00";
}