import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
  FILTER,
  ORDER,
  POST_VIDEOGAME,
  NEXT_PAGE,
  PREV_PAGE,
} from "./action-types";
import axios from "axios";

export const getVideogames = (name) => {
  return async function (dispatch) {
    const response = await axios(
      `http://localhost:3001/videogames?name=${name}`
    );
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: response.data,
    });
  };
};

export const getVideogameDetail = (id) => {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/videogames/${id}`);

    return dispatch({
      type: GET_VIDEOGAME_DETAIL,
      payload: response.data,
    });
  };
};

export const filterGames = (genre) => {
  return { type: FILTER, payload: genre };
};

export const orderGames = (rating) => {
  return { type: ORDER, payload: rating };
};

export const postVideogame = (videogameData) => {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/videogames",
      videogameData
    );

    return dispatch({
      type: POST_VIDEOGAME,
      payload: response.data,
    });
  };
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const previousPage = () => {
  return {
    type: PREV_PAGE,
  };
};
