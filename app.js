const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const linksContainer = document.querySelector(".links-container");
const quoteOne = document.querySelector('.quote-container-one')
const quoteTwo = document.querySelector('.quote-container-two')
const navbar = document.getElementById("nav");


navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
    // let scrollHeight = window.pageYOffset;
});

window.addEventListener('scroll', function(){
if (window.scrollY > 500) {
linksContainer.classList.remove('show-links')
}
})


// Quote circles

window.addEventListener('scroll', function(){
  if(this.window.innerWidth < 800 && window.scrollY > 200){
    quoteOne.classList.add('slideUp')
  }else if (window.scrollY >= 650) {quoteOne.classList.add('slideUp')}
     })

     window.addEventListener('scroll', function(){
  if(this.window.innerWidth < 800 && window.scrollY > 1700){
    quoteTwo.classList.add('slideUp')
  }else if (window.scrollY >= 2400) {quoteTwo.classList.add('slideUp')}
     })



    //  Footer Date
     const date = document.getElementById("date");
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


