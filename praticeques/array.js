// let arr = [1,2,3,4,5];
// console.log(arr)

// let brr = ["love", 1 , true];
// console.log(brr);

//MAP 



// let arr=[10,20,30]

// let ans = arr.map((mul)=>{
//     return mul*mul
// })

// console.log(ans);



//        Object

// Object kise kahte hai    key value ka pair hota hai     store klya   ye data k proprety ko store krta hai 

// let obj={
//     name:"tyagi lode",
//     age:22,
//     emial:"tyagi@122"

// }

// obj.city="meerut" // added by dot oprater
// delete obj.age  //delet by dot operator
// obj["age"]=26 //braket oprator
// console.log(obj);


// console.log(obj);
// console.log(obj["age"]);

// console.log(obj.emial)


// let Car_Obj={
//     name:"landover",
//     speed:200,
//     color:"black",
//     // strat:function stating() {
//     //     return "car is starting....."
      
//     // }
// }

// // console.log(Car_Obj.strat());

// Car_Obj.speed="220 km/h"
// console.log(Car_Obj.speed);


// filter 




//         slection sort


// for (let i = 0; i < arr.length; i++) {
//     let minIndex=i    
// for (let j = i+1; j < arr.length; j++) {
//   if (arr[j]< arr[minIndex]) {
//     minIndex= j
//   }
// }
// if (minIndex!==i) {
//     let temp=arr[i]
//     arr[i]=arr[minIndex]
//     arr[minIndex]=temp
// }
// }
// console.log(arr);


//filter 
let arr =[10,20,30,11,21,44,51];
let even = arr.filter((number)=> {
    if(number%2==0){
        return true;
    }
    else{
        return false;
    }
});












