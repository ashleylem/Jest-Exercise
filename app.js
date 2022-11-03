// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


// one euro is:
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let euro= valueInDollar*1.2
    let valueInYen = euro * 127.9;
    //return the dollar value
    return valueInYen;
}
const fromYenToPound= function(valueInYen){
    let valueInPound= (valueInYen /127.9) / 0.8
    return valueInPound
}
console.log(fromYenToPound(400))





module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

