import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
  ORDER,
  FILTER,
  POST_VIDEOGAME,
  NEXT_PAGE,
  PREV_PAGE,
} from "./action-types";

const initialState = {
  videogames: [],
  gamesFiltered: [],
  videogameDetail: {},
  sortedVideogames: [],
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        gamesFiltered: action.payload,
      };
    case GET_VIDEOGAME_DETAIL:
      return {
        ...state,
        videogameDetail: action.payload,
      };
    case FILTER:
      const gamesFiltered = [...state.videogames].filter((videogame) => {
        return videogame.genres.some((genre) => genre.name === action.payload);
      });

      return {
        ...state,
        videogames: gamesFiltered,
      };
    case ORDER:
      const sortedVideogames = [...state.videogames].sort((a, b) => {
        if (action.payload === "Ascendente") {
          return a.rating - b.rating;
        } else if (action.payload === "Descendente") {
          return b.rating - a.rating;
        }
        return 0;
      });
      return {
        ...state,
        videogames: sortedVideogames,
      };
    case POST_VIDEOGAME:
      return {
        ...state,
        videogames: [...state.videogames, action.payload],
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
      return { ...state };
  }
};

export default reducer;
