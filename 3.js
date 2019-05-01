var checkNumber, count, primes;
count = 0;
checkNumber = 2;  // "1" сразу добавим в массив простых чисел и начнём перебор с "2"
primes = [1];
while (checkNumber < 100){
    for (var i = checkNumber - 1; i >= 1; i--){
        if (checkNumber % i === 0){
            count++;
        }
    }
    if (count == 1){   // если целочисленных делителей больше, число не является простым
        primes.push(checkNumber);
    }
    count = 0;    // обнулить счётчик делителей для каждого последующего числа
    checkNumber++;
}
console.log(primes);




for (var i = 0; i < 10; console.log(i++));



for (var str = ''; str.length <=20; str += '*')
    console.log(str);