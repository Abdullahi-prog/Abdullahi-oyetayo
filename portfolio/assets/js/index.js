//===============================
// HAMBURGER MENU
//===============================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");


if(hamburger){

    hamburger.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        hamburger.classList.toggle("active");

    });

}



document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});




//===============================
// NAVBAR SCROLL EFFECT
//===============================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("active");

    }else{

        navbar.classList.remove("active");

    }

});



//=====================================
//       CLOSE MENU ON CLICK
//=====================================

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});




//=====================================
//      NAVBAR SCROLL EFFECT
//=====================================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("active");

    }

    else {

        navbar.classList.remove("active");

    }

});
//===============================
// TYPING ANIMATION
//===============================


const typingText = document.querySelector(".typing-text");


const words = [

    "Software Engineer",

    "Full Stack Developer",

    "Frontend Developer",

    "Problem Solver",

    "UI / UX Enthusiast"

];


let wordIndex = 0;
let letterIndex = 0;
let deleting = false;



function type(){

    if(!typingText) return;


    let currentWord = words[wordIndex];


    if(deleting){

        typingText.textContent =
        currentWord.substring(0,letterIndex--);

    }

    else{

        typingText.textContent =
        currentWord.substring(0,letterIndex++);

    }



    if(!deleting && letterIndex === currentWord.length){

        deleting = true;

        setTimeout(type,1500);

        return;

    }



    if(deleting && letterIndex === 0){

        deleting = false;

        wordIndex++;


        if(wordIndex === words.length){

            wordIndex = 0;

        }

    }



    setTimeout(type, deleting ? 70 : 120);


}


type();
//=====================================
//      CONTACT FORM TO WHATSAPP
//=====================================

const contactForm = document.querySelector(".contact-form");


contactForm.addEventListener("submit", (e) => {

    e.preventDefault();


    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const subject = document.getElementById("subject").value;

    const message = document.getElementById("message").value;



    const whatsappMessage =

`Hello ABDULLAHI,

Name: ${name}

Email: ${email}

Phone Number: ${phone}

Subject: ${subject}

Message: ${message}`;



    const whatsappURL =

`https://wa.me/2348105860334?text=${encodeURIComponent(whatsappMessage)}`;



    window.open(whatsappURL, "_blank");


    contactForm.reset();

});
//=====================================
//      ACTIVE NAVIGATION LINKS
//=====================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;


        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");


        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});
//=====================================
//       SCROLL REVEAL ANIMATION
//=====================================

const revealElements = document.querySelectorAll(
    "section, .service-card, .skill-card, .project-card, .about-card, .contact-box"
);


function revealOnScroll(){

    revealElements.forEach((element)=>{

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;


        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);


revealOnScroll();
//=====================================
//        SCROLL TO TOP BUTTON
//=====================================

const scrollTopBtn = document.createElement("button");


scrollTopBtn.className = "scroll-top";


scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';


document.body.appendChild(scrollTopBtn);



window.addEventListener("scroll", () => {


    if(window.scrollY > 500){

        scrollTopBtn.classList.add("show");

    }

    else{

        scrollTopBtn.classList.remove("show");

    }


});



scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
//=====================================
//        IMAGE LAZY LOADING
//=====================================

const images = document.querySelectorAll("img");


images.forEach((image)=>{

    image.setAttribute("loading","lazy");

});




//=====================================
//        HOVER EFFECT FOR CARDS
//=====================================

const cards = document.querySelectorAll(
    ".service-card, .skill-card, .project-card, .about-card"
);


cards.forEach((card)=>{


    card.addEventListener("mousemove",(e)=>{


        const rect = card.getBoundingClientRect();


        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;


        card.style.setProperty("--x", `${x}px`);

        card.style.setProperty("--y", `${y}px`);


    });



    card.addEventListener("mouseleave",()=>{


        card.style.removeProperty("--x");

        card.style.removeProperty("--y");


    });


});