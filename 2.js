/*
    #1

var a = 1, b = 1, c, d;
c = ++a; alert(c);         =>   a=a+1; c=a   (a=2;c=2)
d = b++; alert(d);         =>   d=b; b=b+1   (d=1;b=2)
c = (2+ ++a); alert(c);    =>   a=a+1; c=2+a (a=3;c=5)
d = (2+ b++); alert(d);    =>   d=2+b; b=b+1 (d=4;b=3)
alert(a);                  =>   a=3
alert(b);                  =>   b=3

    #2

var a = 2;
var x = 1 + (a *= 2);    => a=a*2 ; x=1+a  (a=4;x=5)

*/
var res,oper,a,b,c,d;

a = +prompt('Введите первое число');
b = +prompt('Введите второе число');
if (a >= 0 && b >= 0) {
    res = a - b;
} else if (a < 0 && b < 0) {
    res = a * b;
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    res = a + b;
}
alert(res);


a = Math.floor(Math.random() * 15) + 1;
switch(a) {
        case 0:
            alert(0);
        case 1:
            alert(1);
        case 2:
            alert(2);
        case 3:
            alert(3);
        case 4:
            alert(4);
        case 5:
            alert(5);
        case 6:
            alert(6);
        case 7:
            alert(7);
        case 8:
            alert(8);
        case 9:
            alert(9);
        case 10:
            alert(10);
        case 11:
            alert(11);
        case 12:
            alert(12);
        case 13:
            alert(13);
        case 14:
            alert(14);
        case 15:
            alert(15);
}


function sum(a, b){     // - сумма а и б
    return a + b;
}

function sub(a, b){     // - вычитание б из а
    return a - b;
}

function mult(a, b){    // - произведение а и б
    return a * b;
}

function div(a, b){     // - деление а на б
    return a / b;
}

function mathOperation(arg1, arg2, operation){
    switch(operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'sub':
            return sub(arg1, arg2);
        case 'mult':
            return mult(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
        default:
            alert('Вводимые данные не корректны');
    }
}

c = +prompt('Введите значение первого аргумента');
d = +prompt('Введите значение второго аргумента');
oper = prompt('Введите требуемую операцию (sum,sub,mult,div)');
alert(mathOperation(c,d,oper));


/*
    null > 0     ==>  false
    null == 0;   ==>  false
    null >= 0    ==>  true
*/

function power(val,pow){
    if (pow == 1){
        return val;
    } else
        return power(val, pow-1) * val;
}
