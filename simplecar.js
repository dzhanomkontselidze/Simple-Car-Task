const car = {
    color: 'white',
    year: '1995',
    brand: 'Tatra',
    model: 'AD-28',
    gearbox: 'manual',
    fuel: 'diesel',
    price: '49273',
    currency: 'USD',
}

function getShortDescription(car) {
    const color = car.color || "Unknown Color";
    const brand = car.brand ||  "Unknown Brand";
    const model = car.model ||  "Unknown Model";
return `${brand} ${model}, ${color}`;

}
function getYearAsNumber(car) {
    if (!car.year) return null;
    return Number (car.year);

}

function setDescription(car, description) {
    if (car && typeof car === 'object') {
        car.description = description || "Важка спецтехніка вантажопідйомністю 28 тонн, побудована на шасі Tatra, що характеризується стрілою довжиною до 26 метрів та гуськом до 31,2 метра";
    }
    return car;
}

function getPriceByExchangeRate(car, rate) {
    if (!car.price || !rate) return 0;
    return car.price * rate;
}

console.log("Харектеристики Бренд,Модель,Колір:", getShortDescription(car));

console.log("Рік випуску:", getYearAsNumber(car));

setDescription(car, "Heavy Duty Truck")
console.log("Опис:", setDescription(car));

const rate = 43.20
console.log("Ціна в гривнях:", getPriceByExchangeRate(car, rate));
