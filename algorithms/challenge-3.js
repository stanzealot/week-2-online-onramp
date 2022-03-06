function increment(arr, value) {
    let newArray = arr
    newArray.forEach(element=>{
        let key = Object.keys(element).join('');
        element[key] +=value
    })
    return newArray;
}

module.exports = increment


console.log(increment([{ val: 10 }, { val: 20}, { val: 30 }], 5))

