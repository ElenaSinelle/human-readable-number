module.exports = function toReadable (number) {
    const arrUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrDozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return arrUnits[number];
    } 
    if (number < 100) {
        if (number % 10 === 0) {
            return arrDozens[number / 10 - 1];
        } else {
            return arrDozens[Math.floor(number/10)-1] + " " + arrUnits[number % 10];
        }
    }
    if (number < 1000) {
        if (number % 100 === 0) {
            return arrUnits[number / 100] + ' hundred';
        } else  if (number % 10 === 0 && number % 100 !== 0) {
            return arrUnits[Math.floor(number/100)] + ' hundred ' + arrDozens[Math.floor((number - Math.floor(number/100)*100)/10) -1];
        } else if ((number % 100) > 0 && (number % 100) < 20) {
            return arrUnits[Math.floor(number/100)] + ' hundred ' + arrUnits[number % 100];
        } else {
            return arrUnits[Math.floor(number/100)] + ' hundred ' + arrDozens[Math.floor((number - Math.floor(number/100)*100)/10) -1] + " " + arrUnits[number % 10];
        }
    }
    if (number < 0 || number >= 1000) {
        return 'this situation is not defined by the task';
    }
}


