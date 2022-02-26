const homeBtn=document.getElementById("homeBtn");

homeBtn.onclick=()=>{
  var body=document.body;

  body.scrollIntoView();
};

const servicesBtn=document.getElementById("servicesBtn");

servicesBtn.onclick=()=>{
  var services=document.getElementById("service");

  services.scrollIntoView();
};

const portfolioBtn= document.getElementById("portfolioBtn");

portfolioBtn.onclick=()=>{
  var portfolio=document.getElementById("portfolio");

  portfolio.scrollIntoView();
};

const aboutBtn=document.getElementById("aboutBtn");

aboutBtn.onclick=()=>{
  var about=document.getElementById("about");

  about.scrollIntoView();
};

const contactBtn=document.getElementById("contactBtn");

contactBtn.onclick= ()=>{
  contact=document.getElementById("contact");

  contact.scrollIntoView();
};

const scrollBtn=document.getElementById("scrollBtn");

const goToTop=document.body.scrollTop;

window.onscroll=()=>{
  if(goToTop>100 || document.documentElement.scrollTop>100){
    scrollBtn.style.display="block";
  } else{
    scrollBtn.style.display="none";
  }
};

scrollBtn.onclick=()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
};