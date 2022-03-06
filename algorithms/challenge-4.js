function withdraw(amount) {
    let hundredRemainder = amount%100;
    let hundred = (amount - hundredRemainder)/100;
    let fiftyRemainder = hundredRemainder%50;
    let fifty  = (hundredRemainder-fiftyRemainder)/50;
    let twentRemainder = fiftyRemainder%20;
    let twenty = (fiftyRemainder -twentRemainder)/20;
    return [hundred,fifty,twenty];
}

module.exports = withdraw


console.log(withdraw(370));