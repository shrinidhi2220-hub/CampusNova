body{

display:flex;

min-height:100vh;

}

/* SIDEBAR */

.sidebar{

width:270px;

height:100vh;

position:fixed;

padding:35px 25px;

}

.logo{

font-size:34px;

margin-bottom:10px;

}

.logo span{

color:#06B6D4;

}

.admin-tag{

font-size:13px;

letter-spacing:2px;

color:#06B6D4;

margin-bottom:45px;

}

/* MENU */

.menu{

list-style:none;

display:flex;
flex-direction:column;

gap:18px;

}

.menu li{

border-radius:18px;

}

.menu li a{

display:block;

padding:16px;

text-decoration:none;

color:white;

transition:0.3s;

}

.menu li:hover{

background:
rgba(255,255,255,0.05);

}

.active{

background:
rgba(255,255,255,0.08);

}

/* MAIN */

.main-content{

margin-left:270px;

padding:40px;

width:100%;

}

/* TOPBAR */

.topbar{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:45px;

}

.topbar h1{

font-size:46px;

margin-bottom:10px;

}

.topbar p{

color:#94a3b8;

}

/* HERO */

.hero-section{

padding:45px;

border-radius:35px;

display:grid;

grid-template-columns:
repeat(auto-fit,minmax(320px,1fr));

gap:40px;

align-items:center;

margin-bottom:55px;

}

.hero-section h2{

font-size:46px;

margin-bottom:20px;

}

.hero-section p{

line-height:2;

color:#cbd5e1;

margin-bottom:30px;

}

.hero-buttons{

display:flex;

gap:20px;

flex-wrap:wrap;

}

/* HERO CIRCLE */

.hero-circle{

width:240px;
height:240px;

border-radius:50%;

display:flex;
justify-content:center;
align-items:center;

font-size:42px;
font-weight:700;

margin:auto;

background:
conic-gradient(
#8B5CF6,
#06B6D4,
#8B5CF6
);

box-shadow:
0 0 40px rgba(6,182,212,0.5);

animation:spin 10s linear infinite;

}

/* STATS */

.stats-grid{

display:grid;

grid-template-columns:
repeat(auto-fit,minmax(220px,1fr));

gap:25px;

margin-bottom:60px;

}

.stat-card{

padding:35px;

border-radius:30px;

text-align:center;

}

.stat-card h2{

font-size:48px;

margin-bottom:12px;

}

/* SECTION TITLE */

.section-title{

margin-bottom:30px;

}

.section-title h2{

font-size:38px;

}

/* CHARTS */

.chart-grid{

display:grid;

grid-template-columns:
repeat(auto-fit,minmax(320px,1fr));

gap:30px;

margin-bottom:60px;

}

.chart-card{

padding:35px;

border-radius:30px;

}

.chart-card h3{

margin-bottom:25px;

}

/* FAKE CHART */

.fake-chart{

display:flex;

align-items:flex-end;

gap:20px;

height:220px;

}

.bar{

flex:1;

border-radius:18px 18px 0 0;

background:
linear-gradient(
180deg,
#8B5CF6,
#06B6D4
);

animation:bars 3s infinite alternate;

}

.bar1{

height:70%;

}

.bar2{

height:50%;

}

.bar3{

height:90%;

}

.bar4{

height:65%;

}

/* CIRCLE */

.circle-chart{

width:220px;
height:220px;

margin:auto;

border-radius:50%;

display:flex;
justify-content:center;
align-items:center;

font-size:52px;
font-weight:700;

background:
conic-gradient(
#06B6D4 0%,
#8B5CF6 85%,
rgba(255,255,255,0.08) 85%
);

box-shadow:
0 0 35px rgba(6,182,212,0.35);

}

/* REPORTS */

.report-card{

padding:28px;

border-radius:28px;

display:flex;

justify-content:space-between;
align-items:center;

gap:20px;

margin-bottom:25px;

}

.report-card div{

flex:1;

}

.report-dot{

width:18px;
height:18px;

border-radius:50%;

background:#06B6D4;

box-shadow:
0 0 20px #06B6D4;

}

/* AI */

.ai-grid{

display:grid;

grid-template-columns:
repeat(auto-fit,minmax(240px,1fr));

gap:30px;

margin-bottom:60px;

}

.ai-box{

padding:35px;

border-radius:30px;

text-align:center;

}

.ai-box h3{

font-size:46px;

margin-bottom:12px;

}

/* FOOTER */

.footer{

text-align:center;

padding:40px 0 20px;

font-size:16px;

color:#94a3b8;

}

/* ANIMATION */

@keyframes spin{

0%{

transform:rotate(0deg);

}

100%{

transform:rotate(360deg);

}

}

@keyframes bars{

0%{

opacity:0.7;

}

100%{

opacity:1;

}

}

/* RESPONSIVE */

@media(max-width:900px){

body{

flex-direction:column;

}

.sidebar{

width:100%;
height:auto;

position:relative;

}

.main-content{

margin-left:0;

}

.topbar{

flex-direction:column;

align-items:flex-start;

gap:20px;

}

.topbar h1{

font-size:36px;

}

.hero-section h2{

font-size:36px;

}

.report-card{

flex-direction:column;

align-items:flex-start;

}

  }
