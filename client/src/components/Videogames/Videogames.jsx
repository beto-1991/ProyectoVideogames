import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, nextPage, previousPage } from "../../redux/actions";
import Videogame from "../Videogame/Videogame";
import styles from "./Videogames.module.css";
import Filters from "../Filters/Filters";

const Videogames = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage; // Primer parametro del metodo slice seria el indice 0 del array videogames
  const endIndex = startIndex + itemsPerPage; // Segundo parametro del metodo slice seria el numero 19 del array videogames para que haga el corte a los 20 videojuegos
  const [name, setName] = useState("");

  useEffect(() => {
    if (dispatch) {
      dispatch(getVideogames(name));
    }
  }, [dispatch, name]);

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  const handlePreviousPage = () => {
    dispatch(previousPage());
  };

  return (
    <div>
      <Filters setName={setName} name={name} />
      <div className={styles.CardsDiv}>
        {console.log(videogames)}
        {videogames.slice(startIndex, endIndex).map((videogame) => {
          return (
            <Videogame
              id={videogame.id}
              key={videogame.id}
              name={videogame.name}
              image={videogame.image}
              genre={videogame.genres?.map((genre) => genre.name).join(" · ")}
              rating={videogame.rating}
            />
          );
        })}
      </div>
      <div className={styles.pagDiv}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={styles.button}
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= videogames.length}
          className={styles.button}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Videogames;
