
  //  const courses=[
  //     {
  //       "title": "Online Guitar Course for Kids",
  //       "description": "Strike the strings of Guitar and unleash the Rockstar in you ...",
  //       "child_image": "https://d1r3wl4zsojqie.cloudfront.net/detail_image/1659016494.webp",
  //       "course_price": 19.99,
  //       "course_age_group": "5-7 years",
  //       "course_duration": "4 weeks"
  //     },
  //     {
  //       "title": "Online Art and Craft Course for Kids",
  //       "description": "Get creative with colors with this Art and Craft course!",
  //       "child_image": "https://d1r3wl4zsojqie.cloudfront.net/detail_image/1659018542.webp",
  //       "course_price": 24.99,
  //       "course_age_group": "6-8 years",
  //       "course_duration": "6 weeks"
  //     },
  //     {
  //       "title": "Online Public Speaking Course for Kids",
  //       "description": "Improve confidence and communication skills with this beginn ...",
  //       "child_image": "https://d1r3wl4zsojqie.cloudfront.net/detail_image/1660281459.webp",
  //       "course_price": 29.99,
  //       "course_age_group": "8-10 years",
  //       "course_duration": "8 weeks"
  //     },
  //     {
  //       "title": "Online Chess Course for Kids",
  //       "description": "Chess: strengthening the child's mind from a young age!",
  //       "child_image": "https://d1r3wl4zsojqie.cloudfront.net/detail_image/1660280975.webp",
  //       "course_price": 22.99,
  //       "course_age_group": "7-9 years",
  //       "course_duration": "5 weeks"
  //     },
  //     {
  //       "title": "Online Bollywood Dance Course for Kids",
  //       "description": "Learn to dance like a star on the Latest Bollywood Hits!",
  //       "child_image": "https://d1r3wl4zsojqie.cloudfront.net/detail_image/1659018153.webp",
  //       "course_price": 27.99,
  //       "course_age_group": "6-10 years",
  //       "course_duration": "7 weeks"
  //     },
  //     {
  //       "title": "Online Keyboard And Piano Course for Kids",
  //       "description": "Enter the world of Music and play magical tunes on Piano!",
  //       "child_image": "https://d1r3wl4zsojqie.cloudfront.net/detail_image/1660363720.webp",
  //       "course_price": 34.99,
  //       "course_age_group": "9-12 years",
  //       "course_duration": "10 weeks"
  //     },
  //     {
  //       "title": "Online Yoga Course for Kids",
  //       "description": "Get Fit and Active with Our Online Yoga Course!",
  //       "child_image": "https://d11vgh97fxk0wu.cloudfront.net/sidebar_image/1698822583.jpeg",
  //       "course_price": 39.99,
  //       "course_age_group": "8-12 years",
  //       "course_duration": "6 weeks"
  //     },
  //     {
  //       "title": "Healthy Habits Workshop",
  //       "description": "Teach kids about the importance of a healthy lifestyle through games and activities.",
  //       "child_image": "https://d1r3wl4zsojqie.cloudfront.net/detail_image/1659016494.webp",
  //       "course_price": 18.99,
  //       "course_age_group": "6-9 years",
  //       "course_duration": "4 weeks"
  //     },
  //     {
  //       "title": "Math Puzzles Challenge",
  //       "description": "Stimulate logical thinking with a series of exciting math puzzles and challenges.",
  //       "child_image": "https://media.istockphoto.com/id/1498270459/photo/asian-girls-play-with-puzzles-learn-math-education-concept.jpg?s=612x612&w=0&k=20&c=TUJ0noG4G8ImxB42PRUsuvy096g8iGrA6aCPoDwStw4=",
  //       "course_price": 26.99,
  //       "course_age_group": "9-11 years",
  //       "course_duration": "8 weeks"
  //     }

  //   ]
  
  let url = `https://child-edu-backend.onrender.com/courses`
  FetchData(url)
    async function FetchData(url){
      let res =  await fetch(`${url}`)
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
    const cardContainer = document.getElementById('course-container');

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
