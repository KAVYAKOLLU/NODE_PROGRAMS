// //Synchronous Programming
// console.log("one")
// console.log("two")
// console.log("three")
// //Asynchronous
// setTimeout(()=>console.log("hello"),2000)
// //callbacks
// function sum(a,b){
//     console.log(a+b)
// }
// function calculator(a,b,sumcallback){
//  sumcallback(a,b)
// }
// calculator(10,20,sum)
// //need to print data1 after 2 sec data2
// //callback hell(difficult to manage and understand)
// function getData(id,nextgetData){
//     setTimeout(()=>{
//         console.log("data",id)
//         if(nextgetData){
//         nextgetData(id);
//         }
//     },2000)
  
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })
//Promises
// function getData(id,nextgetData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
          
//             console.log("data",id)
//             resolve("success")
//             console.log(promise)
            
//         },2000)

//     })
    
//   }
//   let promise=getData(1)
//   promise.then(()=>{
//     console.log("data is obatined")
//   })
//   promise.catch(()=>{
//     console.log("error obtained")
//   })
//   console.log(promise)
//Chaining of promises
// function asyncfunction1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1")
//             resolve("success")
//         },4000)
//     })
// }

// function asyncfunction2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2")
//             resolve("success")
//         },4000)
//     })
// }

// console.log("fetching data from function1")
// let promise1=asyncfunction1()
// promise1.then(()=>{
//     console.log("fetching data from function2")
//     let promise2=asyncfunction2()
//     promise2.then(()=>{

//     })
// })
//async and await


function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data");
            resolve("success");
        }, 4000);
    });
}

async function weather() {
    await api();
    await api()
    
    
}

weather();
