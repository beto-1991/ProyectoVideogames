import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./Detail.module.css";

const Detail = (props) => {
  const { id } = useParams();
  const [videogame, setVideogame] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/videogames/${id}`)
      .then((response) => response.json())
      .then((videogame) => {
        if (videogame.name) {
          setVideogame(videogame);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setVideogame({});
  }, [id]);

  return (
    <div>
      <div className={styles.detailDiv}>
        <h1 className={styles.title}>{videogame.name}</h1>

        <img src={videogame.image} className={styles.image} alt="" />
        <div className={styles.fechaRatingDiv}>
          <p className={styles.fechaRating}>Rating: {videogame.rating}</p>
          <p className={styles.fechaRating}>
            Fecha de Lanzamiento: {videogame.releaseDate}
          </p>
        </div>
        <p className={styles.description}>{videogame.description}</p>
      </div>
    </div>
  );
};

export default Detail;
