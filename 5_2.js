var $basket = document.getElementById('basket');

$basket.textContent = 'Basket is empty';

function Product(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
var p1 = new Product('tshirt', 100, 2);
var p2 = new Product('cap', 50, 3);
var p3 = new Product('shoes', 200, 1);

var itemsInBasket, totalPrice, totalItems;
totalPrice = 0;
totalItems = 0;
itemsInBasket = new Array();
itemsInBasket[0] = p1;
itemsInBasket[1] = p2;
itemsInBasket[2] = p3;

function countBasketPrice(basketItems){
    for (var i = 0; i < basketItems.length; i++){
        totalItems += basketItems[i].quantity;
        totalPrice += basketItems[i].price * basketItems[i].quantity;
    }
    return $basket.textContent = totalItems + '  items in basket for ' + totalPrice + '$';
}

var $catalog = document.getElementById('catalog');
var $list = document.createElement('ul');

var products = [p1, p2, p3, new Product('pants', 50), new Product('gloves', 100)];

for (var i = 0; i < products.length; i++){
    var $li = document.createElement('li');
    var $a = document.createElement('a');
    $a.textContent = products[i].name + ' ' + products[i].price + '$';
    $a.setAttribute('href', '#');
    $li.appendChild($a);
    $list.appendChild($li);
}
$catalog.appendChild($list);