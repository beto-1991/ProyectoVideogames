import styles from "./Videogame.module.css";
import { Link } from "react-router-dom";

const Videogame = ({ id, name, image, genre, rating }) => {
  let ratingClass = "";

  if (rating >= 4) {
    ratingClass = styles.highRating;
  } else if (rating >= 3 && rating <= 4) {
    ratingClass = styles.mediumRating;
  } else if (rating >= 1 && rating < 3) {
    ratingClass = styles.lowRating;
  }

  return (
    <div className={styles.CardDiv}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/home/${id}`}
      >
        <img className={styles.CardImg} src={image} alt={name} />
        <h1 className={styles.cardName}>{name}</h1>
        <h2 className={styles.cardGenre}>{genre}</h2>
        <h2 className={`${styles.cardRating} ${ratingClass}`}>{rating}</h2>
      </Link>
    </div>
  );
};

export default Videogame;
