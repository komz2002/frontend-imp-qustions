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

// const promiseThree=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     resolve({username:"chai",email:"ks469828@gmail.com"})

//   },1000)

// })
// promiseThree.then(function(user){
//   console.log(user);

// })




// const promiseFour=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error=false
//     if(!error){
//       resolve({usename:"komal",email:"122@gmail.com"})
//     }
//     else{
//       reject("ERROR:something went wrong" )
//     }


// },1000)

// })
// promiseFour
// .then((user)=>{
//   console.log(user);
//   return user.username

// })
// .then((username)=>{
//   console.log(username);


// })
// .catch(function(error){
//   console.log(error)

// })
// .finally(()=>console.log("the promise is either resoved or rejected"))



//promise by using async and await

const promisefive=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true
    if(!error){
      resolve({username:"komal",email:"123@gmail.com"})
    }
    else{
      reject("the: promise is rejected")
    }

  },1000)

});

async function consumePromiseFive(){
  try{
  const response=await promisefive
  console.log(response);
}catch(error){
console.log(error);
}
}
consumePromiseFive();
  

