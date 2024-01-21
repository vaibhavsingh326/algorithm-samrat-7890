let registerBtn = document.getElementById("singup")
let BASEURL = `https://child-edu-backend.onrender.com`
// let BASEURL='http://localhost:9090'
registerBtn.addEventListener("submit",tryRegister)
async function tryRegister(e){
    e.preventDefault()
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
        window.location.href='../html/login.html';
    }else{
        alert("feilds can't be empty")
    }
}