// =====================================================
// PORTFOLIO JAVASCRIPT
// Part 1 - Navigation, Active Links & Typing Effect
// =====================================================

// ==============================
// SMOOTH SCROLL
// ==============================

const navLinks = document.querySelectorAll(".sidebar a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});


// ==============================
// ACTIVE SIDEBAR LINK
// ==============================

const sections = document.querySelectorAll("section");

function activeMenu(){

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if(window.scrollY >= sectionTop){

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + currentSection){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activeMenu);


// ==============================
// ACTIVE LINK STYLE
// ==============================

const activeStyle = document.createElement("style");

activeStyle.innerHTML = `

.sidebar ul li a.active{

    background:#ff7a00;
    color:#111;

    transform:translateX(8px);

    box-shadow:0 10px 25px rgba(255,122,0,.35);

}

`;

document.head.appendChild(activeStyle);


// ==============================
// TYPING EFFECT
// ==============================

// This changes the Hero subtitle automatically.

// In your HTML replace:
//
// <h3>
// Bachelor of Science in Information Technology Student
// </h3>
//
// with:
//
// <h3 id="typing-text"></h3>

const typingElement = document.getElementById("typing-text");

if(typingElement){

    const words = [

        "BS Information Technology Student",
        "Future Full Stack Developer",
        "Web Designer",
        "Frontend Developer",
        "UI / UX Enthusiast"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function typeEffect(){

        const currentWord = words[wordIndex];

        if(!deleting){

            typingElement.textContent =
                currentWord.substring(0, charIndex++);

            if(charIndex > currentWord.length){

                deleting = true;

                setTimeout(typeEffect,1500);

                return;

            }

        }

        else{

            typingElement.textContent =
                currentWord.substring(0,--charIndex);

            if(charIndex === 0){

                deleting = false;

                wordIndex++;

                if(wordIndex >= words.length){

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect,deleting ? 40 : 90);

    }

    typeEffect();

}


// ==============================
// HERO BUTTON ANIMATION
// ==============================

const heroButton = document.querySelector(".btn");

if(heroButton){

    heroButton.addEventListener("mouseenter",()=>{

        heroButton.style.transform =
        "translateY(-6px) scale(1.05)";

    });

    heroButton.addEventListener("mouseleave",()=>{

        heroButton.style.transform =
        "translateY(0) scale(1)";

    });

}

// =====================================================
// Part 2 - Counters, Skill Animation, Reveal Animation,
//          Hero Image Effect
// =====================================================

// ==============================
// STATISTICS COUNTER
// ==============================

const statNumbers = document.querySelectorAll(".card h2");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const finalValue =
                parseInt(counter.textContent.replace("+",""));

            let current = 0;

            const speed = finalValue / 60;

            const updateCounter = ()=>{

                if(current < finalValue){

                    current += speed;

                    counter.textContent =
                    Math.ceil(current) + "+";

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.textContent =
                    finalValue + "+";

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{threshold:0.6});

statNumbers.forEach(counter=>{

    counterObserver.observe(counter);

});


// ==============================
// SKILL BAR ANIMATION
// ==============================

const skills = document.querySelectorAll(".bar");

const skillObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const bar = entry.target;

            const width = bar.style.width;

            bar.style.width = "0";

            setTimeout(()=>{

                bar.style.width = width;

            },300);

            skillObserver.unobserve(bar);

        }

    });

},{threshold:.5});

skills.forEach(bar=>{

    skillObserver.observe(bar);

});


// ==============================
// FADE UP ANIMATION
// ==============================

const revealItems = document.querySelectorAll(

`
.hero-text,
.hero-image,
.card,
.about-image,
.about-content,
.timeline-box,
.skill,
.project-card,
.certificate-card,
.gallery img,
.resume-box,
.contact-info,
form
`

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:.2});

revealItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition="all .8s ease";

    revealObserver.observe(item);

});


// ==============================
// FLOATING HERO IMAGE
// ==============================

