

const textInput = document.getElementById('searchInput');

const movieList = document.querySelector(".movies");
textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    console.log('Enter key pressed!', event.target.value);

    let movie = event.target.value;
    searchMovies(movie);
  }
});

async function searchMovies(movie) {
console.log("searchMovies func hit", movie);
    const results = await fetch(
       `http://www.omdbapi.com/?i=tt3896198&apikey=cc6cc917&s=${movie}`
     );

  // const results = await fetch(
  //      `http://www.omdbapi.com/?i=tt3896198&apikey=33b440f3&s=${movie}`
  // );

    //  http://www.omdbapi.com/?i=tt3896198&apikey=33b440f3

   const resultsData = await results.json();


movieList.innerHTML =  resultsData.Search.map((result) => resultHTML(result)).join("");
   
console.log("data retrieved", resultsData);
}


function resultHTML (result){
    return  ` 
    <div class="movie">
              <figure class="movie__img--wrapper">
                <img
                  class="movie__img"
                  src="${result.Poster}"
                  alt=""
                />
              </figure>
              <div class="movie__title"><h2>${result.Title}</h2></div>
              <div class="movie__Type"><h3>${result.Type}</h3></div>
                 <div class="movie__year"><h3>${result.Year}</h3></div>
            </div> 
  
  `
}