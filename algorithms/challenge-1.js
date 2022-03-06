function missingNumber(numArr) {

    const  UniversalArray = [1,2,3,4,5,6,7,8,9]
    let missingNum = [];
    let singleMissingNum;
    if(numArr.length !== UniversalArray.length){
         missingNum = UniversalArray.filter(element => numArr.includes(element) === false).sort((a,b)=>a-b);
         if(missingNum.length>1){
                return missingNum 
                
         } else{ return (singleMissingNum = missingNum[0])}  
    }else{
        return "False";
    }
    




    //  Another way
    // const UniversalArray = [1,2,3,4,5,6,7,8,9];
    // const newArray = numArr.sort((a,b)=>a-b);
    // let missingNum = [];
    // if(newArray.length !== UniversalArray.length){
    //     for(let i=0;i<UniversalArray.length; i++){
        
    //         if(newArray.includes(UniversalArray[i]) === false){
    //             missingNum.push(UniversalArray[i]);
    //         }
        
    //     }
    //     let singleNum = 0;
    //     if(missingNum.length>1){
    //      return missingNum 
    //     } else{ return (singleNum = missingNum[0])}  
    // }else{
    //     return "False";
    // }
    
    
}

module.exports = missingNumber



// function missingNumber(arr){
    

// }


console.log(missingNumber([1,2,3,4,5,6,7,8,9]));

