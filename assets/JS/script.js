const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-menu');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
let phone = document.getElementById("phone");
let phone_num = document.getElementById("phone_num");
let email = document.getElementById("email");
let email_affiche = document.getElementById("email_affiche");

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
        .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
        .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
        .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
        .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
        .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
        .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');




    TL.play();
})

//affiche le num de tel
phone.addEventListener("click", () => {
    if(getComputedStyle(phone_num).display !== "none"){
        phone_num.style.display = "none";
    } else {
        phone_num.style.display = "block";
    }
})

//affiche email
email.addEventListener("click", () => {
    if(getComputedStyle(email_affiche).display !== "none"){
        email_affiche.style.display = "none";
    } else {
        email_affiche.style.display = "block";
    }
})