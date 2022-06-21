(() => {

    
    const spring = document.querySelector('#spring');

    const springArticle = document.querySelector('#spring>article');

    spring.addEventListener('click', event => {
        springArticle.classList.toggle('inviewport');
    });


})();