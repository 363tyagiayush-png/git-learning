// sayMyName("tyagi");
// function sayMyName(finalName){
//     console.log(finalName)
// }



// const users = [
//  { name: "Alice", age: 15 },
//  { name: "Bob", age: 45 },
//  { name: "Charlie", age: 65 },
//  { name: "Diana", age: 30 },
//  { name: "Eve", age: 70 }
// ];

// const result = users.reduce((acc,user)=>{
//     if(user.age <18){
//         acc.child++;
//     }else if(user.age <= 60){
//        acc.adult++;
//     }else{
//         acc.senior++;
//     }
//     return acc;
// },{child: 0,adult: 0,senior: 0});
// console.log(result);


// const result = orders
//   .flatMap(order => order.items)
//   .filter(item => item.price > 50)
//   .reduce((acc, item) => {
//     acc[item.category] = (acc[item.category] || 0) + item.price;
//     return acc;
//   }, {});

// console.log(result);

// const result = order
// .flatMap(orde => order.items)
// .filter(item => item.price > 50)
// .reduce((acc,item)=> {
//     acc[item.category] = (acc[item.category]|| 0)+ item.price;
//     return acc;
// },{});
// console.log(result)





// const transactions = [
//   { type: 'deposit', amount: 1000 },
//   { type: 'withdrawal', amount: 200 },
//   { type: 'deposit', amount: 500 },
//   { type: 'withdrawal', amount: 100 },
//   { type: 'deposit', amount: 300 }
// ];

// const totalBalance = transactions.reduce((balance, transaction) => {
//   if (transaction.type === 'deposit') {
//     return balance + transaction.amount;
//   } 
//   else if (transaction.type === 'withdrawal') {
//     const fee = transaction.amount * 0.02;   
//     return balance - (transaction.amount + fee);
//   }
//   return balance;
// }, 0);

// console.log(totalBalance); 


// const products = [
//   { name: 'Laptop', price: 95000, rating: 4.5, inStock: true },
//   { name: 'Mouse', price: 2000, rating: 4.2, inStock: true },
//   { name: 'Keyboard', price: 6000, rating: 4.8, inStock: true },
//   { name: 'Monitor', price: 24000, rating: 4.6, inStock: false },
//   { name: 'Webcam', price: 9500, rating: 3.9, inStock: true },
//   { name: 'Headphones', price: 16000, rating: 4.7, inStock: true }
// ];

// const result = products
//   .filter(product => 
//     product.inStock &&
//     product.price >= 4000 &&
//     product.price <= 40000 &&
//     product.rating >= 4
//   )
//   .map(product => ({
//     name: product.name,
//     finalPrice: product.price * 0.9   // 10% discount applied
//   }));

// console.log(result);

// const result = products
// .filter(product => 
//     product.inStock &&
//     product.price >=4000 &&
//     product.price <= 40000 &&
//     product.rating >= 4
// )
// .map(product => ({
//     name: product.name,
//     finalprice: product.price *0.9 
// }));
// console.log(result);

// const sentences = [
//   "The quick brown fox",
//   "jumps over the lazy dog",
//   "The dog was really lazy"
// ];

// // Step 1: Join all sentences into one string
// const allText = sentences.join(" ");

// // Step 2: Convert to lowercase and split into words
// const words = allText.toLowerCase().split(/\s+/);

// // Step 3: Filter words with 4 or more characters
// const filteredWords = words.filter(word => word.length >= 4);

// // Step 4: Remove duplicates using Set
// const uniqueWords = [...new Set(filteredWords)];

// // Step 5: Sort alphabetically
// const sortedWords = uniqueWords.sort();

// // console.log(sortedWords);

// const allText = sentences.join(" ");
// const word = allText.toLowerCase().split(/\st/);
// const filteredWords = words.filter(word => word.length >= 4);
// const uniqueWords = [...new set(filteredWords)];
// const sortedWords = uniqueWords.sort();





// classes && default parameters in functions
// class Human{
//   //properties 
//   age = 13;
//   wt = 80;
//   ht = 100;

// //behaviour
// walking(){
//   console.log("I am walking")
// }
// running(){
//   console.log("I am running")
// }
// }
// let obj = new Human();
// console.log(obj.age);
// obj.walking();

// defalt peremeter
// function sayMyName(myName = "prabhu Deva"){
//   console.log("my Name is:" ,myName);
// }
// sayMyName("love")




// let arr=[1,9,3,6,77,2]

// function largestNum(arr) {
//   let largest=arr[0]

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>largest) {
//       largest=arr[i]
//     }
    
//   }
// return largest

// }

// console.log(largestNum(arr));


// by second method   sorting se

// let arr=[11,3,66,77,9]

// let ans=arr.sort((a,b)=>a-b)
// let largest=ans[ans.length-1]
// console.log(largest);


// let arr=[11,3,66,77,9]
// let ans=Math.max(...arr)
// console.log(ans);



// let arr =[2,5,8,11,14,7,55]

// function even(arr) {
//   let count=0
// for (let i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 == 0) {
//   count++
//  }
  
// }
// return count
// }
// console.log(even(arr));
















// let n=8

// function numPrint(n) {
//   if(n<0)return 0 // rukna kha hai
//  numPrint(n-1)  // har bar kitna chalana hai
//   console.log(n);
// }

// numPrint(n)


