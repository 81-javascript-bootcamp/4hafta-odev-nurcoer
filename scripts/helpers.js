export const searchMovieByTitle = (movie, searchValue) => {
  return movie.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
};


export const makeBgActive = (movie) => {
  document.querySelector(`tr[data-id='${movie.id}']`).classList.add('selectedMovies');
};

//reset fonksiyonunu buraya taşıdım.
export const reset = (tbodyEl) => {
  tbodyEl.querySelectorAll("tr").forEach((item) => {
    item.style.background = "transparent";
    item.classList.remove('selectedMovies');
  });
};

//yıla ve türe göre aramayı ayrı bir fonksiyon haline getirdim.
export const searchMovie = (movie, value, type) => {
    return movie[`${type}`] === value;
}

export const clearSearch = (value) => {
    let checkedGenre = [...document.querySelectorAll(`input[name='genre']:checked`)];
    let selectedYear =  document.querySelector(`input[name='year']:checked`);
    let searchInput = document.getElementById("searchInput");

    switch (value){
      case "title":
        clearSelectedYear(selectedYear);
        clearCheckedGenre(checkedGenre);
        break;
      case "genre":
        clearSearchInput(searchInput);
        clearSelectedYear(selectedYear);
        break;
      case "year":
        clearSearchInput(searchInput);
        clearCheckedGenre(checkedGenre);
        break;
    }

}

const clearSearchInput = (searchInputEl) => {
  searchInputEl.value="";
}
const clearCheckedGenre = (checkedGenre) => {
  let genreCount = checkedGenre.length
  for (let i = 0; i < genreCount ; i++) {
      checkedGenre[i].checked = false;
  }
}
const clearSelectedYear = (selectedYear) => {
  if(selectedYear) selectedYear.checked = false;
}


