function getFirstValue(inputArray){
    inputArray.sort();
    return inputArray[inputArray.length-1];
}

console.log(getFirstValue(["Monday","Thursday","Saturday","Wednesday","Tuesday"]));