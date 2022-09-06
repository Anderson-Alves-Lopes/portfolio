
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
     
    },300);
});