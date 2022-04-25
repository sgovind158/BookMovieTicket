// Store cart items in local storage with key: "items"

showGrocery()

async function showGrocery(){

    try{

        var res = await fetch(`https://grocery-masai.herokuapp.com/items`)

        var dataObj = await res.json()
        console.log(dataObj.data,"this is my data")

        showData(dataObj.data)
    }catch(err){
        console.log("this is err", err)
    }
}


var dataArr1 = JSON.parse(localStorage.getItem("items"))||[]


function   showData(dataArr){
  

    // document.querySelector("#items").innerHTML = null

    dataArr.map(function(elem,index){
   
        let box = document.createElement("div")
        // name image price add to cart button

        let name = document.createElement("p")
        name.innerText = elem.name;
        let image = document.createElement("img")
        image.src = elem.image;
        let price = document.createElement("p")
        price.innerText = elem.price
      let  addToCart = document.createElement("button")
        addToCart.innerText = "addToCart";
       addToCart.addEventListener("click", function(){
        addToCartFn(elem,index)
 })
          box.append(name,image,price,addToCart)
    document.querySelector("#items").append(box)
    })

} function  addToCartFn(elem){
    console.log(elem,"this is add to cart data")
   
    dataArr1.push(elem)
    var length = dataArr1.length;
    document.querySelector("#item_count").innerText = length
  
    localStorage.setItem("items",JSON.stringify( dataArr1))
}

