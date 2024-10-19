// const promiseOne=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("asnyc task");
//     resolve();
//   },1000)
  

// })
// promiseOne.then(function(){
//   console.log("promise consumed")
// })





// new Promise (function(resolve, reject) {
//   setTimeout(function(){
//     console.log("async task 2");
//   resolve()
//   },1000)
// }).then(function(){
//   console.log("resolved 2");
// } 

// )


// 


const promiseFour=new Promise(function(resolve, reject) {
setTimeout(function(){
  let error=true
  if(!error){
    resolve({username:"komal",passward:"12"})

  }else{
    reject('Error:Something went wrong')
  }
  


},1000)
})
promiseFour .then().catch()






