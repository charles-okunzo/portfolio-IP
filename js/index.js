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
}