const heroImage = document.querySelector(".hero-image");

if(heroImage){

    document.addEventListener("mousemove",(e)=>{

        const x =
        (window.innerWidth/2 - e.pageX)/45;

        const y =
        (window.innerHeight/2 - e.pageY)/45;

        heroImage.style.transform =

        `translate(${x}px,${y}px)`;

    });

}


// ==============================
// PROJECT CARD EFFECT
// ==============================

const projects =
document.querySelectorAll(".project-card");

projects.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform =

        "translateY(-15px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

        "translateY(0) scale(1)";

    });

});


// ==============================
// GALLERY HOVER EFFECT
// ==============================

const gallery =
document.querySelectorAll(".gallery img");

gallery.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.filter =
        "brightness(110%)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.filter =
        "brightness(100%)";

    });

});

// =====================================================
// Part 3 - Scroll Top, Gallery Lightbox,
// Contact Form, Footer Year, Progress Bar
// =====================================================

// ==============================
// SCROLL TO TOP BUTTON
// ==============================

const topButton = document.createElement("button");

topButton.id = "topBtn";
topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);

const topStyle = document.createElement("style");

topStyle.innerHTML = `

#topBtn{

    position:fixed;
    bottom:30px;
    right:30px;

    width:55px;
    height:55px;

    border:none;
    border-radius:50%;

    background:#ff7a00;
    color:#111;

    font-size:20px;

    cursor:pointer;

    display:none;

    z-index:1000;

    transition:.35s;

    box-shadow:0 10px 25px rgba(0,0,0,.4);

}

#topBtn:hover{

    transform:translateY(-6px);
    background:white;

}

`;

document.head.appendChild(topStyle);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ==============================
// GALLERY LIGHTBOX
// ==============================

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = "<img>";

document.body.appendChild(lightbox);

const lightboxStyle = document.createElement("style");

lightboxStyle.innerHTML = `

#lightbox{

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.9);

    display:none;

    justify-content:center;

    align-items:center;

    z-index:9999;

}

#lightbox img{

    max-width:85%;

    max-height:85%;

    border-radius:20px;

    border:5px solid #ff7a00;

}

`;

document.head.appendChild(lightboxStyle);

const lightboxImg = lightbox.querySelector("img");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=image.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});


// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.querySelector("form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
contactForm.querySelector('input[type="text"]').value.trim();

const email =
contactForm.querySelector('input[type="email"]').value.trim();

const message =
contactForm.querySelector("textarea").value.trim();

if(name==="" || email==="" || message===""){

alert("Please complete all required fields.");

return;

}

alert("Thank you, " + name + "! Your message has been sent.");

contactForm.reset();

});

}


// ==============================
// CURRENT YEAR
// ==============================

const footerCopyright =
document.querySelector("footer p:last-child");

if(footerCopyright){

footerCopyright.innerHTML =

`© ${new Date().getFullYear()} Jancharls R. Asotigue. All Rights Reserved.`;

}


// ==============================
// SCROLL PROGRESS BAR
// ==============================

const progressBar = document.createElement("div");

progressBar.id="progressBar";

document.body.appendChild(progressBar);

const progressStyle=document.createElement("style");

progressStyle.innerHTML=`

#progressBar{

position:fixed;

top:0;
left:0;

height:4px;

width:0;

background:#ff7a00;

z-index:99999;

transition:.1s;

}

`;

document.head.appendChild(progressStyle);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=

document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const progress=

(scrollTop/scrollHeight)*100;

progressBar.style.width=progress+"%";

});


// ==============================
// PAGE LOADER
// ==============================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

document.body.style.transition="opacity .8s";

setTimeout(()=>{

document.body.style.opacity="1";

},150);

});


// ==============================
// CONSOLE MESSAGE
// ==============================

console.log(

"%cPortfolio Developed by Jancharls Asotigue",

"color:#ff7a00;font-size:18px;font-weight:bold;"

);