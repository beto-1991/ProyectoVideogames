const axios = require("axios");

const getVideogamesByName = async (name) => {
  try {
    const response = await axios(
      name
        ? `https://api.rawg.io/api/games?page=1&page_size=15&search=${name}&key=0d1f8b4e2cd947e184ed71c3ad63c90f`
        : "https://api.rawg.io/api/games?page_size=100&key=0d1f8b4e2cd947e184ed71c3ad63c90f"
    );

    const games = response.data.results.map((game) => ({
      id: game.id,
      name: game.name,
      platforms: game.platforms?.map((platform) => platform.platform.name),
      image: game.background_image,
      releaseDate: game.released,
      rating: game.rating,
      genres: game.genres,
    }));

    return games;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getVideogamesByName;
