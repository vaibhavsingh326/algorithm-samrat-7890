let BASEURL="https://child-edu-backend.onrender.com"
// let BASEURL="http://localhost:9090"
// let userId=JSON.parse(localStorage.getItem("userId"));
let payment=document.getElementById("payment");
let products = JSON.parse(localStorage.getItem("coursedetails"));
let token=JSON.parse(localStorage.getItem("accessToken"));


let coursename=document.getElementById("coursename");
let price=document.getElementById("price");
coursename.value=products.courseName;
price.value=products.price;

let submit=document.getElementById("submit-btn");

let userId=1;
payment.addEventListener("submit",(e)=>{
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
   if(userName&&email&&address&&nameOnCard&&cardNumber&&expiry&&cvv){
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
    alert('payment successful');
    placeOrder(details)
}else{
    alert('Please fill the details');
}
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
    if(expyear.value<2024||expyear.value>2029){
        expyear.value="";
      date.innerHTML="enter year b/w 2023 2029"
      date.style.color="red";
      data.style.fontWeight="bolder";
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
    cardnum.style.fontWeight="bolder"
     cardnumber.value=""
    }else{
      
        cardnum.innerHTML="";
        
    }
 })

