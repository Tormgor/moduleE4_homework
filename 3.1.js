//Функция, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
// только собственных свойств.
// Данная функция не должна возвращать значение

const fun1 = {
    a: 5,
    b: 6,
}

const fun2 = Object.create(fun1);
fun2.c = "7";

function checkObj(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`)
        }
    }
}
console.log(fun2)
checkObj(fun2)