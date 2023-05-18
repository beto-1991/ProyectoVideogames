const { Videogame, Genre } = require("../db.js");

const postVideogame = async (
  name,
  description,
  platforms,
  image,
  releaseDate,
  rating,
  genres
) => {
  try {
    const videogame = await Videogame.create({
      name,
      description,
      platforms,
      image,
      releaseDate,
      rating,
    });

    const allGenres = await Promise.all(
      genres.map((genreId) => Genre.findByPk(genreId))
    );
    await videogame.setGenres(allGenres);

    return {
      id: videogame.id,
      name: videogame.name,
      description: videogame.description,
      platforms: videogame.platforms,
      image: videogame.image,
      releaseDate: videogame.releaseDate,
      rating: videogame.rating,
      genres: genres.map((genre) => ({
        name: genre.name,
      })),
    };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = postVideogame;
