Напишите функцию, которая выводит все числа от 1 до 100, кратные трем.

let numbers = [45,98,87,30,27,65]
function multiples (numbers) {
   
    for (let n=1; n<101; n++);
    {console.log(numbers%3==0)
}}

Напишите функцию, которая находит сумму всех чисел от 1 до 100 и выводит ее в консоль.

let zahlen = [45,89,65,98]
function zahl (zahlen){
    let total_summa = 0
    for (let n = 1; n<101; n++)
    total_summa+=[n]
    {
console.log(total_summa)
    }}

    Написать функцию, которая принимает товары (массив объектов) и возвращает строку Самый дорогой товар <НАЗВАНИЕ> стоит  USD

    let products = [
        {title: 'Product 1', category: 'tv', supplier: 'usa', price_usd: 1000},
        {title: 'Product 2', category: 'tv', supplier: 'germany', price_usd: 880},
        {title: 'Product 3', category: 'tv', supplier: 'china', price_usd: 500}
    ];

    function expensiv_product () {
        let more_expensive = products.price_usd[0]
        for ( let n = 0; n<products.length; n++){
            if (products.price_usd[n] > more_expensive){
                more_expensive=products.price_usd[n]
            };
            
        }
        return more_expensive;

    }