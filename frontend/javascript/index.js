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

let child = document.getElementById("child");
let img1 = document.createElement("img");
let img2 = document.createElement("img");
let img3 = document.createElement("img");
let p = document.createElement("p");
p.innerText = "We love teaching new languages to kids!";
p.className = "pt"


img1.src = "../images/img1.jpg";
img1.alt = "child-image";

img2.src = "../images/img2.jpg";
img2.alt = "child-image";

img3.src = "../images/img3.jpg";
img3.alt = "child-image";

child.append(img1,img2, img3);


// photos div photos div photos div photos div
let pDiv = document.getElementById("desc");

let child1 = document.createElement("div");
child1.className = "part1";

let child2 = document.createElement("div");
child2.className = "part2";

let img4 = document.createElement("img");
img4.src = "../images/img4.jpg"
img4.alt = "child-image"

let img5 = document.createElement("img");
img5.src = "../images/img5.jpg"
img5.alt = "child-image"

let img6 = document.createElement("img");
img6.src = "../images/img6.jpg"
img6.alt = "child-image";

let head1 = document.createElement("h2");
head1.innerText = "Saint-Lambert Courses";

let para1 = document.createElement("p");
para1.innerText = "Our courses introduce English through super fun and immersive activities! The goal is to have a unique experience with the teacher, the group and English; this is the best way to learn!";
let head2 = document.createElement("h2");
head2.innerText = "New For Parents !"
let para2 = document.createElement("p");
para2.innerText = "We now have a conversation program for parents who wants to practice their English during their child's class!"

child1.append(img4, img5, img6);
child2.append(head1, para1, head2, para2);

pDiv.append(child1, child2);

document.body.append(child, p, pDiv);
