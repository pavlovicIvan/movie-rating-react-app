// Imports
import axios from "axios";
import { MAIN_API } from "../../util/variables";

/**
 * TYPES
 */
export const GET_ALL_REQ = "movies/GET_ALL_REQ";
export const GET_ALL_SCS = "movies/GET_ALL_SCS";
export const GET_ALL_FLR = "movies/GET_ALL_FLR";

export const RATE_REQ = "movies/RATE_REQ";
export const RATE_SCS = "movies/RATE_SCS";
export const RATE_FLR = "movies/RATE_FLR";

/**
 * ACTIONS
 */
export const getAll = (page, filter, term) => async (dispatch) => {
  dispatch({ type: GET_ALL_REQ });
  axios
    .get(`${MAIN_API}movies/getAll?page=${page}&filter=${filter}&term=${term}`)
    .then(({ data }) => {
      dispatch({
        type: GET_ALL_SCS,
        payload: data,
        page,
        total: Math.ceil(data.count / 10),
      });
      if (page !== 0) window.scrollBy(0, 400);
    })
    .catch((error) => {
      dispatch({ type: GET_ALL_FLR, payload: error });
    });
};

export const rate = (user, movie, rating, successCallback) => async (
  dispatch
) => {
  dispatch({ type: RATE_REQ });
  axios
    .post(`${MAIN_API}ratings/rate`, {
      user,
      movie,
      rating,
    })
    .then(() => {
      successCallback();
      dispatch({
        type: RATE_SCS,
      });
    })
    .catch((error) => {
      dispatch({ type: RATE_FLR, payload: error });
    });
};

/**
 * REDUCERS
 */
const initialState = {
  movies: [],
  loading: false,
  error: "",
  totalPages: 0,
  totalResults: 0,
};

export function movies(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REQ:
      return {
        ...state,
        loading: true,
        movies: state.movies,
        totalPages: state.totalPages,
        totalResults: state.totalResults,
      };
    case GET_ALL_SCS:
      return {
        ...state,
        loading: false,
        movies:
          action.page > 0
            ? state.movies.concat(action.payload.rows)
            : action.payload.rows,
        totalPages: action.total,
        totalResults: action.payload.count,
      };
    case GET_ALL_FLR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RATE_REQ:
      return {
        ...state,
        loading: true,
      };
    case RATE_SCS:
      return {
        ...state,
        loading: false,
      };
    case RATE_FLR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
