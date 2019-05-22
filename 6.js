function addToCartButton(event) {
    console.log(event.target.textContent);
    if (event.target.tagName === "BUTTON") {
        var price = parseInt(event.target.previousSibling.textContent.match(/\d+/));
        countBasketPrice(price);
    };
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
function countBasketPrice(itemPrice){
    totalItems++;
    totalPrice += itemPrice;
return $basket.textContent = totalItems + '  items in basket for ' + totalPrice + '$';
}

var $thumbnails = document.querySelector('#thumbnails');
var $preview = document.querySelector('#preview');
var $basket = document.querySelector('#basket');
$basket.textContent = 'Basket is empty';

function Product(name, price, imglq1, imglq2, imghq1, imghq2){
    this.name = name;
    this.price = price;
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
