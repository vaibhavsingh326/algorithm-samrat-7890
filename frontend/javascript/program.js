
  // sort Data Based on Course 
let AllCourse = document.getElementById("All-course");
let MusicCourse = document.getElementById("MUSIC-course");
let ArtCourse = document.getElementById("ART-course");
let PublicSpeaking = document.getElementById("PUBLIC-SPEAKING-course");
let ChessCourse  = document.getElementById("CHESS-course");
let DanceCourse = document.getElementById("DANCE-course");
let YogaCourse = document.getElementById("YOGA-course");

const cardContainer = document.getElementById('course-container');

// BaseURL 
let url = `http://localhost:9090/courses`


MusicCourse.addEventListener("click",()=>{
  FetchData(url,`category=Music and Arts`)
})
  
ArtCourse.addEventListener("click",()=>{
  FetchData(url,`category=Music and Arts`)
})
  
  FetchData(url)
    async function FetchData(url,para=""){
      cardContainer.innerHTML = ""
      let res =  await fetch(`${url}?${para}`)
      let data = await res.json();
      console.log(data)
      population(data)
    }


  function population(courses){
    courses.forEach(course => {
      createCard(course);
    });
  }


  function createCard(course) {
    // const cardContainer = document.getElementById('course-container');
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');
    const img = document.createElement('img');
    img.src = course.child_image;
    img.alt = course.title;
    cardImg.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const courseName = document.createElement('div');
    courseName.classList.add('course-name');
    const h3 = document.createElement('h3');
    h3.textContent = course.title;
    const courseDetails = document.createElement('p');
    courseDetails.classList.add('course-details');
    courseDetails.textContent = course.description;
    courseName.appendChild(h3);
    courseName.appendChild(courseDetails);

    const price = document.createElement('div');
    price.classList.add('price');
    const p = document.createElement('p')
    p.textContent = `₹ ${course.course_price} for ${course.course_duration}`;
    price.append(p);
    // price.textContent = `₹ ${course.course_price} for ${course.course_duration}`;

    const desc = document.createElement('div');
    desc.classList.add('desc');
    const ageGroup = document.createElement('p');
    ageGroup.classList.add('Age-group');
    ageGroup.textContent = `Age group: ${course.course_age_group}`;
    const courseDuration = document.createElement('p');
    courseDuration.classList.add('Course');
    courseDuration.textContent = `Course duration: ${course.course_duration}`;
    const category = document.createElement('p');
    category.classList.add('Format');
    category.textContent = `Category: ${course.category}`

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Book Free Demo';

    desc.appendChild(ageGroup);
    desc.appendChild(courseDuration);
    desc.appendChild(category);
    desc.appendChild(button);

    cardBody.appendChild(courseName);
    cardBody.appendChild(price);
    cardBody.appendChild(desc);

    card.appendChild(cardImg);
    card.appendChild(cardBody);

    cardContainer.appendChild(card);
  }

  // Create cards for each course
