// Add the coffee to local storage with key "coffee"
let menu = document.getElementById("menu")

  async function getData(){
    try{
      let url = "https://masai-mock-api.herokuapp.com/coffee/menu"
      let res = await fetch(url);
      let data = await res.json();
      display(data.menu.data)
    }
    catch(err){
      console.log(err)
    }
  }

  function display(data){
    data.forEach(function(el){
      let div = document.createElement("div")
      let img = document.createElement("img")
      img.src = el.image
      let h3 = document.createElement("h3")
      h3.innerText = el.title
      let p = document.createElement("p")
      p.innerText = el.price
      let btn = document.createElement("button")
      btn.innerText = "Add to Bucket"
      btn.addEventListener("click",function(){
        add_to_cart(el)
      })
      div.append(img,h3,p,btn)
      menu.append(div)
    })
  }
  let arr = JSON.parse(localStorage.getItem("coffee"))||[]

  function Cartdata(t,img,p){
    this.title = t;
    this.image = img;
    this.price = p;
  }
  let total_count=0;
  let count = document.getElementById("coffee_count")
  count.innerText = arr.length
    function add_to_cart(el){
    let f = 0;
    
    for(let i=0;i<arr.length;i++){
      if(el.image==arr[i].image){
        f=1;
        break;
      }
    }
    if(f==1){
      alert("Item already added")
    }
    else{
      let p = new Cartdata(el.title,el.image,el.price)
      arr.push(p)
      localStorage.setItem("coffee",JSON.stringify(arr))
      // total_count++;
      localStorage.setItem("total_count",total_count);
      count.innerText = arr.length
      

    }
      
    
    
  }
  getData()