const axios = require("axios");
const { Videogame } = require("../db.js");

const getVideogameById = async (id) => {
  try {
    // Buscar el videojuego en la base de datos
    let videojuego = await Videogame.findByPk(id);

    if (!videojuego) {
      // Si no se encuentra en la base de datos, buscar en la API externa
      const response = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=0d1f8b4e2cd947e184ed71c3ad63c90f`
      );
      const data = response.data;

      videojuego = {
        id: data.id,
        name: data.name,
        description: data.description,
        releaseDate: data.released,
        rating: data.rating,
        image: data.background_image,
        genres: data.genres.map((genreName) => {
          return genreName.name;
        }),
      };
    }
    return videojuego;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getVideogameById;
