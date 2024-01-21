let submit = document.getElementById("submit-btn");
let userId=JSON.parse(localStorage.getItem("userId"))
console.log(userId)
submit.addEventListener("submit",(e)=>{
    e.preventDefault();
    let userName =document.getElementById("name").value
    let email = document.getElementById("email").value
    let address =document.getElementById("address").value +", "+
    document.getElementById("city").value+", "+document.getElementById("state").value+" - "+document.getElementById("zipcode")
    let nameOnCard = document.getElementById("cardname").value
    let cardNumber = document.getElementById("cardnumber").value
    let expiry =document.getElementById("expmonth").value+"/"+document.getElementById("expyear").value
    let cvv = document.getElementById("cvv").value
    let status ="Processed"
    let details ={
        userId,
        userName,
        email,
        address,
        nameOnCard,
        cardNumber,
        expiry,
        cvv,
        status
    }
    placeOrder(details)
})
async function placeOrder(details){
    products = JSON.parse(localStorage.getItem("course"))
    let req ={
        userId,
        order:{
            details,
            products
        }
     }
    let response = await fetch(`${BASEURL}/orders`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({userId,order:req})
    })
    let data = await response.json()
    console.log(data);
    window.location("./index.html")
}

let expyear=document.getElementById("expyear");

 expyear.addEventListener("blur",()=>{
    let date=document.getElementById("small");
    if(expyear.value<2024||expyear.value>2322){
        expyear.value="";
      date.innerHTML="enter year b/w 2023 2322"
      date.style.color="red";
    
    }else{
        date.innerHTML="";
    }

 })

 let cardnum=document.getElementById("card-number");
 let cardnumber=document.getElementById("cardnumber");
 cardnumber.addEventListener("blur",()=>{
  
    if(cardnumber.value>1000000000000 ||cardnumber.value<100000000000){
     cardnum.innerHTML="card number should be 12"
     cardnum.style.color="red"
    
     cardnumber.value=""
    }else{
      
        cardnum.innerHTML="";
        
    }
 })

