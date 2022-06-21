(() => {

    
 const spring = document.querySelector('#spring');

 const springArticle = document.querySelector('#spring>artical');

 spring.addEventListener('click', event => {    
    console.log('spring has been clicked');          
        springArticle.classList.toggle('inviewport');
 });




})();