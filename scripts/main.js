import { reset, clearSearch } from "./helpers.js";
import { matchedMovies, fillTable, fillSearchObj } from "./dataHelper.js";

class MoviesApp {
  constructor(options) {
    const {
      root,
      searchInput,
      searchForm,
      yearHandler,
      yearSubmitter,
      genreHandler,
      genreSubmitter,
      titleHandler,
    } = options;

    this.$tableEl = document.getElementById(root);
    this.$tbodyEl = this.$tableEl.querySelector("tbody");

    this.$searchInput = document.getElementById(searchInput);
    this.$searchForm = document.getElementById(searchForm);
    this.$yearSubmitter = document.getElementById(yearSubmitter);
    this.yearHandler = yearHandler;

    //çektiğim elemanlar.
    this.$genreSubmitter = document.getElementById(genreSubmitter);
    this.$searchYearEl = document.getElementById("year");
    this.$searchGenreEl = document.getElementById("genre");
    this.genreHandler = genreHandler;
    this.titleHandler = titleHandler;
  }

  handleSearch() {
    this.$searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      reset(this.$tbodyEl);
      clearSearch(this.titleHandler)
      const searchValue = this.$searchInput.value;
      if(searchValue != "") matchedMovies(searchValue, this.titleHandler);
    });
  }

  handleYearFilter() {
    this.$yearSubmitter.addEventListener("click", () => {
      reset(this.$tbodyEl);
      clearSearch(this.yearHandler);
      const selectedYear = document.querySelector(
        `input[name='${this.yearHandler}']:checked`
      )
      if(selectedYear) matchedMovies(selectedYear.value, this.yearHandler);
    });
  }

  //seçilen genre listesine göre listeleme fonksiyonu
  handleGenreFilter() {
    this.$genreSubmitter.addEventListener("click", () => {
      reset(this.$tbodyEl);
      clearSearch(this.genreHandler);
      let checkedGenre = document.querySelectorAll(`input[name='${this.genreHandler}']:checked`);
      checkedGenre.forEach((genreEl) => {
        matchedMovies(genreEl.value, this.genreHandler);
      })  
    });
  }

  init() {
    fillTable(this.$tbodyEl);
    this.handleSearch();
    this.handleYearFilter();
    this.handleGenreFilter();
    //benim eklediklerim
    fillSearchObj(this.$searchYearEl, this.yearHandler);
    fillSearchObj(this.$searchGenreEl, this.genreHandler);
  }
}

let myMoviesApp = new MoviesApp({
  root: "movies-table",
  searchInput: "searchInput",
  searchForm: "searchForm",
  yearHandler: "year",
  yearSubmitter: "yearSubmitter",

  //benim eklediklerim
  genreHandler: "genre",
  titleHandler: "title",
  genreSubmitter: "genreSubmitter",
});

myMoviesApp.init();
