import axios from 'axios';

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";


export const fetchDataRequest = () =>{
  return { type: FETCH_DATA_REQUEST}
}

export const fetchDataSuccess = (data) =>{
  return { type: FETCH_DATA_SUCCESS,
           payload: data}
}

export const fetchDataFailure = (error) =>{
  return { type: FETCH_DATA_FAILURE,
           payload: error}
}

// remove
export const removeMovieAction = (movie) => {
  return (dispatch) => {
    dispatch(removeMovie(movie))
  }
}
export const removeMovie = (movie) => {
  return {
    type: REMOVE_MOVIE, 
    payload: movie
  }
}

// add
export const addMovieAction = (movie) => {
  return (dispatch) => {
    dispatch(addMovie(movie))
  }
}
export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE, 
    payload: movie
  }
}

// fetch data
export const fetchMovies = () => {
  return (dispatch) =>{
        dispatch(fetchDataRequest());
        axios.get('/movies.json')
        .then(res => {
          console.log(res.data)
          const datalist = res.data;
          dispatch(fetchDataSuccess(datalist));
        })
        .catch(error => {
          dispatch(fetchDataFailure(error.message))})
  }
}
