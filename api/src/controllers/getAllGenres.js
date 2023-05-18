const { Videogame, Genre } = require("../db.js");
const axios = require("axios");

const getAllGenres = async () => {
  try {
    let genres = [];
    const response = await axios(
      "https://api.rawg.io/api/genres?key=0d1f8b4e2cd947e184ed71c3ad63c90f"
    );

    const apiGenres = response.data.results;

    // Verificar si la base de datos está vacía
    const dbGenres = await Genre.findAll();
    if (dbGenres.length === 0) {
      // Si la base de datos está vacía, guardar los géneros obtenidos de la API
      genres = await Promise.all(
        apiGenres.map(async (genre) => {
          return await Genre.create({
            name: genre.name,
            apiId: genre.id,
          });
        })
      );
    } else {
      // Si la base de datos no está vacía, devolver los géneros almacenados en la base de datos
      genres = dbGenres;
    }

    return genres;
  } catch (err) {
    return { err: err.message };
  }
};

module.exports = getAllGenres;
