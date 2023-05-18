import styles from "./VideogameForm.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postVideogame } from "../../redux/actions";

const VideogameForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    rating: "",
    releaseDate: "",
    platforms: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postVideogame(formData));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1 className={styles.title}>Crea tu propio videojuego</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor=""></label>
        <input
          name="name"
          type="text"
          className={styles.Inputs}
          placeholder="Nombre del videojuego"
          onChange={handleChange}
          value={formData.name}
        />
        <label htmlFor=""></label>
        <input
          name="image"
          type="text"
          className={styles.Inputs}
          placeholder="URL de la imagen"
          onChange={handleChange}
          value={formData.image}
        />
        <label htmlFor=""></label>
        <input
          name="rating"
          type="text"
          className={styles.Inputs}
          placeholder="Rating del videojuego (de 0 a 5)"
          onChange={handleChange}
          value={formData.rating}
        />
        <label htmlFor=""></label>
        <input
          name="releaseDate"
          type="text"
          className={styles.Inputs}
          placeholder="Fecha de lanzamiento (AAAA/MM/DD)"
          onChange={handleChange}
          value={formData.releaseDate}
        />
        <label htmlFor=""></label>
        <input
          name="platforms"
          type="textarea"
          className={styles.Inputs}
          placeholder="Playstation 4, Xbox, etc"
          onChange={handleChange}
          value={formData.platforms}
        />
        <label htmlFor=""></label>
        <textarea
          name="description"
          type="textarea"
          className={styles.Inputs}
          placeholder="Descripcion del videojuego"
          onChange={handleChange}
          value={formData.description}
        />
        <button type="submit" className={styles.button}>
          Crear
        </button>
      </form>
    </div>
  );
};

export default VideogameForm;
