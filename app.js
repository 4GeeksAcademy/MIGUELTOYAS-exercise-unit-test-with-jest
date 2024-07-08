// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)


const fromDolarToYen = (dollarAmount) => {
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
    }
    return (dollarAmount * oneEuroIs.JPY) / oneEuroIs.USD
}
const fromEuroToDollar = (euroAmount) => {
    let oneEuroIs = {
        "USD": 1.07, // us dollar
    }
    return (euroAmount * oneEuroIs.USD)
}
const fromYenToPound	 = (yenAmount) => {
    let oneEuroIs = {
        "JPY": 156.5, // japan yen
        "GBP": 0.87, // british pound
    }
    return (yenAmount * oneEuroIs.GBP) / oneEuroIs.JPY
}

// Hay que acordarse de poner el el module.exports al final del JS
module.exports = { sum, fromDolarToYen, fromEuroToDollar, fromYenToPound };


