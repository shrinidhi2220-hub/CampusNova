// ==========================
// FLOATING EFFECT
// ==========================

const cards =
document.querySelectorAll(
".magic-card"
);

cards.forEach((card,index)=>{

card.style.animation =
`float 4s ease-in-out infinite`;

card.style.animationDelay =
`${index * 0.3}s`;

});

// ==========================
// NAVBAR GLOW
// ==========================

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 0 30px rgba(6,182,212,0.25)";

}

else{

navbar.style.boxShadow =
"none";

}

});

// ==========================
// HERO TITLE EFFECT
// ==========================

const heroTitle =
document.querySelector(
".hero-left h1"
);

setInterval(()=>{

heroTitle.style.opacity =
"0.8";

setTimeout(()=>{

heroTitle.style.opacity =
"1";

},400);

},3000);
