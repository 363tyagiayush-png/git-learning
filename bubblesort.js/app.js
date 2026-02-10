// Bubble sorting
// bubble metophor : like bubble in a coke can
// the laegest bubble 'bubble up' to the top (or the end of the array)
// we have multiple pass es in an array so that at each pass we can bring the largest 





function bubblesort(arr){
    const n = arr.length;

    for(let i=0; i<n-1; i++){
        for (let j=0; j<n-i-1; j++)
            if(arr[j]>arr[j+1]){
                // let temp = arr[j]
                //arr[j]= arr[j+1];
                //arr[j+1]=temp
                [arr[j], arr[j+1]]=[arr[j+1],arr[j]];
            }
    }
}
return arr;




function bubblesortdescending(arr){
    const n = arr.length;

    for(let i=0; i<n-1; i++){
        let swapped = false;
        for (let j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                // let temp = arr[j]
                //arr[j]= arr[j+1];
                //arr[j+1]=temp
                [arr[j], arr[j+1]]=[arr[j+1],arr[j]];
                swapped = true; 
            }
    }
    if(!swapped){
        break;

    }
    return arr;
}
}
//find the k-th largest element in an unsorted array using a modefied bubble sort.
//instead of fully sorting the array , optimize to only make enough passes to find the K-th length.

// example ;In [3,2,1,5,6,4], the 2nd length element is 5.

//SELECTION SORT
