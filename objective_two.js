Задача 1

Написать функцию, которая получает один аргумент (массив целых чисел: положительных и отрицательных) и возвращает сумму положительных чисел.

let massive = [5, 7,9,3,-6,-8,-3];
function Objecktive (massive) {
const new_massive = massive.filter(num=> num>0);
const summa_newmassive = new_massive.reduce((total,num)=> total+num);
return summa_newmassive
}
console.log("big nummer", summa_newmassive)

Задача 2

Написать функцию, которая получает один аргумент (массив целых чисел) и наибольшее число из массива.

function biggest_nummer (massive) {
    let nummer = Math.max(massive);
    return nummer
 }
 console.log(biggest_nummer([-8, -9, 8, 4]));

 Задача 3

 Написать функцию, которая получает на входе массив элементов и     определяет, четное или нечетное ко-во элементов в полученном массиве


 function element_massive (Massive) {
    let MassiveLenght = Massive.lenght 
    if (MassiveLenght%2===0) {
    alert("Четное количество элементов")};
    else  (MassiveLenght%2!==0) {
    alert("Нечетное количество элементов")}}
    console.log(element_massive ([-6,-4,9,6,12]));