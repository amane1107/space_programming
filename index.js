$(function(){


    const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);
  
      node.classList.add(`${prefix}animated`, animationName);
  
      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }
  
      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

animateCSS('.title','fadeIn');
animateCSS('.img','fadeIn');




var is_clicked = false;
$('.hyouzi_henkou_botton').click(function(){
  if (is_clicked == false){
    $('body').css('background-color','#000212');
    is_clicked = true;
  }else{
    $('body').css('background-color','black');
    is_clicked = false;
  }
});



});