const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".navbar-inner");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-btn").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

let url="https://child-edu-backend.onrender.com/orders";


async function num(){

  let data= await fetch(url,{
    method: "GET",
    headers:{
      "content-type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IiQyYiQxMCRYUy5RWmtNSzJyMUgxTEFvREVQTzhPdi84UG1lMFN2b2RYVTdzMUtwVEZudmNuQTBFWi9kbSIsImVtYWlsIjoidmFpYmhhdkBtYXNhaXNjaG9vbC5jb20iLCJmaXJzdG5hbWUiOiJWYWliaGF2IiwibGFzdG5hbWUiOiJTaW5naCIsImNyZWF0ZWRBdCI6MTcwNTc1OTYxMjE1MCwiaWQiOjEsImlhdCI6MTcwNTc2MTE0MCwiZXhwIjoxNzA1NzcxOTQwfQ.4X-L6iGCRr_4HBO-jIzr1hJ4eJdc8HCjWznWRFtGsAA"
    }


  })
  let pro=await data.json();

  console.log(pro);


}
num();