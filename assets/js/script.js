
// Menu  ///

const openMenu = document.querySelector('.menu-open');
const closedMenu = document.querySelector('.menu-closed');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
openMenu.addEventListener('click', function(){
  nav.style.display = 'flex';
  body.style.overflowY = 'clip';
  setTimeout(function(){
    nav.style.opacity = '1';
  },300);
});
closedMenu.addEventListener('click',function(){
   nav.style.opacity = '0';
   body.style.overflowY = 'initial';
   setTimeout(function(){
    nav.style.display = 'none';
   },300);
});

//Madal //
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
  }
}
animeScroll();
if(target.length){
  window.addEventListener('scroll', debounce(function(){
      animeScroll();
      
  },200));
   }
   // formulário ///
   let validator = {
    handleSubmit:(event) =>{
      event.preventDefault();
      let send = true;

      let inputs = form.querySelectorAll('input');
      validator.clearErrors();

      for(let i = 0; i < inputs.length; i++){
        let input = inputs[i];
        let check = validator.checkInput(input);
        if(check !== true){
          send = false;
          validator.showError(input, check);
        }
      }
      if(send){
        form.submit();
      }
    },
    checkInput:(input) =>{
      let rules = input.getAttribute('data-rules');
      if(rules !== null){
        rules = rules.split('|');
        for(let k in rules){
          let rulesDetails = rules[k].split('=');
          switch(rulesDetails[0]){
            case 'required':
              if(input.value == ''){
                return 'Esse campo não pode estar vazio.';
              }
            break;
            case 'min':
              if(input.value.length < rulesDetails[1]){
                return 'Campo tem que ter pelo menos '+rulesDetails[1]+'caracteres';
              }  
            break;
            case 'email':
              if(input.value != ''){
                let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA]{2,}))$/;
                    if(!regex.test(input.value.toLowerCase())){
                      return 'Digite um e-mail válido';
                    }      
              }
            break;    
          }
        }
      }
      return true;
    },
    showError:(input, error) =>{
      input.style.borderColor = '#ff0000';

      let errorElement = document.createElement('div');
      errorElement.classList.add('error');
      errorElement.innerHTML = error;

      input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors:() =>{
      let inputs = form.querySelectorAll('input');
      for(let i = 0; i < inputs.length; i++){
        inputs[i].style = '';
      }
      let errorElements = document.querySelectorAll('.error');
       for(let i = 0; i < errorElements.length; i++){
        errorElements[i].remove();
       }
    }
   };
   let form = document.querySelector('.validator');
   form.addEventListener('submit', validator.handleSubmit)
