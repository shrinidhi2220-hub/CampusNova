// ==========================
// LOGIN SYSTEM
// ==========================

const loginForm =
document.getElementById(
"loginForm"
);

const loginBtn =
document.getElementById(
"loginBtn"
);

if(loginForm){

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const role =
document.getElementById(
"role"
).value;

// BUTTON EFFECT

loginBtn.innerHTML =
"🚀 Access Granted";

loginBtn.style.opacity =
"0.8";

// STUDENT LOGIN

if(role === "student"){

localStorage.setItem(
"role",
"student"
);

setTimeout(()=>{

window.location.href =
"dashboard.html";

},1200);

}

// ADMIN LOGIN

else if(role === "admin"){

localStorage.setItem(
"role",
"admin"
);

setTimeout(()=>{

window.location.href =
"admin.html";

},1200);

}

});

}

// ==========================
// PASSWORD TOGGLE
// ==========================

const togglePassword =
document.getElementById(
"togglePassword"
);

const password =
document.getElementById(
"password"
);

if(togglePassword){

togglePassword.addEventListener(
"click",
()=>{

const type =
password.getAttribute("type")
=== "password"
? "text"
: "password";

password.setAttribute(
"type",
type
);

togglePassword.innerHTML =
type === "password"
? "👁"
: "🙈";

});

}
