// On clicking remove button the item should be removed from DOM as well as localstorage.
let tot_amt = document.getElementById("total_amount")
let t = total_price()
console.log(t)
tot_amt.innerText = t
let bucket = document.getElementById("bucket")
let data = JSON.parse(localStorage.getItem("coffee"))||[]

function total_price(){
  let data = JSON.parse(localStorage.getItem("coffee"))||[]
  console.log(data)
  let sum = data.reduce(function(acc,el){
    return acc = acc+el.price


  },0)
  return sum
}
// total_price()
function display(data){
  bucket.innerHTML = null
  data.forEach(function(el,i){
    
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.image
    let h3 = document.createElement("h3")
    h3.innerText = el.title
    let p = document.createElement("p")
    p.innerText = el.price
    let btn = document.createElement("button")
    btn.innerText = "Remove"
    btn.addEventListener("click",function(){
      Remove(el,i)
    })
    div.append(img,h3,p,btn)
    bucket.append(div)
  })
}
display(data)
// total_price()
function Remove(el,i){
data.splice(i,1)
localStorage.setItem("coffee",JSON.stringify(data))
display(data)
// total_price()
tot_amt.innerText = total_price()
}