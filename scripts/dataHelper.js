import data from "./data.js";
import {
  searchMovieByTitle,
  makeBgActive,
  searchMovie,
} from "./helpers.js";
import {
  createMovieEl,
  createMovieYear,
  createMovieGenre,
} from "./domCreaters.js";


//arama için eşleşen değerleri bulmaya yarayan fonksiyon 
export const matchedMovies = (searchValue, type) => {
  data
    .filter((movie) => {
      return type === "title"
        ? searchMovieByTitle(movie, searchValue)
        : searchMovie(movie, searchValue, type) ;
    })
    .forEach(makeBgActive);
};

export const fillTable = (tbodyEl) => {
  /* const moviesHTML = data.reduce((acc, cur) => {
            return acc + createMovieEl(cur);
        }, "");*/
  const moviesArr = data
    .map((movie) => {
      return createMovieEl(movie);
    })
    .join("");
  tbodyEl.innerHTML = moviesArr;
};

//year ve genre arama objelerini istenen formatta doldurmaya ve sıralı bir şekilde dökümana eklemeye yarar.
export const fillSearchObj = (searchEl, type) => {
  const moviesSearchObj = {};
  let searchMovie = data
    .map((movie) => {
      return movie[`${type}`];
    })
    .sort();

  searchMovie.forEach((value) => {
    moviesSearchObj[`${value}`] = data.filter(
      (movie) => movie[`${type}`] === value
    ).length;
  });

  let createElement = Object.entries(moviesSearchObj)
    .map(([key, value]) => {
      return type === "year"
        ? createMovieYear(key, value)
        : createMovieGenre(key, value);
    })
    .join("");

  searchEl.innerHTML = createElement;
};
