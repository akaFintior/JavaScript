function addToCartButton(event) {
    $next.addEventListener('click', showBasketContent);
    if (event.target.tagName === "BUTTON") {
        var item = event.target.previousSibling.textContent.split(' ')[0];
        for (var i = 0; i < products.length; i++) {
            if (products[i].name === item) {
                countBasketPrice(products[i]);
            }
        }
    }
    if (event.target.tagName === "A") {
        $thumbnails.innerHTML = "";
        $preview.innerHTML = "";
        $thumbnails.addEventListener('click', handleThumbnailsClick);
        window.addEventListener('keydown', handleModalKeyDown);

        var item = event.target.textContent.split(' ')[0];
        for (var i = 0; i < products.length; i++) {
            if (products[i].name === item) {
                for (var j = 0; j < products[i].images.length; j++){
                    var $img = document.createElement('img');
                    $img.src = products[i].images[j].thumbnail;
                    $img.dataset.original = products[i].images[j].original;

                    var $li = document.createElement('li');

                    $li.appendChild($img);
                    $thumbnails.appendChild($li);
                }
            }
        }
    }
}

function handleModalKeyDown(event) {
    if (event.code === 'ArrowRight') {
        $preview.innerHTML = "";
        var imagePath = $thumbnails.lastChild.firstChild.dataset.original;
        $img = document.createElement('img');
        $img.src = imagePath;
        $preview.appendChild($img);
    }
    if (event.code === 'ArrowLeft') {
        $preview.innerHTML = "";
        var imagePath = $thumbnails.firstChild.firstChild.dataset.original;
        $img = document.createElement('img');
        $img.src = imagePath;
        $preview.appendChild($img);
    }
}
function showBasketContent(event) {
    $catalog.setAttribute('class', 'hidden');
    event.target.setAttribute('class', 'hidden');
    $delivery.previousElementSibling.classList.remove('hidden');
    $basket.innerHTML = '';
    var $list = document.createElement('ul');
    $list.addEventListener('click', handleItemRemove);
    $basket.removeEventListener('click', showBasketContent);
    
    for (var i = 0; i < basket.length; i++) {
        var $li = document.createElement('li');
        $li.textContent = basket[i].quantity + ' ' + basket[i].name + ' ' + basket[i].price * basket[i].quantity;
        var $button = document.createElement('button');
        $button.textContent = 'remove item';
        $li.appendChild($button);
        $list.appendChild($li);
    }
    $basket.appendChild($list);
    $next1.addEventListener('click', showDeliveryOptions);
}

function showDeliveryOptions(event) {
    $basket.setAttribute('class', 'hidden');
    event.target.setAttribute('class', 'hidden');
    $delivery.classList.remove('hidden');
    $comment.previousElementSibling.classList.remove('hidden');
    $next2.addEventListener('click', showComments);
}

function showComments(event) {
    event.target.setAttribute('class', 'hidden');
    $delivery.setAttribute('class', 'hidden');
    $comment.classList.remove('hidden');
}

function handleItemRemove(event) {
    if (event.target.tagName === 'BUTTON') {
        $basketTotal.innerHTML = '';
        for (var i = 0; i < basket.length; i++) {
            if (event.target.parentNode.firstChild.textContent.split(' ')[1] === basket[i].name) {
                basket[i].quantity > 0 ? (basket[i].quantity-- && (totalPrice -= basket[i].price) && totalItems--) : event.target.parentNode.parentNode.removeChild(event.target.parentNode);
                event.target.parentNode.firstChild.textContent = basket[i].quantity + ' ' + basket[i].name + ' ' + basket[i].price * basket[i].quantity;  
                (totalItems === 0) ? $basketTotal.textContent = 'Basket is empty' : $basketTotal.textContent = totalItems + '  items in basket for ' + totalPrice + '$';            
            }
        }
        $basket.appendChild($basketTotal);
    }
}

function handleThumbnailsClick(event) {
    if (event.target.tagName === 'IMG') {
        $preview.innerHTML = "";
        var imagePath = event.target.dataset.original;
        $img = document.createElement('img');
        $img.src = imagePath;
        $preview.appendChild($img);
    }
}

var totalItems = 0, totalPrice = 0;
var basket = [];
function countBasketPrice(item){
    if (basket.includes(item)) {
        item.quantity++
    } else basket.push(item);
    totalItems++;
    totalPrice += item.price;
return (totalItems === 0) ? $basket.textContent = 'Basket is empty' : $basket.textContent = totalItems + '  items in basket for ' + totalPrice + '$';
}

var $comment = document.querySelector('#comment');
var $delivery = document.querySelector('#delivery-adress');
var $catalog = document.querySelector('#catalog');
var $next = document.querySelector('.next');
var $next1 = document.querySelector('.next_1');
var $next2 = document.querySelector('.next_2');
var $basketTotal = document.createElement('div');
var $thumbnails = document.querySelector('#thumbnails');
var $preview = document.querySelector('#preview');
var $basket = document.querySelector('#basket');
$basket.textContent = 'Basket is empty';

function Product(name, price, imglq1, imglq2, imghq1, imghq2){
    this.name = name;
    this.price = price;
    this.quantity = 1;
    this.images = [ 
        {
        thumbnail: imglq1,
        original: imghq1
        },
        {
        thumbnail: imglq2,
        original: imghq2
        }
    ];
    
}

var products = [];
products[0] = new Product('Table', 500, 'img/3d9f3259-5679-4838-9b44-8e9631a80f5a_1.910f1fcefa51119d2dbed2efc208cfe8.jpeg', 'img/$_103.JPG', 'img/40172453-1-f.jpg', 'img/kidney-table.jpg');
products[1] = new Product('Chair', 150, 'img/s1028095_sc7.jpeg', 'img/tnmnrvi2ikqbk0.jpg', 'img/villain-chair.jpg', 'img/peacock-chair-by-alexandra-jenal-03.jpg');
products[2] = new Product('Window', 200, 'img/794325.jpg', 'img/PR_DoubleHung_Sm.jpg', 'img/upvc-leaded-window-outside-view_488x480.jpg', 'img/photo55.jpg');


function init() {
    
    var $catalog = document.querySelector('#catalog');
    var $list = document.createElement('ul');

    for (var i = 0; i < products.length; i++){
        var $li = document.createElement('li');
        var $a = document.createElement('a');
        $a.textContent = products[i].name + ' ' + products[i].price + '$';
        $a.setAttribute('href', '#modal');
        $li.appendChild($a);
        var $button = document.createElement('button');
        $button.textContent = 'Add to cart';
        $li.appendChild($button);
        $list.appendChild($li);
    }
    $catalog.appendChild($list);

    $list.addEventListener('click', addToCartButton);

    
}

window.addEventListener('load', init);
