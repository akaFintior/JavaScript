function breakNumber(num){
    if (num > 999){
        return console.log('Вводимое число слишком большое' + {});
    }
    var a, b, c;
    a = Math.floor(num / 100);
    b = Math.floor((num  - a * 100) / 10);
    c = num - a * 100 - b * 10;
    var obj = {
        'единицы' : c,
        'десятки' : b,
        'сотни' : a,
    }
    return console.log(obj);
}
var nomer = prompt('Введите число от 1 до 999');

function breakNumberV2(num){
    var str = num.split('');
    switch (str.length) {
        case 0:
            return console.log('ничего не введено');
        case 1:
            var obj = {
                'единицы' : +str[0],
                'десятки' : 0,
                'сотни' : 0,
            };
            return console.log(obj);
        case 2:
            var obj = {
                'единицы' : +str[1],
                'десятки' : +str[0],
                'сотни' : 0,
            };
            return console.log(obj);
        case 3:
            var obj = {
                'единицы' : +str[2],
                'десятки' : +str[1],
                'сотни' : +str[0],
            };
            return console.log(obj);
        default:
            return console.log('Вводимое число слишком большое' + {});
    } 
}

breakNumber(nomer);
breakNumberV2(nomer);


function Product(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
var p1 = new Product('tshirt', 100, 2);
var p2 = new Product('cap', 50, 3);
var p3 = new Product('shoes', 200, 1);

var itemsInBasket, totalPrice;
totalPrice = 0;
itemsInBasket = new Array();
itemsInBasket[0] = p1;
itemsInBasket[1] = p2;
itemsInBasket[2] = p3;

function countBasketPrice(basketItems){
    for (var i = 0; i < basketItems.length; i++)
        totalPrice += basketItems[i].price * basketItems[i].quantity;
    return console.log(totalPrice);
}
countBasketPrice(itemsInBasket);
