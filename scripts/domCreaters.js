export const createMovieEl = (movie) => {
  const { image, title, genre, year, id } = movie;
  return `<tr data-id="${id}"><td><img src="${image}"></td><td>${title}</td><td>${genre}</td><td>${year}</td></tr>`;
};


//yıl için element yaratır.
export const createMovieYear = (year, value) => {
  return `<div class="form-check">
                    <input class="form-check-input" type="radio" name="year" id="year1" value="${year}">
                    <label class="form-check-label" for="year1">
                        ${year}  (${value})
                    </label>
                </div>`;
};

//genre için element yaratır.
export const createMovieGenre=(genre,value)=>{
  return `<div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${genre}" id="flexCheckDefault" name="genre">
                    <label class="form-check-label" for="flexCheckDefault">
                        ${genre} (${value})
                    </label>
                </div>`
}