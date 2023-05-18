import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "./validation";
import styles from "./LoginForm.module.css";
import logo from "./logo-removebg-preview.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    if (userData.password || userData.username) {
      setErrors(
        validate({
          ...userData,
          [event.target.name]: event.target.value,
        })
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors.username && !errors.password && errors.username !== "") {
      navigate("/home");
    } else {
      setErrors(
        validate({
          ...userData,
          [event.target.name]: event.target.value,
        })
      );
    }
  };

  return (
    <div>
      <div className={styles.jumbotron}>
        <div>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>

        <div className={styles.formDiv}>
          <h1 className={styles.title}>Inicia Sesion</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              placeholder="Introduce tu email"
              className={styles.Inputs}
            />
            {errors.username && (
              <p className={styles.danger}>{errors.username}</p>
            )}
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className={styles.Inputs}
              placeholder="Introduce tu contrasena"
            />
            {errors.password && (
              <p className={styles.danger}>{errors.password}</p>
            )}

            <button type="submit" className={styles.button}>
              Iniciar Sesion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
