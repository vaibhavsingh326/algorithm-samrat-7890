let submit = document.querySelector("form");
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