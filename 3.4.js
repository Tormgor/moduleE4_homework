//Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два .
// Выбрав прибор, подумайте, какими свойствами он обладает.

function Device (watts) {
    this.watts = watts;
    this.plug = false;
}

Device.prototype.energyConsumption = function (hours) {
    if (this.plug) {
        return `This ${this.name} uses ${this.watts * hours} watts`;
    } else {
        return `This ${this.name} is offline.`;
    }
}

Device.prototype.plugIn = function () {
    this.plug = true;
}

Device.prototype.plugOut = function () {
    this.plug = false;
}

function TV (name, color, watts) {
    this.name = "TV " + name;
    this.color = color;
    this.watts = watts;
}

TV.prototype = new Device();

function Fridge (name, color, watts) {
    this.name = "Fridge " + name;
    this.color = color;
    this.watts = watts;
}

Fridge.prototype = new Device();

const myTV = new TV("living room", "black", 200);
const myFridge = new Fridge("home", "white", 500);

myFridge.plugIn();

console.log(myTV.energyConsumption(5));
console.log(myFridge.energyConsumption(8));

console.log(myTV);
console.log(myFridge);