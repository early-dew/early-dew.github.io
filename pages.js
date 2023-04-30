// Nav-bar
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const linksContainer = document.querySelector(".links-container");
const quoteOne = document.querySelector('.quote-container-one')
const quoteTwo = document.querySelector('.quote-container-two')
const navbar = document.getElementById("nav");

//Up-button
const topLink = document.querySelector(".top-link");
window.addEventListener('scroll', function(){
 if (window.scrollY > 800) {

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
}); 


navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
    // let scrollHeight = window.pageYOffset;
});
window.addEventListener('scroll', function(){
if (window.scrollY > 500) {
linksContainer.classList.remove('show-links')
}
});



    //  Footer Date
     const date = document.getElementById("date-footer");
date.innerHTML = new Date().getFullYear();


const scrollLinks = document.querySelector('.scroll-link')

  scrollLinks.addEventListener('click', function(e){
  e.preventDefault();
  
  //navigate to specific spot
  const id = e.currentTarget.getAttribute('href').slice(1);
  const element = document.getElementById(id);
  const navHeight = navbar.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height
  let position = element.offsetTop - navHeight;
  if(navHeight > 82){
    position = position + containerHeight;
    
  }
  window.scrollTo({
    left:0,top:position
  })
    })