function weekNumberstoWords(inputArray){
   for (let i = 0; i < inputArray.length; i++){
        switch (inputArray[i]) {
        
            case 1:
                inputArray[i] = "Monday";
                break;
            case 2:
                inputArray[i] = "Tuesday";
                break;
            case 3:
                inputArray[i] = "Wednesday";
                break;
            case 4:
                inputArray[i] = "Thursday";
                break;
            case 5:
                inputArray[i] = "Friday";
                break;
            case 6:
                inputArray[i] = "Saturday";
                break;
            case 7:
                inputArray[i] = "Sunday";
                break;
        }
    }
    return inputArray;

}


console.log(weekNumberstoWords([1,4,6,3,2]));