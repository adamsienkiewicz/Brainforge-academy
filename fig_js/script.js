'use strict';


let articlesLinks;


function articleTitle() {
    articlesLinks = document.querySelectorAll('.articleTitle');
    console.log(articlesLinks)
      for (let articleLink of articlesLinks) {
          articleLink.addEventListener('click',handleTitleClick);
    }
}

articleTitle()



function handleTitleClick() {
  for (let articleLink of articlesLinks) {
    articleLink.classList.remove('active');
  }

  const clickedElement = this;
  console.log(clickedElement);

  clickedElement.classList.add('active');

  const text = clickedElement.innerHTML;

  setActiveArticle(text);

  // call the setActiveArticle function, pass the innerHTML constant as argument

}



// TASK-3

// function to make the article visible

function setActiveArticle(currentTitle) {
  const articleText = document.querySelectorAll('.articleText');
  
  // START LOOP - loop over all articles constant defined above     hint: for of loop

  for(let item of articleText) {
      item.classList.remove('activeArticle');
  }

  // INSIDE LOOP - remove class 'activeArticle' on every variable   method: classList



  // END LOOP



  // create a const and return the adabted function argument to represent the id tag     method: replace()
  const articleId = currentTitle.replace(' ', '_');


  // find the article by id using the adapted variable from above   method: getElementById

  const articleById = document.getElementById(articleId)

  // add class 'activeArticle' to the found article   method: classList
  articleById.classList.add('activeArticle');
}



// call the main function