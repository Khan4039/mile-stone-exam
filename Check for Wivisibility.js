let numbersArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for(let z = 0; z < numbersArray.length; z++){
    let currentNumber = numbersArray[z];

    if(currentNumber % 3 !== 0){
        continue;
    }

    if(currentNumber % 2 === 0) {
        continue;
    }
    
    console.log(currentNumber);
}
