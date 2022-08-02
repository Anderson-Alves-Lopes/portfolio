
const menu = document.querySelector('.menu');
const button = document.querySelector('#skill');
const buttonClosed = document.querySelector('.closed-modal');
menu.addEventListener('click',function(){
   let ul = document.querySelector('header ul');

   if(ul.style.display === 'none'){
      ul.style.opacity = '0';
      ul.style.display = 'flex';
      setTimeout(function(){
        ul.style.opacity = '1';
      },400)
   }else if(ul.style.display = 'flex'){
    ul.style.opacity = '0';
    setTimeout(function(){
        ul.style.display = 'none';
    },400)
   }

});

button.addEventListener('click',function(){
  let modal = document.querySelector('.modal-container');
   modal.style.display = 'grid';
   setTimeout(function(){
    modal.style.opacity = '1';
   },400);
});

buttonClosed.addEventListener('click',function(){
    let modal = document.querySelector('.modal-container');
    modal.style.opacity = '0';
    setTimeout(function(){
        modal.style.display = 'none';
    },400);
});
/// Prenchendo o Projetos container
projetos.map(function(item,index){

  let projetosContainer = document.getElementById('container').cloneNode(true);
  console.log(item.name);
  projetosContainer.querySelector('.container-img img').src = item.image;
  projetosContainer.querySelector('.projetos-titulo').innerHTML = item.name;
  projetosContainer.querySelector('.projetos-info').innerHTML = item.descricao;
  projetosContainer.querySelector('.link-projeto').href = item.link;


  document.querySelector('section.projetos').append(projetosContainer);
});

