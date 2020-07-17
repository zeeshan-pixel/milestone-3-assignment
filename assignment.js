//First section feetToMile

function feetToMile(feet){
    if (feet <= 0){
        return "Wait, distance can't be negative!";
    } 
    else {
        let mile = feet * 0.000189394;
        return mile;
    }
}

var result = feetToMile(18000).toFixed(2);
console.log(result);



//Second section woodCalculator

function woodCalculator(numOfChair, numOfTable, numOfBed){
    let Chair = numOfChair * 1;
    let Table = numOfTable * 3;
    let Bed = numOfBed * 5;
    let total = Chair + Table + Bed;
    return total;
}

let result = woodCalculator(12, 5, 12);
console.log(result);



//Third section brickCalculator

function brickCalculator(floorNum){
    if (floorNum <=10 && floorNum >=1){
        let brickNum = floorNum * 15000;
        return brickNum;
    }
    else if (floorNum > 10 && floorNum <= 20) {
        let brickNum = ((floorNum - 10) * 12000) + 150000;
        return brickNum;
    }
    else if (floorNum > 20){
        let brickNum =((floorNum - 20) * 10000) + 270000;
        return brickNum;
    }
    else {
        return "Hey, there is something wrong!";
    }
}
let result1 = brickCalculator(7);
console.log(result1);
let result2 = brickCalculator(19);
console.log(result2);
let result3 = brickCalculator(28);
console.log(result3);
let result4 = brickCalculator(-2);
console.log(result4);


//Fourth section tinyFriend

function tinyFriend(friends){   
    let oneFriend =friends[0];
    for(let i = 0; i < friends.length; i++){
        let element = friends[i];
        if (element < oneFriend){
            oneFriend = element;
        }
    }
    return oneFriend;
}
let friends =[ "Shawon", "Bappi", "Zahin", "Sanjan", "Turjo", "Sunny"];
let result = tinyFriend(friends);
console.log(result);