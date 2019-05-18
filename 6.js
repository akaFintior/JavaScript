function addToCartButton(event) {
    console.log(event.target.previousSibling.textContent);
    if (event.target.previousSibling.nodeName === "A") {
        var price = parseInt(event.target.previousSibling.textContent.match(/\d+/));
        countBasketPrice(price);
    };
 /*   if (event.target.nodeName === "A") {
        var $images = document.querySelector('.images');        в модальном окне картинки должны соответствовать нажатию мыши
        for (var i = 0; i < images)
    }    */
}

var totalItems = 0, totalPrice = 0;
function countBasketPrice(itemPrice){
    totalItems++;
    totalPrice += itemPrice;
return $basket.textContent = totalItems + '  items in basket for ' + totalPrice + '$';
}

var $basket = document.querySelector('#basket');
$basket.textContent = 'Basket is empty';

function init() {
    function Product(name, price, src1hq, src2hq, src1lq, src2lq){
        this.name = name;
        this.price = price;
        this.imageHQ = [src1hq, src2hq];
        this.imageLQ = [src1lq, src2lq];
    }

    var products = [];
    products[0] = new Product('Table', 500);
    products[1] = new Product('Chair', 150);
    products[2] = new Product('Window', 200);


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
