// function a() {
//     return 35;
// }
// console.log(a());

// //35 correct

// function a() {
//     return 4;
// }
// console.log(a() + a());

//8 correct

// function a(b) {
//     return b;
// }
// console.log(a(2) + a(4));

// //6 correct

// function a(b) {
//     console.log(b);
//     return b * 3;
// }
// console.log(a(3));

// //3 , 9 correct

// function a(b) {
//     return b * 4;
//     console.log(b);
// }
// console.log(a(10));

// //40 correct

// function a(b) {
//     if (b < 10) {
//         return 2;
//     } else {
//         return 4;
//     }
//     console.log(b);
// }
// console.log(a(15));

//4 correct

// function a(b, c) {
//     return b * c;
// }
// console.log(10, 3);
// console.log(a(3, 10));
// //30 . did not include 10, 3 . wrong

// function a(b) {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
//     return i;
// }
// console.log(3);
// console.log(4);
// //3,4 correct

// function a() {
//     for (var i = 0; i < 10; i++) {
//         i = i + 2;
//         console.log(i);
//     }
// }
// a();
// //2,3,4,5,6,7,8,9,10,11 wrong ,  answer: 2,5,8,11

// function a(b, c) {
//     for (var i = b; i < c; i++) {
//         console.log(i);
//     }
//     return b * c;
// }
// a(0, 10);
// console.log(a(0, 10));
// //0,1,2,3,4,5,6,7,8,9 wrong 

// function a() {
//     for (var i = 0; i < 10; i++) {
//         for (var j = 0; j < 10; j++) {
//             console.log(j);
//         }
//         console.log(i);
//     }
// }
// // //no called correct

// function a() {
//     for (var i = 0; i < 10; i++) {
//         for (var j = 0; j < 10; j++) {
//             console.log(i, j);
//         }
//         console.log(j, i);
//     }
// }
//no called correct

// var z = 10;

// function a() {
//     var z = 15;
//     console.log(z);
// }
// console.log(z);

// //10 correct

// var z = 10;

// function a() {
//     var z = 15;
//     console.log(z);
//     return z;
// }
// z = a();
// console.log(z);
//15  wrong 

// 10 out 15 predicted correct