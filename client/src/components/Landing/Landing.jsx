import { Link } from "react-router-dom";
import logo from "./logo-removebg-preview.png";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.jumbotron}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>

      <h1 className={styles.title}>Bienvenidos a GameFlix</h1>
      <h3 className={styles.subtitle}>
        Haz click aqui para buscar los mejores videojuegos
      </h3>
      <button className={styles.button}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/login">
          Comenzar
        </Link>
      </button>
    </div>
  );
};

export default Landing;
