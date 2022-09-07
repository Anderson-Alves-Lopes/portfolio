
const centerButton = document.querySelector('.center-button');
const closedModal = document.querySelector('.closed-modal');
const centerSkills = document.querySelector('.center-skills');
const skillCard = document.querySelectorAll('.skill-card');
centerButton.addEventListener('click',function(){
    centerSkills.style.display = 'flex';
   setTimeout(function(){
    centerSkills.style.opacity = '1';
    for(let i = 0; i < skillCard.length; i++){
      skillCard[i].style.transform = 'rotateY(0deg)';
    }
   },500)
});
closedModal.addEventListener('click',function(){
    centerSkills.style.opacity = '0';
    for(let i = 0; i < skillCard.length; i++){
      skillCard[i].style.transform = 'rotateY(90deg)';
    }
    setTimeout(function(){
      centerSkills.style.display = 'none';
     
    },500);
});

projetos.map((item, index)=>{
  let bottomContainer = document.querySelector('.projeto-container').cloneNode(true);
      bottomContainer.querySelector('.projeto-titulo').innerHTML = item.name;
      bottomContainer.querySelector('.projeto-img img').src= item.image;
      bottomContainer.querySelector('.projeto-text').innerHTML = item.descricao;
      bottomContainer.querySelector('.projeto-link').href = item.link;
  document.querySelector('section.bottom .container').append(bottomContainer);
});

// Animações  //
const target = document.querySelectorAll('[data-anime');
const animationClass = 'animate';
const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
function animeScroll(){
  const windowTop = window.pageYOffset + (((window.innerHeight * 3) / 4) + 50);
  for(let i = 0; i < target.length ; i++){
    if(windowTop > target[i].offsetTop){
      target[i].classList.add(animationClass);
    }else{
      target[i].classList.remove(animationClass);
    }
    console.log(windowTop);
    console.log(target[i].offsetTop);
  }
}
animeScroll();
if(target.length){
  window.addEventListener('scroll', debounce(function(){
      animeScroll();
      
  },200));
   }
