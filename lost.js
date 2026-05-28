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
// FILTER SYSTEM
// ==========================

const filterBtns =
document.querySelectorAll(
".filter-btn"
);

const itemCards =
document.querySelectorAll(
".item-card"
);

filterBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

filterBtns.forEach(b=>
b.classList.remove("active")
);

btn.classList.add("active");

const category =
btn.innerText.toLowerCase();

itemCards.forEach(card=>{

if(category === "all"){

card.style.display = "block";

}

else{

if(card.dataset.category === category){

card.style.display = "block";

}

else{

card.style.display = "none";

}

}

});

});

});

// ==========================
// FORM SUBMISSION
// ==========================

const foundForm =
document.querySelector(
".report-form"
);

if(foundForm){

foundForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const submitBtn =
document.querySelector(
".submit-btn"
);

submitBtn.innerHTML =
"✅ Found Item Submitted";

submitBtn.style.background =
"#22c55e";

submitBtn.style.boxShadow =
"0 0 20px #22c55e";

setTimeout(()=>{

submitBtn.innerHTML =
"🚀 Sent To Verification System";

},2000);

});

}

// ==========================
// CLAIM BUTTON EFFECT
// ==========================

const claimBtns =
document.querySelectorAll(
".claim-btn"
);

claimBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

btn.innerHTML =
"🔐 Verification Started";

btn.style.opacity =
"0.8";

setTimeout(()=>{

btn.innerHTML =
"✅ Request Sent";

btn.style.background =
"#22c55e";

},1500);

});

});
