// 1. Get 1 to 255
var counter = [];

function getNum() {
    for (var i = 1; i <= 255; i++) {
        counter = i;
        console.log(counter);
    }
}

getNum();

// 2. Get even 1000

var sum = 0;

function getEvenOneThousand() {
    for (var i = 0; i <= 1000; i++) {
        if (i % 2) {
            sum = sum + i;
        }
    }
    console.log("Sum of even 1 to 1000:" + sum)
}

getEvenOneThousand();

// 3. Sum odd 5000
var oddSum = 0;

function getOddSum() {
    for (var i = 1; i < 5000; i++) {
        if (i % 2) {
            oddSum += i;
        }
    }
    return oddSum;
}
var sumOfOdd = getOddSum();
console.log(sumOfOdd);

// 4.Iterate an Array

var IterSum = [10, 12, 13];
var sum = 0;

function getIterateArray() {
    for (var i = 0; i < IterSum.length; i++) {
        sum = sum + IterSum[i];
    }
    return sum;
}

console.log(getIterateArray());

// 5. Find max
var numArr = [1, 4, 65, 5, 6];
var maxNum = 0;

function getMaxNum() {
    for (var i = 0; i < numArr.length; i++) {
        var x = numArr[i];
        var y = numArr[i + 1]
        if (x > y) {
            console.log(numArr[i])
        }
    }
}
getMaxNum();

// 6.)Find average
var numArrAvg = [1, 3, 5, 7, 20];
var avgNum = 0;

function getAverage() {
    for (var i = 0; i < numArrAvg.length; i++) {
        avgNum += numArrAvg[i];
        sumOfAvg = avgNum / numArrAvg.length;

    }
    console.log(sumOfAvg);
}

getAverage();

//7.)Array odd
var numberArr = [];

function getArrOdd(num) {
    for (var i = 0; i < num; i++) {
        if (i % 2) {
            numberArr.push(i);
        }
    }
    console.log(numberArr);
}
var ArrOdd = getArrOdd(50);

// 8.) Greater than Y

var numArr = [2, 6, 5, 7, 8, 9, 10];

function greaterThanY() {
    var counter = 0;

    for (var i = 0; i < numArr.length; i++) {
        var y = numArr[i + 1];
        if (y > numArr[i]) {
            counter++;
        }
    }
    return counter;
}

console.log(greaterThanY());

// 9.)Squares

var numArrSquare = [2, 4, 6, 7, 10];

function getSquare() {
    for (var i = 0; i < numArrSquare.length; i++) {

        numArrSquare[i] = numArrSquare[i] * numArrSquare[i];

    }
    return numArrSquare;
}

console.log(getSquare());

// 10.) Negatives

var ArrNegatives = [1, 4, 5, -7, -2]

function noNegatives() {
    for (var i = 0; i < ArrNegatives.length; i++) {
        if (ArrNegatives[i] < 0) {
            ArrNegatives[i] = 0;
        }
    }
    return ArrNegatives;
}

console.log(noNegatives());

//11.) Max / Min / Avg

var newArrNum = [10, 3, 56, 2];

function maxMinAvg() {
    var max = newArrNum[0];
    var min = newArrNum[0];
    var sum = newArrNum[0];
    for (var i = 0; i < newArrNum.length; i++) {
        if (newArrNum[i] > max) {
            max = newArrNum[i];
        }
        if (newArrNum[i] < min) {
            min = newArrNum[i];
        }
        sum += newArrNum[i];
    }
    var avg = sum / newArrNum.length;
    var allArray = [max, min, avg];
    return allArray;
}

console.log(maxMinAvg());

12.) Swap

var arrNum = [1, 2, 3, 4];

function getSwap() {
    var temp = arrNum[0];
    for (var i = 0; i < arrNum.length; i++) {
        arrNum[0] = arrNum[arrNum.length - 1];
        arrNum[arrNum.length - 1] = temp;
        return arrNum;
    }
}

console.log(getSwap());


// 13.) number to String
var newArr = [-2, -3, 5, 10];

function numToStr() {
    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] < 0) {
            newArr[i] = 'Zero';
        }
    }

    return newArr;
}

console.log(numToStr());