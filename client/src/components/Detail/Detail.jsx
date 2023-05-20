import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "./logo-removebg-preview.png";
import { Link } from "react-router-dom";

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
      <div
        className={styles.jumbotron}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${videogame.image})`,
        }}
      >
        <div className={styles.navBar}>
          <Link to="/home">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
        </div>

        <div className={styles.detailDiv}>
          <div>
            <h1 className={styles.title}>{videogame.name}</h1>
          </div>
          <div className={styles.dataDiv}>
            <div className={styles.description}>
              <p dangerouslySetInnerHTML={{ __html: videogame.description }} />
            </div>
            <div className={styles.fechaRatingDiv}>
              <p className={styles.fechaRating}>
                <strong>Rating:</strong> {videogame.rating}
              </p>
              <p className={styles.fechaRating}>
                <strong>Fecha de Lanzamiento:</strong> {videogame.releaseDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
