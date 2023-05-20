const axios = require("axios");

const getVideogamesByName = async (name) => {
  try {
    let response = await axios.get(
      name
        ? `https://api.rawg.io/api/games?page=1&page_size=15&search=${name}&key=0d1f8b4e2cd947e184ed71c3ad63c90f`
        : "https://api.rawg.io/api/games?key=0d1f8b4e2cd947e184ed71c3ad63c90f"
    );
    let games = [];
    for (let i = 0; i < 10; i++) {
      games.push(...response.data.results);
      response = await axios.get(response.data.next);
      i++;
    }

    const gamesHundred = games.map((game) => ({
      id: game.id,
      name: game.name,
      platforms: game.platforms?.map((platform) => platform.platform.name),
      image: game.background_image,
      releaseDate: game.released,
      rating: game.rating,
      genres: game.genres,
    }));

    return gamesHundred;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getVideogamesByName;
