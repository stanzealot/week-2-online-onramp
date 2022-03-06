function numSwap(number) {
    let numStr = (number+"").split("")
    let swapedNum = []
    for(let i =0 ; i<numStr.length;i++){
        if(i%2 !==0 && i !==0){
            let a = numStr[i]
            let b =  numStr[i-1]
            let tem = a
            a = b
            b = tem;
            swapedNum.push(b)
            swapedNum.push(a)
        }
    }
    let x = swapedNum.join('');
    let nums = Number(x)
    return(nums);
}

module.exports = numSwap

console.log(numSwap(1234) ) 
console.log(numSwap(432156)  ) 
