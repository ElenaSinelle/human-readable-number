module.exports = function toReadable (number) {
    const arrUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrDozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   
    if (number < 20) {
        return arrUnits[number];
    } else if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return arrDozens[Math.trunc(number / 10) - 1];
        } else {
            return arrDozens[Math.trunc(number / 10) - 1] + ' ' + arrUnits[number - Math.trunc(number / 10) * 10];
        }
    } else if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
            return arrUnits[number / 100] + ' hundred'; 
        } else if (number % 10 === 0 && number % 100 !== 0) {
            return arrUnits[Math.trunc(number / 100)] + ' hundred ' + arrDozens[Math.trunc((number - Math.trunc(number/100) * 100) / 10) - 1];
        } else if ((number % 100) > 0 && (number % 100) < 20) {
            return arrUnits[Math.trunc(number / 100)] + ' hundred ' + arrUnits[number - Math.trunc(number/100) * 100];
        } else {
            return arrUnits[Math.trunc(number / 100)] + ' hundred ' + arrDozens[Math.trunc((number - Math.trunc(number/100) * 100) / 10) - 1] + ' ' + arrUnits[number - Math.trunc(number / 10) * 10];
        }
    } else if (number < 0 || number >= 1000) {
        return 'this situation is not defined by the task'
    }
}
