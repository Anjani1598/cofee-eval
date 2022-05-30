let id
  let form = document.getElementById("form")
  form.addEventListener("submit", checkout)
  function checkout(){
    event.preventDefault();
    let name = form.name.value;
    let num = form.number.value;
    let add = form.address.value;
    alert("Your order is accepted ")
    debounceFunction(prepared,3000)
    debounceFunction(packed,5000)
    debounceFunction(delivery,2000)
    debounceFunction(delivered,2000)

  }
  function prepared(){
    alert("Your order is being Prepared")
  }
  function packed(){
    alert("Your order is being packed")
  }
  function delivery(){
    alert("Your order is out for delivery")
  }
  function delivered(){
    alert("Order delivered")
  }

  function debounceFunction(func,delay){
    if(id){
      clearTimeout(id)
    }
    id = setTimeout(function(){
      func()
    },delay)
  }