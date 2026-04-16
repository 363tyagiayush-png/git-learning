// function getPowerofTwo(n){
//     debugger;
//     if(n===1)return 2;
//     const power = getPowerofTwo(n-1);
//     debugger;
//     return 2*power;
// }
// console.log(getPowerofTwo(5));


// let arr = [2, 5, 8, 3, 7, 4, 9];

// function evenCount(arr, index = 0) {
//   // Base case
//   if (index >= arr.length) {
//     return 0;
//   }

//   // Check if current element is even
//   let isEven = arr[index] % 2 !== 0 ? 1 : 0;

//   // Recursive call
//   return isEven + evenCount(arr, index + 1);
// }

// console.log(evenCount(arr)); // 3



// // call stack 
// greet()
// function greet(){
//     console .log("tyagi ji kasa ho")
//     enjoy()
// }
// function enjoy(){
//     console.log("sb badhiya h kya")
//     temp()
// }
// function temp(){
// console.log("tum kasa ho")
//}


// function temp (n){
//     if(n==0) return
//     console.log("hello world")
//     temp(n-1)
// }
// temp(5)

// function temp(n){
//     if(n==0) return;
//     console.log(n);
//     temp(n-1);
// }
// temp(10)

// function temp(n){
//     if(n==0) return;
//     temp(n-1);
//     console.log(n);
// }
// temp(10)

// function sum(n){
//     if(n==1) return 1;
//     return n + sum(n-1);
// }
// console.log(sum(5))

// function fact(n){
//     if(n==1) return n;
//     return n * fact(n-1);
// }
// console.log(fact(5))

// function bubbleSort(arr) {
//     const n = arr.length;
//     let swapped;

//     for (let i = 0; i < n - 1; i++) {
//         swapped = false;

//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//                 swapped = true;
//             }
//         }

//         // Optimization: stop if no swaps happened
//         if (!swapped) break;
//     }

// //     return arr;
// }

// // Example
// console.log(bubbleSort([5, 3, 8, 4, 2]));
// Output: [2, 3, 4, 5, 8]

// febonachiseries
// let n =10;
// let first =0; second=1;
// process.stdout.write(first+" "+second+" ")

// for(let i=0; i<=n-2; i++){
//     let third = first + second
//     first = second
//     second = third
//     process.stdout.write(third+" ");
//}

// function feboNTerms(n, first, second){
//     if(n==0) return
//     let third= first + second;
//     process.stdout.write(third+" ");
//     feboNTerms(n-1,second, third);
// }
// let n= 10;
// process.stdout.write(0+" "+1+" ");
// feboNTerms(n-2, 0, 1)

let arr = [1,2,3,4,5]
function rev(arr) {
    if( arr.length === 0) return []
   
    return rev(arr.slice(1)).concat(arr[0]);


}

console.log(rev(arr));








