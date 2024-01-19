let loginBtn = document.getElementById("login-button")
loginBtn.addEventListener("click",tryLogin)
async function tryLogin(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(email && password){
        let res = fetch(`${BASEURL}/user/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        let data = await res.json()
        console.log(data);
    }else{
        alert("email and password can not be empty")
    }
}
/*
let registerBtn = document.getElementById("register-button")
registerBtn.addEventListener("click",tryRegister)

async function tryRegister(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let age = document.getElementById("age").value
    let firstname = document.getElementById("firstname").value
    let lastname = document.getElementById("lastname").value
    if(email && password && age && firstname && lastname){
        let res = await fetch(`${BASEURL}/user/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password,
                firstname,
                lastname,
                age
            })
        })
        let data = await res.json()
        console.log(data)
    }else{
        alert("feilds can't be empty")
    }
}
*/