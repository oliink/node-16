class Converter {
    constructor(baseCurrencyUSD){
        this.baseCurrencyUSD = baseCurrencyUSD;
    }

    roundTwoDecimals(amount){
        return Math.round(100 * amount) / 100;
    }

    converterToUAH(amount){
        return this.roundTwoDecimals(amount * this.baseCurrencyUSD);
    }

    converterToUSD(amount){
        return this.roundTwoDecimals(amount / this.baseCurrencyUSD);
    }
}

module.exports = Converter;









// нерабочая версия   // не получается вывести baseCurrencyUSD из request
// const request = require('request');
// let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

// let baseCurrencyUSD;
// request(url, (err, res, data) => {
//     let obj = JSON.parse(data);
//     for(let i = 0; i < obj.length; i++){
//         if(obj[i].ccy === 'USD'){
//             baseCurrencyUSD = obj[i].buy;    
//         }
//     }       
//     console.log(baseCurrencyUSD);    // 27    
// })
// // console.log(baseCurrencyUSD);    // не получается вывести baseCurrencyUSD из request


//     // helper 
//     function roundTwoDecimals(amount){
//         return Math.round(100 * amount) / 100;
//     }

//     module.exports.convertToUAH = function convertToUAH(amount){
//         return roundTwoDecimals(amount * baseCurrentyUSD);
//     }

//     module.exports.convertToUSD = function convertToUSD(amount){
//         return roundTwoDecimals(amount / baseCurrentyUSD);
//     }