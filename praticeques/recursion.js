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

function temp(n){
    if(n==0) return;
    console.log(n);
    temp(n-1);
}
temp(10)












