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

for (var i = 0; i < itemsInBasket.length; i++){
    var $li = document.createElement('li');
    $li.textContent = itemsInBasket[i].name + ' ' + itemsInBasket[i].price + '$';
    $list.appendChild($li);
}
$catalog.appendChild($list);