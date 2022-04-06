//Функция, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

const object = {
    a: 1,
    b: 2,
    d: 5,
}

function checkKey(key, obj){
    let result = false;
    for (let i in obj){
        if (i === key){
            result = true
        }
    }
    return result
}

g = checkKey("d", object)
console.log(g)