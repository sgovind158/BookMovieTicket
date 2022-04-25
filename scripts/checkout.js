document.querySelector("#form").addEventListener("submit",myOrder)

function myOrder(){
  event.preventDefault()

  // let promise1 = new Promise(function(resolve){
setTimeout(function(){
  // resolve("your order is acceped")
 alert("Your order is accepted ")
},0000)
// })

// let promise2 = new Promise(function(resolve){
setTimeout(function(){
  // resolve("your order is 8 second")
  alert("Your order is being Packed ")
},3000)
// })


// let promise3 = new Promise(function(resolve){
setTimeout(function(){
  // resolve("your order is 8 second")
  alert("Your order is in transit  ")
},8000)
// })


// let promise4= new Promise(function(resolve){
setTimeout(function(){
  // resolve("your order is 8 second")
  alert(" Your order is out for delivery   ")
},10000)
// })


// let promise5 = new Promise(function(resolve){
setTimeout(function(){
  // resolve("your order is 8 second")
  alert("Order delivered  ")
},12000)
// })
}
