const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitlesList = function (films) {
  const titles = films.map((film) => {
    return film.title;
  });
  return titles;
};

//find a film by title
Cinema.prototype.findByTitle = function (title) {
  const newFilm = this.films.find(film => film.title == title);
  return newFilm;
};

// filter films by genre
Cinema.prototype.filterByGenre = function (genre) {
  const listMoviesOfGenre = this.films.filter(film => film.genre == genre);
  return listMoviesOfGenre;
}

// check if there are films from a particular year
Cinema.prototype.checkForYear = function (year) {
  // let listMoviesOfYear = 0;
  let listMoviesOfYear = this.films.find(film => film.year == year);
if (listMoviesOfYear == undefined){
  listMoviesOfYear = []
}
    if (listMoviesOfYear.length == 0) {
      return false
    } else {
      return true
    };
};

Cinema.prototype.checkOverLength = function (length) {
  const movieOverLength = this.films.find(film => film.length < length);
  
  return "Not all movies are over length";
}

Cinema.prototype.totalTime = function (films) {
  const runningTime = this.films.reduce(film => film.time == time);
  return runningTime;
}
module.exports = Cinema;
