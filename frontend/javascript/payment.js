let BASEURL="https://child-edu-backend.onrender.com"
// let userId=JSON.parse(localStorage.getItem("userId"));
let products = JSON.parse(localStorage.getItem("coursedetails"));
let token=JSON.parse(localStorage.getItem("accessToken"));
console.log(token);

console.log(products)
let paydetails=document.getElementById("items");
let payitems=document.getElementsByClassName("pay-items-details")[0];
let h4=document.createElement("h4");
h4.innerHTML=products.courseName
let p=document.createElement("p");
p.innerHTML=products.price;
payitems.append(h4,p);
let subdiv=document.createElement("div");
let total=document.createElement("h4");
total.innerHTML="total";

let submit=document.createElement("input");
submit.innerHTML=products.price;
submit.className="btn-payment"
submit.id="submit-btn";
submit.type="submit";
subdiv.append(total,submit);
paydetails.append(subdiv);
let userId=1;
submit.addEventListener("click",(e)=>{
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
    
        userName,
        email,
        address,
        nameOnCard,
        cardNumber,
        expiry,
        cvv,
        status
    }
    console.log(details)
    placeOrder(details)
})

async function placeOrder(details){
  
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
            "Content-Type":"application/json",
            "Authorization": token
        },
        body:JSON.stringify({userId,order:req})
    })
    let data = await response.json()
    console.log(data);
    window.location.href="../html/index.html"
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
  
    if(cardnumber.value>10000000000000000 ||cardnumber.value<1000000000000000){
     cardnum.innerHTML="card number should be 16"
     cardnum.style.color="red"
    
     cardnumber.value=""
    }else{
      
        cardnum.innerHTML="";
        
    }
 })

