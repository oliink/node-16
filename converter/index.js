const Converter = require('./converter');
const request = require('request');
let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

request(url, (err, res, data) => {
    let obj = JSON.parse(data);
    for(let i = 0; i < obj.length; i++){
        if(obj[i].ccy === 'USD')
        baseCurrencyUSD = obj[i].buy;
    }       
    const conv = new Converter(baseCurrencyUSD);
    console.log(conv.converterToUAH(1000));
    console.log(conv.converterToUSD(1000));
})




// нерабочая версия
// const converter = require('./converter');

// console.log(converter.convertToUAH(1000));
// console.log(converter.convertToUSD(1000));