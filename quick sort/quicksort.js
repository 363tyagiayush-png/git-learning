// function quicksort(arr){
//     if(arr.length <= 1){
//        return arr;
//     }
     

// let pivot = arr[arr.length -1];
// let left = []
// let right = []

// for(let i= 0; i<arr.length-1; i++){
//     if(arr[i]<pivot){
//         left.push(arr[i]);
//     }else{
//         right.push(arr[i]);
//     }
// }
// return[...quicksort(left),pivot,...quicksort(right)];
// }
// console.log(quicksort([8,1,3,7,0,10]))




// function quicksort(arr){
//     if(arr.length <= 1){
//        return arr;
//     }
// const pivotIndex = Math.floor(Math.random()*arr.length);
// const pivot = arr[pivotIndex]
// let left=[] ,right=[]

// for(let i=0; i<arr.length;i++){
//     if(i===pivotIndex) continue;
//     if(arr[i]<pivot){
//         left.push(arr[i])
//     }else{
//         right.push(arr[i]);
//     }
// }
// return [...quicksort(left),pivot,...quicksort(right)]
// }
// console.log(quicksort([8,1,3,7,0,10]));


    
    //contest
 
