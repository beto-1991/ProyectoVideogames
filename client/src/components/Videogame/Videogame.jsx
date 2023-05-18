import styles from "./Videogame.module.css";
import { Link } from "react-router-dom";

const Videogame = ({ id, name, image, genre, rating }) => {
  return (
    <div className={styles.CardDiv}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/home/${id}`}
      >
        <img className={styles.CardImg} src={image} alt={name} />
        <h1 className={styles.cardName}>{name}</h1>
        <h2 className={styles.cardGenre}>{genre}</h2>
        <h2 className={styles.cardGenre}>{rating}</h2>
      </Link>
    </div>
  );
};

export default Videogame;
