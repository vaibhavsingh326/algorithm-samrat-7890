let loginBtn = document.getElementById("login");
let BASEURL = `https://child-edu-backend.onrender.com`
loginBtn.addEventListener("submit",tryLogin)

async function tryLogin(e){
     e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(email && password){
        let res = await fetch(`${BASEURL}/user/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        console.log(res)
        let data = await res.json()
        console.log(data);
        localStorage.setItem("accessToken",JSON.stringify(`Bearer ${data.accessToken}`));
        localStorage.setItem("userId", JSON.stringify(data.user.id));
        alert("login successful");
        window.location.href='../html/index.html';
    }else{
        alert("email and password can not be empty")
    }
}

// let registerBtn = document.getElementById("singup")
// registerBtn.addEventListener("submit",tryRegister)
// async function tryRegister(){
//     let email = document.getElementById("email").value
//     let password = document.getElementById("password").value
//     let age = document.getElementById("age").value
//     let firstname = document.getElementById("firstname").value
//     let lastname = document.getElementById("lastname").value
//     if(email && password && age && firstname && lastname){
//         let res = await fetch(`${BASEURL}/user/register`,{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify({
//                 email,
//                 password,
//                 firstname,
//                 lastname,
//                 age
//             })
//         })
//         let data = await res.json()
//         console.log(data)
//     }else{
//         alert("feilds can't be empty")
//     }
// }
