const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitlesList = function (films) {
  const titles = films.map((film) => {
    return film.title;
  });
  return titles;
}

// Park.prototype.removeDinosaur = function (dinosaur) {
//   this.dinosaurCollection.pop(dinosaur);
// };

module.exports = Cinema;
