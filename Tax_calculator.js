function simpleTax(income, percentage) {
    return (income * percentage)/100;
}


function createTaxCalculator(taxPercentage) {
    let adminCharges = 500;
    return function (income) {
        return (income * taxPercentage) / 100 + adminCharges;
    }
}
let income = 100000;
let percentage = 20;
console.log(simpleTax(income,percentage));