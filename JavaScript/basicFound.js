//1. Get 1 to 255
// var counter = [];

// function getNum() {
//     for (var i = 1; i <= 255; i++) {
//         counter = i;
//         console.log(counter);
//     }
// }

// getNum();

//2. Get even 1000

// var sum = 0;

// function getEvenOneThousand() {
//     for (var i = 0; i <= 1000; i++) {
//         if (i % 2) {
//             sum = sum + i;
//         }
//     }
//     console.log("Sum of even 1 to 1000:" + sum)
// }

// getEvenOneThousand();

//3. Sum odd 5000
// var oddSum = 0;
// function getOddSum() {
//     for (var i = 1; i < 5000; i++) {
//         if (i % 2) {
//             oddSum += i;
//         }
//     }
//     return oddSum;
// }
// var sumOfOdd = getOddSum();
// console.log(sumOfOdd);

//4.Iterate an Array
var IterSum = [2, 4, 5, 6];

function getIterateArray() {
    for (var i = 0; i < IterSum.length; i++) {
        IterSum += IterSum[i];
    }
    console.log(IterSum);
}

getIterateArray();