const newURL = `https://child-edu-backend.onrender.com/programs`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let mainSection = document.getElementsByClassName("procontainer")[0];
// console.log(mainSection)

async function fetchData(url, queryParams = "") {
    try {
        let res = await fetch(`${url}&${queryParams}`);
        let count = res.headers.get("X-Total-Count");
        pagination(count, 4, queryParams)

        let data = await res.json();
        console.log(data);
        appendata(data)
    }
    catch (error) {
        console.log(error);
    }
}
fetchData(`${newURL}?_page=1&_limit=4`);

function createCard(item) {
    let procard = document.createElement("div")
    procard.className = "procard"

    let proleft = document.createElement("div")
    proleft.className = "proleft"

    let proright = document.createElement("div");
    proright.className = "proright"

    let procourse = document.createElement("div")
    procourse.className = "procourse";

    // let prodesc = document.createElement("div");
    // prodesc.className = "prodesc"

    let procontent = document.createElement("div");
    procontent.className = "procontent";

    let img = document.createElement("img");
    img.src = item.image
    img.alt = "art"

    let protitle = document.createElement("h1");
    protitle.className = "protitle"
    protitle.innerHTML = item.title

    let prodesc = document.createElement("p");
    prodesc.className = "prodesc";
    prodesc.innerHTML = item.description

    let produration = document.createElement("p");
    produration.className = "produration"
    produration.innerHTML = `Duration: ${item.duration}`

    let preferredSeason = document.createElement("p");
    preferredSeason.className = "preferredSeason"
    preferredSeason.innerHTML = item.preferredSeason

    let prorating = document.createElement("p");
    prorating.className = "prorating"
    prorating.innerHTML = `Rating: ⭐ ${item.rating}  `

    // for (let i = 0; i < item.rating; i++) {
    //     let star = document.createElement("span");
    //     star.innerHTML = "⭐"
    //     prorating.appendChild(star);
    // }

    let proregister = document.createElement("button");
    proregister.className = "proregister"
    proregister.innerText = "Register Now"

    proregister.addEventListener("click", (e)=>{
       
        
        
    })

    proleft.append(img)
    procourse.append(protitle, prodesc);
    procontent.append(produration, preferredSeason, prorating)
    proright.append(procourse, procontent, proregister);
    procard.append(proleft, proright);

    return procard;
}

function appendata(programs) {
    // mainSection.innerHTML = "";
    console.log(programs)
    programs.forEach(item => {
        let card = createCard(item);
        console.log(card);
        mainSection.append(card);
    })
}
function pagination(total, limit, queryParams) {
    let totalButtons = Math.ceil(total / limit)
    paginationWrapper.innerHTML = ""

    for (let i = 1; i <= totalButtons; i++) {
        let button = document.createElement('button');
        button.innerText = i;
        button.style.backgroundColor = '#4cd4ca';
        button.style.marginBottom="20px"
        button.style.width = '60px';
        button.style.height = '40px';
        button.style.borderRadius = '12px'
        button.style.fontSize = '16px';
        button.style.marginRight = '10px';
        button.addEventListener('click', (e) => {
            mainSection.innerHTML = ""
            fetchData(`${newURL}?_page=${i}&_limit=4`, queryParams)
        })

        paginationWrapper.append(button)
    }

}