var addArr = JSON.parse(localStorage.getItem("items"))

console.log(addArr)

var total = addArr.reduce(function(sum,elem,index,arr){
    return sum + Number(elem.price)
},0);

var length = addArr.length
console.log(total)
console.log(addArr)

document.querySelector("#cart_total").innerText = total


addArr.map(function(elem,index){
    let box = document.createElement("div")
    let name = document.createElement("p")
    name.innerText = elem.name;
    let image = document.createElement("img")
    image.src = elem.image;
    let price = document.createElement("p")
    price.innerText = elem.price
    let  Remove = document.createElement("button")
    Remove.innerText = "Remove"
    Remove.addEventListener("click",function(){
        removeItemfn(elem,index)
    })
    box.append(name,image,price,Remove)
    document.querySelector("#cart").append(box)
})




 function  removeItemfn(elem,index){

    addArr.splice(index,1)
    localStorage.setItem("items",JSON.stringify(addArr))
    window.location.reload();
 }
