const { Router } = require("express");

const getVideogameById = require("../controllers/getVideogameById");
const getVideogamesByName = require("../controllers/getVideogamesByName");
const postVideogame = require("../controllers/postVideogame");
const getAllGenres = require("../controllers/getAllGenres");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", async (req, res) => {
  const { name } = req.query;
  try {
    const allVideogames = await getVideogamesByName(name);
    res.status(200).json(allVideogames);
  } catch (error) {
    res.status(404).send("Ha ocurrido un error");
  }
});

router.get("/videogames/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const videogame = await getVideogameById(id);
    res.status(200).json(videogame);
  } catch (error) {
    res.status(400).send("Videojuego no encontrado");
  }
});

router.post("/videogames", async (req, res) => {
  const { name, description, platforms, image, releaseDate, rating, genres } =
    req.body;
  try {
    const postedVideogame = await postVideogame(
      name,
      description,
      platforms,
      image,
      releaseDate,
      rating,
      genres
    );
    res.status(200).json(postedVideogame);
  } catch (error) {
    res.status(400).send("Ha ocurrido un error");
  }
});

router.get("/genres", async (req, res) => {
  try {
    const allGenres = await getAllGenres();
    res.status(200).json(allGenres);
  } catch (err) {
    res.status(404).send("Hubo un problema");
  }
});

module.exports = router;
