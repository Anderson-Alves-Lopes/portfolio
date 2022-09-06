
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


const target = document.querySelectorAll('[data-anime');
const animationClass = 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset + (((window.innerHeight * 3) / 4) + 50);
  for(let i = 0; i < target.length ; i++){
    if(windowTop > target[i].offsetTop){
      target[i].classList.add(animationClass);
    }else{
      target[i].classList.remove(animationClass);
    }
  }
}
animeScroll();
if(target.length){
  window.addEventListener('scroll',function(){
    animeScroll();
  });
}
let div = document.querySelector('.center-button');
console.log(div.offsetTop);