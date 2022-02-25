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