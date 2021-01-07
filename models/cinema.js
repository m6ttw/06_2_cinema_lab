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
  console.log("string", newFilm);
  return newFilm;
};

// filter films by genre
Cinema.prototype.filterByGenre = function (genre) {
  const listOfMovies = this.films.filter(film => film.genre == genre);
  return listOfMovies;
}

module.exports = Cinema;
