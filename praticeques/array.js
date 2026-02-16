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
//     name:"tyagi ",
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
// let arr =[10,20,30,11,21,44,51];
// let even = arr.filter((number)=> {
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(even)
  
// let arr = [12,'love','kunal',null];
// let ans = arr.filter((value)=>{
//     if(typeof(value)=='string'){
//         return true;
//     }
// });
// console.log(ans);


//reduce
// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,curr)=>{
//     return acc+curr
// });
// console.log(ans)



//sort
// let arr = [9,1,7,4,2,8]
// arr.sort();
// console.log(arr);


// for each 
// let arr = [10,20,30]
// arr.forEach((value,index)=>{
//     console.log("Number:",value,"Index:",index);
// })


// //for in
// let obj={
//     name:"love",
//     age: "25",
//     weight:50,
//     height:"6th feet"
// }
// for(let key in obj){
//     console.log(key,obj[key]);
// } 


// //for of itrable abject -> arr ags
// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }

// let fullName = "babbar"
// for(let value of fullName){
//     console.log(value);
// }

//array in function
// let arr = [10,20,30,40,50];

// let getsum = (arr)=>{
//     let sum = 0;
//     arr.forEach((value)=>{
//         sum = sum+value
//     });
//     return sum;
// }
// let totalsum = getsum(arr)
// console.log(totalsum);    


