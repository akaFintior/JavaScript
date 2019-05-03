var checkNumber, isPrime, primeNumbers;

isPrime = true;
primeNumbers = new Array(1, 2);     // "1" и "2" сразу добавим в массив простых чисел и начнём перебор с "3"
checkNumber = 3;                    // логика программы: число N делить на целые числа от "2" до "N минус 1"

while (checkNumber < 100){
    for (var i = 2; i < checkNumber; i++){
        if (checkNumber % i === 0){  // если есть целое число, при делении на которое, остаток равен нулю, 
            isPrime = false;         // то число не простое, 
            break;                   // и дальнейшие итерации не имеют смысла.
        }
    }
    if (isPrime)   // если целых делителей не было(единица и само число не проверяется), то число простое,
        primeNumbers.push(checkNumber);     // добавим его в массив.
    isPrime = true;
    checkNumber++;
}
console.log(primeNumbers);



var itemsInBasket, totalPrice;

totalPrice = 0;
itemsInBasket = [];
// itemsInBasket[n] = [items_name, quantity, price];
itemsInBasket[0] = ['MANGO PEOPLE T-SHIRT', 2, 250];
itemsInBasket[1] = ['MANGO PEOPLE T-SHIRT', 3, 150];
itemsInBasket[2] = ['MANGO PEOPLE T-SHIRT', 4, 100];

function countBasketPrice(arr){
    for (var i = 0; i < arr.length; i++)
        totalPrice += arr[i][1] * arr[i][2];
    return totalPrice;
}

console.log(countBasketPrice(itemsInBasket));


for (var i = 0; i < 10; console.log(i++));



for (var str = ''; str.length <=20; str += '*')
    console.log(str);

