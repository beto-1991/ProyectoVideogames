import logo from "./logo-removebg-preview.png";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  return (
    <div className={styles.navBar}>
      <Link to="/home">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to="/home/create"
      >
        <h2 className={styles.title}>Crear Videojuego</h2>
      </Link>
    </div>
  );
};

export default SearchBar;
