// will not work if deleted
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar) {
    let yen = dollar * (oneEuroIs.JPY / oneEuroIs.USD);
    console.log(`You have just converted ${dollar} USD to ${yen} JPY`);
    
    return yen;
}

// function to convert euro to dollars
function fromEuroToDollar(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    console.log(`You have just converted ${valueInEuro} EUR to ${valueInDollar} USD`);
    
    return valueInDollar;    
}

// function to convert yen to pound
function fromYenToPound(yen) {
    let pound = yen * (oneEuroIs.GBP / oneEuroIs.JPY);
    console.log(`You have just converted ${yen} JPY to ${pound} GBP`);
    
    return pound;    
}


// export the functions to be used on other files 

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound , sum };
console.log(module.exports);
