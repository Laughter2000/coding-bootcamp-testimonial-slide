slides = [
    {
        text: "I’ve been interested in coding for a while but never taken the jump, \
                until now. I couldn’ t recommend this course enough.I’ m now in the job of my dreams and so \
                excited about the future",
        name: "Tanya Sinclair",
        title: "UX Engineer",
        image: "./images/image-tanya.jpg"
    },

    {
        text: "If you want to lay the best foundation possible I'd recommend\
                taking this course. The depth the instructors to into is incredible. I\
                now feel so confident about starting up as a professional developer",
        name: "John Tarkpor",
        title: "Junior Front-end Developer",
        image: "./images/image-john.jpg"
    }
]

var prevIcon = document.querySelector(".prev-icon")
var nextIcon = document.querySelector(".next-icon")


var profileName = document.querySelector(".profile__name")
var profileJob = document.querySelector(".profile__job-title")
var profileDescription = document.querySelector(".profile__description");
var profileImage = document.querySelector(".carousel__image")


function nextSlide(event) {
    if (event.currentTarget.className == "next-icon") {
        profileDescription.textContent = slides[1].text
        profileName.textContent = slides[1].name
        profileJob.textContent = slides[1].title
        profileImage.setAttribute("src", slides[1].image)
    }

}

function prevSlide(event) {
    if (event.currentTarget.className == "prev-icon") {
        profileDescription.textContent = slides[0].text
        profileName.textContent = slides[0].name
        profileJob.textContent = slides[0].title
        profileImage.setAttribute("src", slides[0].image)
    }

}

prevIcon.addEventListener("click", prevSlide);
nextIcon.addEventListener("click", nextSlide);


