var skills= document.getElementById("skills");
var experience= document.getElementById("experience");
var education=document.getElementById("education");
var konten_skills=document.getElementById("konten-skills");
var konten_experience=document.getElementById("konten-experience");
var konten_education=document.getElementById("konten-education");

skills.addEventListener("click", ()=>{
  experience.style.color="white"
  education.style.color="white"
  skills.style.color="#e31bjr59"
  konten_skills.style.display="block"
  konten_experience.style.display="none"
  konten_education.style.display="none"

}) 
experience.addEventListener("click", ()=>{
  experience.style.color="#e31b59"
  education.style.color="white"
  skills.style.color="white"
  konten_skills.style.display="none"
  konten_experience.style.display="none"
  konten_education.style.display="block"
})  
education.addEventListener("click", ()=>{
  experience.style.color="white"
  education.style.color="#e31b59"
  skills.style.color="white"
  konten_skills.style.display="none"
  konten_experience.style.display="block"
  konten_education.style.display="none"
})   

