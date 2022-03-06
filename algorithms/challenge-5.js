function arraySum(arr1, arr2) {
    let sum =[];
    let l1 = arr1.length;
    let l2 = arr2.length;
    for(let i =0; i<l1;i++){
        sum[i] = arr1[i] + arr2[i % l2];
    }

    return sum;
}

module.exports = arraySum

console.log(arraySum([10,20,30,40,50], [20,40,60]))