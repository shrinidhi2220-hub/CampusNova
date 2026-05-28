// ==========================
// WELCOME MESSAGE
// ==========================

const welcomeText =
document.getElementById(
"welcomeText"
);

const hour =
new Date().getHours();

if(hour < 12){

welcomeText.innerHTML =
"Good Morning ☀️";

}

else if(hour < 18){

welcomeText.innerHTML =
"Good Afternoon 🚀";

}

else{

welcomeText.innerHTML =
"Good Evening 🌙";

}

// ==========================
// FLOAT EFFECT
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
// ACTIVITY GLOW EFFECT
// ==========================

const activityDots =
document.querySelectorAll(
".activity-dot"
);

setInterval(()=>{

activityDots.forEach(dot=>{

dot.style.opacity =
"0.5";

setTimeout(()=>{

dot.style.opacity =
"1";

},500);

});

},2000);
