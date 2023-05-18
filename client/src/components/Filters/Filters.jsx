import styles from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { orderGames, filterGames } from "../../redux/actions";

const Filters = (props) => {
  const dispatch = useDispatch();
  const handlerFilter = (event) => {
    dispatch(filterGames(event.target.value));
  };
  const handlerOrder = (event) => {
    dispatch(orderGames(event.target.value));
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    props.setName(event.target.value);
  };

  return (
    <div className={styles.div}>
      <div className={styles.Checkboxes}>
        <input
          className={styles.Inputs}
          type="search"
          placeholder="Nombre del videojuego"
          value={props.name}
          onChange={handleNameChange}
        />
        <select name="" id="" className={styles.Inputs} onChange={handlerOrder}>
          <option value="order" disabled>
            Order by
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          name=""
          id=""
          onChange={handlerFilter}
          className={styles.Inputs}
        >
          <option value="filter" disabled>
            Filter by
          </option>
          <option value="Shooter">Shooter</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Puzzle">Puzzle</option>
          <option value="RPG">RPG</option>
          <option value="Platformer">Platformer</option>
          <option value="Indie">Indie</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
