//Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
//Таких приборов должно быть, как минимум, два .
//Выбрав прибор, подумайте, какими свойствами он обладает.
// Используем классы.

class Device {
    constructor(watts) {
        this.watts = watts;
        this.plug = false;
    }

    energyConsumption (hours) {
        if (this.plug) {
            return `This ${this.name} uses ${this.watts * hours} watts`;
        } else {
            return `This ${this.name} is offline.`;
        }
    }

    plugIn() {
        this.plug = true;
    }

    plugOut() {
        this.plug = false;
    }
}

class TV extends Device {
    constructor(name, color, watts) {
        super(watts);
        this.name = "TV " + name;
        this.color = color;
    }
}

class Fridge extends Device {
    constructor(name, color, watts) {
        super(watts);
        this.name = "Fridge " + name;
        this.color = color;
    }
}

const myTV = new TV("living room", "black", 200);
const myFridge = new Fridge("home", "white", 500);

myFridge.plugIn();

console.log(myTV.energyConsumption(5));
console.log(myFridge.energyConsumption(8));

console.log(myTV);
console.log(myFridge);