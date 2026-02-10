// function selectionSort(arr){
//     const n = arr.length;

//     for(let i=0; i<n-1; i++){
//         let minindex = i;

//         for(let j=i+1; j<n; j++){
//             if(arr[j]<arr[minindex]){
//                 minindex = j;
//             }
//         }

//         if(minindex!==i){
//             [arr[i], arr[minindex]] = [arr[minindex], arr[i]];
//         }
//     }

//     return arr;
        

// }

// const arr =[4,2,5,1,6]
// console.log(selectionSort(arr))



// function selectionSort(arr,K){
//     const n = arr.length;

//     for(let i=0; i<K; i++){
//         let minIndex = i;

//         for(let j=i+1; j<n; j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j;
//             }
//         }

//         if(minIndex!==i){
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         }
//     }

//     return arr[K-1];
        

// }

// const arr=[4,2,5,1,6]
// console.log(selectionSort(ArrayBuffer,1))

//ouestion [0,5,0,3,8,0,2]

// function moveZeroestoEnd(arr){
//     let n = arr.length

//     for(let i=0; i<n-1; i++){
//         for(let j=0; j<n-1-i; j++){
//             if(arr[j]==0 && arr [j+1] !==0){
//                 [arr[j], arr[j+1]]= [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }

// console.log(moveZeroestoEnd([0,5,0,3,8,0,2]))


//[4,3,2,1]
// find minimum number of swap required to sort this array




