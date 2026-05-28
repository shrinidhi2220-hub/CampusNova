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
`${index * 0.2}s`;

});

// ==========================
// PUBLISH BUTTON
// ==========================

const publishBtn =
document.getElementById(
"publishBtn"
);

publishBtn.addEventListener(
"click",
()=>{

publishBtn.innerHTML =
"✅ Update Published";

publishBtn.style.background =
"#22c55e";

publishBtn.style.boxShadow =
"0 0 20px #22c55e";

setTimeout(()=>{

publishBtn.innerHTML =
"🚀 Publish Update";

},2000);

});

// ==========================
// LIVE TAG EFFECT
// ==========================

const liveTags =
document.querySelectorAll(
".live-tag"
);

setInterval(()=>{

liveTags.forEach(tag=>{

tag.style.opacity =
"0.5";

setTimeout(()=>{

tag.style.opacity =
"1";

},500);

});

},1500);
